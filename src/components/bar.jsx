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
				<Link to={'/home'} className='home'>Главная</Link>
				<Link to={'/ideas'} className='ideas'>Идеи</Link>
				<Link to={'/profile'} className='profile'>Профиль</Link>
				{Userfront?.user?.data?.isAdmin === true ? (
					<Link to={'/moderation'}>Модерация</Link>
				) : (
					<></>
				)}
			</div>
			<Outlet />
		</>
	)
}
