import React, { useState, useEffect, useContext } from 'react'
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
	useLocation,
	useLoaderData,
} from 'react-router-dom'
import Userfront, {
	SignupForm,
	LoginForm,
	PasswordResetForm,
	LogoutButton,
} from '@userfront/toolkit/react'

import { Form, Link } from 'react-router-dom'
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { collection, setDoc, getDoc, doc } from 'firebase/firestore'

const firebaseConfig = {
	apiKey: 'AIzaSyBDEOURuUOoK_KjI4uLi6DmYOq4JVDRRwM',
	authDomain: 'projectsplatform-f3e9c.firebaseapp.com',
	projectId: 'projectsplatform-f3e9c',
	storageBucket: 'projectsplatform-f3e9c.appspot.com',
	messagingSenderId: '732886721727',
	appId: '1:732886721727:web:7933de9bfeb06bf4b9120a',
	measurementId: 'G-S2C1NK93CT',
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export async function loader({ params }) {
	const docRef = doc(db, 'users', Userfront.user.email)
	const docSnap = await getDoc(docRef)
	const data = docSnap.data()
	if (docSnap.exists()) {
		return data
	} else {
		return {}
	}
}

export async function action(params) {
	return null
}

export default function Profile() {
	const data = useLoaderData()
	data.email = Userfront.user.email;
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
	if (response.status !== 200) {
		throw Error(data.message)
	}
	return data
}
