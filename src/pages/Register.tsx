import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonRow, IonCol, IonButton, IonList, IonInput, IonItem, IonLabel, IonText } from '@ionic/react';
import './Register.css';
import axios from 'axios';

const Register: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [onClick, setonClick] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [inputError, setInputError] = useState(false);
  const [createSuccess, setCreateSuccess] = useState(false);

  const sendPostRequest = async (email,password) =>{
    setonClick(true);
    setEmailError(false);
    setPasswordError(false);
    setInputError(false);
    setCreateSuccess(false);
    if (!email || !password){
      if(!email) {
        setEmailError(true);
      }
      if(!password) {
        setPasswordError(true);
      }
    }
    else await axios({
      url: 'http://127.0.0.1:8000/api/auth/register',
      method: 'post', 
      data: {
        email: email,
        password: password
      }
    }).then(response => {
  
      console.log(response);
      if (response.status == 201){
        setonClick(true);
        setCreateSuccess(true);
      } 
    })
    .catch(error =>{ 
      console.log(setInputError);
      console.log(error)    
      setonClick(true);
      setInputError(true);
    })
  };

  return (
    <IonPage>
      <IonHeader>

      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">

        </IonHeader>
        <IonList>
            <IonItem>
              <IonLabel position="stacked">Email</IonLabel>
              <IonInput type="email" value={email} placeholder="" onIonChange={e => setEmail(e.detail.value!)}></IonInput>
            </IonItem>
            {onClick && emailError && <IonText color="danger">
              <p className="ion-padding-start">
                Email is required
              </p>
            </IonText>}
            <IonItem>
              <IonLabel position="stacked">Password</IonLabel>
              <IonInput type="password" value={password} placeholder="" onIonChange={e => setPassword(e.detail.value!)}></IonInput>
            </IonItem>
            {onClick && passwordError && <IonText color="danger">
              <p className="ion-padding-start">
                Password is required
              </p>
            </IonText>}
            {onClick && inputError && <IonText color="danger">
              <p className="ion-padding-start">
                Invalid Input or Email Used
              </p>
            </IonText>}
            {onClick && createSuccess && <IonText>
              <p className="ion-padding-start">
                Successfully create user!
              </p>
            </IonText>}
          </IonList>
          <IonRow>
            <IonCol>
              <IonButton onClick={()=> sendPostRequest(email,password)} expand="block">Register</IonButton>
            </IonCol>
            
          </IonRow>
      </IonContent>
    </IonPage>
  );
};

export default Register;
