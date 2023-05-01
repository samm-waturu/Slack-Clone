import styled from 'styled-components';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import InsertCommentIcon from '@mui/icons-material/InsertComment';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import AppsIcon from '@mui/icons-material/Apps';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import CreateIcon from '@mui/icons-material/Create';
import AddIcon from '@mui/icons-material/Add';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


export const CreateIco = CreateIcon;
export const InsertIco = InsertCommentIcon;
export const InboxIco = InboxIcon;
export const DraftIco = DraftsIcon;
export const BookIco = BookmarkBorderIcon;
export const PeopleIcoAlt = PeopleAltIcon;
export const AppsIco = AppsIcon;
export const AddIco = AddIcon;
export const FileIco = FileCopyIcon;
export const ExpandIco = ExpandLessIcon;
export const ExpandMoreIco = ExpandMoreIcon;



export const FiberIco = FiberManualRecordIcon;
export const SideMain = styled.div`
  ::-webkit-scrollbar {
    width: .5em;
  }

  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }

  ::-webkit-scrollbar-thumb {
    background-color: rgba(169, 169, 169, 0.6);
    outline: none;
  }

  background-color: var(--slack-color);
  flex: .3;
  max-width: 240px;
  margin-top: 60px;
  overflow-y: scroll;
  border-top: 1px solid #49274b;
  color: white;

  > hr {
    margin-top: 10px;
    margin-bottom: 10px;
    border: 1px solid #49274b;
  }`;
export const SideHead = styled.div`
  display: flex;
  border-bottom: 1px solid #49274b;
  padding: 13px;

  > .MuiSvgIcon-root {
    padding: 8px;
    color: #49274b;
    font-size: 18px;
    background-color: white;
    border-radius: 999px;
  }
`;
export const SideInfo = styled.div`
  flex: 1;

  > h2 {
    font-size: 15px;
    font-weight: 900;
    margin-bottom: 5px;
  }

  > h3 {
    display: flex;
    font-size: 13px;
    font-weight: 400;
    align-items: center;
  }

  > h3 > .MuiSvgIcon-root {
    font-size: 16px;
    margin-top: 1px;
    margin-right: 2px;
    color: green

  }`;


export default {
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
  AddIco,
  FileIco,
  ExpandIco,
  ExpandMoreIco
};