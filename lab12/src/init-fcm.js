import * as firebase from "firebase/app";
import "firebase/messaging";

firebase.initializeApp({
  apiKey: "AIzaSyBSQrMJVy1fUwy8lgEdweFli9hEecW-zhg",
  authDomain: "sec01-4d47a.firebaseapp.com",
  projectId: "sec01-4d47a",
  storageBucket: "sec01-4d47a.appspot.com",
  messagingSenderId: "698778541799",
  appId: "1:698778541799:web:c81c04812965b2d9a00c42",
  measurementId: "G-X1W5598TDS"
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
  "BFK3YtGci2QkNBjoXxoMNBiA19SkTHpYkR3lcD1YMXQLfqDDJMnlYCa9C60t_Y2qWxPs7slSQ8FP26Adjz3lAMQ"
);

export { messaging };
