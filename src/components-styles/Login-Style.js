import styled from 'styled-components';

export const LoginHead = styled.div`
  display: grid;
  height: 100vh;
  place-items: center;
  background-color: #f8f8f8`;

export const LoginInner = styled.div`
  padding: 100px;
  text-align: center;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.24), 0 1px 2px rgba(0, 0, 0, 0.24);

  > img {
    object-fit: contain;
    height: 100px;
    width: 120px;
    margin-bottom: 20px;
  }

  > button {
    margin-top: 15px;
    text-transform: inherit !important;
    background-color: #0a0d48;
    color: white
  }

  > button:hover {
    background-color: rgba(10, 13, 72, 0.31);
    color: rgba(0, 0, 0, 0.52);
  }`;

export default LoginHead;