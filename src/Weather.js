import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";

export default function Weather(props) {
	const [weatherData, setWeatherData] = useState({ ready: false });
	const [city, setCity] = useState(props.defaultCity);
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
			icon: `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${response.data.condition.icon}.png`,
			time: new Date(response.data.time * 1000),
		});
	}

	function search() {
		const apiKey = "a154t009dab783b7d49f8ebbo3e6ef4e";
		let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
		axios.get(apiUrl).then(handleResponse);
	}

	function handleSubmit(event) {
		event.preventDefault();
		search();
	}

	function handleCityChange(event) {
		setCity(event.target.value);
	}

	if (weatherData.ready) {
		return (
			<div className="Weather">
				<form onSubmit={handleSubmit}>
					<div className="row">
						<div className="col-8 search">
							<input
								type="search"
								placeholder="Search city..."
								className="form-control"
								autoFocus="on"
								onChange={handleCityChange}
							/>{" "}
						</div>
						<div className="col-4 search-b">
							<input type="submit" value="Search" className="w-40 search-btn" />
						</div>
					</div>
				</form>
				<WeatherInfo data={weatherData} />
			</div>
		);
	} else {
		search();
		return "Loading...";
	}
}
