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
import { getFirestore, updateDoc } from 'firebase/firestore'
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

export async function action({ request, res }) {
	const users_db = collection(db, 'ideas')
	const formData = await request.formData()
	const data = Object.fromEntries(formData)
	const updates = doc(db, 'ideas', data.name);
	delete data.name
	await updateDoc(updateDoc, data)
	return null;
}

export default function Update_card({ obj }) {
	return (
		<div style={{ border: '3px solid black', background:'white'}}>
			<Form method='post'>
				<input type='radio' id='accepted' name='status' value='accepted'/>
				<label for='accepted'>Принять проект</label>
				<br />
				<input type='radio' id='declined' name='status' value='declined' />
				<label for='declined'>Отклонить проект</label>
				<br />
				<textarea
					name='reason'
					cols='80'
					rows='8'
					placeholder='Причина отклонения'
				/>
				<br />
				<button type='submit'>Принять</button>
				<input type="hidden" name='name' value={obj.data.title} />
			</Form>
		</div>
	)
}
