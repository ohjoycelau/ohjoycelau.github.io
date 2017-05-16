import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, } from 'react-router-dom';


function Home() {
	return (
		<div>
			<main>
				<section className="section-default">
					<p className="font-emphasis"><a href="#">Joyce Lau</a> is a product designer, currently designing visual systems and wrangling sass at <a target="blank" href="https://pandora.com">Pandora</a> in <a target="blank" href="#">Oakland, California</a>.</p>
					<p className="font-primary">I draw things on <a href="#">Instagram</a>, but I'm also professional, so check out <a href="#">Linkedin</a>. <a href="mailto:ohjoycelau@gmail.com?subject=Ahoy!">Drop a line</a> to see more examples of my work or to just chat.</p>
				</section>
				<section className="section-default">
					<p className="font-primary">Lately I've been up to,</p>
					<p>
						<h2 className="font-primary">Pandora</h2>
						<h1 className="font-emphasis">Designing Pandora's user experience on <a target="blank" href="https://channelstore.roku.com/details/28/pandora">Roku</a> and <a target="blank" href="https://play.google.com/store/apps/details?id=com.pandora.android.atv&hl=en">Android TV</a>.</h1>
					</p>
					<p>
						<h2 className="font-primary">Uncharted Minds</h2>
						<h1 className="font-emphasis">I spoke on a panel about <a target="blank" href="https://www.eventbrite.com/e/design-gurus-summit-lyft-airbnb-microsoft-pandora-cooper-and-more-tickets-22736032084#">creativity</a>.</h1>
					</p>
					<p>
						<h2 className="font-primary">Pandora</h2>
						<h1 className="font-emphasis">Designing and developing Pandora <a target="blank" href="http://www.pandora.com/careers/">Careers</a>, <a target="blank" href="http://blog.pandora.com/">Blog</a> and internal tools.</h1>
					</p>
					<p>
						<h2 className="font-primary">US-China Exchange</h2>
						<h1 className="font-emphasis">Translating designs into <a target="blank" href="http://uschinaexchange.usc.edu/content/uscpeking-university-report-building-us-china-trust-be-released-april-22-2014">responsive web</a> at USC Annenberg Public Affairs.</h1>
					</p>
				</section>
				<section className="section-default section-last">
					<a className="button space-right-s" href="">Resume</a><a className="button" href="mailto:ohjoycelau@gmail.com?subject=Ahoy!">Drop a line</a>
				</section>
			</main>
		</div>
	)
}

export default Home;