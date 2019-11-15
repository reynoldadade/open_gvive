// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyAPrArphln8j3byW4Em8VZhtRp1qO5cuMU',
    authDomain: 'dalex-gvive.firebaseapp.com',
    databaseURL: 'https://dalex-gvive.firebaseio.com',
    projectId: 'dalex-gvive',
    storageBucket: 'dalex-gvive.appspot.com',
    messagingSenderId: '762045448883',
    appId: '1:762045448883:web:0cb812eec3861cf414a6c6',
    baseUrl: 'https://proxycoreid.azurewebsites.net/api/identity',
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
