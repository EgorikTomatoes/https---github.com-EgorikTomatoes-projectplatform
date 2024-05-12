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
				<a class='cl'><Link to={'/home'} className='home'>Главная</Link></a>
				<a class='cl'><Link to={'/ideas'} className='ideas'>Идеи</Link></a>
				<a class='cl'><Link to={'/profile'} className='profile'>Профиль</Link></a>
				{Userfront?.user?.data?.isAdmin === true ? (
					<a class='cl'><Link to={'/moderation'} className='moderation'>Модерация</Link></a>
				) : (
					<></>
				)}
			</div>
			<Outlet />
		</>
	)
}
