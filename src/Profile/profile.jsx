import React from "react";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link,
	Navigate,
	useLocation,
} from 'react-router-dom'
import Userfront, {
	SignupForm,
	LoginForm,
	PasswordResetForm,
} from '@userfront/toolkit/react'


export default function Profile(){

    return(
        <RequireAuth>
        <div>
            {Userfront.user.email}
        </div>
        </RequireAuth>
    )
}


function RequireAuth({ children }) {
	let location = useLocation()
	if (!Userfront.tokens.accessToken) {
		return <Navigate to='/login' state={{ from: location }} replace />
	}

	return children
}