import React from "react"
import Feature from "../feature"
import "./index.css"

export default function Features({ features = [] }) {
	const featuresRendered = features.map((featureKey, index) => {
		return <Feature key={index} {...featureKey} />
	})
	return <div className="features">{featuresRendered}</div>
}
