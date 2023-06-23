import Card from "../../components/Card/Card";
import styles from "./number.module.css";

type Props = {
  title: string;
  col: number;
  row: number;
  value: number;
  unit: string;
};

const Number = (props: Props) => {
  return (
    <Card
      title={props.title}
      col={props.col}
      row={props.row}
      alignCenter={true}
    >
      <div className={styles.container}>
        <span className={styles.number}>{props.value}</span>
        <span className={styles.unit}>{props.unit}</span>
      </div>
    </Card>
  );
};

export default Number;
