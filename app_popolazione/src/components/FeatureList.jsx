import React, { useEffect } from 'react'
import { Popup, Polygon, useMap } from 'react-leaflet'
import Feature from './Feature'
import { connect } from 'react-redux'
import { fetchFeatures } from '../redux/actions'

const FeatureList = ({ fetchFeatures, features }) => {
  useEffect(() => {
    fetchFeatures()
  }, [fetchFeatures])

  const map = useMap()
  const onClick = e => {
    map.flyTo([e.latlng.lat, e.latlng.lng])
  }

  return (
    <div>
      {features.length > 0 &&
        features.map(feature => (
          <Polygon
            key={feature.id}
            positions={feature.geometry.coordinates[0]}
            color={scegliColore(feature)}
            eventHandlers={{ click: onClick }}
          >
            <Popup>
              <Feature feature={feature} />
            </Popup>
          </Polygon>
        ))}
    </div>
  )
}

function scegliColore(featureColor) {
  const min = 15000
  const max = 60000
  const x = parseInt(featureColor.properties.residenti)
  const color = 255 - ((x - min) / (max - min)) * 150
  return 'rgb(0,' + parseInt(color).toString() + ',0)'
}

const mapStateToProps = state => ({
  features: Object.values(state.feature.features),
})

const mapDispatchToProps = {
  fetchFeatures,
}

export default connect(mapStateToProps, mapDispatchToProps)(FeatureList)
