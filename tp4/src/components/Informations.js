import React from 'react';
import Article from './Article';
import CgtStyle from './CgtStyle';

import charles from './charles.jpg';
import jeanne from './jeanne.jpg';
import sean from './sean.jpg';

class Informations extends React.Component
{
	constructor(props)
	{
	      super(props);
	}

	afficherprenom(numero)
	{
		return <p>Prénom : {this.props.profils[numero].prenom} </p>;
	}

	affichernom(numero)
	{
		return <p>Nom : {this.props.profils[numero].nom} </p>;
	}

	afficherdate(numero)
	{
		return <p>Date de naissance : {this.props.profils[numero].date} </p>;
	}

	afficherphoto(numero)
	{
		if(numero == 0)
		{
			return <center> <img src={jeanne} className="pp" alt="logo" /></center>;
		}
		else if(numero == 2)
		{
			return <center> <img src={charles} className="pp" alt="logo" /></center>;
		}
		else if(numero == 1)
		{
			return <center> <img src={sean} className="pp" alt="logo" /></center>;
		}
		
	}

	render()
	{

		return(

			<div className="informations" id="couleurfond">
				{this.afficherphoto(this.props.actif)}
				{this.afficherprenom(this.props.actif)}
				{this.affichernom(this.props.actif)}
				{this.afficherdate(this.props.actif)}
				<div className="droite"><CgtStyle /></div>
				
			</div>

		);
	}

}

export default Informations;