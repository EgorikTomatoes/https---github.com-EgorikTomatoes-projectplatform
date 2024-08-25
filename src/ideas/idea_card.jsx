import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Link } from 'react-router-dom'
import Avatar from '@mui/material/Avatar'
import { CardActionArea } from '@mui/material';
import './idea_card.css'

import { initializeApp } from 'firebase/app'
import { getFirestore, doc, deleteDoc} from 'firebase/firestore'


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

async function delete_card(data){
	if (data?.data?.title !== undefined)
	await deleteDoc(doc(db, 'ideas', data?.data?.title))
	window.location.reload()
}


export default function Idea_card({ obj, isProfile }) {
	return (
		<div className='grid-item'>
			<CardActionArea>
				<Card style={{ border: '2px solid black', height: '600px'}} className='grid-item'>
					<CardContent>
						<h1 className='title'>{obj?.id}</h1>
						<br />
						{obj?.data?.text}
						<br />
						<br />
					</CardContent>
					<CardMedia>
						<Avatar alt='Remy Sharp' src={obj?.data?.avatar} />
					</CardMedia>
					{isProfile ? <div>Статус {obj?.data?.status}
						<br />
						{obj?.data?.status === 'declined' ? <span>Причина: {obj?.data?.reason}</span> : <></>}</div> : <></>}
					<div style={{ display: 'flex', direction: 'row' }}>
						<Link className='email' to={`/profile/${obj?.data?.author}`}>{obj?.data?.author}</Link>
					</div>
					<div>Тэги: {obj?.data?.subjects?.map((doc) => { return <>{doc}; </> })}</div>
					<br />
					{isProfile? <button class='del' onClick={()=>{delete_card(obj)}}>УДАЛИТЬ</button>:<></>}
				</Card>
			</CardActionArea>
		</div>
	)
}
