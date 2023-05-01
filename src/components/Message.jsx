import React from 'react';
import { MainMsg, MsgInfo } from '../components-styles/Msg-Style';

function Message({message, name, userPhoto, timestamp}) {
  return (

    <MainMsg>

      <img src={userPhoto} alt='User image'/>

      <MsgInfo>

        <h4>
          {name} {' '}
          <span>
            {new Date(timestamp?.toDate()).toUTCString()}
          </span>
        </h4>
        <p>
          {message}
        </p>

      </MsgInfo>

    </MainMsg>

  );
}

export default Message;
