import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cancel, FormatListBulleted } from "@mui/icons-material";

import Settings from "./Settings";
import Button from "../Button/Button";

import styles from "./modal.module.css";

type Props = {
  title: string;
  children: React.ReactNode;
  settingsChildren?: React.ReactNode;
  settingsHandleColor?: any;
  footer?: React.ReactNode;
  color?: string;
  onClose: () => void;
};

const Modal = (props: Props) => {
  const [sidebarIsVisible, setIsVisible] = useState(false);

  return (
    <motion.div
      initial={{ transform: "translate(-50%, -50%) scale(0.7)", opacity: 0}}
      animate={{ transform: "translate(-50%, -50%) scale(1)", opacity: 1 }}
      exit={{ transform: "translate(-50%, -30%) scale(1)", opacity: 0 }}
      className={styles.modal}
      style={{ backgroundColor: props.color }}
      // transition={{
      //   duration: 0.2,
      //   damping: 10,
      //   stiffness: 200,
      //   type: "spring",
      // }}
    >
      <div className={styles.modal__header}>
        <span className={styles.title}>{props.title}</span>
        <div className={styles.actions}>
          <Button
            type="button"
            color="info"
            size="small"
            onClick={() => setIsVisible(!sidebarIsVisible)}
          >
            <FormatListBulleted />
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

      {/* Settings Section */}
      <AnimatePresence>
        {sidebarIsVisible && (
          <Settings handleColor={props.settingsHandleColor}>
            {props.settingsChildren}
          </Settings>
        )}
      </AnimatePresence>

      {/* Body Section */}
      <AnimatePresence>
        <motion.div
          className={sidebarIsVisible ? styles.bodyActive : styles.body}
        >
          {props.children}
        </motion.div>
      </AnimatePresence>

      {/* Footer Section */}
      <div className={styles.footer}>{props.footer}</div>
    </motion.div>
  );
};

export default Modal;
