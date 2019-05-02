import React from 'react';
import { BrowserRouter as Router, Route, Link, } from 'react-router-dom';

function Resume() {
	return (
		<div>
			<main className="font-body">
				<section className="section-default my-12">


					<h1 className="pb-2"><Link exact to="/">joyce lau</Link> is an interaction designer, lover of cat memes and tea</h1>


					<p className="pt-2">sept 2018 — present</p>
					<h2 className="my-0">product designer, github</h2>

					<p className="pt-2">jul 2016 — aug 2018</p>
					<h2 className="my-0">product designer, pandora</h2>

					<p className="pt-2">feb 2015 — jul 2016</p>
					<h2 className="my-0">web designer/developer, pandora</h2>

					<p className="pt-2">jan — dec 2014</p>
					<h2 className="my-0">web designer/developer, usc annenberg</h2>

					<p className="pt-2">2010 — 2014</p>
					<h2 className="my-0">b.a. design, usc roski</h2>



					<ul className="font-h2 pt-2">
						<li className="my-2"><a target="blank" href="http://linkedin.com/in/ohjoycelau">linkedin</a></li>
						<li className="my-2"><a target="blank" href="http://instagram.com/ohjoycelau">instagram</a></li>
						<li className="my-2"><a target="blank" href="mailto:ohjoycelau@gmail.com?subject=Howdy">email</a></li>
					</ul>


				</section>


				<section className="section-default flex-between pb-12">
					<h3><Link to="/">Back Home</Link></h3>
					<h3><Link to="/Pandora-10ft">See Projects</Link></h3>
				</section>


			</main>
		</div>
	)
}

export default Resume;
