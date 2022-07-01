export class Weather {
	constructor() {
		this.city = "Not city"
		this.cloudsAmount = 0
		this.humidity = 0
		this.windSpeed = 0
		this.pressure = 0
		this.lat = 0
		this.lon = 0
		this.tempeture = 0
		this.tempetureMax = 0
		this.tempetureMin = 0
		this.description = ""
		this.date = new Date().toLocaleDateString("es", {
			weekday: "long",
			month: "long",
			day: "numeric",
		})
	}
}
