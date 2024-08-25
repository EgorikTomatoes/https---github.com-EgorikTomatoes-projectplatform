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
import './profile_edit.css';

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
	let View_only = false

	if (!Userfront.tokens.accessToken && params?.User_id === undefined) {
		return { View_only }
	}

	let docRef
	let name

	if (params?.User_id !== undefined) {
		docRef = doc(db, 'users', params.User_id)
		View_only = true
		name = params.User_id
	} else {
		docRef = doc(db, 'users', Userfront?.user?.email)
		name = Userfront?.user?.email
	}

	const docSnap = await getDoc(docRef)
	let q;
	if (View_only) {
		q = query(
			collection(db, 'ideas'),
			where('author', '==', name),
			where('status', '==', 'accepted')
		)
	} else {
		q = query(
			collection(db, 'ideas'),
			where('author', '==', name)
		)
	}
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
	let { data, View_only, projects } = useLoaderData()
	if (data === undefined) {
		data = {};
	}
	if (!View_only) {
		data.email = Userfront?.user?.email
	}
	return (
		<RequireAuth>
			<div className='positions'>
				<div>
					<img key={data?.image} src={data?.image} alt='User photo' />
				</div>
				First name: {data?.name}<br />
				Second name: {data?.surname}<br />
				Email: {data?.email}<br />
				Age: {data?.age}<br />
				Country: {data?.country}<br />
				City: {data?.city}<br />
				Street: {data?.street}<br />
				House: {data?.house}<br />
				Apartment: {data?.apartment}<br />
				Phone: {data?.phone}<br />
				{!View_only ? (
					<Form action='edit'>
						<button className='edit'>EDIT</button>
					</Form>
				) : (
					<></>
				)}
				{!View_only ? (
					<div className='abvg'>
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
						/></div>
				) : (
					<></>
				)}
			</div>
			<h1>Проекты и идеи</h1>
			<div className='createidea'>
				{!View_only ? <a class='create_idea'><Link className='createidea' to='/create/idea'>Создать идею</Link></a> : <></>}
			</div>
			<div class='grid-container'>
				{projects !== undefined ? (
					projects.map(doc => {
						return <Idea_card obj={doc} isProfile={!View_only} />
					})
				) : (
					<div className='positions'>Нет проектов</div>
				)}
			</div>
		</RequireAuth>
	)
}

function RequireAuth({ children }) {
	let location = useLocation()
	if (!Userfront?.tokens?.accessToken) {
		return <Navigate to='/login' state={{ from: location }} replace />
	}
	return children
}
