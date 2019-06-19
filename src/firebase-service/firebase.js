/**
 * @author: Nguyen Van Viet
 * @email: vietqb9779@gmail.com
 */
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
require('firebase/messaging');
var config = {
  apiKey: 'AIzaSyBFVIND1i3-TT2zXRlF2TOHzco_Wg_ddAQ',
  authDomain: 'nanafb-19977.firebaseapp.com',
  databaseURL: 'https://nanafb-19977.firebaseio.com',
  projectId: 'nanafb-19977',
  storageBucket: 'nanafb-19977.appspot.com',
  messagingSenderId: '167548835229',
};
export const firebaseNana = firebase.initializeApp(config);
