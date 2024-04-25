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

import Idea_card from '../ideas/idea_card'
import { Form, Link } from 'react-router-dom'
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import {
	collection,
	setDoc,
	getDoc,
	doc,
	query,
	where,
	getDocs,
} from 'firebase/firestore'

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
	let docRef = doc(db, 'users', Userfront.user.email)
	let View_only = false
	let name = Userfront.user.email

	if (params?.User_id !== undefined) {
		docRef = doc(db, 'users', params.User_id)
		View_only = true
		name = params.User_id
	} else if (!Userfront.tokens.accessToken) {
		return { View_only }
	}

	const docSnap = await getDoc(docRef)

	const q = query(collection(db, 'ideas'), where('author', '==', name))
	const querySnapshot = await getDocs(q)
	const projects = []
	querySnapshot.forEach(doc => {
		const obj = {}
		obj.id = doc.id
		obj.data = doc.data()
		projects.push(obj)
	})

	if (docSnap.exists()) {
		const data = docSnap.data()
		if (View_only) {
			data.email = params.User_id
		}
		return { data, View_only, projects }
	} else {
		return { View_only }
	}
}

export async function action(params) {
	return null
}

export default function Profile() {
	const { data, View_only, projects } = useLoaderData()
	if (!View_only) {
		data.email = Userfront.user.email
	}
	return (
		<RequireAuth>
			<div>
				<div>
					<img key={data?.image} src={data?.image} alt='User photo' />
				</div>
				<div>First name: {data?.name}</div>
				<div>Second name: {data?.surname}</div>
				<div>Email: {data?.email}</div>
				<div>Age: {data?.age}</div>
				<div>Country: {data?.country}</div>
				<div>City: {data?.city}</div>
				<div>Street: {data?.street}</div>
				<div>House: {data?.house}</div>
				<div>Apartment: {data?.apartment}</div>
				<div>Phone: {data?.phone}</div>
				{!View_only ? (
					<Form action='edit'>
						<button>EDIT</button>
					</Form>
				) : (
					<></>
				)}
				{!View_only ? (
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
				) : (
					<></>
				)}
			</div>
			<h1>Проекты и идеи</h1>
			{!View_only ? <Link
				to ='/create/idea'
			>
				Создать идею
			</Link>:<></>}
			{projects !== undefined ? (
				projects.map(doc => {
					return <Idea_card obj={doc} />
				})
			) : (
				<div>Нет проектов</div>
			)}
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
