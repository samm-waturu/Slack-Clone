import styled from 'styled-components';

export const SideBarOp = styled.div`
  display: flex;
  font-size: 12px;
  align-items: center;
  padding-left: 2px;
  cursor: pointer;
  cursor :hover {
    opacity: .9;
    background-color: #340e36;
  }

  > h3 {
    font-weight: 500;
  }

  > h3 > span {
    padding: 15px
  }`;
export const SideBarCh = styled.h3`
  padding: 10px 0;
  font-weight: 500;`;


export default { SideBarOp, SideBarCh };