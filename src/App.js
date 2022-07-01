import Form from "./components/form"
import Weather from "./components/weather"
import WeatherContext from "./context/WeatherContext"
import "./App.css"

function App() {
	return (
		<WeatherContext>
			<div className="App">
				<div className="App__content">
					<Form />
					<Weather />
				</div>
			</div>
		</WeatherContext>
	)
}

export default App
