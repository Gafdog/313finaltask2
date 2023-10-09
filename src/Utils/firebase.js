import { initializeApp } from "firebase/app";
import {getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth'
import {getFirestore, doc, getDoc, setDoc} from 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyBJ8b2C99oYMd3Do8cb0RT0pEQyksIK0KE",
    authDomain: "task71p-27ffd.firebaseapp.com",
    projectId: "task71p-27ffd",
    storageBucket: "task71p-27ffd.appspot.com",
    messagingSenderId: "783581652215",
    appId: "1:783581652215:web:23c0cafd11086d6e615ff2"
  };
  
  const firebaseApp = initializeApp(firebaseConfig);

  
  

  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({
    prompt:"select_account"


  });

  export const auth = getAuth();
  export const signInWithGooglePopup = () =>signInWithPopup(auth, provider);
  export const db = getFirestore();

  export const createUserDocFromAuth = async(userAuth, additionalInformation ={},additionalInformation1 ={},additionalInformation2 ={})=>{
    if (!userAuth || !userAuth.email) return;
    const userDocRef = doc (db, 'users',userAuth.uid);
    

    const userSnapshot = await getDoc(userDocRef);
    

    if (! userSnapshot.exists()){
        const {fName, lName,email,password} = userAuth
        const createdAt = new Date();

    
    try{
        await setDoc(userDocRef, {
            fName,
            lName,
            email,
            password,
            
            createdAt,
            ...additionalInformation,
            ...additionalInformation1,
            ...additionalInformation2
            
        })
    }
    catch (error){
    console.log('error in creating ', error.message)
    }}
    return userDocRef;
  }

  export const createAuthUserWithEmailAndPassword = async(email, password)=>{
    if (!email ||!password) return;

    return await createUserWithEmailAndPassword(auth, email, password);
   
  }

  export const signinAuthUserWithEmailAndPassword = async(email, password)=>{
    if (!email ||!password) return;

    return await signInWithEmailAndPassword(auth, email, password);
   
  }