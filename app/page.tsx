'use client';

import Input from '@/components/Input';
import Output from '@/components/Output';
import useGptTokenizer from '@/helpers/useGptTokenizer';
import { FC, useState } from 'react';
import Button from '@mui/material/Button';
import { Counter } from './page.styles';

const HomePage: FC = () => {
  const [inputText, setInputText] = useState<string>('');
  const [displayTokens, setDisplayTokens] = useState<boolean>(true);

  const { tokens, tokenIDs } = useGptTokenizer(inputText);

  const dataToShow = displayTokens
    ? tokens
    : tokenIDs.map((token) => token.toString());

  return (
    <main>
      <h1>GPT Tokenizer</h1>
      <Input value={inputText} onChange={(e) => setInputText(e.target.value)} />
      <Button variant="contained" onClick={() => setInputText('')}>
        Clear
      </Button>

      <Counter>
        <div>
          <span>Characters:</span> {inputText.length}
        </div>
        <div>
          <span>Tokens:</span> {dataToShow.length}
        </div>
      </Counter>

      <Output tokens={dataToShow} />
    </main>
  );
};

export default HomePage;
