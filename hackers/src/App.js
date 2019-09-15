import React from 'react'; 
import './App.css';
import DataList from './components/DataList';
import DataCard from './components/DataCard';
import Footer from './components/Footer';
import Header from './components/Header';
// import Page from './components/Page';


class App extends React.Component {
	constructor(props) {
		super(props); 
		this.state = {
			DataList : DataList
		}	
	}
	render(){
  return (
	<React.Fragment>
    <div className="App">
		<div>
			<Header />
		</div>
		<div className="container">
			<DataCard DataList={this.state.DataList} />
		</div>
    </div>
	<div className="Footer">
		<Footer />
	</div>
	</React.Fragment>
  );
	}
}

export default App;
