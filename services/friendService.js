import { supabase } from '../lib/supabase';

export const sendRequest = async (userId, friendId) => {

    if (!userId || !friendId) {
        return;
    }

    const userID = userId;

    try {
        const { data, error } = await supabase
            .from('friend_requests')
            .insert({
                sender_id: userID,
                receiver_id: friendId,
                status: 'pending'
            })

        if (error) {
            console.log("Errore nel invio richiesta:", userId);
        } else {
            console.log("Richiesta inviata", data);
        }

    } catch (error) {
        console.log("Errore nella fetch:", error);
    }
};


export const fetchPendingRequest = async (userId) => {
    //if (!user?.id) return;

    try {
        const { data: friends, error } = await supabase
            .from('friend_requests')
            .select(`
                sender:sender_id ( id, name, image ),
                receiver:receiver_id ( id, name, image )
            `)
            .eq('receiver_id', userId) // ✅ Solo richieste ricevute
            .eq('status', 'pending');    // ✅ Solo pending

        if (error) {
            console.log("Errore nel recupero amici:", error);
        } else {
            return friends;
        }
    } catch (error) {
        console.log("Errore nella fetch:", error);
    }
};
