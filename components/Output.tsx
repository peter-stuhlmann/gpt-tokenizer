import { Fragment } from 'react';
import { OutputField } from './Output.styles';
import { CircularProgress } from '@mui/material';

const colors: string[] = [
  '#b5a0e9',
  '#00ff26',
  '#f7ff63',
  '#ff6f74',
  '#6cd8ff',
];

const Output = ({
  tokens,
  isLoading,
}: {
  tokens: string[];
  isLoading: boolean;
}) => (
  <OutputField>
    <div>
      {isLoading ? (
        <div>
          <CircularProgress />
        </div>
      ) : (
        tokens.map((token: string, idx: number) => (
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
                        <span
                          style={{ width: '10px', display: 'inline-block' }}
                        >
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
        ))
      )}
    </div>
  </OutputField>
);

export default Output;
