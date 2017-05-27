import React from 'react';
import { BrowserRouter as Router, Route, Link, } from 'react-router-dom';

function Resume() {
	return (
		<div>
			<section className="section-default font-emphasis">
				<Link exact to="/">Joyce Lau</Link> <span className="font-primary">ux/ui designer</span>
			</section>
			<section className="section-default font-primary">
				www / <b><a href="http://linkedin.com/in/ohjoycelau" target="blank">linkedin</a></b> / <b><a href="http://instagram.com/ohjoycelau" target="blank">instagram</a></b><br/>
				email / <b><a href="mailto:ohjoycelau@gmail.com?subject=Ahoy!">ohjoycelau@gmail.com</a></b><br/>
			</section>
			<section className="section-default font-primary">
				<p>July 2016 - present
					<br/><b>Product designer</b>, Pandora Media</p>
				<p>Feb 2015 - July 2016
					<br/><b>Web designer/developer</b>, Pandora Media</p>
				<p>Summer 2014
					<br/><b>Visual design intern</b>, Pandora Media</p>
				<p>Jan - Dec 2014
					<br/><b>Web designer/developer</b>, USC Annenberg School for Communication and Journalism</p>
				<p>June - Aug 2013
					<br/><b>Marketing intern</b>, American Youth Symphony</p>
			</section>
			<section className="section-last section-nav">
				<Link className="button" to="/">Back Home</Link>
				<Link className="button" to="/USC-Annenberg">See Projects</Link>
			</section>
		</div>
	)
}

export default Resume;