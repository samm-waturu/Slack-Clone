import React, { useRef, useState } from 'react';
import { ChatContInput } from '../components-styles/Chat-Input-Style';
import { Button } from '@mui/material';
import { auth, db } from '../firebase/firebase';
import { collection, addDoc } from 'firebase/firestore';
import firebase from 'firebase/compat/app';
import { useAuthState } from 'react-firebase-hooks/auth';


function ChatInput({ id, channelName, chatPointer }) {
  // const inputRef = useRef(null)
  const [user] = useAuthState(auth)
  const [input, setInput] = useState('');
  const sendMsg = (e) => {
    e.preventDefault(); //Disable refresh
    if (!id) {
      console.log('err');
    }
    const subDir = async () => {
      await addDoc(
        collection(db, 'rooms' , `${id.roomId}`,'messages'), {
          message: input,
          name: user.displayName,
          userPhoto: user.photoURL,
          uid: id.roomId,
          timestamp: firebase.firestore.FieldValue.serverTimestamp()
        }
      );
    }
    subDir().then(()=> {
      setInput('')
      chatPointer.current.scrollIntoView(
        {
          behavior: 'smooth'
        }
      )
    }).catch((error) => {
      console.log('Error adding message to Firestore:', error)
    })
    console.log(id.roomId);


  };
  return (
    <ChatContInput>

      <form>
        <input type='text' value={input} onChange={(e) =>
          setInput(e.target.value)} placeholder={`Message #${channelName}`} />
        <Button type={'submit'} onClick={sendMsg}>
          SEND
        </Button>
      </form>

    </ChatContInput>
  );
};

export default ChatInput;
