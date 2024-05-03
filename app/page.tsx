'use client';

import { FC, useEffect, useState } from 'react';

import { Counter, Loading } from './page.styles';
import useGptTokenizer from '@/helpers/useGptTokenizer';
import Input from '@/components/Input';
import Output from '@/components/Output';
import Footer from '@/components/Footer';
import { Button } from '@/components/Input.styles';

const HomePage: FC = () => {
  const [isAppLoading, setIsAppLoading] = useState<boolean>(true);
  const [inputText, setInputText] = useState<string>('');
  const [displayTokens, setDisplayTokens] = useState<boolean>(true);

  const { tokens, tokenIDs, isLoading } = useGptTokenizer(inputText);

  useEffect(() => {
    setIsAppLoading(false);
  }, []);

  const dataToShow = displayTokens
    ? tokens
    : tokenIDs.map((token) => token.toString());

  return isAppLoading ? (
    <Loading>Loading...</Loading>
  ) : (
    <>
      <main>
        <h1>GPT Tokenizer</h1>
        <Input
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
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

        <Output tokens={dataToShow} isLoading={isLoading} />
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
