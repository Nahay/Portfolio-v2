import React from 'react';
import { Link } from 'react-router-dom';


const SIOIndex = () => {

    return ( 
        <div className="sio">
            <div className="sio__content">
                <h3>Bienvenue sur mon portfolio</h3>
                <p>Je me présente : je m'appelle <b>Lily Barberou</b>.</p>
                <p>Je suis actuellement étudiante en <b>BTS SIO</b> Services Informatiques aux Organisations à Colmar en deuxième année.</p>
                <p>J'ai choisi l'option <b>SLAM</b> Solutions Logicielles et Applications Métiers qui est proposée dans ce BTS, car j'ai l'ambition de devenir <b>WebDéveloppeuse</b>.</p>
                <Link to="/" target="_blank" rel="noopener noreferrer">
                    En savoir plus
                </Link>
            </div>
        </div>
    );
}

export default SIOIndex;