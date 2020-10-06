import React, { Component } from 'react';
import Header from './components/Header/Header';
import Form from './components/Form/Form';
import DisplayBooks from './components/DisplayBooks/DisplayBooks';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Header />
				<Form />
				<DisplayBooks />
			</div>
		);
	}
}

export default App;
