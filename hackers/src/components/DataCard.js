import React from 'react'; 

class DataCard extends React.Component {
	render() {
	  return (
		<ul className="Info">
		  {this.props.DataList.map(user => {
			return (
			  <li className="InfoUser"> 
				  <div className="InfoName"> {user.name} </div>
				  <div className="InfoEmail"> {user.email} </div>
				  <div className="InfoPasswords"> {user.passwords} </div>
				  <div className="InfoIban"> {user.bank.iban} </div>
				  <div className="InfoPin"> {user.bank.pin} </div>
			  </li> 
			);
		  })}
		</ul>	
	  );
	}
	}

export default DataCard; 