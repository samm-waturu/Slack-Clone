import React from 'react';
import { SideBarOp, SideBarCh } from '../components-styles/Side-Op-Style';
import { db } from '../firebase/firebase';
import { useDispatch } from 'react-redux';
import { enterRoom } from '../features/appSlice';
import { addDoc, collection } from 'firebase/firestore';
import firebase from 'firebase/compat/app';

function SideOptions({ Icon, title, addChannel, id }) {

  const dispatch = useDispatch();

  const addChState = () => {
    const channelName = prompt(`Enter channel name`);
    if (channelName) {
      const initDb =  async () => {
        await addDoc(
          collection(db, 'rooms'), {
            name: channelName,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
          }
        );
      }
      initDb().then((res) => {}).catch((error) => {
        console.log(`error: ${error}`)

      })
    }




  };

  const selectChannel = () => {
    if (id) {
      dispatch(enterRoom({
        roomId: id
      }))

    }
  };


  return (
    <SideBarOp onClick={addChannel ? addChState : selectChannel}>
      {Icon && <Icon fontSize={'small'} style={({ padding: 10 })}></Icon>}
      {Icon ? (
        <h3>
          {title}
        </h3>
      ) : (
        <SideBarCh>
          <span>
            #
          </span>
          {title}
        </SideBarCh>
      )
      }
    </SideBarOp>
  );
}

export default SideOptions;
