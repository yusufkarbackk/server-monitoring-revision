const admin = require('firebase-admin')
var serviceAccount = require("./blabla-86f2c-firebase-adminsdk-1ymhr-b0feeac347.json");


admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://blabla-86f2c-default-rtdb.firebaseio.com/"
});

module.exports = admin