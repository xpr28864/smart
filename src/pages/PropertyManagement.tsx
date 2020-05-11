import React from 'react';
import { IonContent, IonHeader, IonPage, IonRow, IonCol, IonButton } from '@ionic/react';
import './PropertyManagement.css';

const PropertyManagement: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          
        </IonHeader>
        
        <IonRow>
            <IonCol>
              <IonButton routerLink="/createproperty" color="light" expand="block">Create Property</IonButton>
            </IonCol>
          </IonRow>
      </IonContent>
    </IonPage>
  );
};

export default PropertyManagement;