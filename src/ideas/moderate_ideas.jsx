import React, { useState, useEffect, useContext } from 'react'
import './moderate_ideas.css'
import './idea_card.css'
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
	useLocation,
	useLoaderData,
	redirect,
	Outlet,
	useNavigate,
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
	updateDoc,
} from 'firebase/firestore'

import Update_card from './update_card'
import './moderate_ideas.css'

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

export async function loader() {
	const q = query(
		collection(db, 'ideas'),
		where('status', '==', 'on moderation')
	)
	const querySnapshot = await getDocs(q)
	const projects = []
	querySnapshot.forEach(doc => {
		const obj = {}
		obj.id = doc.id
		obj.data = doc.data()
		projects.push(obj)
	})
	return projects
}

export async function action({ request, res }) {
	const users_db = collection(db, 'ideas')
	const formData = await request.formData()
	const data = Object.fromEntries(formData)
	const updates = doc(db, 'ideas', data.name)
	delete data.name
	await updateDoc(updates, data)
	return null
}

export default function Moderation() {
	const projects = useLoaderData()
	return (
		<RequireAuth>
			<div className='grid-container'>
				{projects !== undefined ? (
					projects.map(doc => {
						return (
							<div className='wrapper'>
								<div className='grid-container'>
									<Idea_card obj={doc} />
								</div>
								<Update_card obj={doc} />
							</div>
						)
					})
				) : (
					<></>
				)}
			</div>
		</RequireAuth>
	)
}

function RequireAuth({ children }) {
	let location = useLocation()
	if (Userfront?.user?.data?.isAdmin !== true) {
		return <Navigate to='/home' state={{ from: location }} replace />
	}
	return children
}
