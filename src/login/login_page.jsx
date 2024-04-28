import React from 'react'
import './login_page.css';
import Userfront, {
	SignupForm,
	LoginForm,
	PasswordResetForm,
	LogoutButton
} from '@userfront/toolkit/react'
import { Form, Link } from 'react-router-dom'

Userfront.init('wn95m8vn')

export default function Login_pages() {
	console.log(Userfront.user)
	return (
		<div class='login'>
			<LoginForm
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
			<div class='align'>	<Link to={'/signup'}>Sign Up</Link> </div>
		</div>
	)
}
