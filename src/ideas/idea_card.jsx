import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Link } from 'react-router-dom'
import Avatar from '@mui/material/Avatar'
import { CardActionArea } from '@mui/material';
import './idea_card.css'

export default function Idea_card({ obj, isProfile }) {
	return (
		<div className='grid-item'>
			<CardActionArea>
				<Card style={{ border: '1px solid black', height: '350px' }}>
					<CardContent>
						<h1 className='title'>{obj.id}</h1>
						<br />
						{obj.data.text}
						<br />
						<br />
					</CardContent>
					<CardMedia>
						<Avatar alt='Remy Sharp' src={obj.data.avatar} />
					</CardMedia>
					{isProfile ? <div>Статус {obj.data.status}
						<br />
						{obj.data.status === 'declined' ? <span>Причина: {obj.data.reason}</span> : <></>}</div> : <></>}
					<div style={{ display: 'flex', direction: 'row' }}>
						<Link className='email' to={`/profile/${obj.data.author}`}>{obj.data.author}</Link>
					</div>
					<div>Тэги: {obj?.data?.subjects?.map((doc) => { return <>{doc}; </> })}</div>
				</Card>
			</CardActionArea>
		</div>
	)
}
