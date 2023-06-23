import { useState } from "react";
import { motion } from "framer-motion";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import Card from "../../components/Card/Card";
import Bookmark from "./components/Bookmark";
import styles from "./bookmarks.module.css";

type Props = {
  title: string;
  color?: string;
  display: "list" | "grid";
  col?: number;
  row?: number;
};

const Bookmarks = (props: Props) => {
  const bookmarksClassName = styles[props.display];
  const [bookmarks, setBookmarks] = useState([
    {
      title: "Google",
      url: "https://google.com",
      icon: "https://google.com/favicon.ico",
    },
    {
      title: "Facebook",
      url: "https://facebook.com",
      icon: "https://facebook.com/favicon.ico",
    },
    {
      title: "Twitter",
      url: "https://twitter.com",
      icon: "https://twitter.com/favicon.ico",
    },
    {
      title: "Instagram",
      url: "https://instagram.com",
      icon: "https://instagram.com/favicon.ico",
    },
    {
      title: "Youtube",
      url: "https://youtube.com",
      icon: "https://youtube.com/favicon.ico",
    },
  ]);

  return (
    <Card
      title={props.title}
      icon={<BookmarkIcon />}
      color={props.color}
      isLoading={false}
      col={props.col || 1}
      row={props.row || 1}
    >
      <div className={bookmarksClassName}>
        {bookmarks.map((bookmark: any) => (
          <Bookmark
            title={bookmark.title}
            icon={bookmark.icon}
            url={bookmark.url}
            key={bookmark.url}
            display={props.display}
          />
        ))}
      </div>
    </Card>
  );
};

export default Bookmarks;
