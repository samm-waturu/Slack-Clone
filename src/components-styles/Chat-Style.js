import styled from 'styled-components';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

export const ChatCont = styled.div`
flex: .7;
flex-grow: 1;
overflow-y: scroll;
margin-top: 60px;`;

export const MainHead =styled.div`
display: flex;
justify-content: space-between;
padding: 20px;
border-bottom: 1px solid lightgray`;
export const HeadR = styled.div`
 > p {
   font-size: 14px;
   display: flex;
   align-items: center;
   margin-right: 4px;
   
 } > p > .MuiSvgIcon-root {
  margin-right: 5px !important;
  font-size: 24px;
   }`;
export const HeadL = styled.div`
  display: flex;
  align-items: center;
 > h4 {
   display: flex;
   text-transform: lowercase ;
   margin-right: 10px;
 } h4 > .MuiSvgIcon {
  
  margin-left: 10px;
  font-size: 18px;
  
   }`;
export const ChatMsg = styled.div``;

export const StarIco = StarBorderOutlinedIcon;
export const InfoIco = InfoOutlinedIcon;
export default {ChatCont, MainHead, HeadR, HeadL, StarIco, InfoIco, ChatMsg}