import styled from 'styled-components';
import TextField from '@mui/material/TextField';
import { Paper } from '@mui/material';

export const Box = styled(Paper)`
  width: 100%;
  margin-top: 50px;
  margin-bottom: 30px;
  padding: 20px;
  box-sizing: border-box;
`;

export const InputField = styled(TextField)`
  width: 100%;
  background-color: #fff;

  textarea {
    height: 100px !important;
  }
`;
