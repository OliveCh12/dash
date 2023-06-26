import { useState, useEffect } from "react";
import { useBattery } from "@uidotdev/usehooks";
import { BatteryCharging50, Battery50 } from "@mui/icons-material";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";

import Card from "../../components/Card/Card";
import styles from "./battery.module.css";

type Props = {
  colors?: string;
};

const Battery = (props: Props) => {
  const { loading, level, charging, chargingTime, dischargingTime } =
    useBattery();

  const COLORS = ["var(--color-primary)", "var(--color-secondary)"];

  return (
    <Card
      title="Battery"
      icon={charging ? <BatteryCharging50 /> : <Battery50 />}
      isLoading={loading}
      color={props.colors}
      alignCenter={true}
    >
      {JSON.stringify({ chargingTime, dischargingTime })}

      {/* <span className={styles.level}>{level * 100} %</span> */}

      <ResponsiveContainer width="100%" height="100%">
        <PieChart width={350} height={350} className={styles.batteryChart}>
          <Pie
            data={[
              { name: "Level %", value: level * 100 },
              { name: "Total %", value: 100 },
            ]}
            cx={150}
            cy={90}
            innerRadius={50}
            outerRadius={80}
            paddingAngle={0}
            dataKey="value"
          >
            <Cell key={`cell-1`} fill={COLORS[0]} />
            <Cell key={`cell-2`} fill={COLORS[1]} />
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </Card>
  );
};

export default Battery;
