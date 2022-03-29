import { getMessaging } from "firebase/messaging";
import { onBackgroundMessage } from "firebase/messaging/sw";

const messaging = getMessaging();
onBackgroundMessage(messaging, (payload) => {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  // Customize notification here
  const notificationTitle = 'NFT AIRDROPPED!';
  const notificationOptions = {
    body: 'We Have Airdropped Your NFT, Click To Check!',
    icon: './logo192.png'
  };

  self.registration.showNotification(notificationTitle,
    notificationOptions);
});