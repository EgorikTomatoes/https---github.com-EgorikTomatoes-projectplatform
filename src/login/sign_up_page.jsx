import React from 'react'
import Userfront, {
	SignupForm,
	LoginForm,
	PasswordResetForm,
	LogoutButton
} from '@userfront/toolkit/react'
import './login_page.css';
import { Form, Link } from 'react-router-dom'

Userfront.init('wn95m8vn')

export default function Signup_pages() {
	return (
		<div class='login'>
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
			<div class='align'> <Link to={'/login'}>Login</Link> </div>
		</div>
	)
}
