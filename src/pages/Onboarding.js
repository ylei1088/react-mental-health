import React from 'react'
import { Link} from 'react-router-dom'

export default function Onboarding() {
	return (
		<div>
			<h1>Welcome</h1>
			<button type='button'>Get Started</button>
			<Link to='/login'>Login</Link>
		</div>
	)
}
