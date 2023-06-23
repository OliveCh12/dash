import { useState, useEffect } from "react";
import QueryBuilderTwoToneIcon from "@mui/icons-material/QueryBuilderTwoTone";
import Card from "../../components/Card/Card";
import { format } from "date-fns";
import styles from "./clock.module.css";
type Props = {
  username: string;
};

const Clock = (props: Props) => {
  const [time, setTime] = useState("");

  // Update the time every second
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(format(new Date(), "h:mm:ss a"));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Card
      title={time.includes("AM") ? "Good Morning" : "Good Afternoon"}
      icon={<QueryBuilderTwoToneIcon />}
      footer={format(new Date(), "EEEE, MMMM d, yyyy")}
      alignCenter={true}
      col={2}
      row={1}
    >
      <span className={styles.time}>{time}</span>
    </Card>
  );
};

export default Clock;
