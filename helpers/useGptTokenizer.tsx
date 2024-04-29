import { useState, useMemo } from "react";
import { decodeGenerator, encode } from "gpt-tokenizer";

interface TokenInfo {
  tokens: string[];
  tokenIDs: number[]
}

const useGptTokenizer = (inputText: string): TokenInfo => {
  const [encodedTokens, setEncodedTokens] = useState<number[]>([]);
  const [decodedTokens, setDecodedTokens] = useState<string[]>([]);

  useMemo(() => {
    const tokens = encode(inputText);
    setEncodedTokens(tokens);
  }, [inputText]);

  useMemo(() => {
    const tokensArray = Array.from(decodeGenerator(encodedTokens));
    setDecodedTokens(tokensArray);
    
  }, [encodedTokens]);

  return {
    tokens: decodedTokens,
    tokenIDs: encodedTokens
  };
};

export default useGptTokenizer;

