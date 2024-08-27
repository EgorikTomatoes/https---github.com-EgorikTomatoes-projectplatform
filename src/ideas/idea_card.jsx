import React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import Avatar from '@mui/material/Avatar'
import { CardActionArea } from '@mui/material'
import './idea_card.css'

import { initializeApp } from 'firebase/app'
import { getFirestore, doc, deleteDoc } from 'firebase/firestore'


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

async function delete_card(data) {
	if (data?.data?.title !== undefined)
		await deleteDoc(doc(db, 'ideas', data?.data?.title))
	window.location.reload()
}

export default function Idea_card({ obj, isProfile }) {
	const navigate = useNavigate()
	//console.log(obj, isProfile)
	return (
		<div className='grid-item'>
			<CardActionArea onClick={() => { navigate(`/idea/${obj?.data?.title}`) }}>
				<Card
					style={{ border: '2px solid black', height: '400px' }}
					className='grid-item'
				>
					<CardContent>
						<CardMedia>
							<Avatar alt='Remy Sharp' src={obj.data.avatar} />
						</CardMedia>
						<h1 className='title'>
							{obj?.data?.title?.length < 40 ? obj?.data?.title : obj?.data?.title?.slice(0, 40) + '...'}
						</h1>
						<div className='text'>
							{obj?.data?.text?.length < 100
								? obj?.data?.text
								: obj?.data?.text.slice(0, 100) + '...'}
						</div>
						{isProfile ? (
							<div>
								Статус {obj?.data?.status}
								<br />
								{obj?.data?.status === 'declined' ? (
									<span>Причина: {obj?.data?.reason}</span>
								) : (
									<></>
								)}
							</div>
						) : (
							<></>
						)}
						<br />
						<div>
							Тэги:{' '}
							{obj?.data?.subjects?.map(doc => {
								return <>{doc}; </>
							})}
						</div>
					</CardContent>
					<div style={{ display: 'flex', direction: 'row' }}>
						<Link className='email' to={`/profile/${obj.data.author}`}>
							{obj.data.author}
						</Link>
					</div>
				</Card>
			</CardActionArea>
			{isProfile ? (
				<button
					class='del'
					onClick={() => {
						delete_card(obj)
					}}
					style={{ width: '100%' }}
				>
					УДАЛИТЬ
				</button>
			) : (
				<></>
			)}
		</div>
	)
}
