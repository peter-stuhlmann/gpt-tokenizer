'use client';

import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    font-size: 18px;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: linear-gradient(-45deg, #000, #202020, #2e2e2e, #323232, #2e2e2e, #202020);
    background-size: 400% 400%;
    animation: gradient 15s ease infinite;

    @keyframes gradient {
      0% {
        background-position: 0% 50%;
      }
      50% {
        background-position: 100% 50%;
      }
      100% {
        background-position: 0% 50%;
      }
    }

    main {
      padding: 20px;
      box-sizing: border-box;
      width: 100%;
      max-width: 1000px;
      margin: 0 auto;

      h1 {
        color: #fff;
        font-size: 40px;
      }
    }
  }
`;
