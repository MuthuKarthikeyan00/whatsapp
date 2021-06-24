import React from 'react';
import UseStorage from '../useCustomHook/UseStorage';

const Progress = ({files,groupId,type}) => {

    const {url} =UseStorage(files,groupId,type);

    return(
        <div> 
          
        </div>
    )
}

export default Progress
