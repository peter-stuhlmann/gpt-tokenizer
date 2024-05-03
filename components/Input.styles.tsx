import styled from 'styled-components';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import MuiButton from '@mui/material/Button';

export const Box = styled(Paper)`
  width: 100%;
  margin-top: 50px;
  margin-bottom: 30px;
  padding: 20px;
  box-sizing: border-box;
  background-color: #454545 !important;
`;

export const InputField = styled(TextField)`
  width: 100%;

  textarea {
    height: 100px !important;
    color: rgb(255, 255, 255);
  }

  .MuiFormLabel-root {
    color: rgb(255, 255, 255);

    &.Mui-focused {
      color: rgb(175, 175, 175);
    }
  }

  .MuiOutlinedInput-root {
    &:hover {
      .MuiOutlinedInput-notchedOutline {
        border: 1px solid rgb(175, 175, 175);
      }
    }

    .MuiOutlinedInput-notchedOutline {
      border: 1px solid rgb(175, 175, 175);
    }

    &.Mui-focused {
      color: rgb(255, 255, 255);

      .MuiOutlinedInput-notchedOutline {
        border: 1px solid rgb(175, 175, 175);
      }
    }
  }
`;

export const Button = styled(MuiButton)`
  background-color: #454545 !important;

  &:hover {
    background-color: #505050 !important;
  }
`;
