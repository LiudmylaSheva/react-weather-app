import "./App.css";
import Weather from "./Weather";

function App() {
	return (
		<div className="App container">
			<h1 className="title">
				The weather application for your daily routine{" "}
				<i class="fa-solid fa-hurricane fa-spin"></i>
			</h1>
			<Weather />
			<footer>
				{" "}
				Created by Shevadutska Liudmyla and this project is{" "}
				<a href="https://github.com/LiudmylaSheva/react-weather-app">
					open-sourced
				</a>{" "}
			</footer>
		</div>
	);
}

export default App;
