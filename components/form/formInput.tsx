
import React, {  forwardRef } from 'react';
import styles from "./form.module.css";

interface InputProps {
  id: string;
  name: string;
  type?: string;
  value: string;
  label?: string;
  placeholder?: string;
  [key: string]: any;
}
const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  return ( <input
     {...props} ref={ref} className={styles.inputField} />
  );
});


Input.displayName = 'Input';

export default Input;
