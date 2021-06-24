import React,{useState,useEffect} from 'react';
import {Avatar,IconButton}  from "@material-ui/core";
import {Link} from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import SlideBarChat from './SlideBarChat';
import db from'./firebase';
import "./style.css";
import {useStateValue} from '../reducer/StateProvider';


const SlideBar = () => {
    const [{user}, dispatch] = useStateValue();

    const [group, setGroup] = useState([]);



  

    useEffect(() => {
        const unsubscribe= db.collection('groups').onSnapshot((snapshot)=>
        setGroup(
              snapshot.docs.map((doc)=>({
                  id:doc.id,
                  data:doc.data(),
              }))
          )
         );
         return ()=>{
          unsubscribe();
         }
    }, []);

    return (
       <div className="SlideBar">
            <div className="SlideBarContainer bgB">
             <span>whatsapp</span>
             <div className="SlideBar__header">
             <Avatar src={user.photoURL} className="SlideBar__headerAvatar"/>
             <span>{user.displayName}</span>
           
             <div className="SlideBar__headerRight">
                 <IconButton>
                 <SearchIcon className="bg"/>
                 </IconButton>
               
         
           
           </div>
           </div>
         
           <div className="SlideBar__Button">
               <Link to={"/"}className="SlideBar__Link"><h3>Groups</h3></Link>
               <Link to={`/`} className="SlideBar__Link"><h3>chat</h3></Link>
           
           </div>
        </div>

        <div className="SlideBarChat">

     <SlideBarChat addChat={true}></SlideBarChat>

     {group.map((group)=>(
              <SlideBarChat key={group.id} name={group.data.name}  id={group.id}></SlideBarChat>
     ))}
 

        </div>
       </div>
    )
}

export default SlideBar
