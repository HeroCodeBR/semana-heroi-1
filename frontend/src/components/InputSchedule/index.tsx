import { ForwardRefRenderFunction, ReactNode, forwardRef } from 'react';
import style from './InputSchedule.module.css';

interface IInput {
  placeholder: string;
  type: 'password' | 'text' | 'date';
  error?: string;
}
const InputBase: ForwardRefRenderFunction<HTMLInputElement, IInput> = (
  { placeholder, type, error, ...rest },
  ref,
) => {
  return (
    <div className={style.container}>
      <label htmlFor="">{placeholder}</label>
      <input type={type} ref={ref} {...rest} />
      {error && <span>{error}</span>}
    </div>
  );
};

export const InputSchedule = forwardRef(InputBase);
