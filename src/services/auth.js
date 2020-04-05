import {auth} from '../firebase'
import {setUserData, setUserStatus} from './firestore'
import router from '../router'



export async function signUp(userData) {
    return await auth.createUserWithEmailAndPassword(userData.email, userData.password)
        .then(async (res)=>{
            const data = {uid: res.user.uid, email: res.user.email, displayName: userData.displayName, status: 'online'}
            return await setUserData(data)
                .then(()=>{
                    router.push('/');
                })
        }).catch((error) => {
            window.alert(error.message)
          })
}

export async function login(data){
    return await auth.signInWithEmailAndPassword(data.email, data.password)
        .then(async (res)=>{
            const data = {uid: res.user.uid, status:'online'}
            return await setUserStatus(data)
                .then(()=>{
                    router.push('/');
                })            
        }).catch((error) => {
            window.alert(error.message)
          })
}

export async function logOut() {
    const data = {uid: auth.currentUser.uid, status:'offline'}
    setUserStatus(data);
    return await auth.signOut()
        .then(() => { router.push('/') })
}

