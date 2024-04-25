import React, { useState } from 'react'

import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { collection, setDoc, getDoc, doc } from 'firebase/firestore'
import { Form, useNavigate, redirect, useLoaderData } from 'react-router-dom'
import Userfront from '@userfront/toolkit'

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
	const users_db = collection(db, 'users')
	const formData = await request.formData()
	const updates = Object.fromEntries(formData)
	await setDoc(doc(users_db, Userfront.user.email), updates)
	return redirect(`/profile`)
}

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

export default function Profile_edit() {
	const data = useLoaderData()
	const navigate = useNavigate()
    data.email = Userfront.user.email;
	return (
		<Form method='post'>
			<div>
				Image url: <input name='image' type='text' defaultValue={data.image} />
			</div>
			<div>
				First name: <input name='name' type='text' defaultValue={data.name} />
			</div>
			<div>
				Second name{' '}
				<input name='surname' type='text' defaultValue={data.surname} />
			</div>
			<div>Email:{data.email}</div>
			<div>
				Age: <input name='age' type='text' defaultValue={data.age} />
			</div>
			<div>
				Country:{' '}
				<input name='country' type='text' defaultValue={data.country} />
			</div>
			<div>
				City: <input name='city' type='text' defaultValue={data.city} />
			</div>
			<div>
				Street: <input name='street' type='text' defaultValue={data.street} />
			</div>
			<div>
				House: <input name='house' type='text' defaultValue={data.house} />
			</div>
			<div>
				Apartment:{' '}
				<input name='apartment' type='text' defaultValue={data.apartment} />
			</div>
			<div>
				Phone: <input name='phone' type='text' defaultValue={data.phone} />
			</div>
			<button type='submit'>EDIT</button>
			<button
				type='button'
				onClick={() => {
					navigate(-1)
				}}
			>
				Cancel
			</button>
		</Form>
	)
}
