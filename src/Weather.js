import React from "react";
import "./Weather.css";

export default function Weather() {
	return (
		<div className="Weather">
			<form>
				<div className="row">
					<div className="col-9">
						<input
							type="search"
							placeholder="Search city..."
							className="form-control"
						/>{" "}
					</div>
					<div className="col-3">
						<input type="submit" value="Search" className="btn  btn-primary" />
					</div>
				</div>
			</form>
			<h1>Lisbon</h1>
			<ul>
				<li>Saturday, 20:21</li>
				<li>Mostly Cloudy</li>
			</ul>
			<div className="row">
				<div className="col-6">
					<img src="https://ssl.gstatic.com/onebox/weather/64/rain.png" /> 6°C
				</div>
				<div className="col-6">
					<ul>
						<li>Precipitation: 15%</li>
						<li>Humadity: 57%</li>
						<li>Wind: 13km/h</li>
					</ul>
				</div>
			</div>
		</div>
	);
}
