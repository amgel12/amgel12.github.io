importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyBiie8OxnerNy90uRARuPnr0Vr3D017R4A",
  authDomain: "ingresos-minimos.firebaseapp.com",
  databaseURL: "https://ingresos-minimos-default-rtdb.firebaseio.com", // Agrégalo para mayor estabilidad
  projectId: "ingresos-minimos",
  storageBucket: "ingresos-minimos.firebasestorage.app",
  messagingSenderId: "104886265441",
  appId: "1:104886265441:web:2272d88ad1129919ea6c20" // <-- VERIFICA QUE ESTÉ COMPLETO
});

const messaging = firebase.messaging();

// Importante: Agrega esto para que las notificaciones se muestren cuando la app esté cerrada
messaging.onBackgroundMessage((payload) => {
  console.log('Mensaje recibido en segundo plano:', payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/firebase-logo.png' // O la ruta de tu logo
  };
  self.registration.showNotification(notificationTitle, notificationOptions);
});
