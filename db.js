const admin = require('firebase-admin')
var serviceAccount = require("./service-account-revision.json");


admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://server-monitoring-revision-default-rtdb.asia-southeast1.firebasedatabase.app/"
});

module.exports = admin