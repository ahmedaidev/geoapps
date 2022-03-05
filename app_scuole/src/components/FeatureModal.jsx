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

import {
  medkitOutline,
  leafOutline,
  flagOutline,
  schoolOutline,
  golfOutline,
  storefrontOutline,
} from 'ionicons/icons'

const categoryConfig = {
  parco: {
    icon: leafOutline,
    color: 'success',
  },
  farmacia: {
    icon: medkitOutline,
    color: 'danger',
  },
  bandierina: {
    icon: flagOutline,
    color: 'success',
  },
  scuola: {
    icon: schoolOutline,
    color: 'success',
  },
  negozio: {
    icon: storefrontOutline,
    color: 'success',
  },
  bandierina2: {
    icon: golfOutline,
    color: 'success',
  },
}

export const LocationModal = ({ feature }) => {
  return (
    <IonContent>
      <IonHeader>
        <IonToolbar>
          <IonItem>
            <IonTitle>{feature.properties.nome_scuol}</IonTitle>
            <IonIcon
              color={categoryConfig['scuola'].color}
              icon={categoryConfig['scuola'].icon}
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
            Grado
          </IonNote>
          <IonLabel>{feature.properties.grado}</IonLabel>
        </IonItem>
        <IonItem>
          <IonNote slot="start" color="primary">
            Tipo serv.
          </IonNote>
          <IonLabel>{feature.properties.tipo_servi}</IonLabel>
        </IonItem>
        <IonItem>
          <IonNote slot="start" color="primary">
            Tipologia
          </IonNote>
          <IonLabel>{feature.properties.tipologia}</IonLabel>
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

export default LocationModal
