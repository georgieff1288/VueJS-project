import {firestore} from '../firebase'
import {auth} from '../firebase'

export async function setUserData(data) {
    return await setData(data, `users/${data.uid}`);
}

async function setData(data, ref) {
    return await firestore.doc(ref).set(data);
}

export async function setUserStatus(data) {
    return await firestore.collection('users').doc(data.uid).update({ status: data.status })
}

export async function getCurrentUserData() {
    if (auth.currentUser) {
        const uid = auth.currentUser.uid;
        return await firestore.collection('users').doc(uid);
    }
    return null;
  }
