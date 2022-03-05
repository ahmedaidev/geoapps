import React from 'react'

const Feature = ({ feature }) => {
  return (
    <div>
      <h3>Zona {feature.properties.circoscriz}</h3>
      <h3>{feature.properties.residenti} abitanti</h3>
    </div>
  )
}

export default Feature
