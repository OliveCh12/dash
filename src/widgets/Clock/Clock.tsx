import { useState, useEffect } from "react";
import QueryBuilderTwoToneIcon from "@mui/icons-material/QueryBuilderTwoTone";
import Card from "../../components/Card/Card";
import Select from "../../components/Select/Select";
import { format } from "date-fns";
import eoLocal from "date-fns/locale/fr";
import styles from "./clock.module.css";
type Props = {
  username: string;
  col: number;
  row: number;
};

const Clock = (props: Props) => {
  const [time, setTime] = useState("");

  // Update the time every second
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(format(new Date(), "HH:mm:ss a", { locale: eoLocal}));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Card
      title={time.includes("AM") ? "Good Morning" : "Good Afternoon"}
      icon={<QueryBuilderTwoToneIcon />}
      footer={format(new Date(), "EEEE, MMMM d, yyyy")}
      alignCenter={true}
      col={props.col}
      row={props.row}
      settingsChildren={
        <>
          <h2>Customisation</h2>

          <Select items={[
            "12-hour",
            "24-hour",
          ]} />
          <Select items={[
            "Small",
            "Medium",
            "Large",
          ]} />       
        </>
      }
    >
      <span className={styles.time}>{time}</span>
    </Card>
  );
};

export default Clock;
