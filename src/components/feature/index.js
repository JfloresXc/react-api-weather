import React from "react"
import "./index.css"

export default function Feature({
	title = "Not title",
	description = "Not description",
}) {
	return (
		<div className="feature">
			<p className="feature__title">{title}</p>
			<p className="feature__description">{description}</p>
		</div>
	)
}
