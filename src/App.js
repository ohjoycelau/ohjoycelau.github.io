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
	
	navTo() {
		console.log('this.props');
	}

	render() {
		return (
			<Router>
				<div>	
					<nav className="global-nav">
						<NavLink onClick={this.navTo.bind(this)} activeClassName="active" exact to="/">Home</NavLink>
						<NavLink onClick={this.navTo.bind(this)} activeClassName="active" to="/USC-Annenberg">Annenberg</NavLink>
						<NavLink onClick={this.navTo.bind(this)} activeClassName="active" to="/Pandora-Blog">Blog</NavLink>
						<NavLink onClick={this.navTo.bind(this)} activeClassName="active" to="/Pandora-Dashboard">Dashboard</NavLink>
						<NavLink onClick={this.navTo.bind(this)} activeClassName="active" to="/Whiteboard-Sessions">Whiteboard</NavLink>
					</nav>
					<ScrollToTop>
						<main>
							<Route exact path="/" component={Home} />
							<Route path="/USC-Annenberg" component={Annenberg} />
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
