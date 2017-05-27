import React, { Component } from 'react';
import { BrowserRouter as Router, withRouter } from 'react-router-dom';

class ScrollToTop extends Component {
	getLocation = () => {
		// console.log(document.querySelector('.active').id);
		let i = document.querySelector('.active').id;
		document.getElementById('meter').style.left = "calc( 100% / 5 * " + i + ")";
	}
	componentDidMount() {
		this.getLocation();
	}
	componentDidUpdate(prevProps) {
		this.getLocation();
		// console.log(this.props.location);
		if (this.props.location !== prevProps.location) {
			window.scrollTo(0, 0);
		}
	}
	render() {
		return this.props.children;
	}
}

export default withRouter(ScrollToTop);