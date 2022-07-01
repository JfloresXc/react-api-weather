import React, { useState } from "react"
import { Weather } from "../models/Weather"

export const Context = React.createContext({})

export default function WeatherContext({ children }) {
	const [weather, setWeather] = useState(new Weather())

	return (
		<Context.Provider value={{ weather, setWeather }}>
			{children}
		</Context.Provider>
	)
}
