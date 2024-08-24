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
		<div class='grid-item'>
			<CardActionArea>
				<Card style={{ border: '1px solid black', height: '350px' }}>
					<CardContent>
						<CardMedia><Avatar alt='Remy Sharp' src={obj.data.avatar} /></CardMedia>
						<h1 className='title'>{obj.id.length < 40 ? obj.id : obj.id.slice(0, 40) + "..."}</h1>
						{obj.data.text.length < 300 ? obj.data.text : obj.data.text.slice(0, 300) + "..."}
						<br />
					</CardContent>
					{isProfile ? <div>Статус {obj.data.status}
						<br />
						{obj.data.status === 'declined' ? <span>Причина: {obj.data.reason}</span> : <></>}</div> : <></>}

					<CardContent>
						<div>Тэги: {obj?.data?.subjects?.map((doc) => { return <>{doc}; </> })}</div>
					</CardContent>
					<div style={{ display: 'flex', direction: 'row' }}>
						<Link className='email' to={`/profile/${obj.data.author}`}>{obj.data.author}</Link>
					</div>
				</Card>
			</CardActionArea>
		</div>
	)
}
