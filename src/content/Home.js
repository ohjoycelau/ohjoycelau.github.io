import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, } from 'react-router-dom';


function Home() {
	return (
		<div>
			<main>
				<section className="section-default my-12">
					

					<h1 className="pb-2"><Link to="/Resume">joyce lau</Link> is an interaction designer based in beautiful <a href="https://goo.gl/maps/mCNrfEDSB3Uy53wF9" target="blank">oakland, california</a></h1>
					

					<h2 className="pb-2">currently writing narratives at <a href="http://github.com" target="blank">github</a> previously herding visual systems and wrangling sass at <a href="http://pandora.com" target="blank">pandora</a>.</h2>
					

					<ul className="font-h2">
						<li className="my-2"><Link to="/Pandora-10ft">pandora on television</Link></li>
						<li className="my-2"><Link to="/Pandora-New-10ft">the seamless home</Link></li>
						<li className="my-2"><Link to="/Pandora-Systems">design systems at Pandora</Link></li>
						<li className="my-2"><Link to="/Whiteboard-Sessions">whiteboard sessions</Link></li>
					</ul>


				</section>


				<section className="section-default flex-between pb-12">
					<h3><Link to="/Resume">Résumé</Link></h3>
					<h3><Link to="/Pandora-10ft">See Projects</Link></h3>
				</section>


			</main>
		</div>
	)
}

export default Home;
