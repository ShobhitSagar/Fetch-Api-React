import React from "react";
import "./App.css";
import Forms from "./components/Forms";
import TravelForm from "./components/TravelForm";

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			loading: false,
			character: {},
		};
	}

	componentDidMount() {
		this.setState({ loading: true });
		fetch("https://jsonplaceholder.typicode.com/users/1")
			.then((response) => response.json())
			.then((data) => {
				this.setState({
					loading: false,
					character: data,
				});
			});
	}

	render() {
		const text = this.state.loading ? "Loading..." : this.state.character.name;
		return (
			<div className="App">
				{/* <h2>{text}</h2> */}
				{/* <Forms /> */}
				<TravelForm />
			</div>
		);
	}
}

export default App;
