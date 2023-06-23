import { motion } from "framer-motion";
import styles from "../bookmarks.module.css";

type Props = {
  title: string;
  icon: string;
  url: string;
  display: "list" | "grid";
};

const Bookmark = (props: Props) => {
  const bookmarkClassName = styles[props.display];

  return (
    <motion.div
      className={
        bookmarkClassName === styles.list ? styles.listItem : styles.gridItem
      }
      whileHover={{ opacity: 0.7 }}
      whileTap={{ scale: 0.9, opacity: 0.8 }}
      onClick={() => window.open(props.url, "_blank")}
      >
      {props.display === "list" && <span>{props.title}</span>}
          
      <img src={props.icon} alt={props.title} />
    </motion.div>
  );
};

export default Bookmark;
