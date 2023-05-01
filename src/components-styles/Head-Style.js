import styled from 'styled-components';
import { Avatar } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import SearchIcon from '@mui/icons-material/Search';

//Basic styling
export const MainHeader = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  position: fixed;
  padding: 10px 0;
  justify-content: space-between;
  color: white;
  background-color: var(--slack-color);

`;
export const HeaderLeft = styled.div`
  flex: .3;
  align-items: center;
  display: flex;
  margin-left: 20px;

  > .MuiSvgIcon-root {
    margin-left: auto;
    margin-right: 30px;
  }

`;
export const HeaderSearch = styled.div`
  flex: .4;
  opacity: 1;
  background-color: #421f44;
  text-align: center;
  display: flex;
  border-radius: 6.2px;
  padding: 0 50px;
  border: 1px solid gray;
  > input {
    background-color: transparent;
    border:none;
    text-align: center;
    min-width: 30vw;
    outline: 0;
    color: white;
  } 
  > input::placeholder {
    background-color: transparent;
    color: lightgray;
  }`

;
export const HeaderRight = styled.div`
  flex: .3;
  display: flex;
  align-items: flex-end;
  > .MuiSvgIcon-root {
    margin-left: auto;
    margin-right: 20px;
  }
`;

// Icon styling

export const AccTime = AccessTimeIcon;
export const SearchIco = SearchIcon;
export const HelpOut = HelpOutlineOutlinedIcon;

//Custom components
export const HeaderAvatar = styled(Avatar)`
  cursor: pointer;

  :hover {
    opacity: .75;
  }`;

export default {
  MainHeader,
  HeaderLeft,
  HeaderSearch,
  HeaderRight,
  HeaderAvatar,
  AccTime,
  SearchIco,
  HelpOut
};