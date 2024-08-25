import React, { createContext } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './Profile/home_page'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login_pages from './login/login_page'
import Profile from './Profile/profile'
import Signup_pages from './login/sign_up_page'
import {
	loader as ProfileLoader,
	action as ProfileAction,
} from './Profile/profile'
import Profile_edit from './Profile/profile_edit'
import {
	action as EditAction,
	loader as EditLoader,
} from './Profile/profile_edit'

import { loader as IdeasLoader } from './ideas/ideas'

import Ideas from './ideas/ideas'

import Create_idea from './ideas/create_idea'
import { action as IdeaAction } from './ideas/create_idea'

import Main_Bar from './components/bar'
import Moderation from './ideas/moderate_ideas'
import { loader as ModerationLoader } from './ideas/moderate_ideas'
import { action as ModerationAction } from './ideas/moderate_ideas'
import Idea_page from './ideas/idea_page'
import { loader as Idea_page_loader } from './ideas/idea_page'

const router = createBrowserRouter([
	{
		path: '/',
		element: <Main_Bar />,
		children: [
			{ index: true, element: <App /> },
			{
				path: '/home',
				element: <App />,
			},
			{
				path: '/login',
				element: <Login_pages />,
			},
			{
				path: '/profile',
				element: <Profile />,
				loader: ProfileLoader,
				action: ProfileAction,
			},
			{
				path: '/signup',
				element: <Signup_pages />,
			},
			{
				path: '/profile/edit',
				element: <Profile_edit />,
				action: EditAction,
				loader: EditLoader,
			},
			{
				path: '/ideas',
				element: <Ideas />,
				loader: IdeasLoader,
			},
			{
				path: '/profile/:User_id',
				element: <Profile />,
				loader: ProfileLoader,
				action: ProfileAction,
			},
			{
				path: '/create/idea',
				element: <Create_idea />,
				loader: EditLoader,
				action: IdeaAction,
			},
			{
				path: '/moderation',
				element: <Moderation />,
				loader: ModerationLoader,
				action: ModerationAction,
			},
			{
				path: '/idea/:Idea_name',
				element: <Idea_page />,
				loader: Idea_page_loader,
			},
		],
	},
])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
