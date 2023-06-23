import Header from "./layouts/Header/index";
import Grid from "./layouts/Grid/Grid";

import Clock from "./widgets/Clock/Clock";
import Calendar from "./widgets/Calendar";
// import Timer from "./widgets/Timer/Timer";
import Battery from "./widgets/Battery/Battery";
import Bookmarks from "./widgets/Bookmarks/Bookmarks";
import Notepad from "./widgets/Notepad/Notepad";
import Switch from "./widgets/Switch/Switch";
import Chart from "./widgets/Chart/Chart";
import Number from "./widgets/Number/Number";

function App() {
  return (
    <>
      <Header username="Ashley" />
      <Grid gap="medium">
        <Clock username="Ashley" col={2}/>
        <Calendar />
        <Battery />
        {/* <Timer /> */}
        <Notepad />
        <Switch title="Air Condition" />
        <Number title="You Tube Subscribers" col={1} row={1} value={430340} unit="Subscribers"/>
        <Chart />

        <Bookmarks title="Socials Networks" display="list"/>
        <Bookmarks title="Shopping" color="var(--color-primary)" display="list"  col={1} row={2}/>
        <Bookmarks title="Tools" color="var(--color-secondary)" display="grid" />
        <Bookmarks title="Tools" color="var(--color-tertiary)" display="grid" />
        <Switch title="Lights" />

        
      </Grid>
    </>
  );
}

export default App;
