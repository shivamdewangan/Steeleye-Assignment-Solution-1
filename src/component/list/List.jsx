import ListRow from "./ListRow";
import ListRowCell from "./ListRowCell";

import ListHeader from "./ListHeader";
import ListHeaderCell from "./ListHeaderCell";

import styles from "./List.module.css";
import { useState } from "react";

const List = ({ rows, currency, onSelect }) => {
  const [selected, setSelected] = useState(null);
  return (
    <div className={styles.wrapper}>
      <table className={styles.container}>
        <thead>
          <ListHeader>
            <ListHeaderCell>Order ID</ListHeaderCell>
            <ListHeaderCell>Buy/Sell</ListHeaderCell>
            <ListHeaderCell>Country</ListHeaderCell>
            <ListHeaderCell>Order Submitted</ListHeaderCell>
            <ListHeaderCell>Order Volume / {currency}</ListHeaderCell>
          </ListHeader>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <ListRow key={index} onClick={() => {
              onSelect(row["&id"]);
              setSelected(index);
            }} selected={selected === index}>
              <ListRowCell>{row["&id"]}</ListRowCell>
              <ListRowCell>{row.executionDetails.buySellIndicator}</ListRowCell>
              <ListRowCell>{row.executionDetails.orderStatus}</ListRowCell>
              <ListRowCell>{row.timestamps.orderSubmitted}</ListRowCell>
              <ListRowCell>{row.bestExecutionData.orderVolume[currency]}</ListRowCell>
            </ListRow>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default List;
