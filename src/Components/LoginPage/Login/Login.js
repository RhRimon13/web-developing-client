import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { useHistory, useLocation } from 'react-router';
import { UserContext } from '../../../App';
import googleIcon from '../../../Images/Group 573.png';
import './Login.css'

const Login = () => {
    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    };

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    const googleProvider = new firebase.auth.GoogleAuthProvider();
    const googleSignIn = () => {
        firebase.auth().signInWithPopup(googleProvider)
            .then(res => {
                const { displayName, photoURL, email } = res.user;
                const signedInUser = {
                    userName: displayName,
                    email: email,
                    photo: photoURL,
                }
                setLoggedInUser(signedInUser);
                history.replace(from);
            })
            .catch(error => {
                // console.log(error);
                console.log(error.message);
            })
    }

    return (
        <div className="card g-login">
            <button className="btn btn-secondary" onClick={googleSignIn}><img className="icon" src={googleIcon} alt="" /> <span>Google Login</span></button>
        </div>
    );
};

export default Login;