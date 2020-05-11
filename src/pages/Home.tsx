import React from 'react';
import { IonContent, IonHeader, IonPage, withIonLifeCycle,IonButton } from '@ionic/react';
import './Home.css';
import { Viewer } from 'photo-sphere-viewer';
import './photo-sphere-viewer.css';
import 'photo-sphere-viewer/dist/photo-sphere-viewer.css';
import { findAllByDisplayValue } from '@testing-library/react';
// import {RicohView} from 'ricoh-theta-viewer';




// this.ricohView = new RicohView({
//   id: "ricoh-360-viewer", 
//   file: 'assets/example.jpeg', 
//   rendererType: 0, 
//   // height: window.innerHeight + '10px', 
//   // width: window.innerWidth + '10px', 
//   zoom: 130 
// });
const Home: React.FC = () => {
//class Home extends React.Component {
  //ionViewDidEnter(){
    //const div = document.getElementById('#viewer')
    console.log(document.getElementById('#viewer')) 
    const PSV = new Viewer({
      container: document.querySelector('#viewer'),
      //container: 'viewer',
      //container: div,
      panorama: 'https://photo-sphere-viewer.js.org/assets/Bryce-Canyon-National-Park-Mark-Doliner.jpg',
      size:{
        width:'500px',
        height:'300px'
      },
      //panorama: '/assets/example.jpeg',
      // height: "300px",
      // width: "150px"
    });
    
  //}  
  
  //render(){
  return (
    <IonPage>
      <IonHeader>
        
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
        </IonHeader>
          {/* <div>
          <iframe width='600px' height='350px' frameBorder='0'
          src="https://momento360.com/e/u/596fcf379c62496bb7fcfe13c786e902?utm_campaign=embed&utm_source=other&heading=481.9296161338961&pitch=3.8877593594772537&field-of-view=75">
          </iframe> 
          </div> */}
          {/* <img src="assets/example.jpeg"></img>
          <img src="example.jpeg"></img> */}
          <div id="viewer"></div>
          {/* <IonButton onClick={()=> viewer} expand="block">
          </IonButton> */}
      </IonContent>
    </IonPage>
  );
};
//}

//export default withIonLifeCycle (Home);
export default Home;
