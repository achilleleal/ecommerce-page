import React, { Component } from 'react'

class SignUpCard extends Component {
    
    state = {
        signInEmail: '',
        signInPassword: ''
    }

    onEmailChange = (event) => {
        this.setState({signInEmail: event.target.value})
    }

    onPasswordChange = (event) => {
        this.setState({signInPassword: event.target.value})
    }

    

    render () {
        
        const allowedPasswordLength = 6;
        const { signInPassword } = this.state;
        const { className } = this.props;

        return (
            <div className={`w-full max-w-xs bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 ${className}`}>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" forHTML="email">
                        Email
                    </label>
                    <input onChange={this.onEmailChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="email" />
                    </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" forHTML="password" >
                        Password
                    </label>
                    <input onChange={this.onPasswordChange} 
                    className={`shadow appearance-none border ${signInPassword.length === 0 ? "" :
                        signInPassword.length <= allowedPasswordLength ?"border-red-500": ""} rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline`} id="password" type="password" placeholder="******************" />
                    <p className="text-xs italic text-red-700">
                        {signInPassword.length === 0 ? "" : 
                            signInPassword.length <= allowedPasswordLength ? `The password must be longer than ${allowedPasswordLength} characters` : ""}
                    </p>
                </div>
                <div className="flex items-center justify-between">
                    <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                        Forgot Password?
                    </a>
                    <button onClick={() => console.log(this.state.signInEmail, this.state.signInPassword)}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                        Sign Up
                    </button>
                </div>
                <p className="content-center text-center text-gray-500 text-xs mt-4">
                    By clicking “Sign up”, you agree to our Terms of Service and Privacy Statement.
                </p>
            </div>
        )
    }
}

export default SignUpCard