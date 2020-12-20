import firebase from 'firebase/app';
import 'firebase/firestore';

const firestore = firebase.firestore();

firestore.collection('users').doc('ZMnb5jkTd84rcS7DXFme').collection('cartItems').doc('IDToGIwmN1eEEOqrS4lg'); // Querying for leather jacket item

firestore.doc('/users/ZMnb5jkTd84rcS7DXFme/cartItems/IDToGIwmN1eEEOqrS4lg'); // Also querying for leather jacket item