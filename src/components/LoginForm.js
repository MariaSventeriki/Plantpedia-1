import { FaFacebook, FaGoogle } from "react-icons/fa"
import 'firebase/app'
import { auth } from './firebase'
import firebase from 'firebase/app'
import './Chat.css'; //styiling for form will be done with styled-components

const LoginForm = () => {
    return (
        <div id='login-page'>
            <div id='login-card'>
                <h2 className='text-chat'>Plantpedia Live Chat!</h2>
                <br /> <br />
                <div
                    className='login-button google'
                    onClick={() => auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())}
                >
                    <FaGoogle/> Sign in with Google
                </div>
                <br /> <br />
                <div
                    className='login-button facebook'
                    onClick={() => auth.signInWithRedirect(new firebase.auth.FacebookAuthProvider())}
                >
                    <FaFacebook/> Sign in with Facebook
                </div>
            </div>
        </div>

    )
}
export default LoginForm;