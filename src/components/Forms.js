import React from "react";

{
	/* Formik: Library to maintain the forms in React */
}
class Forms extends React.Component {
	constructor() {
		super();

		this.state = {
			firstName: "",
			lastName: "",
			isFriendly: false,
			gender: "",
			favColor: "blue",
		};

		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		const { name, value, type, checked } = event.target; // Object destructuring
		type === "checkbox"
			? this.setState({ [name]: checked })
			: this.setState({
					[name]: value,
			  });
	}

	render() {
		return (
			<div>
				<h2>Form</h2>
				<form>
					<input
						name="firstName"
						type="text"
						value={this.state.firstName} // Always, so that is perfectly matches the current state
						placeholder="First Name"
						onChange={this.handleChange}
					/>
					<br />
					<br />
					<input
						name="lastName"
						type="text"
						value={this.state.lastName}
						placeholder="Second Name"
						onChange={this.handleChange}
					/>
					<p>
						{this.state.firstName} {this.state.lastName}
					</p>

					<textarea value={"Some default text"} />
					<br />
					<label>
						<input
							type="checkbox"
							name="isFriendly"
							checked={this.state.isFriendly}
							onChange={this.handleChange}
						/>
						is Friendly?
					</label>
					<br />
					<br />
					<label>Gender :</label>
					<br />
					<label>
						<input
							type="radio"
							name="gender"
							value="male"
							checked={this.state.gender === "male"}
							onChange={this.handleChange}
						/>
						Male
					</label>
					<br />
					<label>
						<input
							type="radio"
							name="gender"
							value="female"
							checked={this.state.gender === "female"}
							onChange={this.handleChange}
						/>
						Female
					</label>
					<br />
					<br />
					<label>Favourite Color :</label>
					<select
						name="favColor"
						value={this.state.favColor}
						onChange={this.handleChange}
					>
						<option value="blue">Blue</option>
						<option value="green">Green</option>
						<option value="red">Red</option>
						<option value="yellow">Yellow</option>
					</select>
					<p>Your favourite color is {this.state.favColor}</p>
				</form>
			</div>
		);
	}
}

export default Forms;
