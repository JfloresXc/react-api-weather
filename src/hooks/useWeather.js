import { useEffect, useContext } from "react"
import { getWeather as getWeatherService } from "../services/getWeather"
import { Context as WeatherContext } from "../context/WeatherContext"
import { Weather } from "../models/Weather"

export const useWeather = () => {
	const { weather, setWeather } = useContext(WeatherContext)

	useEffect(() => {
		return async () => {
			await getWeather({ city: "Lima" })
		}
	}, [])

	const getWeather = async ({ city }) => {
		const data = await getWeatherService({ city })
		setWeather({
			...new Weather(),
			...data,
		})
	}

	return { weather, setWeather, getWeather }
}
