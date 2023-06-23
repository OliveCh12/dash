import { useState } from "react";
import EditNoteIcon from "@mui/icons-material/EditNote";
import SaveIcon from '@mui/icons-material/Save';
import Card from "../../components/Card/Card";
import Button from "../../components/Button/Button";

import styles from "./notepad.module.css";

type Props = {};

const Notepad = (props: Props) => {
  const [text, setText] = useState("");

  function handleInputChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setText(e.target.value);
  }
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
