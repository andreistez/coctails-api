const GET_DETAILS				= 'GET-DETAILS'
const GET_DETAILS_ERROR			= 'GET-DETAILS-ERROR'
const TRIGGER_DETAILS_IS_LOADED	= 'TRIGGER-DETAILS-IS-LOADED'
const SET_CATALOG_URL 			= 'SET-CATALOG-URL'

let initialState = {
	error		: null,
	isLoaded	: false,
	details		: [],
	catalogURL	: null
}

const detailsReducer = ( state = initialState, action ) => {
	switch ( action.type ) {
		case GET_DETAILS:
			return {
				...state,
				isLoaded: true,
				details	: action.details ? [...action.details] : '' 
			}

		case GET_DETAILS_ERROR:
			return {
				...state,
				isLoaded: true,
				error	: action.error
			}

		case TRIGGER_DETAILS_IS_LOADED:
			return {
				...state,
				isLoaded: action.isLoaded
			}

		case SET_CATALOG_URL:
			return {
				...state,
				catalogURL: action.catalogURL
			}

		default:
			return state
	}
}
export default detailsReducer

export const getDetails = ( details ) => ( { type: GET_DETAILS, details } )
export const getDetailsError = ( error ) => ( { type: GET_DETAILS_ERROR, error } )
export const triggerDetailsIsLoaded = ( isLoaded ) => ( { type: TRIGGER_DETAILS_IS_LOADED, isLoaded } )
export const setCatalogURL = ( catalogURL ) => ( { type: SET_CATALOG_URL, catalogURL } )