import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
	return (
		<div className="WeatherInfo">
			<h1 className="city">{props.data.city}</h1>
			<div className="row main-info">
				<div className="col-6 text-capitalize">{props.data.description}</div>
				<div className="col-6">
					<FormattedDate date={props.data.time} />
				</div>
			</div>
			<div className="row">
				<div className="col-6">
					<img
						src={props.data.icon}
						alt={props.data.description}
						className="fa-bounce"
					/>
					<WeatherTemperature celsius={props.data.temperature} />
				</div>
				<div className="col-6">
					<ul>
						<li>Pressure: {props.data.pressure} Pa</li>
						<li>Humidity: {props.data.humidity}%</li>
						<li>Wind: {Math.round(props.data.wind)} km/h</li>
					</ul>
				</div>
			</div>
		</div>
	);
}
