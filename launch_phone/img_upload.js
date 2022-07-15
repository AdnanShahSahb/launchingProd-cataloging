  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBFaU1oIptFGVNMgm1NYuV8-95_rXa8MKY",
    authDomain: "prodform-10f24.firebaseapp.com",
    databaseURL: "https://prodform-10f24-default-rtdb.firebaseio.com",
    projectId: "prodform-10f24",
    storageBucket: "prodform-10f24.appspot.com",
    messagingSenderId: "1088253126655",
    appId: "1:1088253126655:web:b526bcbfd91ff5088729ca"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

import {getStorage, ref as sRef ,uploadBytesResumable, getDownloadURL}
from "https://www.gstatic.com/firebasejs/9.6.7/firebase-storage.js"

import {getDatabase, ref, set}
from "https://www.gstatic.com/firebasejs/9.6.7/firebase-database.js"
const thedb=getDatabase();

import{Pname}
from "./data_upload.js"

const fileInput = document.getElementById('input_image');
var ImgToUpload;
export async function UploadProcess(){
                
// const fileInput = document.getElementById('input_image');   already defined u know------------------------------------



//---------------upload file to storage -----------------------------------------------//
     ImgToUpload= fileInput.files[0];
    

    // window.ImgToUpload=fileInput.files[0];
    
    const storage = getStorage();

    const StorageRef = sRef(storage,"image/"+Pname.value);

    // console.log(StorageRef);
    console.log(Pname.value);

    const UploadTask = uploadBytesResumable(StorageRef,ImgToUpload).then((snapshot)=>{

      getDownloadURL(StorageRef).then((dwnldURL)=>{
        link_to_database(dwnldURL);
      });

    });


    // console.log(UploadTask);


}


//---------------upload link to database -----------------------------------------------//


 function link_to_database(_URL){



  console.log(ImgToUpload)


  var ImgTo_Upload=ImgToUpload.name;

  var imgname_withoutExt=ImgTo_Upload.split('.')[0];



  set(ref(thedb,"images_WithLinks/"+imgname_withoutExt),{   //

    imgNAME: imgname_withoutExt,
    imgURL: _URL
  
  });

} 


