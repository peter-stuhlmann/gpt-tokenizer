import { Fragment } from 'react';
import { OutputField } from './Output.styles';

const colors: string[] = [
  'rgba(107,64,216,0.3)',
  'rgba(104,222,122,0.4)',
  'rgba(244,172,54,0.4)',
  'rgba(239,65,70,0.3)',
  'rgba(39,181,234,0.3)',
];

const Output = ({ tokens }: { tokens: string[] }) => (
  <OutputField>
    <div>
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
  </OutputField>
);

export default Output;
