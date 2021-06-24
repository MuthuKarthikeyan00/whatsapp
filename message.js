import react from 'react';
import {useStateValue} from '../reducer/StateProvider';

const Messages=({messages})=>{

 const arrColor = ["#eb660d", "#eb2e0d", "#eb0d96", "#5c8f5a", "#4092b8"];

   var raN=Math.floor(Math.random()*5);


      var imageJpeg=false;
      var imagePng=false;
      var imageSvg=false;
      var imageGif=false;
      var imageJpg=false;
      var imageMpeg=false;
      var imageMp3=false;
      var imageMp4=false;
      

    if(messages.type == "image/jpeg"){
         imageJpeg=true;
         imagePng=false;
         imageSvg=false;
         imageGif=false;
         imageJpg=false;
         imageMpeg=false;
         imageMp3=false;
         imageMp4=false;

    }else if(messages.type == null){
        imageJpeg=false;
        imagePng=false;
        imageSvg=false;
        imageGif=false;
        imageJpg=false;
        imageMpeg=false;
        imageMp3=false;
        imageMp4=false;
    }else if(messages.type == "image/png"){
        imageJpeg=false;
        imagePng=true;
        imageSvg=false;
        imageGif=false;
        imageJpg=false;
        imageMpeg=false;
        imageMp3=false;
        imageMp4=false;
    }else if(messages.type == "image/svg"){
        imageJpeg=false;
        imagePng=false;
        imageSvg=true;
        imageGif=false;
        imageJpg=false;
        imageMpeg=false;
        imageMp3=false;
        imageMp4=false;
    }else if(messages.type == "image/gif"){
        imageJpeg=false;
        imagePng=false;
        imageSvg=false;
        imageGif=true;
        imageJpg=false;
        imageMpeg=false;
        imageMp3=false;
        imageMp4=false;
    }
    else if(messages.type == "image/jpg"){
        imageJpeg=false;
        imagePng=false;
        imageSvg=false;
        imageGif=false;
        imageJpg=true;
        imageMpeg=false;
        imageMp3=false;
        imageMp4=false;
    }else if(messages.type == "video/mp4"){
        imageJpeg=false;
        imagePng=false;
        imageSvg=false;
        imageGif=false;
        imageJpg=false;
        imageMpeg=false;
        imageMp3=false;
        imageMp4=true;
    }else if(messages.type == "audio/mpeg"||"audio/mp3"){
        imageJpeg=false;
        imagePng=false;
        imageSvg=false;
        imageGif=false;
        imageJpg=false;
        imageMpeg=false;
        imageMp3=true;
        imageMp4=false;
    }

    const [{user}, dispatch] = useStateValue();

    return(
      
  <p className={`Chat__message ${messages.nameid == user.email && 'Chat__reciver'}`}>
                    <span style={{ color: arrColor[raN] }}  className="Chat__name">{messages.name}</span>
                    {messages.message}
                    {imageJpeg && <div className="Chat__messageIMG"> <img src={messages.url}></img></div>}
                    {imagePng && <div className="Chat__messageIMG"> <img src={messages.url}></img></div>}
                    {imageSvg && <div className="Chat__messageIMG"> <img src={messages.url}></img></div>}
                    {imageGif && <div className="Chat__messageIMG"> <img src={messages.url}></img></div>}
                    {imageJpg && <div className="Chat__messageIMG"> <img src={messages.url}></img></div>}

                    {imageMp3 && <audio className="bgG" controls type="audio/mpeg" download={false} className="Chat__messageVideo" src={messages.url}></audio>
                    }
                    {imageMp4 && <video className="Chat__messageIMG" autoSave='true' controls type="video/mp4" className="Chat__messageVideo" src={messages.url}></video>}

                    <span className="Chat__timestamp">{new Date(messages.timestamp?.toDate()).toUTCString()}</span>
                </p>
      
    )
}

export default Messages;


