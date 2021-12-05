import React from 'react';
import { useForm } from "react-hook-form";
import { Form, Button } from 'react-bootstrap';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'
import firebaseConfig from '../../../firebaseConfig';
import * as firebase from 'firebase/app';
import { getAuth, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import './Login.css';
firebase.initializeApp(firebaseConfig);
const Login = () => {
    let navigate = useNavigate();
    let location = useLocation();
    console.log(location)
    let { from } = location.state || { from: { pathname: "/" } };
    console.log(from);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const adminOrUser = () =>{
        console.log('inside login - adminoruser')
       
        fetch('http://localhost:4200/admin')
        .then(res => res.json())
        .then(data =>{
            console.log('inside login - admin fetched')
            let flag = 0;
            for(var i = 0; i<data.length; i++){
              
                if (sessionStorage.getItem('email') === data[i].email ) {
            
                    if(sessionStorage.getItem('accessToken')){
                        flag = 1;
                        console.log('inside login - admin found')
                        navigate('/admin/createAdmin');
                        break;
                    }
                }
            }
            if(flag == 0){
                if (from === '/admin/createAdmin' || from === '/admin/manageService' || from === '/admin/addService' || from === '/admin/viewOrder' ) {
                    console.log('inside login - hacker found')
                        navigate("/");
                    }
                    else {
                        console.log('inside login - user found')
                        navigate(from);
                    }
            }
          
        })
    }
    const onSubmit = data => {
        const email = data.userEmail;
        const password = data.userPassword;
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                //keep user in session storage
                sessionStorage.setItem('email', userCredential.user.email);
                sessionStorage.setItem('accessToken', userCredential.user.accessToken);
                adminOrUser()
            })
            .catch((error) => {
                console.log(error.message);
            });
    }

    const handleGoogleLogin = () => {
        const provider = new GoogleAuthProvider();
        const auth = getAuth();
        signInWithPopup(auth, provider)
            .then((result) => {
                const credential = GoogleAuthProvider.credentialFromResult(result);
                sessionStorage.setItem('email', result.user.email);
                sessionStorage.setItem('accessToken', credential.accessToken);
                adminOrUser();
               
            })
            .catch((error) => {
                console.log(error.message);
            });
    }

    return (
            <div className="login-container">
                <div className="login-signup-form">
                    <h3>Login</h3>
                    <Form onSubmit={handleSubmit(onSubmit)} className="">
                        <Form.Group className="mb-3" controlId="userEmail">
                            <Form.Control size="sm" type="email" {...register("userEmail", { required: true })} placeholder="Email" />
                            {errors.userEmail && "email is required"}
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="userPassword">
                            <Form.Control size="sm" type="password"  {...register("userPassword", { required: true })} placeholder="Password" />
                            {errors.userPassword?.type === 'required' && "password is required"}
                        </Form.Group>
                        <Button type="submit">Login</Button>
                    </Form>

                    <p><small>Don't have an account?<Link to="/signUp">Create an account</Link></small></p>
                </div>
                <div className="signup-login-with">
                        <button onClick={handleGoogleLogin} className="googleLogin"><FontAwesomeIcon icon={faGoogle} /> Continue with Google</button>
                </div>
            </div>
    );
};

export default Login;