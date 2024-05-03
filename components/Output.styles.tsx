import styled from 'styled-components';
import { Paper } from '@mui/material';

export const OutputField = styled(Paper)`
  width: 100%;
  height: 173px;
  margin-top: 50px;
  margin-bottom: 30px;
  padding: 20px;
  box-sizing: border-box;
  background-color: #454545 !important;
  color: #000 !important;

  & > div {
    height: 100%;
    overflow-y: auto;

    & > div {
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  .MuiCircularProgress-root {
    color: #202020;
  }
`;
