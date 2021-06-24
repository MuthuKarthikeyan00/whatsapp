import {useEffect,useState} from 'react';
import {useStateValue} from '../reducer/StateProvider';


import db,{timestamps,firestoreage} from '../components/firebase';

const UseStorage = (files,groupId,type) => {


    const [{user}, dispatch] = useStateValue();
    const [progress, setprogress] = useState(0);
    const [Error, setError] = useState(null);
    const [url, setUrl] = useState(null);
  
      
    useEffect(() => {
               
        console.log(progress);
        const storageRef=firestoreage.ref(files.name);
       
        storageRef.put(files).on("state_changed",(snap)=>{
            let presentage=(snap.bytesTransferred / snap.totalBytes) * 100;
            setprogress(presentage);
            console.log(progress);
            console.log("1")
        },
        (err)=>{
            setError(err);
            console.log("2")
        }
        ,async()=>{
               const url = await storageRef.getDownloadURL();
               console.log("3")
               
               const crateAt=timestamps();
               db.collection("groups").doc(groupId).collection('messages').add({
                 name:user.displayName,
                 nameid:user.email,
                 url:url,
                 timestamp:crateAt,
                 type:type,
               });
               setUrl(url);
        }
       
    );}, [files])
    return {url,Error}
}

export default UseStorage
