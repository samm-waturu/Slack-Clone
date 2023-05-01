import styled from 'styled-components';

export const MainMsg = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;

  > img {
    height: 50px;
    width: 50px;
    border-radius: 8px;
  }`;
export const MsgInfo = styled.div`
padding-left: 10px;
 > h4 > span {
   color: gray;
   font-weight: 300;
   margin-left: 4px;
   font-size: 12px;
 }`;

export const ScTrick = styled.div`
padding-bottom: 200px`;

export default { MainMsg, MsgInfo, ScTrick };