import * as firebase from "firebase/app";
import "firebase/messaging";

firebase.initializeApp({
  apiKey: "AIzaSyAhpWM_EzGQDPvrDXNETW0d-73Gd_hM3dM",
  authDomain: "react-sec01-007.firebaseapp.com",
  projectId: "react-sec01-007",
  storageBucket: "react-sec01-007.appspot.com",
  messagingSenderId: "441135600049",
  appId: "1:441135600049:web:32d9210d415a308204ad90"
});

let messaging = firebase.messaging();

messaging.onMessage(function (payload) {
  try {  //try???
    console.log('Message received. ', payload);

    const noteTitle = payload.notification.title;
    const noteOptions = {
      body: payload.notification.body,
      icon: "typewriter.jpg", //this is my image in my public folder
    };

    console.log("title ", noteTitle, " ", payload.notification.body);
    //var notification = //examples include this, seems not needed

    new Notification(noteTitle, noteOptions).onclick = function (event) {
      // console.log(event);
      // console.log(payload.notification.click_action);
      if(payload && payload.notification &&  payload.notification.click_action &&  payload.notification.click_action.length > 0)
      {
        window.open(payload.notification.click_action, '_blank');
      }
      this.close();
    };
  }
  catch (err) {
    console.log('Caught error: ', err);
  }
});

messaging.usePublicVapidKey(
  "BDAYjz5iTiUcWabu-zYcFcmz-G_GCAAO6L-FHakqtAxFBnfjXDT8x-As7ZfJF7dJEzuvY4bcSGkcwoX72KypUrY"
);

export { messaging };
