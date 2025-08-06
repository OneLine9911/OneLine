import { StyleSheet, View } from 'react-native'
import { RichToolbar } from 'react-native-pell-rich-editor'

const RichTextEditor = ({
    editorRef,
    onChange
}) => {
    return (
        <View style={{ minHeight: 285 }}>
            <RichToolbar
                editor={editorRef}
                actions={[
                    actions.setBold,
                    actions.setItalic,
                    actions.insertBulletsList,
                    actions.insertOrderedList,
                    actions.insertImage,
                ]}
                style={styles.richBar}
                flatContainerStyle={styles.listStyle}
                disabled={false}
            />
        </View>
    )
}

export default RichTextEditor

const styles = StyleSheet.create({})