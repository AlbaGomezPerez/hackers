import React from 'react'; 
	
	class Footer extends React.Component {
		constructor(props){
			super(props);
			// this.state = {time : newTime() }; 
			}; 
		render() {
		return (
			<React.Fragment>
				<h2 className="TextFooter">Soy el footer</h2>	
				<p className="TextFooter">Time</p>
				{/* <div>
				{this.state.date.toLocaleTimeString()}
				</div> */}
			</React.Fragment>
		);
		}
	}
	export default Footer; 