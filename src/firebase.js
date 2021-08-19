import firebase from 'firebase'
import 'firebase/auth'

const app = firebase.initializeApp({
    apiKey: "AIzaSyDZ8LcWXFFcQ29_E7ETInWvpZ0W9O-flf0",
    authDomain: "react-dev-dc5c4.firebaseapp.com",
    projectId: "react-dev-dc5c4",
    storageBucket: "react-dev-dc5c4.appspot.com",
    messagingSenderId: "567907651624",
    appId: "1:567907651624:web:ac87e431b443847644251d"
})

export const auth = app.auth()
export default app