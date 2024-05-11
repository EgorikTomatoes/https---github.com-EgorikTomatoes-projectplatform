import React, { useState } from 'react'

import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { collection, setDoc, getDoc, doc, getDocs, query, where } from 'firebase/firestore'
import {
	Form,
	useNavigate,
	redirect,
	useLoaderData,
	json,
	Link,
} from 'react-router-dom'
import Userfront from '@userfront/toolkit'
import Avatar from '@mui/material/Avatar'
import { Grid } from '@mui/material'
import Idea_card from './idea_card'
import './idea_card.css'


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
	const docSnap = await getDocs(
		(query(
			collection(db, 'ideas'),
			where('status', '==', 'accepted')
		))
	)
	const data = []
	docSnap.forEach(doc => {
		const obj = {}
		obj.id = doc.id
		obj.data = doc.data()
		data.push(obj)
	})
	return data
}

export default function Ideas() {
	const data = useLoaderData()
	return (
		<div class='grid-container'>
			{data.map(obj => {
				return (
					<Idea_card obj={obj} isProfile={false} />
				)
			})}
		</div>
	)
}
