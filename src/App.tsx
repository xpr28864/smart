import React from 'react';
import { Redirect, Route, Router } from 'react-router-dom';
import {
  IonApp,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';
import Buy from './pages/Buy';
import Rent from './pages/Rent';
import TransactionRecord from './pages/TransactionRecord';
import Register from './pages/Register';
import Login from './pages/Login';
import PropertyManagement from './pages/PropertyManagement';
import CreateProperty from './pages/CreateProperty';
import axios from 'axios';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

const App: React.FC = () => {
  
  var isLogIn = false;
  var notLogIn = true;
  const token = localStorage.getItem('token');
  // console.log(token);
  // console.log(localStorage.getItem('token'));
  
  if (localStorage.getItem('token') != null){
      isLogIn = true;
      notLogIn= false;     
  }

  const Logout =(token) => {
    axios({
      url: 'http://127.0.0.1:8000/api/auth/logout',
      method: 'get', 
      headers: { 
        'Authorization': `Bearer ${token}` }
    })
    isLogIn = false;
    notLogIn= true;
    localStorage.removeItem('token');
    window.location.replace("http://localhost:8100/home")
  }
  
  return(
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route path="/home" component={Home} exact={true} />
          <Route path="/rent" component={Rent} exact={true} />
          <Route path="/buy" component={Buy} exact={true} />
          <Route path="/transactionrecord" component={TransactionRecord} exact={true} />
          <Route path="/login" component={Login} exact={true} />
          <Route path="/register" component={Register} exact={true} />
          <Route path="/propertymanagement" component={PropertyManagement} exact={true} />
          <Route path="/createproperty" component={CreateProperty} exact={true} />
          <Route path="/" render={() => <Redirect to="/home" />} exact={true} />
        </IonRouterOutlet>
        
        <IonTabBar slot="top">
          <IonTabButton tab="home" href="/home">
            <IonLabel>Home</IonLabel>
          </IonTabButton>
          <IonTabButton tab="rent" href="/rent">
            <IonLabel>Rent</IonLabel>
          </IonTabButton>
          <IonTabButton tab="buy" href="/buy">
            <IonLabel>Buy</IonLabel>
          </IonTabButton>
          <IonTabButton tab="transactionrecord" href="/transactionrecord">
            <IonLabel>Transaction Record</IonLabel>
          </IonTabButton>
          {notLogIn && 
          <IonTabButton tab="login" href="/login">
            <IonLabel>Login</IonLabel>
          </IonTabButton>
          } 
          {isLogIn && 
          <IonTabButton tab="login" href="/propertymanagement">
            <IonLabel>Property Management</IonLabel>
          </IonTabButton>
          }
          {notLogIn &&
          <IonTabButton tab="register" href="/register">
            <IonLabel>Register</IonLabel>
          </IonTabButton>
          }
          {isLogIn &&
          <IonTabButton onClick={()=> Logout(token)}>
            <IonLabel>Logout</IonLabel>
          </IonTabButton>
          }
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
  );
};

export default App;
