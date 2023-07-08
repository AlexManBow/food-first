import { Route, Switch } from 'react-router-dom'
import { Header } from './components/Header'
import { Footer } from './components/Footer'

import { Home } from './pages/Home'
import { About } from './pages/About'
import { Contact } from './pages/Contact'
import { Movie } from './pages/Movie'
import { NotFound } from './pages/NotFound'

function App() {
	return (
		<>
			<Header />
			<main className='container content'>
				<Switch>
					<Route exact path='/' component={Home} />
					<Route path='/about' component={About} />
					<Route path='/contacts' component={Contact} />
					<Route path='/movies/:title' component={Movie} />
					<Route component={NotFound} />
				</Switch>
			</main>
			<Footer />
		</>
	)
}

export default App
