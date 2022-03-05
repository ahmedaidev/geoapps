import React from 'react'

const Feature = ({ feature }) => {
  return (
    <div>
      <h3>{feature.properties.nome}</h3>

      {feature.properties.descrizion && (
        <h4>{feature.properties.descrizion}</h4>
      )}
    </div>
  )
}

export default Feature
