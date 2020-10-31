import React from 'react';
import Article from './Article';
import Informations from './Informations';

class CgtStyle extends React.Component
{
	constructor(props)
	{
	      super(props);
	}

	getRandomInt(max) //trouvé sur internet
	{
  		return Math.floor(Math.random() * Math.floor(max));
	}

	changerstyle()
	{
		let temp = this.getRandomInt(6);

		switch(temp)
		{
			case 1:
				document.getElementById("couleurfond").style.backgroundColor="#d4eaf5";
			break;
			case 2:
				document.getElementById("couleurfond").style.backgroundColor="#e6f0e8";
			break;
			case 3:
				document.getElementById("couleurfond").style.backgroundColor="#f0e9f3";
			break;
			case 4:
				document.getElementById("couleurfond").style.backgroundColor="#c5fffb";
			break;
			case 5:
				document.getElementById("couleurfond").style.backgroundColor="#fbd5d8";
			break;
			case 0:
				document.getElementById("couleurfond").style.backgroundColor="white";
			break;
		}
		
	}


	render()
	{
		return(
			
			<button className="boutonstyle boutongen" onClick={() => this.changerstyle()}>Changer de style</button>
		);
	}
}

export default CgtStyle;