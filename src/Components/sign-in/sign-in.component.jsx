import React from 'react';

import './sign-in.styles.scss'

import FormInput from "../form-input/form-input.component"
import CustomButton from "../custom-button/custom-button.component";

import {SignInWithGoogle} from '../../firebase/firebase.utils'

class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email:'',
            password:'',
        }
    }
    handleSubmit = event => {
        event.preventDefault();

        this.setState({email:'',password:''})
    }
    handleChange = event => {
        const {value,name} = event.target

        this.setState({[name]:value})
    }
    render() {
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput handleChange={this.handleChange} type="email" name="email" value={this.state.email} label="email" required />
                    <FormInput handleChange={this.handleChange} type="password" name="password" value={this.state.password} required label="password"/>
                    <div className='button'>
                        <CustomButton type="submit">
                            Sign In
                        </CustomButton>
                        <CustomButton onClick={SignInWithGoogle} isGoogleSignIn={true}>
                            Sign In with google
                        </CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}
export default SignIn;