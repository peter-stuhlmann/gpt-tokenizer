import styled from 'styled-components';
import { Paper } from '@mui/material';

export const OutputField = styled(Paper)`
  width: 100%;
  height: 173px;
  margin-top: 50px;
  margin-bottom: 30px;
  padding: 20px;
  box-sizing: border-box;

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
`;
