import { supabase } from "../lib/supabase";
import { uploadFile } from "./imageService";

export const createOrUpdatePost = async (post) => {
    try {
        if (post.file && post.file == 'object') {
            let isImage = post?.file?.type == 'image';
            let folderName = isImage ? 'postImage' : 'postVideo';
            let fileResult = await uploadFile(folderName, post?.file?.uri, isImage);
            if (fileResult.success) {
                post.file = fileResult.data;
            } else {
                return fileResult;
            }

            const { data, error } = await supabase
                .from('posts')
                .upsert(post)
                .select()
                .single()

            if (error) {
                console.log('error: ', error);
                return { success: false, msg: 'Could not create your post' };
            }

            return { success: true, data: data };

        }
    } catch (error) {
        console.log('error', error);
        return { success: false, msg: 'Could not create your post' };
    }
}