import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, } from 'react-router-dom';


function Home() {
	return (
		<div>
			<main>
				<section className="section-default">
					<p className="font-h1"><Link to="/Resume">Joyce Lau</Link> is an interaction designer based in beautiful <a target="blank" href="https://www.google.com/maps/placelists/list/1Txuf3VoxvgevYPY3ZfRVgmjlqcU">Oakland,&nbsp;California</a>.</p>
					<p className="font-h1">Currently writing narratives at <a href="http://github.com" target="blank">GitHub</a>, previously herding visual systems and wrangling sass at <a target="blank" href="https://pandora.com">Pandora</a>.</p>
					<p className="font-body">Projects to be updated soon. Stay tuned!</p>

				</section>
				<section className="section-full">
					<section className="section-default section-nav padmar-0">
						<Link className="button" to="/Resume">Resume</Link>
						<Link className="button button-inverted" to="/Pandora-10ft">See Projects</Link>
					</section>
				</section>
			</main>
		</div>
	)
}

export default Home;
