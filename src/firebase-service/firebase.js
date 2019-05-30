/**
 * @author: Nguyen Van Viet
 * @email: vietqb9779@gmail.com
 */
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
require('firebase/messaging');
var config = {
  apiKey: 'AIzaSyDUis82pZ5iD0bO5XSJK_tWy2QuIKZKkpE',
  authDomain: 'eatsy-bbee4.firebaseapp.com',
  databaseURL: 'https://eatsy-bbee4.firebaseio.com',
  projectId: 'eatsy-bbee4',
  storageBucket: 'eatsy-bbee4.appspot.com',
  messagingSenderId: '402081474913',
  appId: '1:402081474913:web:5d248b98584459db',
};
export const firebaseNana = firebase.initializeApp(config);
