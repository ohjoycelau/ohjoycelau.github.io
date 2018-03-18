import React from 'react';
import { BrowserRouter as Router, Route, Link, } from 'react-router-dom';

function Resume() {
	return (
		<div>
			<section className="section-default">
				<p className="font-h1"><Link exact to="/">Joyce Lau</Link> <span className="font-body">ux/ui designer</span></p>
				<p className="font-body">www / <b><a href="http://linkedin.com/in/ohjoycelau" target="blank">linkedin</a></b> / <b><a href="http://instagram.com/ohjoycelau" target="blank">instagram</a></b>
				<br/>email / <b><a href="mailto:ohjoycelau@gmail.com?subject=Ahoy!">ohjoycelau@gmail.com</a></b></p>
			</section>
			<section className="section-default font-body">
				<p>July 2016 - present
					<br/><b>Product designer</b>, Pandora Media</p>
				<p>Feb 2015 - July 2016
					<br/><b>Web designer/developer</b>, Pandora Media</p>
				<p>Summer 2014
					<br/><b>Visual design intern</b>, Pandora Media</p>
				<p>Jan - Dec 2014
					<br/><b>Web designer/developer</b>, USC Annenberg School for Communication and Journalism, Office of Public Affairs</p>
				<p>June - Aug 2013
					<br/><b>Marketing intern</b>, American Youth Symphony</p>
			</section>
			<section className="section-default font-body">
				<p>2010 - 2014
					<br/><b>University of Southern California</b>
					<br/>Roski School of Art and Design, B.A. Design and Drawing
					<br/>Minors in Web Development and Marketing</p>
			</section>
			<section className="section-default">
				<a className="button button-inverted" href="mailto:ohjoycelau@gmail.com?subject=Ahoy!">Drop a line</a>
			</section>
			<section className="section-full bg-grey">
				<section className="section-last section-nav">
					<Link className="button" to="/">Back Home</Link>
					<Link className="button" to="/USC-Annenberg">See Projects</Link>
				</section>
			</section>
		</div>
	)
}

export default Resume;