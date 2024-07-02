const admin = require('firebase-admin')
require('dotenv').config();

// Load the service account key from an environment variable
//const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT);

const account = {
  "type": "service_account",
  "project_id": "server-monitoring-19773",
  "private_key_id": "60e96e285f11f61193ca54ea6baba124a8f20e4d",
  "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCslFSl8ZZkFYb7\nYX7/qjuwutVRS/Mixa8LSpzZteCIdBCNIimspN059tFd311fWBdEGjz8B8/KHh51\nPf5hiYmYbz7LhQ2BFcUkscIT1SykAzAA912xzmEY4KlwmDsfkK2J4IYBSOG9Ncb7\nxwoLS7nw5FyW3MvBeZx0V+DBRxQ+AQ0vvjxus3ShFzpsMaIMslVMXioMQp2il4+a\nEUXYy038DpSFmrBMrX6DNAlQdII3ll6m2s7lGzrPf+E9c0Xx2SmRSCoTXNhdNz/x\nkZcw7S3rJXv5is1y01uBZrwgD0h+CesWn79DAqjUV3XWlukNhEuYtUcJSS/gC8QM\nD+ZLKXc3AgMBAAECggEAFgRifD1DC4e3jdCVbDaioNxlJJcE8NW5jD47nobWm3H7\nPpYyLOVnl+KGOWyqs+RAK58RUrIIb2fCSQDcuELcvAbNQxe5blOBsDnBYdhbdp01\nfZoRaQLEXnEjDMtPF6rUiPeNARL0Qbhfp3VwMZq6oSHxMgn/MLK8JBemA+J2kaZJ\nDUWNgBllgt0qbik51b+20sHjNo/ZSAcHVMi0BXE5QEicYnsE4n+DoPa9InNxxWUz\nPGQhMrkW7qIN9XeLV8ZQlRQHoTEyEVB8sTIflatut36cywbvTZg2ei4SkRMwmi+K\nQvD66zARoKvSYCPSju3atzd+Zodpx7HEt1Vt8sn6sQKBgQDWIH3f6QnPwC2r2H1l\nZCn53jOEr21UL3yKmBMUeJ9oNkJ9//yWjmuxRVRcgCIk6vTnpJ6VCEy1NF8YRmdR\nXTQBblbH7ThJyygPNNHY1AEqm4BrYTt6OmHFuh/Ra/sxVYRHrPxwfD1ZLBsPOTh/\nNWLe1KqtzYzwd3TI0vM5ufRY6QKBgQDOU+jsIgDLuatkhyk60m6uc+6DLcVW7O0s\nRCh7lxALU2lK8BCxn/5v/oNbk9Uwmfk6dUmuGCLi0RP36ugLv7xS7c0j5SU4+gWy\n0FHcb8BuYr2U0OahftHJJNxH5rK0ENmE1z6EM0hVLSrDY7VZIl4PYK2vAJYeTowh\nP3nl+E07HwKBgD8OFGMyecwu2IQpXUvVQjMththE3JoU3cTmYX/+wVpr2ArIrjYb\nvITYWK5goS1j7zijlntmlUgrIvHAEb65Bo6BUpbPOWspoyNPN5h1Xd6RKjD00hH9\nTTtvwtzlwnPVrf15aGErhNlUjqdd/1AehX3+/D/wLtfFJaPZ0vwl0Vm5AoGAfeLw\ncHJmreZAznsxCrSt1z7gvaTFjL3OD34efRm0LlTcH17NsLJ/mXFeUBeosZigWayK\nIfCUCHOsjU0D+3cmvipdSZNb3KGfrHQyHh8I99DC/vNeZBZuhR06UZxOWFMXhFeX\nyy1G6sE+ICzLzvCLFzLThb0D2sXt9bM2+rs+090CgYAfPtMkIBxiWoyTfvX+VbSl\ntHJGe6D2F6eGg5NxF1/eRWYcGR94knH961xvnzYRKQ9Y2slu23Tv1jqw7yTK7tmN\nH5CMfH9JOHEYtAtjLe1sblPRDUfP50Iyw5wbyCnL7ING+03MTROOqnLKkUH/nXxV\nIvyXhlLaLFJQe4ZnCtDN6g==\n-----END PRIVATE KEY-----\n",
  "client_email": "firebase-adminsdk-9xsse@server-monitoring-19773.iam.gserviceaccount.com",
  "client_id": "102438840176182369564",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-9xsse%40server-monitoring-19773.iam.gserviceaccount.com",
  "universe_domain": "googleapis.com"
}

admin.initializeApp({
    credential: admin.credential.cert(account),
    databaseURL: "https://server-monitoring-19773-default-rtdb.asia-southeast1.firebasedatabase.app/"
});

module.exports = admin
