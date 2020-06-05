import * as firebase from 'firebase';
var config = {
    apiKey: "AIzaSyCT8fVT-jiEdvevwKnadVBngmO1PDJDFpA",
    authDomain: "instaphoto-3cb64.firebaseapp.com",
    databaseURL: "https://instaphoto-3cb64.firebaseio.com",
    projectId: "instaphoto-3cb64",
    storageBucket: "instaphoto-3cb64.appspot.com",
    messagingSenderId: "616780908000",
    appId: "1:616780908000:web:f1b9a082fb0675db685785",
    measurementId: "G-G7CR6Y1DVH"
  };

  firebase.initializeApp(config);
  const database = firebase.database();

  export {database};