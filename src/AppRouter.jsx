import { PlayerChart } from "./Components/Chart-Compo/chart";
import { CSVTable } from "./Components/Csv-Parser-Compo/csv-parser";
import GameMaps from "./Components/GameMap-Compo/fields-stats";
import { Intro } from "./Components/GameMap-Compo/Intro";
import { BrowserRouter,Routes,Route,HashRouter } from "react-router-dom";

export const AppRouter = () => {
  
    return (
      <div className="App">
        <HashRouter basename="/">
        
            <Routes>
              <Route exact path="/" element={<Intro/>}></Route>
              <Route  exact path="/mission1" element={<CSVTable />}></Route>
              <Route  exact path="/mission2" element={<GameMaps />}></Route>
              {/* <Route  exact path="/mission3" element={<PlayerChart />}></Route> */}

            
  
            </Routes>
  
        </HashRouter>
      </div>
    );
  };