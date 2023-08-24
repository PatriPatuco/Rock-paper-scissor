import "../styles/App.scss";

import Gamepitch from "./Gamepitch";
import Match from "./Match";
import Resume from "./Resume";
import Rules from "./Rules";
import Scoreboard from "./Scoreboard";

function App() {
  return (
    <div className="page">
      <main>
        <Scoreboard />
       {/*  <Rules/> */}
      </main>
    </div>
  );
}

export default App;
