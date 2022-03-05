import React from 'react'
import { connect } from 'react-redux'
import { IonButton } from '@ionic/react'
import { showLocationModal } from '../redux/actions'

const Feature = ({ feature, showLocationModal }) => {
  return (
    <div>
      <h3>{feature.properties.denominazi}</h3>

      <IonButton
        expand="block"
        fill="clear"
        color="primary"
        onClick={() => showLocationModal(feature)}
      >
        Info
      </IonButton>
    </div>
  )
}

const mapDispatchToProps = { showLocationModal }

export default connect(null, mapDispatchToProps)(Feature)
