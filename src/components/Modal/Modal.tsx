import React, { useState } from "react";
import { motion } from "framer-motion";
import { Cancel, Settings } from "@mui/icons-material";
import Button from "../Button/Button";

import styles from "./modal.module.css";

type Props = {
  title: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
  color?: string;
  onClose: () => void;
};

const Modal = (props: Props) => {
  const [sidebarIsVisible, setIsVisible] = useState(false);

  return (
    <motion.div
      initial={{ transform: "translate(-50%, -50%) scale(0.7)" }}
      animate={{ transform: "translate(-50%, -50%) scale(1)" }}
      exit={{ transform: "translate(-50%, -30%) scale(1)", opacity: 0 }}
      className={styles.modal}
      style={{ backgroundColor: props.color }}
      transition={{
        duration: 0.2,
        damping: 10,
        stiffness: 200,
        type: "spring",
      }}
    >
      <div className={styles.modal__header}>
        <span className={styles.title}>{props.title}</span>
        <div className={styles.actions}>
          <Button
            type="button"
            color="warning"
            size="small"
            onClick={props.onClose}
          >
            <Settings />
          </Button>
          <Button
            type="button"
            color="danger"
            size="small"
            onClick={props.onClose}
          >
            <Cancel />
          </Button>
        </div>
      </div>
      <div className={styles.body}>{props.children}</div>
      <div className={styles.footer}>{props.footer}</div>
    </motion.div>
  );
};

export default Modal;
