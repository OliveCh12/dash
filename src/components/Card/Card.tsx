import React from "react";

import { useLongPress } from "@uidotdev/usehooks";
import { motion, AnimatePresence } from "framer-motion";

import Modal from "../Modal/Modal";
import Loader from "../Loader";
import styles from "./card.module.css";

type Props = {
  title: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
  isLoading?: boolean;
  isClickcable?: boolean;
  clickcallback?: () => void;
  icon?: React.ReactNode;
  color?: string;
  alignCenter?: boolean;
  col: number | 1;
  row: number | 1;
};

const Card = (props: Props) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const attrs = useLongPress(
    () => {
      setIsOpen(true);
    },
    {
      onStart: (event: any) => console.log("Press started"),
      onFinish: (event: any) => console.log("Press Finished"),
      onCancel: (event: any) => console.log("Press cancelled"),
      threshold: 500,
    }
  );

  const cardClassName = `${styles.card} ${styles[`col${props.col}`]} ${
    styles[`row${props.row}`]
  }`;

  return (
    <>
      <motion.div
        className={cardClassName}
        style={{ backgroundColor: props.color }}
        transition={{
          duration: 0.01,
          damping: 6,
          stiffness: 300,
          type: "spring",
        }}
        onClick={props.clickcallback}
        {...attrs}
      >
        {/* <motion.div className={styles.cardDynamicBackground} initial={{ width: 0}} animate={{ width: "100%"}} transition={{ type: "spring"}} /> */}
        <div className={styles.card__header}>
          <h3 className="card__title">{props.title}</h3>
          <span className="card__icon">{props.icon}</span>
        </div>
        {props.isLoading ? (
          <div className={styles.card__loading}>
            <Loader />
          </div>
        ) : (
          <div
            className={
              props.alignCenter ? styles.card__body__center : styles.card__body
            }
          >
            {props.children}
          </div>
        )}
        {props.footer && (
          <div className={styles.card__footer}>{props.footer}</div>
        )}
      </motion.div>
      <AnimatePresence>
        {isOpen && (
          <Modal
            title={props.title}
            onClose={() => setIsOpen(false)}
            footer={props.footer}
            color={props.color}
          >
            {props.children}
          </Modal>
        )}
      </AnimatePresence>
    </>
  );
};

export default Card;
