import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import FormattedDate from "./FormattedDate";

export default function Weather() {
	const [weatherData, setWeatherData] = useState({ ready: false });
	function handleResponse(response) {
		console.log(response.data);
		setWeatherData({
			ready: true,
			temperature: response.data.temperature.current,
			wind: response.data.wind.speed,
			humidity: response.data.temperature.humidity,
			pressure: response.data.temperature.pressure,
			city: response.data.city,
			description: response.data.condition.description,
			icon: "http://shecodes-assets.s3.amazonaws.com/api/weather/icons/snow-night.png",
			time: new Date(response.data.time * 1000),
		});
	}

	if (weatherData.ready) {
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
								className="btn  btn-primary w-40"
							/>
						</div>
					</div>
				</form>
				<h1 className="city">{weatherData.city}</h1>
				<div className="row main-info">
					<div className="col-6 text-capitalize">{weatherData.description}</div>
					<div className="col-6">
						<FormattedDate date={weatherData.time} />
					</div>
				</div>
				<div className="row">
					<div className="col-6">
						<img
							src={weatherData.icon}
							alt={weatherData.description}
							className="fa-bounce"
						/>{" "}
						<span className="temperature">
							{" "}
							{Math.round(weatherData.temperature)}
						</span>
						<span className="unit">°C</span>
					</div>
					<div className="col-6">
						<ul>
							<li>Pressure: {weatherData.pressure} Pa</li>
							<li>Humidity: {weatherData.humidity}%</li>
							<li>Wind: {Math.round(weatherData.wind)} km/h</li>
						</ul>
					</div>
				</div>
			</div>
		);
	} else {
		const apiKey = "a154t009dab783b7d49f8ebbo3e6ef4e";
		let city = "London";
		let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
		axios.get(apiUrl).then(handleResponse);

		return "Loading...";
	}
}
