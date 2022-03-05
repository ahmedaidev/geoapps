import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Marker, Popup, useMap } from 'react-leaflet'
import MarkerClusterGroup from 'react-leaflet-markercluster'
import _ from 'lodash'
import L from 'leaflet'
import farmacia from '../assets/icons/locations/farmacia.svg'
import { fetchFeatures } from '../redux/actions'

import Feature from './Feature'

const farmaciaIcon = L.icon({
  iconUrl: farmacia,
  iconSize: [25, 25],
})

const FeatureList = ({ fetchFeatures, features }) => {
  useEffect(() => {
    fetchFeatures()
  }, [fetchFeatures])

  const map = useMap()
  const onClick = e => {
    map.flyTo([e.latlng.lat, e.latlng.lng])
  }

  return (
    <MarkerClusterGroup>
      {features.length > 0 &&
        features.map(feature => (
          <Marker
            key={feature.id}
            position={_.reverse(feature.geometry.coordinates)}
            icon={farmaciaIcon}
            eventHandlers={{ click: onClick }}
          >
            <Popup>
              <Feature feature={feature} />
            </Popup>
          </Marker>
        ))}
    </MarkerClusterGroup>
  )
}

const mapStateToProps = state => ({
  features: Object.values(state.feature.features),
})

const mapDispatchToProps = {
  fetchFeatures,
}

export default connect(mapStateToProps, mapDispatchToProps)(FeatureList)
