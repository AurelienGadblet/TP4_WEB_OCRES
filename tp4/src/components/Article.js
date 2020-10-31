import React from 'react';

import CgtStyle from './CgtStyle';
import Informations from './Informations';


class Article extends React.Component
{

	constructor(props)
	{
	      super(props);
	      this.state = {likea:0, likeb:0,likec:0}
	}

	afficherarticle(numero)
	{
		return <p> {this.props.profils[numero].article} </p>;
	}

	btnsuper()
	{
		let varprofil = this.props.actif;
		switch(varprofil)
		{
			case 0:
				this.setState({likea: this.state.likea + 1});
			break;
			case 1:
				this.setState({likeb: this.state.likeb + 1});
			break;
			case 2:
				this.setState({likec: this.state.likec + 1});
			break;
		}
	}

	afficherlike(numero)
	{
		if(numero == 0)
		{
			return <p className="compteur"> {this.state.likea}</p>;
		}
		else if(numero == 1)
		{
			return <p className="compteur"> {this.state.likeb}</p>;
		}
		else if(numero == 2)
		{
			return <p className="compteur"> {this.state.likec}</p>;
		}
		
	}

	render()
	{
		return(
			<div className="article">
				{this.afficherarticle(this.props.actif)}
				<div>
					<button className="boutonlike boutongen" onClick={() => this.btnsuper()}>C'est super !</button>
					{this.afficherlike(this.props.actif)}
				</div>
				
			</div>	
		);
	}
}

export default Article;