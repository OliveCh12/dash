import React from "react";
import { format } from "date-fns";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import Card from "../components/Card/Card";

type Props = {
  title?: string;
  time: string;
  color?: "blue" | "red" | "green" | "yellow" | undefined;
};

type EventProps = {
  title: string;
};

const Event = (props: EventProps) => {
  return (
    <div className="calendar__event">
      <span className="calendar__event-title">{props.title}</span>
      <span className="calendar__event-time">{props.title}</span>
    </div>
  );
};

const Calendar = (props: Props) => {
  return (
    <Card title="Calendar" icon={<CalendarMonthIcon />} isLoading={false}>
      <Event title="Workout sesion" />
    </Card>
  );
};

export default Calendar;
