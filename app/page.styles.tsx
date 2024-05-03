import styled from 'styled-components';
import { Paper } from '@mui/material';

export const Counter = styled(Paper)`
  width: 100%;
  margin-top: 50px;
  margin-bottom: 30px;
  padding: 20px;
  box-sizing: border-box;
  font-size: 20px;
  background-color: #454545 !important;
  color: rgb(255, 255, 255) !important;

  div {
    display: flex;

    span {
      font-weight: bold;
      flex: 0 0 150px;
    }
  }
`;

export const Loading = styled.section`
  background-color: #202020;
  height: 100vh;
  width: 100%;
  color: #454545;
  display: flex;
  justify-content: center;
  align-items: center;
`;
