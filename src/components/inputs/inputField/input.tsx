import React, { FC } from "react";
import styles from "../inputField/input.module.scss";

type Props = {
  placeholderText: string;
  inputValue: string;
  inputHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
export const Input: FC<Props> = ({
  inputValue,
  placeholderText,
  inputHandler,
}) => {
  return (
    <div>
      <input
        className={styles.input}
        type="email"
        value={inputValue}
        required = {true}
        placeholder={placeholderText}
        onChange={(e) => inputHandler(e)}
      />
    </div>
  );
};
