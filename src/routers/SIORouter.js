import { Switch, Route } from "react-router-dom";
import SIONavbar from "../components/SIO/SIONavbar";

import SIOIndex from "../pages/SIO/SIOIndex";
import SIOProjects from "../pages/SIO/SIOProjects";
import SIOVeille from "../pages/SIO/SIOVeille";


const SIORouter = ({ match }) => {
  // match.url prend le chemin par défaut = /sio
  // path={ match.url + '/realisations' }

  return (
    <main className="mainSIO">
        <div className="bg"></div>
        <SIONavbar/>
        <Switch>

            <Route exact path={match.url} component = {SIOIndex} />
            <Route exact path={match.url + '/realisations'} component = {SIOProjects} />
            <Route exact path={match.url + '/veille-technologique'} component = {SIOVeille} />

        </Switch>
    </main>
  );
};

export default SIORouter;
