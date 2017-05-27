import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';

// Content
import Home from './content/Home';
import Annenberg from './content/Annenberg';
import Blog from './content/Blog';
import Eng from './content/Eng';
import Whiteboard from './content/Whiteboard';
import Resume from './content/Resume';


class App extends Component {

	currentTo = (i, event) => {
		document.getElementById('meter').style.left = "calc( 100% / 5 * " + i + ")";
	}


	render() {

		const navLinks = ["/", "/USC-Annenberg", "/Pandora-Blog", "/Pandora-Dashboard", "/Whiteboard-Sessions"]

		return (
			<Router>
				<div>	
					<nav className="global-nav">

						<div id="meter"></div>

					    { navLinks.map((links, i) => {
					    	return (
					    		<NavLink 
									exact to={links} 
									id={i}
									activeClassName="active"
									onClick={(event) => this.currentTo(i, event)} >
					    		i</NavLink>
					    	)
					    }) }

					</nav>
					<ScrollToTop>
						<main>
							<Route exact path="/" component={Home} />
							<Route path="/USC-Annenberg" component = {Annenberg} />
							<Route path="/Pandora-Blog" component={Blog} />
							<Route path="/Pandora-Dashboard" component={Eng} />
							<Route path="/Whiteboard-Sessions" component={Whiteboard} />
							<Route path="/Resume" component={Resume} />
						</main>
					</ScrollToTop>
				</div>
			</Router>
		);
	}
}

export default App;
