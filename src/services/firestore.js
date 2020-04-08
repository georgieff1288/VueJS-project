import {firestore} from '../firebase'
import {auth} from '../firebase'
import router from '../router'

export async function setUserData(data) {
    return await setData(data, `users/${data.uid}`);
}

async function setData(data, ref) {
    return await firestore.doc(ref).set(data);
}

export async function setUserStatus(data) {
    return await firestore.collection('users').doc(data.uid).update({ status: data.status })
}

export function getCurrentUserData() {
    if (auth.currentUser) {
        const uid = auth.currentUser.uid;
        return firestore.collection('users').doc(uid)
    }
    return null;
}

export function getChatroomsOrderedByName(){
    return firestore.collection('chatrooms').orderBy('name');
}

export function getChatrooms(){
    return firestore.collection('chatrooms');
}

export async function createChatroom(chatroomName){ 
    const uid = auth.currentUser.uid;   
    const chatrooms = getChatrooms();
    await chatrooms.add({name: chatroomName, creatorUid:uid});
    router.push('/chatrooms');
}

export function deleteChatroom(chatroomId){
    firestore.collection('chatrooms').doc(chatroomId).delete();
    return window.alert('Chatroom was deleted.')
  }