import styled from 'styled-components';
import { Paper } from '@mui/material';

export const Counter = styled(Paper)`
  width: 100%;
  margin-top: 50px;
  margin-bottom: 30px;
  padding: 20px;
  box-sizing: border-box;
  font-size: 20px;

  div {
    display: flex;

    span {
      font-weight: bold;
      flex: 0 0 150px;
    }
  }
`;
