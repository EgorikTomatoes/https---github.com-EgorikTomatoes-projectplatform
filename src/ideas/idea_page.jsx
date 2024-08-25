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
	Link,
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
import './idea_page.css'



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
	const docRef = doc(db, 'ideas', params?.Idea_name)
	const docSnap = await getDoc(docRef)
	const res = { data: docSnap.data() }
	return res;
}


export default function Idea_page() {
	let { data } = useLoaderData()
	return (
		<div className='box'>
			<h1 className='title_page'>{data?.title}</h1>
			<br />
			<div className='text_page'>{data?.text}</div>
			<br />
			<Avatar src={data?.avatar} />
			<Link className='email' to={`/profile/${data?.author}`}>
				{data?.author}
			</Link>
		</div>
	)
}