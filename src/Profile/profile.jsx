import React, {useState, useEffect} from 'react'
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
	useLocation,
} from 'react-router-dom'
import Userfront, {
	SignupForm,
	LoginForm,
	PasswordResetForm,LogoutButton
} from '@userfront/toolkit/react'

import { Form, Link } from 'react-router-dom'



export async function loader({params}){
	console.log(1, params);
    return null;
}

export async function action(params){
	console.log(2, params);
    return null;
}


export default function Profile() {
	const data = { }
	return (
		<RequireAuth>
			<div>
				<div>
					<img key={data.image} src={data.image} alt='User photo' />
				</div>
				<div>First name: {data.name}</div>
				<div>Second name: {data?.surname}</div>
				<div>Email: {data.email}</div>
				<div>Age: {data?.age}</div>
				<div>Country: {data?.country}</div>
				<div>City: {data?.city}</div>
				<div>Street: {data?.street}</div>
				<div>House: {data?.house}</div>
				<div>Apartment: {data?.apartment}</div>
				<div>Phone: {data?.phone}</div>
				<Form action='edit'>
					<button>EDIT</button>
				</Form>
				<Form method='post'>
					<input type='text' name='simple' placeholder='something' />
					<button type='submit'>Update</button>
				</Form>
				<LogoutButton
					theme={{
						colors: {
							light: '#ffffff',
							dark: '#5e72e4',
							accent: '#13a0ff',
							lightBackground: '#fdfdfd',
							darkBackground: '#2d2d2d',
						},
						colorScheme: 'auto',
						fontFamily: 'Avenir, Helvetica, Arial, sans-serif',
						size: 'compact',
						extras: {
							rounded: true,
							gradientButtons: true,
							hideSecuredMessage: true,
						},
					}}
				/>
				;
			</div>
		</RequireAuth>
	)
}

function RequireAuth({ children }) {
	let location = useLocation()
	if (!Userfront.tokens.accessToken) {
		return <Navigate to='/login' state={{ from: location }} replace />
	}
	return children
}


async function callBackend() {
	const response = await fetch('/express_backend')
    const data = await response.json()
    if (response.status!== 200){
		throw Error(data.message)
	}
	return data
}
