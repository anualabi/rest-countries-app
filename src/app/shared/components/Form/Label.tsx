import React, { useContext } from 'react';
import { FieldContext } from './FieldContext';
import styles from './Field.module.css';

export const Label = React.forwardRef<HTMLLabelElement, React.ComponentPropsWithoutRef<'label'>>(
  (props, ref) => {
    const id = useContext(FieldContext);

    return <label className={styles.label} ref={ref} htmlFor={id} {...props} />;
  }
);

Label.displayName = 'Field.Label';
