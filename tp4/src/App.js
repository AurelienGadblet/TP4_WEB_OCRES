import logo from './logo.svg';
import './App.css';

import Article from './components/Article';
import CgtStyle from './components/CgtStyle';
import Informations from './components/Informations';

import React from 'react';


class App extends React.Component {


  constructor(props)
  {
      super(props);
      this.state = {  ProfilActif: 0,
                      Profils : [
                      {
                        prenom: 'Jeanne',
                        nom: "D'arc",
                        date: 'Environ 1412',
                        article: "Jeanne d'Arc, née vers 1412 à Domrémy, village du duché de Barn 1 (actuellement dans le département des Vosges en Lorraine), et morte sur le bûcher le 30 mai 1431 à Rouen, capitale du duché de Normandie alors possession anglaise, est une héroïne de l'histoire de France, chef de guerre et sainte de l'Église catholique, surnommée depuis le XVIe siècle « la Pucelle d'Orléans ». Au début du XVe siècle, cette jeune fille de dix-sept ans d'origine paysanne affirme qu'elle a reçu de la part des saints Michel, Marguerite d'Antioche et Catherine d'Alexandrie la mission de délivrer la France de l'occupation anglaise. Elle parvient à rencontrer Charles VII, à conduire victorieusement les troupes françaises contre les armées anglaises, à lever le siège d'Orléans et à conduire le roi au sacre, à Reims, contribuant ainsi à inverser le cours de la guerre de Cent Ans. ",
                      },

                      {
                        prenom: 'Sean',
                        nom: 'Connery',
                        date: '25/08/1930',
                        article: "Sir Thomas Sean Connery est un acteur et producteur britannique, né le 25 août 1930 à Édimbourg en Écosse et mort le 31 octobre 2020 à Nassau aux Bahamas. Révélé en devenant le premier acteur incarnant James Bond au cinéma, il tient ce rôle, qui lui confère une célébrité mondiale, dans six films d'EON Productions — James Bond 007 contre Dr No (1962), Bons baisers de Russie (1963), Goldfinger (1964), Opération Tonnerre (1965), On ne vit que deux fois (1967) et Les diamants sont éternels (1971) — et revient dans le non-officiel Jamais plus jamais (1983). En parallèle de James Bond, ses autres films notables de l'époque sont Pas de printemps pour Marnie (1964), Le Crime de l'Orient-Express (1974), L'Homme qui voulut être roi (1975) et Un pont trop loin (1977). ",
                      },
                      {
                        prenom: 'Charles',
                        nom: 'De Gaulle',
                        date: '22/11/1890',
                        article: "Charles de Gaulle, communément appelé le général de Gaulle ou parfois simplement le Général, né le 22 novembre 1890 à Lille et mort le 9 novembre 1970 à Colombey-les-Deux-Églises, est un militaire, résistant, homme d'État et écrivain français. Chef de la France libre puis dirigeant du Comité français de libération nationale pendant la Seconde Guerre mondiale, président du Gouvernement provisoire de la République française de 1944 à 1946, président du Conseil des ministres français de 1958 à 1959, instigateur de la Cinquième République fondée en 1958, il est président de la République française du 8 janvier 1959 au 28 avril 1969. Il est le premier à occuper la magistrature suprême sous la Cinquième République. Élevé dans une culture de grandeur nationale, Charles de Gaulle choisit la carrière d'officier. Il est fait prisonnier lors de la Première Guerre mondiale. ",
                      },

                    ]


      }
  }

  changerActif(numero)
  {
    this.setState({ProfilActif:numero});
  }


  render(){

    return (
        <div className="page">
          <div className="selection">
            <button className="bouton boutongen"  onClick={() => this.changerActif(0)} >{this.state.Profils[0].prenom}</button>
            <button className="bouton boutongen"  onClick={() => this.changerActif(1)} >{this.state.Profils[1].prenom}</button>
            <button className="bouton boutongen"  onClick={() => this.changerActif(2)} >{this.state.Profils[2].prenom}</button>
          </div>
          <Informations profils={this.state.Profils} actif={this.state.ProfilActif}/>
          <Article profils={this.state.Profils} actif={this.state.ProfilActif}/>
        </div>
      );

  }


  
}

export default App;


//<img src={logo} className="App-logo" alt="logo" />