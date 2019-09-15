import React from 'react'; 
import './App.css';
import DataList from './components/DataList';
import DataCard from './components/DataCard';


class App extends React.Component {
	constructor(props) {
		super(props); 
		this.state = {
			DataList : DataList
		}	
	}
	render(){
  return (
    <div className="App">
		<div className="container">
		<DataCard DataList={this.state.DataList} />
		</div>
    </div>
  );
	}
}

export default App;
