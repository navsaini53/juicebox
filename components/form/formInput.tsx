// "use client"; // This is a client component 👈🏽


// import React from 'react';




// type inputProps = {
//   id:string,
//   name: string;
//   placeholder: string;
//   type: string;
//   inputRef:any,
//   [key: string]: any;
// };


// const FormInput: React.FC<inputProps> = (props) => {


//  console.log(props);



//   return (
//    <input
//    name={props.name}
//    id={props.id}
//    placeholder={props.placeholder}
//    type={props.type}
// // {...props}
// // ref={props.inputRef}

//     />



//   );
// }

// export default FormInput;


// components/Input.tsx
import React, { ChangeEvent, forwardRef } from 'react';
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
  return (
    <div className="input-wrapper">
      <input
        {...props}
        ref={ref}
        className={styles.inputField}
      />
    </div>
  );
});

export default Input;
