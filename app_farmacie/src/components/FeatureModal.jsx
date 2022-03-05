import React from 'react'
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonLabel,
  IonList,
  IonItem,
  IonIcon,
  IonNote,
} from '@ionic/react'
import { medkitOutline, leafOutline } from 'ionicons/icons'

const categoryConfig = {
  parco: {
    icon: leafOutline,
    color: 'success',
  },
  farmacia: {
    icon: medkitOutline,
    color: 'danger',
  },
}

const FeatureModal = ({ feature }) => {
  return (
    <IonContent>
      <IonHeader>
        <IonToolbar>
          <IonItem>
            <IonTitle>{feature.properties.denominazi}</IonTitle>
            <IonIcon
              color={categoryConfig['farmacia'].color}
              icon={categoryConfig['farmacia'].icon}
              slot="end"
            />
          </IonItem>
        </IonToolbar>
      </IonHeader>
      <IonList>
        <IonItem>
          <IonNote slot="start" color="primary">
            Indirizzo
          </IonNote>
          <IonLabel className="ion-text-wrap">
            {feature.properties.indirizzo}
          </IonLabel>
        </IonItem>
        <IonItem>
          <IonNote slot="start" color="primary">
            Quartiere
          </IonNote>
          <IonLabel>{feature.properties.quartiere}</IonLabel>
        </IonItem>
        <IonItem>
          <IonNote slot="start" color="primary">
            Circosc.
          </IonNote>
          <IonLabel>{feature.properties.circoscriz}</IonLabel>
        </IonItem>
      </IonList>
    </IonContent>
  )
}

export default FeatureModal
