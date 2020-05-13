import React, {useEffect} from 'react';
import { IonContent, IonHeader, IonPage } from '@ionic/react';
import './Home.css';
import { Viewer } from 'photo-sphere-viewer';
import 'photo-sphere-viewer/dist/photo-sphere-viewer.css';

const Home: React.FC = () => {
    useEffect(()=> {
        setTimeout(()=> {
            const viewer = new Viewer({
                container: document.getElementById('viewer'),
                panorama: '/assets/panorama.jpg'
            })
        }, 200);
    }, []);

    return (
        <IonPage>
            <IonHeader>

            </IonHeader>
            <IonContent>
                <IonHeader collapse="condense">
                </IonHeader>
                <div id="viewer"/>
            </IonContent>
        </IonPage>
    );
};
export default Home;
