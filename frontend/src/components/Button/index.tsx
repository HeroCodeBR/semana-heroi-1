import style from './Button.module.css';

interface IButton {
  text: string;
}
export const Button = ({ text }: IButton) => {
  return (
    <button className={style.button}>
      <span>{text}</span>
    </button>
  );
};
