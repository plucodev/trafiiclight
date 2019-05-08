import React from "react";

export class TrafficLight extends React.Component {
	constructor() {
		super();
		this.state = {
			//your state properties here
			clicked: "red"
		};
	}
	render() {
		let newRedLightClass = "";
		let newYellowLightClass = "";
		let newGreenLightClass = "";

		if (this.state.clicked === "red") {
			newRedLightClass = "light-glow";
		} else if (this.state.clicked === "yellow") {
			newYellowLightClass = "light-glow";
		} else if (this.state.clicked === "green") {
			newGreenLightClass = "light-glow";
		}

		return (
			<div className="container">
				<div className="row justify-content-center align-items-center">
					<div className="col-lg-2 col-md-6 traffic-light-container mt-5 justify-content-center ">
						<div
							className={
								"traffic-light-red mb-1 col-12" +
								" " +
								newRedLightClass
							}
							onClick={() => this.setState({ clicked: "red" })}
						/>
						<div
							className={
								"traffic-light-yellow mb-1" +
								" " +
								newYellowLightClass
							}
							onClick={() => this.setState({ clicked: "yellow" })}
						/>
						<div
							className={
								"traffic-light-green" + " " + newGreenLightClass
							}
							onClick={() => this.setState({ clicked: "green" })}
						/>
					</div>
				</div>
			</div>

			//return your html here
		);
	}
}
