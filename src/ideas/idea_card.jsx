import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Link } from 'react-router-dom'
import Avatar from '@mui/material/Avatar'
import { CardActionArea } from '@mui/material';

export default function Idea_card({ obj }) {
	return (
		<Card style={{ border: '1px solid black' }}>
			<CardActionArea>
				<CardContent>
					<h1>{obj.id}</h1>
					<br />
					{obj.data.text}
					<br />
					<br />
				</CardContent>
				<CardMedia>
					<Avatar alt='Remy Sharp' src={obj.data.avatar} />
				</CardMedia>
				<div style={{ display: 'flex', direction: 'row' }}>

					<Link to={`/profile/${obj.data.author}`}>{obj.data.author}</Link>
				</div>
			</CardActionArea>
		</Card>
	)
}
