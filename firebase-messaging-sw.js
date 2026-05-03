importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyBiie8OxnerNy90uRARuPnr0Vr3D017R4A", // La que empieza con AIza
  projectId: "ingresos-minimos",
  messagingSenderId: "104886265441",
  appId: "1:104886265441:web:2272d88ad1129919ea6c20"
});

const messaging = firebase.messaging();