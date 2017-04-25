import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, } from 'react-router-dom';

function Resume() {
	return (
		<div>
			<div className="section--center">
				<p><b><h1>Joyce Lau</h1></b>
				<br/><a href="#">Linkedin</a> <a href="#">Instagram</a></p>
				
				<p>2016-present, Product Designer, <a href="http://pandora.com">Pandora</a>
				<br/>2015, Web Designer / Developer, <a href="http://pandora.com">Pandora</a>
				<br/>2014, Web Designer / Developer, <a href="http://annenberg.usc.edu">USC Annenberg</a>
				<br/>2014, Visual Creative Intern, <a href="http://pandora.com">Pandora</a>
				<br/>2013, Graphic Design Intern, <a href="http://blitzagency.com">BLITZ</a>
				<br/>2013, Marketing Intern, <a href="http://aysymphony.org" target="blank">American Youth Symphony</a></p>			
			</div>
			<div className="section--full">
				<img src={require("./images/alpaca.jpg")} />
			</div>
			<div className="section--center">
				<ul>
					<li><Link to="/Whiteboard-Sessions">Previous Project</Link></li>
					<li><Link to="/">Go Home</Link></li>
				</ul>
			</div>
		</div>
	)
}

export default Resume;