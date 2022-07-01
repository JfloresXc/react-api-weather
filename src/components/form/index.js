import React, { useState } from "react"
import { useWeather } from "../../hooks/useWeather"
import "./index.css"

export default function Form() {
	const [city, setCity] = useState("")
	const { getWeather } = useWeather()

	const handleSubmit = async (event) => {
		event.preventDefault()
		await getWeather({ city })
	}

	const handleChange = (event) => {
		const { value } = event.target
		setCity(value)
	}

	return (
		<form className="form" onSubmit={handleSubmit}>
			<div className="form__group">
				<input
					type="text"
					className="form__input"
					name="city"
					placeholder="Ingresa una ciudad"
					onChange={handleChange}
				/>
			</div>

			<button className="form__button">Buscar</button>
		</form>
	)
}
