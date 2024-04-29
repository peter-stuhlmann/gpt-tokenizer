import { ChangeEventHandler } from 'react';
import { Box, InputField } from './Input.styles';

const Input = ({
  value,
  onChange,
}: {
  value: string;
  onChange: ChangeEventHandler<HTMLTextAreaElement>;
}) => (
  <Box>
    <InputField
      label="Input"
      multiline
      maxRows={4}
      value={value}
      onChange={onChange}
    />
  </Box>
);
export default Input;
