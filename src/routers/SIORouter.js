import { Switch, Route } from "react-router-dom";
import SIONavbar from "../components/SIO/SIONavbar";

import SIO from "../Pages/SIO/SIO";
import SIOProjects from "../Pages/SIO/SIOProjects";
import SIOVeille from "../Pages/SIO/SIOVeille";


const SIORouter = ({ match }) => {
  // match.url prend le chemin par défaut = /sio
  // path={ match.url + '/realisations' }

  return (
    <main className="mainSIO">
        <div className="bg"></div>
        <SIONavbar/>
        <Switch>

            <Route exact path={match.url} component = {SIO} />
            <Route exact path={match.url + '/realisations'} component = {SIOProjects} />
            <Route exact path={match.url + '/veille-technologique'} component = {SIOVeille} />

        </Switch>
    </main>
  );
};

export default SIORouter;
