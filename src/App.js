import logo from "./logo.svg";
import "./App.css";
import {CSVTable} from './Components/Csv-Parser-Compo/csv-parser'
import PlayerChart from "./Components/Chart-Compo/chart";
import GameMaps from "./Components/GameMap-Compo/fields-stats";
import { Intro } from "./Components/GameMap-Compo/Intro";
import { AppRouter } from "./AppRouter";
function App() {
  return (
    <AppRouter/>
  );
}


export default App;
