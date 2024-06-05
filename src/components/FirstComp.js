import React from 'react'
import SecondComp from './SecondComp'

const FirstComp = () => {
	return (
		<>
			<div>
				<h1>First Component</h1>
				<p>My text from First Component.</p>
			</div>
			<SecondComp />
		</>
	)
}

export default FirstComp
