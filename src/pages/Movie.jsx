import { useParams, useHistory, useRouteMatch, useLocation } from 'react-router-dom'

function Movie() {
	const { title } = useParams()
	const { goBack } = useHistory()
	console.log('useRouteMatch()', useRouteMatch())
	console.log('useLocation()', useLocation())
	return (
		<>
			<h1>Some move {title}</h1>
			<button className='btn' onClick={goBack}>
				Go back
			</button>
		</>
	)
}

export { Movie }
