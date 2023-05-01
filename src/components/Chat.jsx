import React, { useEffect, useRef } from 'react';
import { ChatCont, HeadL, HeadR, MainHead, StarIco, InfoIco, ChatMsg } from '../components-styles/Chat-Style';
import ChatInput from './ChatInput';
import { useSelector } from 'react-redux';
import { selectRoomState } from '../features/appSlice';
import { useCollection, useDocument } from 'react-firebase-hooks/firestore';
import { db } from '../firebase/firebase';
import Message from './Message';
import { ScTrick } from '../components-styles/Msg-Style';

function Chat() {

  const chatPointer = useRef(null)

  const roomId = useSelector(selectRoomState);

  const [roomDetails] = useDocument(
    roomId.roomId && db.collection('rooms').doc(roomId.roomId)
  );


  const [roomMessage, loading] = useCollection(
    roomId.roomId &&
    db.collection('rooms').doc(roomId.roomId)
      .collection('messages')
      .orderBy('timestamp', 'asc'));

  // console.log(roomDetails?.data(), roomMessage)
  useEffect(() => {

    chatPointer?.current?.scrollIntoView(
      {
        behavior: 'smooth'
      }
    )

  }, [roomId.roomId, loading])

  return (

    <ChatCont>
      {roomDetails && roomMessage && (<>

        <MainHead>

          <HeadL>

            <h4>
              <strong>
                {roomDetails?.data().name}
              </strong>
            </h4>
            <StarIco />
          </HeadL>

          <HeadR>

            <p>
              <InfoIco />
              Details
            </p>

          </HeadR>

        </MainHead>

        <ChatMsg>
          {/* Loop over the messages */}
          <div>
            {roomMessage?.docs.map(doc => {
              // const {timestamp, message, userImg, name } = doc.data()
              // console.log(doc.data().name)
              return (
                <Message key={doc.data().id} message={doc.data().message} timestamp={doc.data().timestamp}

                         name={doc.data().name} userPhoto={doc.data().userPhoto}

                />
              );
            })}
            <ScTrick ref={chatPointer} />
          </div>

          <ChatInput chatPointer={chatPointer} id={roomId} channelName={roomDetails?.data().name} />

          {/*  component*/}

        </ChatMsg>

      </>)}

    </ChatCont>
  );
}

export default Chat;
