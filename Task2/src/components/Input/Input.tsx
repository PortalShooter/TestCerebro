import React, {ChangeEvent, FC, InputHTMLAttributes} from 'react';

// Styles
import styles from './input.module.css'
import classnames from 'classnames/bind'
const cn = classnames.bind(styles)

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
  value: string;
  setValue: (setValue: string) => void;
  className?: string;
}

const Input: FC<InputProps> = ({value, setValue, className}) => {

  function handleUpdateValue(event: ChangeEvent<HTMLInputElement>) {
    setValue(event.target.value);
  }

  return(
    <>
      <div>Value: {value}</div>
      <input
        type="number" 
        value={value} 
        onChange={handleUpdateValue}
        className={cn(className)}
      />
    </>
  )
}
export default Input