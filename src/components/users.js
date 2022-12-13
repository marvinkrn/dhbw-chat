import { useEffect } from 'react';
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import database from './firebase';

function UserList(){
    useEffect(() => {
        onAuthStateChanged(auth, async (user) => {
        if (user) {
            const snapshot = await getDoc(doc(database, "users", user.uid))
            console.log(snapshot.data())
        }
        });
    }, []);
    return;
}

export default UserList;