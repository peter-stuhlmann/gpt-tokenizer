import { useState, useEffect } from 'react';

interface TokenInfo {
  tokens: string[];
  tokenIDs: number[];
  isLoading: boolean;
}

const useGptTokenizer = (inputText: string): TokenInfo => {
  const [encodedTokens, setEncodedTokens] = useState<number[]>([]);
  const [decodedTokens, setDecodedTokens] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (inputText === '') {
      setEncodedTokens([]);
      setDecodedTokens([]);
    }

    if (inputText !== '') {
      setIsLoading(true);
      import('gpt-tokenizer').then(({ encode }) => {
        const tokens = encode(inputText);
        setEncodedTokens(tokens);
        setIsLoading(false);
      });
    }
  }, [inputText]);

  useEffect(() => {
    if (encodedTokens.length > 0) {
      setIsLoading(true);
      import('gpt-tokenizer').then(({ decodeGenerator }) => {
        const tokensArray = Array.from(decodeGenerator(encodedTokens));
        setDecodedTokens(tokensArray);
        setIsLoading(false);
      });
    }
  }, [encodedTokens]);

  return {
    tokens: decodedTokens,
    tokenIDs: encodedTokens,
    isLoading,
  };
};

export default useGptTokenizer;
