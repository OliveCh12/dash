import { useState, useEffect } from "react";
import EditNoteIcon from "@mui/icons-material/EditNote";
import SaveIcon from '@mui/icons-material/Save';
import Card from "../../components/Card/Card";
import Button from "../../components/Button/Button";

import styles from "./notepad.module.css";

type Props = {
  col: number;
  row: number;
};

const Notepad = (props: Props) => {
  const [text, setText] = useState("");

  function handleInputChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setText(e.target.value);
  }

  useEffect(() => {
    const words = text.split(' ');
    const lastWord = words[words.length - 1];
    const coloredLastWord = `<span style="color: red;">${lastWord}</span>`;
    const formattedText = words.slice(0, -1).join(' ') + ' ' + coloredLastWord;

    console.log(lastWord)
    // setText(formattedText);
  }, [text]);

  
  return (
    <Card
      title="Notepad"
      icon={<EditNoteIcon />}
      isLoading={false}
      col={2}
      row={3}
      footer={
        <>
          <small>Caracters length : {text.length}</small>
          <Button size="medium" color="success">
            Save <SaveIcon />
          </Button>
        </>
      }
    >
      <textarea
        className={styles.textarea}
        value={text}
        placeholder="I wonder"
        onChange={handleInputChange}
      ></textarea>
    </Card>
  );
};

export default Notepad;
