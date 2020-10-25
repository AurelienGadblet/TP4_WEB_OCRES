import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


const Profils = [
				{
					prenom: 'Jeanne',
					nom: 'Dark',
					date: '23/03/1999',
					article: '五月雨に鶴の足みじかなれり',
				},

				{
					prenom: 'Martine',
					nom: 'Aubry',
					date: '12/02/1978',
					article: '行く春や鳥啼き魚の目は涙',
				},
				{
					prenom: 'Claude',
					nom: 'Francois',
					date: '12/03/1789',
					article: '時鳥なきなきとぶぞ忙しき',
				},

			];

let numeroactuel = 0;
let variablea = 0;


class Page extends React.Component
{


	render()
	{
		return (
			<div className="page">
				<Selection />
				<Informations />
				<Article />
			</div>
		);
	}
}


// ==============================

class Selection extends React.Component
{
	handleClick(numero)
	{
		numeroactuel = numero;
	}
	makebutton(numero)
	{
		return <Bouton value={Profils[numero].prenom} onClick={() => this.handleClick(numero)} />;
	}
	render()
	{
		return (
			<div className="selection">
				{this.makebutton(0)}
				{this.makebutton(1)}
				{this.makebutton(2)}
			</div>
		);
	}
}


// ============================== 

class Bouton extends React.Component
{
	render()
	{
		return (
			<button className="bouton" onClick={() =>this.props.onClick()}>
				{this.props.value}
			</button>
		);
	}
}


// ==============================

class Informations extends React.Component
{
	makeprenom(numero)
	{
		return <p>Prénom : {Profils[numero].prenom}</p>;
	}

	makenom(numero)
	{
		return <p>Nom : {Profils[numero].nom}</p>;
	}

	makedate(numero)
	{
		return <p>Date de naissance : {Profils[numero].date}</p>;
	}

	handleClick()
	{

		if(variablea == 0)
		{
			document.body.style.background = 'white';
			variablea = 1;
		}
		else
		{
			document.body.style.background = 'lightgrey';	
			variablea=0;
		}
	}

	render()
	{
		return(
			<div className="informations">
				{this.makeprenom(numeroactuel)}
				{this.makenom(numeroactuel)}
				{this.makedate(numeroactuel)}
				<ChangementStyle onClick={() => this.handleClick()}/>
			</div>

		);
	}
}


// ==============================

class ChangementStyle extends React.Component
{
	render()
	{
		return(
			<center>
				<button onClick={() =>this.props.onClick()}>Changer de style</button>
			</center>
			
			
		);
	}
}


// ==============================

class Article extends React.Component
{
	render()
	{
		return(
			<div className="article">
				<p>{Profils[numeroactuel].article}</p>
				<CSuper />
			</div>	
		);
	}
}


// ==============================

class CSuper extends React.Component
{
	render()
	{
		return(
			<center>
				<button>C'est super!</button>
			</center>
			

		);
	}
}


// ==============================

/*class Page extends React.Component
{
	render()
	{
		return();
	}
}*/


// ==============================


ReactDOM.render(
<Page />,
document.getElementById('root')
);
