import React, { useState, useEffect, useContext } from 'react'
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
	useLocation,
	useLoaderData,
	redirect,
	Outlet,
} from 'react-router-dom'
import Userfront, {
	SignupForm,
	LoginForm,
	PasswordResetForm,
	LogoutButton,
} from '@userfront/toolkit/react'
import './bar_style.css'

import { Form, Link } from 'react-router-dom'


export default function Main_Bar() {
	return (
		<>
			<div className='bar'>
				<Link to={'/home'}>Главная</Link>
				<Link to={'/ideas'}>Идеи</Link>
				<Link to={'/profile'}>Профиль</Link>
			</div>
			<Outlet />
		</>
	)
}
