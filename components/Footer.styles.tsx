'use client';

import styled from 'styled-components';
import Paper from '@mui/material/Paper';

export const Container = styled(Paper)`
  width: 100%;
  margin-top: 50px;
  padding: 10px 20px;
  box-sizing: border-box;
  border-radius: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  background-color: #454545 !important;
  color: #fff !important;
  font-size: 16px;

  @media (max-width: 660px) {
    flex-direction: column;
  }

  & > div {
    display: flex;
    gap: 20px;
    text-align: center;

    a {
      text-decoration: none;
      color: inherit;
    }
  }
`;
