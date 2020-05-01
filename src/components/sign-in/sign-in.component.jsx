import React from 'react'
import FormInput from '../form-input/form-input.component'
import CustomButtom from '../custom-button/custom-button.component'
import './sign-in.styles.scss'

import { signInWithGoogle, auth } from '../../firebase/firebase.utils'


class SignIn extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        const { email, password } = this.state

        try{
            await auth.signInWithEmailAndPassword(email, password)

            this.setState({email: '', password: ''})
        } catch(error){
            console.error("Error while loggin in with email and passowrd", error.message)
        }
        
    }

    handleChange = (event) => {
        const { name, value } = event.target
        this.setState({[name]: value})

    }

    render() {
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        name="email" 
                        type='email' 
                        value={this.state.email} 
                        required 
                        label='email'
                        handleChange = {this.handleChange}
                    />
                    <FormInput 
                        name="password" 
                        type='password' 
                        value={this.state.password} 
                        required 
                        label='password'
                        handleChange = {this.handleChange}
                    />
                    <div className='buttons'>
                        <CustomButtom type='submit'>Sign In</CustomButtom>
                        <CustomButtom googleSignIn="google-sign-in" onClick={signInWithGoogle}>Sign In With Google</CustomButtom>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;