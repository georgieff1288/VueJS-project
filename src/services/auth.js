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

export async function logOut(route) {
    const data = {uid: auth.currentUser.uid, status:'offline'}
    setUserStatus(data);
    return await auth.signOut()
        .then(() => { router.push(route) })
}

export async function editProfile(email, password, displayName){
    const user = auth.currentUser;
    const data = {
        email: email,
        displayName:displayName,
        status:'offline',
        uid: user.uid
    }
    const isError = false;
    setUserData(data); 
    await user.updatePassword(password).catch((error) => {
            window.alert(error.message), this.isError = true});
    await user.updateEmail(email).catch((error) => {
            window.alert(error.message), this.isError = true});   
    if(!isError){
        logOut('/login').then(window.alert('Please login with new credentials.'));
    }    
}
