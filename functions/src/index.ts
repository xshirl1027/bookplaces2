import * as functions from 'firebase-functions';
import admin = require("../node_modules/firebase-admin/lib");
// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
const serviceAccount = require('../serviceAccount.json'); // see notes below about this.

admin.initializeApp({
    databaseURL: 'https://teak-mantis-271722.firebaseio.com',
    credential: admin.credential.cert(serviceAccount)
});

const auth = admin.auth();
/**
 * Gets all the users (1000 MAX) from Firebase auth.
 *
 * @param {Object} req Express Request Object.
 * @param {Object} res Express Response Object
 */
exports.getAllUsers = functions.https.onCall(() => {
   return auth.listUsers().then((userRecords) => {
      userRecords.users.forEach((user) => console.log(user.toJSON()));
      return userRecords.users;
    }).catch((error) => console.log(error));
  });
