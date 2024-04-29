'use client';

import './globals.css';
import { ChangeEventHandler, Fragment, useState } from 'react';
import React from 'react';
import useGptTokenizer from '@/helpers/useGptTokenizer';
import styled from 'styled-components';

const colors = [
  'rgba(107,64,216,.25)',
  'rgba(104,222,122,.35)',
  'rgba(244,172,54,.35)',
  'rgba(239,65,70,.25)',
  'rgba(39,181,234,.25)',
];

const TextInput = ({
  value,
  onChange,
}: {
  value: string;
  onChange: ChangeEventHandler<HTMLTextAreaElement>;
}) => <textarea value={value} onChange={onChange} />;
const TokenizedText = ({ tokens }: { tokens: string[] }) => (
  <div className="output">
    {tokens.map((token: string, idx: number) => (
      <Fragment key={idx}>
        {token.split('\n').map((part: string, partIdx: number) => (
          <Fragment key={partIdx}>
            {partIdx > 0 && <br />}
            <span
              style={{
                backgroundColor: colors[idx % colors.length],
              }}
            >
              {part.split('').map((char, charIndex) => (
                <Fragment key={charIndex}>
                  {char === ' ' ? (
                    <span style={{ width: '10px', display: 'inline-block' }}>
                      &nbsp;
                    </span>
                  ) : (
                    char
                  )}
                </Fragment>
              ))}
            </span>
          </Fragment>
        ))}
      </Fragment>
    ))}
  </div>
);

const App = () => {
  const [inputText, setInputText] = useState<string>('');
  const [displayTokens, setDisplayTokens] = useState<boolean>(true);

  const { tokens, tokenIDs } = useGptTokenizer(inputText);

  const dataToShow = displayTokens
    ? tokens
    : tokenIDs.map((token) => token.toString());

  console.log(dataToShow);
  return (
    <>
      <TextInput
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <button onClick={() => setInputText('')}>Clear</button>

      <div>
        <div>Characters: {inputText.length}</div>
        <div>Tokens: {dataToShow.length}</div>
      </div>

      <div>
        <h1>Test</h1>
        <span>Hallo</span>
        <span>Hallo</span>
        <span>
          <br />
        </span>
        <span>Hallo</span>
        <span>Hallo</span>
        <span>Hallo</span>
      </div>

      <TokenizedText tokens={dataToShow} />
      <button onClick={() => setDisplayTokens(!displayTokens)}>
        {displayTokens ? 'Show Token IDs' : 'Show Tokens'}
      </button>
    </>
  );
};

export default App;
