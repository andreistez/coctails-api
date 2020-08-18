import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import {
	getDetails,
	getDetailsError,
	triggerDetailsIsLoaded
} from '../../redux/details-reducer'
import { detailsAPI } from '../../api/api'
import SingleDetails from './SingleDetails/SingleDetails'
import Preloader from '../Preloader/Preloader'

class DetailsContainer extends Component {
	componentDidMount() {
		this.props.triggerDetailsIsLoaded( false )
		let idDrink = this.props.match.params.idDrink

		if ( ! idDrink ) {
			idDrink = 11007
		}

		detailsAPI.getItemDetailsByID( idDrink )
			.then(
				data => {
					this.props.getDetails( data.drinks )
				},
				error => {
					this.props.getDetailsError( error )
				}
			)
	}

	componentDidUpdate( prevProps ) {
		let idDrink = this.props.match.params.idDrink

		if ( idDrink !== prevProps.match.params.idDrink ) {
			if ( !idDrink ) {
				idDrink = 11007
			}

			detailsAPI.getItemDetailsByID( idDrink )
				.then(
					data => {
						this.props.getDetails( data.drinks )
					},
					error => {
						this.props.getDetailsError( error )
					}
				)
		}
	}

	render() {
		if ( this.props.error ) {
			return <div>Error { this.props.error.message }</div>
		}	else if ( ! this.props.isLoaded ) {
			return <Preloader />
		}	else {
			return (
				<div className = "container-single">
					<SingleDetails details = { this.props.details } />
				</div>
			)
		}
	}
}

let mapStateToProps = ( state ) => {
	return {
		error	: state.details.error,
		isLoaded: state.details.isLoaded,
		details	: state.details.details
	}
}

let WithURLDataContainerComponent = withRouter( DetailsContainer )

export default connect( mapStateToProps, {
	getDetails, getDetailsError, triggerDetailsIsLoaded
} )( WithURLDataContainerComponent )