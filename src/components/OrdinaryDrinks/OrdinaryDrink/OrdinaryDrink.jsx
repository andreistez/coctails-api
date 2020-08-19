import React from 'react'
import s from './OrdinaryDrink.module.scss'
import { NavLink } from 'react-router-dom'

let OrdinaryDrink = ( props ) => {
	return (
		<div className = { s.item }>
			<div className = { s.image }>
				<NavLink to = { `/ordinary-drinks/${props.idDrink}/ordinary-drinks` }>
					<img className = { s.thumbnail } src = { props.strDrinkThumb } alt = { props.strDrink } />
				</NavLink>
			</div>
			<NavLink to = { `/ordinary-drinks/${props.idDrink}` }>
				<h2 className = { s.title }>{ props.strDrink }</h2>
			</NavLink>
		</div>
	)
}

export default OrdinaryDrink