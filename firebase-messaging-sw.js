importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging-compat.js');

// Configuración de tu proyecto
firebase.initializeApp({
  apiKey: "AIzaSyBiie8OxnerNy90uRARuPnr0Vr3D017R4A",
  authDomain: "ingresos-minimos.firebaseapp.com",
  databaseURL: "https://ingresos-minimos-default-rtdb.firebaseio.com",
  projectId: "ingresos-minimos",
  storageBucket: "ingresos-minimos.firebasestorage.app",
  messagingSenderId: "104886265441",
  appId: "1:104886265441:web:2272d88ad1129919ea6c20"
});

const messaging = firebase.messaging();

// Mostrar notificación cuando la app está en segundo plano
messaging.onBackgroundMessage((payload) => {
  console.log('[sw.js] Mensaje recibido:', payload);
  
  const notificationTitle = payload.notification?.title || "PAGOCODE";
  const notificationOptions = {
    body: payload.notification?.body || "Tienes una actualización",
    icon: 'logo.png',
    badge: 'logo.png'
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
 
