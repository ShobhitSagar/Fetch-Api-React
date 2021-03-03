import React from "react";

class TravelForm extends React.Component {
	constructor() {
		super();

		this.state = {
			firstName: "",
			lastName: "",
			age: "",
			gender: "",
			loc: "",
			dietaryRes: {
				isVegan: false,
				isKosher: false,
				isLactoseFree: false,
			},
		};

		this.handleChange = this.handleChange.bind(this);
	}

	handleChange = (event) => {
		const { name, type, value, checked } = event.target;
		type === "checkbox"
			? this.setState((prev) => {
					return { dietaryRes: { ...prev.dietaryRes, [name]: checked } };
			  })
			: this.setState({
					[name]: value,
			  });
	};

	render() {
		return (
			<>
				<h3>Travel Form</h3>
				<label>
					Name :{" "}
					<input
						name="firstName"
						type="text"
						value={this.state.firstName}
						onChange={this.handleChange}
						placeholder="First Name"
					/>
					<input
						name="lastName"
						type="text"
						value={this.state.lastName}
						onChange={this.handleChange}
						placeholder="Last Name"
					/>
				</label>
				<br />
				<label>
					Age :{" "}
					<input
						type="number"
						name="age"
						value={this.state.age}
						placeholder="Age"
						onChange={this.handleChange}
					/>
				</label>
				<br />
				<br />
				<label>Gender : </label>
				<label>
					<input
						type="radio"
						name="gender"
						value="male"
						onChange={this.handleChange}
						checked={this.state.gender === "male"}
					/>
					Male
				</label>
				<label>
					<input
						type="radio"
						name="gender"
						value="female"
						onChange={this.handleChange}
						checked={this.state.gender === "female"}
					/>
					Female
				</label>
				<br />
				<br />
				<label>Location : </label>
				<select name="loc" onChange={this.handleChange} value={this.state.loc}>
					<option value="">-- CHOOSE --</option>
					<option value="ghaziabad">Ghaziabad</option>
					<option value="delhi">Delhi</option>
					<option value="noida">Noida</option>
				</select>
				<br />
				<label>Dietary Restrictions : </label>
				<br />
				<label>
					<input
						type="checkbox"
						name="isVegan"
						checked={this.state.dietaryRes.isVegan}
						onChange={this.handleChange}
					/>{" "}
					Vegan
				</label>
				<br />
				<label>
					<input
						type="checkbox"
						name="isKosher"
						checked={this.state.dietaryRes.isKosher}
						onChange={this.handleChange}
					/>{" "}
					Kosher
				</label>
				<br />
				<label>
					<input
						type="checkbox"
						name="isLactoseFree"
						checked={this.state.dietaryRes.isLactoseFree}
						onChange={this.handleChange}
					/>{" "}
					Lactose Free
				</label>
				<br />
				<button type="submit">Submit</button>
				<p>
					{this.state.firstName} {this.state.lastName} {this.state.age}{" "}
					{this.state.gender} {this.state.loc}{" "}
					{this.state.dietaryRes.isVegan ? "Vegan" : ""}
				</p>
			</>
		);
	}
}

export default TravelForm;
