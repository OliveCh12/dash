import { useState } from "react";
import { useCountdown } from "@uidotdev/usehooks";
import EditNoteIcon from "@mui/icons-material/EditNote";

import Card from "../../components/Card/Card";

type Props = {};

const Timer = (props: Props) => {
  const [endTime, setEndTime] = useState(new Date(Date.now() + 10000));
  const [complete, setComplete] = useState(false);

  const count = useCountdown(endTime, {
    interval: 1000,
    onTick: () => console.log("tick"),
    onComplete: (time: any) => setComplete(true),
  });

  const handleClick = (time: any) => {
    if (complete === true) return;
    const nextTime = endTime.getTime() + time;
    setEndTime(new Date(nextTime));
  };

  return (
    <Card title="Focus" icon={<EditNoteIcon />}>
      <section>
        <header>
          <h1>useCountdown</h1>
        </header>
        <span className="countdown">{count}</span>
        {complete === false && (
          <div className="button-row">
            <button onClick={() => handleClick(5000)}>+5s</button>
            <button onClick={() => handleClick(10000)}>+10s</button>
            <button onClick={() => handleClick(15000)}>+15s</button>
          </div>
        )}
      </section>
    </Card>
  );
};

export default Timer;
