import React, { useCallback } from "react";
import { motion } from "framer-motion";
import styles from "./settings.module.css";

type SettingsProps = {
  isActive?: boolean;
  isColorable?: boolean;
  handleColor?: () => void;
  children?: React.ReactNode;
};

type ColorItemProps = {
  color: string;
  onClick?: () => void;
};

const ColorItem = (props: ColorItemProps) => {
  return (
    <motion.div
      className={styles.settingsColorItem}
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.9, opacity: 0 }}
      whileTap={{ scale: 0.8, opacity: 0.8 }}
      style={{ backgroundColor: props.color }}
      onClick={props.onClick}
    ></motion.div>
  );
};

const Settings = (props: SettingsProps) => {
  return (
    <motion.div
      className={styles.settings}
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -100, opacity: 0 }}
      // transition={{ duration: 0.1, type: "spring", stiffness: 100}}
    >
      {props.children}
      <div className={styles.settingsColors}>
        <ColorItem color="var(--color-primary)" onClick={props.handleColor} />
        <ColorItem color="var(--color-secondary)" />
        <ColorItem color="var(--color-tertiary)" />
        <ColorItem color="var(--color-foreground)" />
      </div>
    </motion.div>
  );
};

export default Settings;
