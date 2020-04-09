import {firestore} from '../firebase'
import {auth} from '../firebase'
import router from '../router'
import moment from 'moment'

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
    return firestore.collection('chatrooms').orderBy('name', 'asc');
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

export function getChatroomById(id){
    return firestore.collection('chatrooms').doc(id);
}

export function getUsers(){
    return firestore.collection('users')
}

export function getCurrenUserByUid(uid){
    return firestore.collection('users').doc(uid);
}

function getMessages(id){
    return firestore.collection('chatrooms')
      .doc(id)
      .collection('messages');           
}

export function getLastMessages(id){
    return firestore.collection('chatrooms')
      .doc(id)
      .collection('messages').limitToLast(15).orderBy('timeSent', 'asc');           
}

export async function sendMessage(msg, id, username) {
    const timestamp = getTimeStamp();
    const messages = getMessages(id);
    await messages.add({
        message: msg,
        timeSent: timestamp,
        sender: username
    });
}

function getTimeStamp() {
    return moment().format('MMMM Do YYYY, h:mm:ss a');
}