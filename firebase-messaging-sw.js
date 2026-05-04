importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js');

// Configuración oficial de tu proyecto: ingresos-minimos
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

// Lógica para mostrar la notificación cuando la aplicación NO está a la vista
messaging.onBackgroundMessage((payload) => {
  console.log('[sw.js] Mensaje recibido en segundo plano:', payload);

  const notificationTitle = payload.notification.title || "PAGOCODE";
  const notificationOptions = {
    body: payload.notification.body || "Tienes una actualización en tu cuenta",
    // Tu enlace de Picsart/ImgBB para que el icono siempre se vea
    icon: 'https://i.ibb.co/tprJC6Nw/Picsart-26-05-03-18-16-53-912.jpg',
    badge: 'https://i.ibb.co/tprJC6Nw/Picsart-26-05-03-18-16-53-912.jpg'
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
