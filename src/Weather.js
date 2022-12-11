import React from "react";
import "./Weather.css";

export default function Weather() {
	return (
		<div className="Weather">
			<form>
				<div className="row">
					<div className="col-8 search">
						<input
							type="search"
							placeholder="Search city..."
							className="form-control"
							autoFocus="on"
						/>{" "}
					</div>
					<div className="col-4 search-b">
						<input
							type="submit"
							value="Search"
							className="btn  btn-primary w-50"
						/>
					</div>
				</div>
			</form>
			<h1 className="city">Lisbon</h1>
			<div className="row main-info">
				<div className="col-6">Mostly Cloudy</div>
				<div className="col-6">Saturday, 20:21</div>
			</div>
			<div className="row">
				<div className="col-6">
					<img src="https://ssl.gstatic.com/onebox/weather/64/rain.png" />{" "}
					<span className="temperature"> 6</span>
					<span className="unit">°C</span>
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
