import React from 'react'
import { Link } from 'react-router-dom'
import Avatar from '@mui/material/Avatar'

export default function Idea_card({ obj }) {
	return (
		<div style={{ border: '1px solid black' }}>
			<h1>{obj.id}</h1>
			<br />
			{obj.data.text}
			<br />
			<br />
			<div style={{ display: 'flex', direction: 'row' }}>
				<Avatar alt='Remy Sharp' src={obj.data.avatar} />
				<Link to={`/profile/${obj.data.author}`}>{obj.data.author}</Link>
			</div>
		</div>
	)
}
