import React from 'react'
import FormInput from '../form-input/form-input.component'
import CustomButtom from '../custom-button/custom-button.component'
import './sign-up.styles.scss'

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils'


class SignUp extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async (event) => {
        event.preventDefault();

        const { displayName, email, password, confirmPassword } = this.state;
        
        if(password !== confirmPassword){
            alert("Passwords Dont Match")
            return;
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password)
            createUserProfileDocument(user, {displayName})
            this.setState({email: '', password: '', displayName: '', confirmPassword: ''})
        } catch(error){
            console.error("Caught Error while creating using from email/password", error.message)
        }

    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({[name]: value})
    }

    render() {
        const {displayName, email, password, confirmPassword} = this.state
        return (
            <div className="sign-up">
                <h2 className="title">I do not have an account</h2>
                <span>Sign up with your email and password</span>

                <form className="sign-up-form" onSubmit={this.handleSubmit}>
                    <FormInput 
                        name="displayName" 
                        type='text' 
                        value={displayName} 
                        required 
                        label='Display Name'
                        handleChange = {this.handleChange}
                    />
                    <FormInput 
                        name="email" 
                        type='email' 
                        value={email} 
                        required 
                        label='Email'
                        handleChange = {this.handleChange}
                    />
                    <FormInput 
                        name="password" 
                        type='password' 
                        value={password} 
                        required 
                        label='Password'
                        handleChange = {this.handleChange}
                    />
                    <FormInput 
                        name="confirmPassword" 
                        type='password' 
                        value={confirmPassword} 
                        required 
                        label='Confirm Password'
                        handleChange = {this.handleChange}
                    />
                    <div className='buttons'>
                        <CustomButtom type='submit'>Sign Up</CustomButtom>
                        {/* <CustomButtom googleSignIn={true} onClick={signInWithGoogle}>Sign In With Google</CustomButtom> */}
                    </div>
                </form>
            </div>
        )
    }
}

export default SignUp;