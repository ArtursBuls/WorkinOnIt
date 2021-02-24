import React, { FC } from "react";
import styles from "../checkbox/checkbox.module.scss";

type Props = {
  isChecked: boolean;
  checkHandler: () => void;
};
export const Checkbox: FC<Props> = ({ isChecked, checkHandler }) => {
  return (
    <div>
      <input
        className={styles.checkbox}
        type="checkbox"
        checked={isChecked}
        required={true}
        onChange={() => checkHandler()}
      />
    </div>
  );
};
