import React from "react";
import styles from "./grid.module.css";

type Props = {
  children: React.ReactNode;
  gap: "small" | "medium" | "large";
};

const Grid = (props: Props) => {
  const gridClassName = `${styles.grid} ${styles[props.gap]}`;

  return <main className={gridClassName}>{props.children}</main>;
};

export default Grid;
