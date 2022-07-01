const API_KEY = "dd4b013758430745bc5bc6a129a59094"

export const getWeather = async ({ city }) => {
	const URI = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=es`
	const response = await fetch(URI)
	const data = await response.json()
	const { clouds, main, wind, coord, weather } = data

	return {
		city,
		cloudsAmount: clouds.all,
		humidity: main.humidity,
		windSpeed: wind.speed,
		pressure: main.pressure,
		lat: coord.lat,
		lon: coord.lon,
		tempeture: main.temp,
		tempetureMax: main.temp_max,
		tempetureMin: main.temp_min,
		description: weather[0].description,
	}
}
