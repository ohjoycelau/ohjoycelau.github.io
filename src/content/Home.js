import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, } from 'react-router-dom';


function Home() {
	return (
		<div>
			<main>
				<section className="section-default">
					<p className="font-emphasis"><Link to="/Resume">Joyce Lau</Link> is an interaction designer, currently designing from visual systems to wrangling sass at <a target="blank" href="https://pandora.com">Pandora</a> in <a target="blank" href="https://www.google.com/maps/placelists/list/1Txuf3VoxvgevYPY3ZfRVgmjlqcU">Oakland,&nbsp;California</a>.</p>
					<p className="font-primary">I draw things on <a href="http://instagram.com/ohjoycelau" target="blank">Instagram</a>, but I'm also professional, so check out <a href="http://linkedin.com/in/ohjoycelau" target="blank">Linkedin</a>. <a href="mailto:ohjoycelau@gmail.com?subject=Ahoy!" target="blank">Drop&nbsp;a&nbsp;line</a> for inquiries or just to chat.</p>

				</section>
				<section className="section-full bg-grey">
				<section className="section-default section-nav">
						<Link className="button" to="/Resume">Resume</Link>
						<Link className="button" to="/USC-Annenberg">See Projects</Link>
				</section>
				</section>
			</main>
		</div>
	)
}

export default Home;