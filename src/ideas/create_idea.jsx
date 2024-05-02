import React, { useState, useEffect, useContext } from 'react'
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
	useLocation,
	useLoaderData,
	Form,
	redirect,
    Link
} from 'react-router-dom'
import Userfront, {
	SignupForm,
	LoginForm,
	PasswordResetForm,
	LogoutButton,
} from '@userfront/toolkit/react'

import { Avatar, Button } from '@mui/material'
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

export async function action({ request, res }) {

	const users_db = collection(db, 'ideas')
	const formData = await request.formData()
	const updates = Object.fromEntries(formData)
	updates.author = Userfront.user.email
	updates.avatar = updates.avatar
	updates.status = 'on moderation'
	await setDoc(doc(users_db, updates.title), updates)
	return redirect('/profile')
}

export default function Create_idea() {
    let location = useLocation()
    const data = useLoaderData()
    const [title, changeTitle] = useState(false)
    const [text, changeText] = useState(false)
    if (!Userfront.tokens.accessToken){
        return <Navigate to='/login' state={{ from: location }} replace />
    }
    data.email = Userfront.user.email
	return (
		<div>
			<Form method='post'>
				<div style={{ border: '1px solid black' }}>
					<input
						name='title'
						type='text'
						placeholder='Название идеи'
						onChange={(e)=>{e.currentTarget.value === '' ? changeTitle(false) : changeTitle(true)}}
					></input>
					<br />
					<textarea
						name='text'
						cols='80'
						rows='8'
						placeholder='Описание идеи'
                        onChange={(e)=>{e.currentTarget.value === '' ? changeText(false) : changeText(true)}}
					></textarea>
					<br />
					<br />
					<div style={{ display: 'flex', direction: 'row' }}>
						<Avatar alt='Remy Sharp' src={data.image} />
						{data.email}
					</div>
				</div>
				<input type='hidden' name='avatar' value={data.image} />
                <Link to='/profile'>Назад</Link>
				{title && text ? <button type='submit'>Опубликовать</button> : <></>}
			</Form>
		</div>
	)
}
