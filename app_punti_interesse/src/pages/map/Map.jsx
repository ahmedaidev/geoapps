import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonFooter,
  IonImg,
  IonFab,
  IonFabButton,
  IonIcon,
  IonProgressBar,
} from '@ionic/react'

import { MapContainer, TileLayer } from 'react-leaflet'

import classes from './Map.module.css'

import { Geolocation } from '@capacitor/geolocation'

import sponsor from '../../assets/img/sponsor.jpg'
import { locateSharp } from 'ionicons/icons'
import Toast from '../../components/Toast'
import FeatureList from '../../components/FeatureList'
import PositionMarker from '../../components/PositionMarker'
import Layers from '../../components/Layers'
import { setGps } from '../../redux/actions'

const Map = ({ map, loading, fetchError, setGps, dismissLocationModal }) => {
  const [showMap, setShowMap] = useState(false)
  const [gpsError, setGpsError] = useState('')

  useEffect(() => {
    if (showMap) return
    setTimeout(() => {
      setShowMap(true)
    }, 1000)
  }, [showMap])

  const getCurrentPosition = async () => {
    try {
      setGpsError('')
      const position = await Geolocation.getCurrentPosition()
      setGps([position.coords.latitude, position.coords.longitude])
    } catch (err) {
      setGpsError(err.message)
    }
  }

  const { center, zoom, position } = map

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Punti di interesse a Verona</IonTitle>
          {loading && <IonProgressBar type="indeterminate"></IonProgressBar>}
          {fetchError && (
            <Toast message="Failed to fetch data" color="danger" />
          )}
        </IonToolbar>
      </IonHeader>

      <IonContent id="content" fullscreen>
        {showMap && (
          <MapContainer
            className={classes.mapContainer}
            center={center}
            zoom={zoom}
          >
            <Layers />

            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {position.length > 0 && <PositionMarker coords={position} />}
            <FeatureList />
          </MapContainer>
        )}

        <IonFab vertical="bottom" horizontal="end" slot="fixed">
          <IonFabButton onClick={getCurrentPosition}>
            <IonIcon icon={locateSharp} />
          </IonFabButton>
        </IonFab>
        {gpsError && <Toast message={gpsError} color="danger" />}
      </IonContent>

      <IonFooter>
        <IonImg src={sponsor} style={{ maxWidth: '500px', margin: 'auto' }} />
      </IonFooter>
    </IonPage>
  )
}

const mapStateToProps = state => ({
  map: state.map,
  loading: state.feature.loading,
  fetchError: state.feature.error,
})

const mapDispatchToProps = { setGps }

export default connect(mapStateToProps, mapDispatchToProps)(Map)
