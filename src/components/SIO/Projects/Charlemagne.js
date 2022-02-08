import React from 'react';

import ProjectImg from '../ProjectImg';
import * as c from '../../../assets/Projects/index';


const Charlemagne = () => {


    return (
        <div className="project-resume">
            <h1>Charlemagne</h1>
            <h2>Site de ventes à emporter</h2>
            <p>
                La section hôtelière du
                <a href="https://lycee-charlespointet-thann.fr/" target="_blank" rel="noopener noreferrer"> Lycée Pointet de Thann </a>
                produit 4 jours sur 5 des plats pour ses clients.
                Or depuis le confinement il est impossible de servir des gens de l’extérieur.
                Nous avons donc eu la tâche de mettre en place un site de ventes à emporter pour les professeurs, élèves et personnel du lycée.
            </p>

            <a className='project-btn'
                href="https://nbviewer.org/github/Nahay/Charlemagne/blob/master/client/src/assets/Lycee_Pointet_-_Cahier_des_charges_VAE.pdf"
                target='_blank'
                rel='noopener noreferrer'
            >
                Cahier des charges
            </a>

            <h3>Présentation</h3>
            <p>
                Le site est séparé en deux parties : utilisateur et administrateur. <br/>
                Le panel utilisateur permet de passer commande selon les dates proposées ou de contacter le restaurant. <br/>
            </p>

            <ProjectImg img={c.AdminConnexion} alt="Accueil Connecté"/>

            <p>
                Le panel admin pour sa part va permettre de gérer les plats, les dates, les commandes et les utilisateurs.
            </p>

                <ProjectImg img={c.AdminAccueil} alt="Accueil Admin"/>
            

            <h3>Partie Utilisateur</h3>

            <ProjectImg img={c.UserCommander} alt="Commander"/>
            
            <ProjectImg img={c.UserConnexion} alt="Connexion utilisateur"/>
        
            <ProjectImg img={c.UserContact} alt="Contact"/>
        
            <ProjectImg img={c.UserPasserComm} alt="Passer Commande"/>
        
            <ProjectImg img={c.AdminAccueil} alt=""/>

            
            <p>
                
            </p>

            <h3>Partie Admin</h3>
            <p>

            </p>

            <h3>Le back</h3>
            <p>
                Nous avons décidé d'utiliser MongoDB pour notre base de données, car nous avons voulu découvrir un nouvel environnement qu'est le NOSql, n'ayant utilisé que MYSql jusqu'à présent sur des sites en PhP. <br/>
                Voici notre base de données :

                {/* screen base de données */}
            </p>

            <a className='project-btn'
                href="https://github.com/Nahay/Charlemagne"
                target='_blank'
                rel='noopener noreferrer'
            >
                Voir le dépôt GitHub
            </a>
            
        </div>        
    );
}

export default Charlemagne;