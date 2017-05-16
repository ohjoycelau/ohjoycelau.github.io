import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, } from 'react-router-dom';


function Home() {
	return (
		<div>
			<main>
				<section className="section-default">
					<p className="font-emphasis"><a href="#">Joyce Lau</a> is a product designer, currently designing visual systems and wrangling sass at <a href="#">Pandora</a> in <a href="#">Oakland, California</a>.</p>
					<p className="font-primary">I draw things on <a href="#">Instagram</a>, but I'm also professional, so check out <a href="#">Linkedin</a>. <a href="#">Drop a line</a> to see more examples of my work or to just chat.</p>
				</section>
				<section className="section-default">
					<p className="font-primary">Lately I've been up to,</p>
					<p>
						<h2 className="font-primary">Pandora</h2>
						<h1 className="font-emphasis">Designing Pandora's user experience on <a href="#">Roku</a> and <a href="#">Android TV</a>.</h1>
					</p>
					<p>
						<h2 className="font-primary">Uncharted Minds</h2>
						<h1 className="font-emphasis">Once, I spoke on a panel about <a href="#">creativity</a>.</h1>
					</p>
					<p>
						<h2 className="font-primary">Pandora</h2>
						<h1 className="font-emphasis">Designing and developing Pandora <a href="#">Careers</a> and <a href="#">Blog</a>, among <a href="#">others</a>.</h1>
					</p>
					<p>
						<h2 className="font-primary">US-China Exchange</h2>
						<h1 className="font-emphasis">Translating designs into <a href="#">responsive web</a> at USC Annenberg Public Affairs.</h1>
					</p>
				</section>
				<section className="section-default section-last">
					<button className="space-right-s" href="">Resume</button><button href="">Drop a line</button>
				</section>
			</main>
		</div>
	)
}

export default Home;