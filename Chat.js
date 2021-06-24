import { Avatar, IconButton } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import "./style.css";
import MicIcon from '@material-ui/icons/MicNone';
import InsertEmotIcon from '@material-ui/icons/InsertEmoticon';
import { useParams } from 'react-router-dom';
import { useStateValue } from '../reducer/StateProvider';
import Progress from './Progress'
import db, { timestamps } from './firebase';
import Messages from './message';
import PermMediaIcon from '@material-ui/icons/PermMedia';


const Chat = () => {
    const [Input, setInput] = useState("");
    const [Images, setImages] = useState(null);
    const [Videos, setVideos] = useState(null);
    const [Audios, setAudios] = useState(null);
    const [Files, setFiles] = useState(null);
    const [message, setMessage] = useState([]);
    const [groupName, setGroupNmae] = useState([]);
    const { groupId } = useParams();
    const [{ user }, dispatch] = useStateValue();



    const [toggle, settoggle] = useState(false);

    const flt = () => {
        settoggle(!toggle);
        const fl = document.getElementById("FtI");
        if (toggle) {
            fl.classList.add("floatIconsHide");
            fl.classList.remove("floatIconsShow");
        } else {
            fl.classList.add("floatIconsShow");
            fl.classList.remove("floatIconsHide");
        }
    }
    const handleChange = (event) => {
        setInput(event.target.value)
    }
    const imgType = ["image/jpeg", "image/png", "image/svg", "image/gif", "image/jpg"];
    const videoType = ['video/mp4', 'video.mp4'];
    const audioType = ["audio/mpeg", "audio/mp3","audio/*"];

    const imgChange = (event) => {

        let selected = (event.target.files[0]);

        if (selected && imgType.includes(selected.type)) {
            setImages(selected);
        } else if (selected && videoType.includes(selected.type)) {
            setVideos(selected);
        } else if (selected && audioType.includes(selected.type)) {
            setAudios(selected);
        }

    }


    const sendMessage = (e) => {

        e.preventDefault();

        console.log("send called");
        db.collection("groups").doc(groupId).collection('messages').add({

            name: user.displayName,
            nameid: user.email,
            message: Input,
            timestamp: timestamps(),
        });
        setInput('');
    }




    useEffect(() => {
        if (groupId) {


            db.collection("groups").doc(groupId).onSnapshot(Snapshot => (
                setGroupNmae(Snapshot.data().name)
            ))
            db.collection("groups").doc(groupId).collection('messages').orderBy('timestamp', 'asc').onSnapshot((Snapshot) => setMessage(Snapshot.docs.map((doc) => doc.data()))
            );
        }
    }, [groupId])


    return <div className="Chat">

        <div className="Chat__header">
            <IconButton className="bgI" >
                <Link className="bgI" to={"/"}>
                    <ArrowBackIcon /></Link>
            </IconButton>
            {groupId == "IxNnkslzDCpFuSpNqgOq" ? (<Avatar src={""} />)
                : (<Avatar src={`https://avatars.dicebear.com/api/human/${Math.floor(Math.random() * 5000)}.svg`} />)}

            <div className="Chat__headerInfo bg">
                <h3>{groupName}</h3>
                Last seen{" "}
                {new Date(message[message.length - 1]?.timestamp?.toDate()).toUTCString()}

            </div>

            <div className="Chat__headerRight">

                <IconButton className="bgI">
                    <MoreVertIcon />
                </IconButton>
            </div>
        </div>
        <div className="Chat__body">

            {Images && <Progress key={groupId} files={Images} type={Images.type} groupId={groupId}></Progress>}
            {Videos && <Progress key={groupId} files={Videos} type={Videos.type} groupId={groupId}></Progress>}
            {Audios && <Progress key={groupId} files={Audios} type={Audios.type} groupId={groupId}></Progress>}
            {Files && <Progress key={groupId} files={Files} type={Files.type} groupId={groupId}></Progress>}

            {message.map((item, index) => (
              <Messages key={index} messages={item}></Messages>

            ))}


        </div>

        <div className="Chat__footer">
            <InsertEmotIcon className="bgI" />
            <form>
                <input value={Input} onChange={handleChange} type="text" placeholder="Type a message"></input>
                <button disabled={!Input} onClick={sendMessage} type="submit">send message</button>

            </form>
            <div className="fileInput" >
                <input id="file" onChange={imgChange} type="file">
                </input>

                <label className="" for='file'>
                    <PermMediaIcon id="lab"
                        className="bgG" ></PermMediaIcon>
                </label>
            </div>

            <MicIcon className="bgI" />


        </div>


    </div>


}

export default Chat;
