import React, { createContext } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login_pages from './login/login_page'
import Profile from './Profile/profile'
import Signup_pages from './login/sign_up_page'
import {
	loader as ProfileLoader,
	action as ProfileAction,
} from './Profile/profile'
import Profile_edit from './Profile/profile_edit'
import { action as EditAction, loader as EditLoader} from './Profile/profile_edit'


const router = createBrowserRouter([
	{
		path: '/',
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
	}
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
reportWebVitals()
