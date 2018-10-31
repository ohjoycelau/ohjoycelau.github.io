import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, } from 'react-router-dom';


function Home() {
	return (
		<div>
			<main>
				<section className="section-default">
					<p className="font-h1"><Link to="/Resume">Joyce Lau</Link> is an interaction designer bug based in beautiful <a target="blank" href="https://www.google.com/maps/placelists/list/1Txuf3VoxvgevYPY3ZfRVgmjlqcU">Oakland,&nbsp;California</a>.</p>
					<p className="font-h1">Currently finding her way at <a href="http://github.com" target="blank">GitHub</a>, previously designing visual systems and wrangling sass at <a target="blank" href="https://pandora.com">Pandora</a>.</p>
					<p className="font-body">I draw things on <a href="http://instagram.com/ohjoycelau" target="blank">Instagram</a>, but I'm also professional, so check out <a href="http://linkedin.com/in/ohjoycelau" target="blank">Linkedin</a>. <a href="mailto:ohjoycelau@gmail.com?subject=Ahoy!" target="blank">Drop&nbsp;a&nbsp;line</a> to chat.</p>

				</section>
				<section className="section-full">
					<section className="section-default section-nav padmar-0">
						<Link className="button" to="/Resume">Resume</Link>
						<Link className="button" to="/Pandora-10ft">See Projects</Link>
					</section>
				</section>
			</main>
		</div>
	)
}

export default Home;
