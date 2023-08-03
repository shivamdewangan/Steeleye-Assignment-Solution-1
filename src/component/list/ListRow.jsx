import styles from "./ListRow.module.css";

const ListCell = ({ children, onClick, selected }) => {
  return <tr className={styles.cell} onClick={onClick} data-selected={selected}>{children}</tr>;
};

export default ListCell;
