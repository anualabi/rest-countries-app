import React from 'react';
import { useUniqueId } from '../../utils/uniqueId';
import { FieldContext } from './FieldContext';
import { Label } from './Label';
import { Input } from './Input';

interface FieldComposition {
  Label: typeof Label;
  Input: typeof Input;
}

interface FieldProps {
  children: React.ReactNode;
}

const Field: React.FC<FieldProps> & FieldComposition = ({ children }) => {
  const id = useUniqueId();

  return <FieldContext.Provider value={id}>{children}</FieldContext.Provider>;
};

Field.Label = Label;
Field.Input = Input;

export default Field;
