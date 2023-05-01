import React from 'react';
import {
  SideMain,
  SideHead,
  SideInfo,
  FiberIco,
  CreateIco,
  InboxIco,
  DraftIco,
  BookIco,
  PeopleIcoAlt,
  InsertIco,
  AppsIco,
  FileIco,
  ExpandIco,
  AddIco,
  ExpandMoreIco
} from '../components-styles/Side-Style';
import SideOptions from './SideOptions';
import {  collection } from 'firebase/firestore';
import { useCollection } from 'react-firebase-hooks/firestore';
import { auth, db } from '../firebase/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

function Sidebar() {

  const [user] = useAuthState(auth)

  const [rooms, loading, error] = useCollection(collection(db,'rooms'))

  console.log(rooms)

  return (
    <SideMain>
      <SideHead>
        <SideInfo>
          <h2>
            Slack HQ
          </h2>
          <h3>
            <FiberIco />
            {user?.displayName}
            {/*change in depending on acc */}
          </h3>
        </SideInfo>
        <CreateIco />
      </SideHead>

      <SideOptions Icon={InsertIco} title={'Threads'}/>
      <SideOptions Icon={InboxIco} title={'Pension & reactions'}/>
      <SideOptions Icon={DraftIco} title={'Saved items'}/>
      <SideOptions Icon={BookIco} title={'Channel browser'}/>
      <SideOptions Icon={PeopleIcoAlt} title={'People & user groups'}/>
      <SideOptions Icon={AppsIco} title={'Apps'}/>
      <SideOptions Icon={FileIco} title={'File Browser'}/>
      <SideOptions Icon={ExpandIco} title={'Show less'}/>

      <hr/>

      <SideOptions Icon={ExpandMoreIco} title={'Channels'}/>

      <hr/>

      <SideOptions Icon={AddIco} title={'Add channel'} addChannel={true}/>

      {rooms?.docs.map (
        (doc) => (
          <SideOptions  key={doc.id} id={doc.id}  title={doc.data().name} />
        )
      )}

    </SideMain>
  );
}

export default Sidebar;
