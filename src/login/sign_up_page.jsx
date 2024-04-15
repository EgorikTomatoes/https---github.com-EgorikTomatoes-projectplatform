import React from 'react'
import Userfront, {
	SignupForm,
	LoginForm,
	PasswordResetForm,
    LogoutButton
} from '@userfront/toolkit/react'

import {Form, Link} from 'react-router-dom'

Userfront.init('wn95m8vn')

export default function Signup_pages() {
    console.log(Userfront.user)
	return (
		<>
			<SignupForm
				theme={{
					colors: {
						light: '#ffffff',
						dark: '#5e72e4',
						accent: '#13a0ff',
						lightBackground: '#fdfdfd',
						darkBackground: '#2d2d2d',
					},
					colorScheme: 'dark',
					fontFamily: 'Avenir, Helvetica, Arial, sans-serif',
					size: 'compact',
					extras: {
						rounded: true,
						gradientButtons: true,
						hideSecuredMessage: true,
					},
				}}
			/>
			<Link to={'/login'}>Login</Link>
		</>
	)
}
