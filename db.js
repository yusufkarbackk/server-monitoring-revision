const admin = require('firebase-admin')
var serviceAccount = require("./server-monitoring-19773-firebase-adminsdk-9xsse-98ad556b16.json");


admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://server-monitoring-19773-default-rtdb.asia-southeast1.firebasedatabase.app"
});

module.exports = admin