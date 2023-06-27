import styles from "./select.module.css";

type Props = {
  items: string[];
};

const Select = (props: Props) => {
  return (
    <select className={styles.select}>
      {props.items.map((item) => (
        <option value={item}>{item}</option>
      ))}
    </select>
  );
};

export default Select;
