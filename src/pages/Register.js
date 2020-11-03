import React from 'react'
import {Link} from 'react-router-dom'

export default function Register() {
	return (
		<div>
			<h1>Register</h1>
			<button type='button'>Register</button>
			<Link to='/login'>Login</Link>
		</div>
	)
}
