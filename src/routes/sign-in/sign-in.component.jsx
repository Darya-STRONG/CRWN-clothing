import {
    signInWithGooglePopup,
    createUserProfileDocument,
  } from '../../utils/firebase/firebase.utils.jsx';

import SignUpForm from '../../components/sign-up-form/sign-up-form.component.js';
  
  const SignIn = () => {
    const logGoogleUser = async () => {
      const response = await signInWithGooglePopup();
      createUserProfileDocument(response);
    };
  
    return (
      <div>
        <h1>Sign In Page</h1>
        <button onClick={logGoogleUser}>Sign in with Google Popup</button>
        <SignUpForm/>
      </div>
    );
  };
  
  export default SignIn;