import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ReactNode } from 'react';

import { GlobalStyles } from '@/components/GlobalStyles';
import StyledComponentsRegistry from '@/components/StyledComponentsRegistry';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'GPT Tokenizer',
  description:
    "This GPT tokenizer features a byte pair encoding/decoding system optimized for OpenAI's GPT-3.5 and GPT-4 models.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <StyledComponentsRegistry>
        <GlobalStyles />
        <body className={inter.className}>{children}</body>
      </StyledComponentsRegistry>
    </html>
  );
}
