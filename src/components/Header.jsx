import React from 'react';
import {
  MainHeader,
  HeaderRight,
  HeaderLeft,
  HeaderSearch,
  HeaderAvatar,
  AccTime,
  SearchIco,
  HelpOut,
} from '../components-styles/Head-Style';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase/firebase';

function Header() {
  const [user] = useAuthState(auth)

  return (
    <MainHeader>
      {/*header_left*/}

      <HeaderLeft>
        <HeaderAvatar
          src={user?.photoURL} onClick={() => auth.signOut()} alt={user?.displayName}
        //add onClick
        />
        <AccTime />
      </HeaderLeft>

      <HeaderSearch>
        <SearchIco />
        <input type='text' placeholder={`Search Slack`} />
      </HeaderSearch>

      <HeaderRight>
        <HelpOut />

      </HeaderRight>
    </MainHeader>
  );

}

export default Header;


