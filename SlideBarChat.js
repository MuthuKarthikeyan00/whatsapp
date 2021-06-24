import React, { useEffect,useState} from 'react';
import {Avatar}  from "@material-ui/core";
import {Link} from "react-router-dom"
import "./style.css";
import db from'./firebase';
import GroupAddIcon from '@material-ui/icons/GroupAdd';

const SlideBarChat = ({addChat,id,name}) => {
    const [message, setMessage] = useState([])
    const [sfeed, setSfeed] = useState("");       


    console.log(message);
    useEffect(() => {
       if(id){
        db.collection("groups").doc(id).collection("messages").orderBy("timestamp",'asc').onSnapshot(Snapshot=>(
            setMessage(Snapshot.docs.map((doc)=>
                doc.data(),
            ))
         ))
       }
    }, [id])
    useEffect(()=>{
        setSfeed(Math.floor(Math.random() *5000))
    },[])


  const createGroup=()=>{
    const groupName=prompt("Enter Group name");
        if(groupName){
            db.collection("groups").add({
                name:groupName,
            });
         }
    }

    return !addChat ? 
    (
     <Link to={`/group/${id}`}>
     <div className="SlideBarChatContainer bgH">
     {id=="IxNnkslzDCpFuSpNqgOq" ?(<Avatar src={""}/>)
    :(<Avatar src={`https://avatars.dicebear.com/api/human/${sfeed}.svg`} />)}
        <div className="groupInfo bg">
        <span>{name}</span><br></br>
   {message[message.length-1]?.message}
        </div>
    </div>
     </Link>

    
    ):(
        <div className="SlideBarChatContainer bgH bg"  onClick={createGroup}>
        
                <GroupAddIcon className="bgG"/>
       
        <h3>ADD new Group</h3>
          </div>
    );
}

export default SlideBarChat;
