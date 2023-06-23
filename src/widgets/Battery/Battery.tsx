import {useState} from 'react';
import { useBattery } from "@uidotdev/usehooks";
import { BatteryCharging50, Battery50 } from "@mui/icons-material";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';

import Card from "../../components/Card/Card";
import styles from "./battery.module.css";

type Props = {
  colors?: string;
};

const Battery = (props: Props) => {
  const { loading, level, charging, chargingTime, dischargingTime } =
    useBattery();
  
    const COLORS = ['var(--color-primary)', 'var(--color-secondary)'];

  return (
    <Card
      title="Battery"
      icon={charging ? <BatteryCharging50 /> : <Battery50 />}
      isLoading={loading}
      color={props.colors}
      alignCenter={true}
    >
      <span class={styles.level}>{level * 100} %</span>

      {/* <span>{chargingTime}</span>
      <span>{dischargingTime}</span> */}
      <PieChart width={300} height={300}>
        <Pie
          data={[
            { name: 'Level %', value: level * 100 },
            { name: 'Total %', value: 100 },
          ]}
          cx={100}
          cy={100}
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
        >
          <Cell key={`cell-1`} fill={COLORS[0]} />
          <Cell key={`cell-2`} fill={COLORS[1]} />
        </Pie>
      </PieChart>
    </Card>
  );
};

export default Battery;
