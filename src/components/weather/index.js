import React from "react"
import Features from "../features"
import { useWeather } from "../../hooks/useWeather"
import "./index.css"

export default function Weather() {
	const { weather } = useWeather()
	const {
		city,
		cloudsAmount,
		humidity,
		date,
		lon,
		pressure,
		windSpeed,
		tempeture,
		tempetureMax,
		tempetureMin,
		description,
	} = weather

	const features = [
		{
			title: "Sensación térmica",
			description: tempeture + "°C",
		},
		{
			title: "Humedad",
			description: humidity + "%",
		},
		{
			title: "Viento",
			description: windSpeed + "km/h",
		},
		{
			title: "Presión",
			description: pressure + "hPa",
		},
		{
			title: "Cantidad de nubes",
			description: cloudsAmount,
		},
		{
			title: "Longitud",
			description: lon,
		},
	]

	const medits = [
		{
			title: "Kelvin",
			description: `${(tempeture + 273.15).toFixed(2)} K`,
		},
		{
			title: "Fahrenheit",
			description: `${((tempeture * 9) / 5 + 32).toFixed(2)} °F`,
		},
		{
			title: "Rankine",
			description: `${((tempeture * 9) / 5 + 491.67).toFixed(2)} °F`,
		},
	]

	return (
		<div className="weather">
			<div className="weather__header">
				<h1 className="weather__country">
					{`${city}`.toUpperCase()}
				</h1>
			</div>
			<div className="weather__body">
				<div className="weather__temperature">
					<p className="weather__temperature-number">
						{tempeture}
					</p>
					<p className="weather__temperature-grade">°C</p>
					<p className="weather__temperature-description">
						{description}
					</p>
					<p className="weather__date">{date}</p>
					<p className="weather__temperature-maxmin">
						{tempetureMax + "°C / " + tempetureMin + "°C"}
					</p>
				</div>
			</div>
			<div className="weather__separator"></div>
			<div className="weather__footer">
				<h3 className="weather__footer-title">
					Detalles del tiempo
				</h3>
				<Features features={features} />
			</div>
			<div className="weather__separator"></div>
			<div className="weather__temperatures">
				<h3 className="weather__footer-title">
					Conversiones de temperatura
				</h3>
				<div className="weather__medits">
					<Features features={medits} />
				</div>
			</div>
		</div>
	)
}
