import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, } from 'react-router-dom';


function Home() {
	return (
		<div>
			<main>
				<section className="section-first">
					<p className="font-h1"><Link to="/Resume">joyce lau</Link> is an interaction designer based in beautiful <a target="blank" href="https://www.google.com/maps/placelists/list/1Txuf3VoxvgevYPY3ZfRVgmjlqcU">oakland,&nbsp;california</a>.</p>
				</section>
				<section className="section-default">
					<p className="font-h2">currently writing narratives at <a href="http://github.com" target="blank">github</a>, previously herding visual systems and wrangling sass at <a target="blank" href="https://pandora.com">pandora</a>.</p>
				</section>
				<section className="section-default">
					<Link className="button button-right" to="/Resume">résumé</Link><br/>
					<Link className="button button-right" to="/Pandora-10ft">see projects</Link>
				</section>
			</main>
		</div>
	)
}

export default Home;
