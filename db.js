const admin = require('firebase-admin')
require('dotenv').config();

// Load the service account key from an environment variable
const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT);

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://blabla-86f2c-default-rtdb.firebaseio.com/"
});

module.exports = admin