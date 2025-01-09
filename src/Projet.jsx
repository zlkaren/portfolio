import React from 'react'
import './Projet.css'
import { BsEmojiGrin } from "react-icons/bs";

function Projet() {
  return (
    <div className='backProjet'>
      <h2 className='h2-aligne'>
        Projet <br />
        <a>--- <BsEmojiGrin /> ---</a>
      </h2>

      <div className="card-container">
        

        <div className="card">
          <img src="./voyage.png" className="card-img-top" alt="..." />
          <div className="card-body">
            <p className="card-text">1- Page de guide de voyage</p>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Outils:Html,css</li>
            
              <li className="list-group-item">Ce projet m'a aidé à comprendre comment structurer des pages avec des images et des liens interactifs</li>
            </ul>

          </div>
          
        </div>
        <div className="card">
          <img src="./Ip.png" className="card-img-top" alt="..." />
          <div className="card-body">
            <p className="card-text">2-Page de verification d'adresse ip</p>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Outils: Html,cgi,c</li>
              <li className="list-group-item">Ce projet m'a permis d'apprendre à manipuler des langages côté serveur comme C et à intégrer des scripts CGI dans une page web</li>
              
            </ul>
          </div>
        </div>

        <div className="card">
          <img src="./formulaire.png" className="card-img-top" alt="..." />
          <div className="card-body">
            <p className="card-text">3-un formulaire simple pour la gestion des utilisateurs</p>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">outils:Html, cgi, css</li>
              <li className="list-group-item">Ce projet m'a permis de me familiariser avec les éléments de formulaire comme les champs de texte, les boutons, et les cases à cocher</li>
              
            </ul>
          </div>
        </div>
        <div className="card">
          <img src="./Proj.png" className="card-img-top" alt="..." />
          <div className="card-body">
            <p className="card-text">4-Création de mon propre portfolio</p>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">outils:react-vite,css,jsx,bootstrap</li>
              <li className="list-group-item">Cette projet m'a permis de mettre en pratique mes compétences acquises en react pour desinger l'espace utilisateur</li>
              
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projet;
