import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, } from 'react-router-dom';


function Home() {
	return (
		<div>
			<div className="section--center">
				<p><h2><b>Joyce is currently designing visual systems and wrangling sass at <a href="#">Pandora</a> in Oakland, California.</b></h2></p>
				<p>Favorite things includes cats. Allergies includes cats. This Friday afternoon likely includes drinking tea, <a href="#">kpop</a>, and checking <a href="#">instagram</a>.</p>
				<ul>
					<li><Link to="/USC-Annenberg"><b>See projects</b></Link></li>
					<li><a href="#">Drop a line</a></li>
				</ul>
			</div>
		</div>
	)
}

export default Home;