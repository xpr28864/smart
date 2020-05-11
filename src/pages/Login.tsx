import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonRow, IonCol, IonButton, IonList, IonInput, IonItem, IonLabel, IonText } from '@ionic/react';
import './Login.css';
import axios from 'axios';


const Login: React.FC = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [onClick, setonClick] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [emailpasswordError, setEmailPasswordError] = useState(false);
  
  const sendLoginRequest = async (email,password) =>{
    setonClick(true);
    setEmailError(false);
    setPasswordError(false);
    setEmailPasswordError(false);
    if (!email || !password){
      if(!email) {
        setEmailError(true);
      }
      if(!password) {
        setPasswordError(true);
      }
    }
    else await axios({
    url: 'http://127.0.0.1:8000/api/auth/login',
    method: 'post', 
    data: {
      email: email,
      password: password
    }
  }).then(response => {
    console.log(response);
    localStorage.setItem("token",response.data.access_token);
    if (response.status == 200){
      window.location.href="/home";
    } 
  })
  .catch(error =>{ 
    console.log(emailpasswordError);
    console.log(error)    
    setonClick(true);
    setEmailPasswordError(true);
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
            {onClick && emailpasswordError && <IonText color="danger">
              <p className="ion-padding-start">
                Incorrect email or password
              </p>
            </IonText>}
          </IonList>
          <IonRow>
            <IonCol>
              <IonButton onClick={()=> sendLoginRequest(email,password)} expand="block">Login</IonButton>
            </IonCol>
            <IonCol>
              <IonButton routerLink="/register" color="light" expand="block">Register</IonButton>
            </IonCol>
          </IonRow>
      </IonContent>
    </IonPage>
    
  );    
};

export default Login;