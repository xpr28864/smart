import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonRow, IonCol, IonButton, IonList, IonInput, IonItem, IonLabel, IonSelect, IonSelectOption } from '@ionic/react';
import './CreateProperty.css';
import axios from 'axios';
// import { FileChooser } from '@ionic-native/file-chooser/ngx';
// import { fileURLToPath } from 'url';
// import {FilePath} from '@ionic-native/file-path/ngx'
// import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
// import { File } from '@ionic-native/file';
// interface Iprops{

// }
// interface IState{
//   image:null;
// }
// class uploadfile {
//   constructor(private transfer: FileTransfer, private file: File) { }
  
// }
// const fileTransfer: FileTransferObject = this.transfer.create();
// class uploadfile{
//   constructor(private fileChooser: FileChooser) { }
//   upload(){
//   this.fileChooser.open()
//   .then(uri => 
//     this.filePath.resolveNativePath;
//     console.log(uri))
//   .catch(error => console.log(error));
//   }
  
// }


// class uploadfile extends React.Component<Iprops, IState>{
//   constructor(props:Iprops){
//     super(props);
//     this.state={
//       image:null
//     }
//     onchange = event =>{
//       this.setState({
//         image:event.target.file[0],
//         loaded:0
//       })
//     }
//   }
// }


const CreateProperty: React.FC = () => {
    const [property_name, setProperty_name] = useState('');
    const [transaction_type, setTransaction_type] = useState('');
    const [property_type, setProperty_type] = useState('');
    const [property_size, setProperty_size] = useState('');
    const [price, setPrice] = useState('');
    const [region, setRegion] = useState('');
    const [district, setDistrict] = useState('');
    const [address, setAddress] = useState('');
    //const [image, setImage] = useState('');
    const token = localStorage.getItem('token');
    //let file = (<Element>document.getElementById('Upload')).files[0];
    
    // const Upload = e => {
    //   //const file = document.querySelector('input[type=file]').files[0];
    //   if (window.FileReader){
        //var image = e.target.file[0];
        //var reader = new FileReader();
        // if (image && image.type.match('image.*')){
        //   reader.readAsDataURL(image);
        //   console.log('hi')
        // }
        // if (e.length >1){
        //   for (var i=0; i<e.length[i]; i++){
        //     setImage(e.target.files[0]);
        //     console.log('image:',image);
        //     console.log(e.target.files[0]);
        //   }
        // }
        // else{
        //   setImage(e.target.files[0]);
        //   console.log('image:',image);
        //   console.log(setImage)
        //   //console.log(e.length)
        //   console.log(e.target.files[0]);
        // }
        
        
        // for (var i=0; i<image.length; i++ ){
        //   console.log(image[i])
        // }
        //   console.log(image[0])
        //   console.log(image[1])
        //return false;
      //}

      //let image = e;
      // let file = document.querySelector('input[type=file]');
      // const reader = new FileReader();
      // reader.addEventListener("load",function(){
      // })
      // if (image){
      //   reader.readAsDataURL(image);
      //   console.log('hi')
    //   }
    // };
    
    
    const  sendCreateRequest = async (token, property_name, transaction_type, property_type, property_size, price, region, district, address) => {
    //const  sendCreateRequest = async (image,token, property_name, transaction_type, property_type, property_size, price, region, district, address) => {
        //console.log(token);
        //let photo = new FileReader

        await axios({
            url: 'http://127.0.0.1:8000/api/auth/create',
            method: 'post', 
            headers: { 'Authorization': `Bearer ${token}` },
            data: {
                //image:image,
                property_name: property_name,
                transaction_type: transaction_type,
                property_type: property_type,
                property_size: property_size,
                price: price,
                region: region,
                district: district,
                address: address,
            } 
        })
        // .then(response => {
        //     console.log(response);
        // })
        
    }
  
  return (
    <IonPage>
      <IonHeader>
        
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          
        </IonHeader>
        <IonList>
            <IonItem>
              <IonLabel position="stacked">Property Name</IonLabel>
              <IonInput type="text" value={property_name} placeholder="" onIonChange={e => setProperty_name(e.detail.value!)}></IonInput>
            </IonItem>
            <IonItem>
              <IonLabel position="stacked">Transaction Type</IonLabel>
              <IonInput type="text" value={transaction_type} placeholder="" onIonChange={e => setTransaction_type(e.detail.value!)}></IonInput>
            </IonItem>
            <IonItem>
            <IonLabel>Property Type</IonLabel>
            <IonSelect value={property_type} placeholder="Select One" onIonChange={e => setProperty_type(e.detail.value)}>
              <IonSelectOption value="Sale">Sale</IonSelectOption>
              <IonSelectOption value="Rent">Rent</IonSelectOption>
            </IonSelect>
            </IonItem>
            <IonItem>
              <IonLabel position="stacked">Property Size</IonLabel>
              <IonInput type="number" value={property_size} placeholder="" onIonChange={e => setProperty_size(e.detail.value!)}></IonInput>
            </IonItem>
            <IonItem>
              <IonLabel position="stacked">Price</IonLabel>
              <IonInput type="number" value={price} placeholder="" onIonChange={e => setPrice(e.detail.value!)}></IonInput>
            </IonItem>
            <IonItem>
            <IonLabel>Region</IonLabel>
            <IonSelect value={region} placeholder="Select One" onIonChange={e => setRegion(e.detail.value)}>
              <IonSelectOption value="New Territories">New Territories</IonSelectOption>
              <IonSelectOption value="Kowloon">Kowloon</IonSelectOption>
              <IonSelectOption value="Hong Kong Island">Hong Kong Island</IonSelectOption>
            </IonSelect>
            </IonItem>
            <IonItem>
            <IonLabel>District</IonLabel>
            <IonSelect value={district} placeholder="Select One" onIonChange={e => setDistrict(e.detail.value)}>
              <IonSelectOption value="Islands">Islands</IonSelectOption>
              <IonSelectOption value="Kwai Tsing">Kwai Tsing</IonSelectOption>
              <IonSelectOption value="North">North</IonSelectOption>
              <IonSelectOption value="Sai Kung">Sai Kung</IonSelectOption>
              <IonSelectOption value="Sha Tin">Sha Tin</IonSelectOption>
              <IonSelectOption value="Tai Po">Tai Po</IonSelectOption>
              <IonSelectOption value="Tsuen Wan">Tsuen Wan</IonSelectOption>
              <IonSelectOption value="Tuen Mun">Tuen Mun</IonSelectOption>
              <IonSelectOption value="Yuen Long">Yuen Long</IonSelectOption>
              <IonSelectOption value="Sham Shui Po">Sham Shui Po</IonSelectOption>
              <IonSelectOption value="Kowloon City">Kowloon City</IonSelectOption>
              <IonSelectOption value="Kwun Tong">Kwun Tong</IonSelectOption>
              <IonSelectOption value="Wong Tai Sin">Wong Tai Sin</IonSelectOption>
              <IonSelectOption value="Yau Tsim Mong">Yau Tsim Mong</IonSelectOption>
              <IonSelectOption value="Central and Western">Central and Western</IonSelectOption>
              <IonSelectOption value="Eastern">Eastern</IonSelectOption>
              <IonSelectOption value="Southern">Southern</IonSelectOption>
              <IonSelectOption value="Wan Chai">Wan Chai</IonSelectOption>
            </IonSelect>
            </IonItem>
            <IonItem>
              <IonLabel position="stacked">Address</IonLabel>
              <IonInput type="text" value={address} placeholder="" onIonChange={e => setAddress(e.detail.value!)}></IonInput>
            </IonItem>
        </IonList>
        {/* </IonContent><input type="file" onChange={e =>Upload(e)/> */}
        <IonRow>
            <IonCol>
              <IonButton onClick={()=> sendCreateRequest(token, property_name, transaction_type, property_type, property_size, price, region, district, address)} expand="block">Confirm</IonButton>
              {/* <IonButton onClick={()=> sendCreateRequest(image,token, property_name, transaction_type, property_type, property_size, price, region, district, address)} expand="block">Confirm</IonButton> */}
            </IonCol>
            <IonCol>
              <IonButton routerLink="/propertymanagement" color="light" expand="block">Return</IonButton>
            </IonCol>
          </IonRow>
      </IonContent>
    </IonPage>
  );
};

export default CreateProperty;
