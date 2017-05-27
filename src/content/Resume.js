import React from 'react';
import { BrowserRouter as Link, } from 'react-router-dom';

function Resume() {
	return (
		<div>
			<div className="section--center">
				<p><b><h1>Joyce Lau</h1></b>
				<br/><a href="#">Linkedin</a> <a href="#">Instagram</a></p>
				
				<p>2016-present, Product Designer, <a href="http://pandora.com">Pandora</a>
				<br/>2015, Web Designer / Developer, <a href="http://pandora.com">Pandora</a>
				<br/>2014, Web Designer / Developer, <a href="http://annenberg.usc.edu">USC&nbsp;Annenberg</a>
				<br/>2014, Visual Creative Intern, <a href="http://pandora.com">Pandora</a>
				<br/>2013, Graphic Design Intern, <a href="http://blitzagency.com">BLITZ</a>
				<br/>2013, Marketing Intern, <a href="http://aysymphony.org" target="blank">American&nbsp;Youth&nbsp;Symphony</a></p>			
			</div>
			<div className="section--full">
				<img className="full" src={require("./images/alpaca.jpg")} alt="Alpaca good time into your weekend ;)" />
			</div>
			<div className="section--center">
				<ul className="flex">
					<li><Link className="button button--next" to="/">Back Home</Link></li>
				</ul>
			</div>
		</div>
	)
}

export default Resume;