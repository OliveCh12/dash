import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import Card from "../../components/Card/Card";
import Bookmark from "./components/Bookmark";
import styles from "./bookmarks.module.css";

import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";

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
      description: "Search the web for anything",
      icon: "https://google.com/favicon.ico",
    },
    {
      title: "Facebook",
      url: "https://facebook.com",
      description: "Connect with friends and the world around you",
      icon: "https://facebook.com/favicon.ico",
    },
    {
      title: "Twitter",
      url: "https://twitter.com",
      description: "See what’s happening in the world right now",
      icon: "https://twitter.com/favicon.ico",
    },
    {
      title: "Instagram",
      url: "https://instagram.com",
      description: "Capture and share the world's moments",
      icon: "https://instagram.com/favicon.ico",
    },
    {
      title: "Youtube",
      url: "https://youtube.com",
      description:
        "Enjoy the videos and music you love, upload original content, and share it all with friends, family, and the world on YouTube.",
      icon: "https://youtube.com/favicon.ico",
    },
  ]);

  const [newBookmark, setNewBookmark] = useState({
    title: "",
    url: "",
    description: "",
    icon: "",
  });

  const [isValid, setIsValid] = useState(false);

  const [color, setColor] = useState(props.color || "#fff");

  const addBookmark = () => {
    setBookmarks([...bookmarks, newBookmark]);
  };

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setNewBookmark({ ...newBookmark, [name]: value });
  }


  const handleOpenAll = () => {
    bookmarks.forEach((bookmark) => {
      setTimeout(() => {
        window.open(bookmark.url, "_blank");
      }, 5000);
    }
    )
  }

  useEffect(() => {
    if (!newBookmark.title || !newBookmark.url) {
      setIsValid(false);
    }
    return () => {
      setIsValid(true);
    };
  }, [newBookmark]);

  return (
    <Card
      title={props.title}
      icon={<BookmarkIcon />}
      color={color}
      isLoading={false}
      col={props.col || 1}
      row={props.row || 1}
      footer={
        <Button
          type="button"
          color="secondary"
          size="small"
          buttonTips={isValid ? "Enter ⏎" : ""}
          onClick={handleOpenAll}
        >
          Open All
        </Button>
      }
      settingsHandleColor={() => console.log("handle color")}
      settingsChildren={
        <>
          <h2>Add Bookmarks</h2>
          <Input
            type="text"
            name="title"
            placeholder="Title"
            onChange={handleInputChange}
          />
          <Input
            type="text"
            name="url"
            placeholder="https://google.com"
            onChange={handleInputChange}
          />
          <Button
            type="button"
            color="primary"
            size="medium"
            buttonTips={isValid ? "Enter ⏎" : ""}
            onClick={addBookmark}
          >
            Add Bookmark
          </Button>
          <h2>Widget Colors</h2>
          <input
            type="color"
            name="color"
            onChange={(e: any) => setColor(e.target.value)}
          />
        </>
      }
    >
      <div className={bookmarksClassName}>
        <AnimatePresence>
          {bookmarks.map((bookmark: any) => (
            <Bookmark
              title={bookmark.title}
              icon={bookmark.icon}
              url={bookmark.url}
              key={bookmark.url}
              display={props.display}
            />
          ))}
        </AnimatePresence>
      </div>
    </Card>
  );
};

export default Bookmarks;
