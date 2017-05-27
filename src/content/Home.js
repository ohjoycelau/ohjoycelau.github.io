import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, } from 'react-router-dom';


function Home() {
	return (
		<div>
			<main>
				<section className="section-default">
					<p className="font-emphasis"><a href="#">Joyce Lau</a> is a product designer, currently designing visual systems and wrangling sass at <a target="blank" href="https://pandora.com">Pandora</a> in <a target="blank" href="https://www.google.com/maps/placelists/list/1Txuf3VoxvgevYPY3ZfRVgmjlqcU">Oakland, California</a>.</p>
					<p className="font-primary">I draw things on <a href="http://instagram.com/ohjoycelau">Instagram</a>, but I'm also professional, so check out <a href="http://linkedin.com/in/ohjoycelau">Linkedin</a>. <a href="mailto:ohjoycelau@gmail.com?subject=Ahoy!">Drop a line</a> to see more examples of my work or to just chat.</p>
					<p><Link className="button button-inverted" to="/USC-Annenberg">See Projects</Link></p>
				</section>
				<section className="section-default">
					<p className="font-primary">Lately I've been up to,</p>
					<p>
						<span className="font-primary">Pandora</span>
						<span className="font-emphasis">Designing Pandora's user experience on <a target="blank" href="https://channelstore.roku.com/details/28/pandora">Roku</a> and <a target="blank" href="https://play.google.com/store/apps/details?id=com.pandora.android.atv&hl=en">Android TV</a>.</span>
					</p>
					<p>
						<span className="font-primary">Uncharted Minds</span>
						<span className="font-emphasis">I spoke on a <a target="blank" href="https://www.eventbrite.com/e/design-gurus-summit-lyft-airbnb-microsoft-pandora-cooper-and-more-tickets-22736032084#">panel</a> about <a target="blank" href="https://twitter.com/weareuncharted/status/732708933043900416">creativity</a>.</span>
					</p>
					<p>
						<span className="font-primary">Pandora</span>
						<span className="font-emphasis">Designing and developing Pandora <a target="blank" href="http://www.pandora.com/careers/">Careers</a>, <a target="blank" href="http://blog.pandora.com/">Blog</a> and internal tools.</span>
					</p>
					<p>
						<span className="font-primary">US-China Exchange</span>
						<span className="font-emphasis">Translating designs into <a target="blank" href="http://uschinaexchange.usc.edu/content/uscpeking-university-report-building-us-china-trust-be-released-april-22-2014">responsive web</a> at USC Annenberg Public Affairs.</span>
					</p>
				</section>
				<section className="section-last">
					<a className="button space-right-s" href="">Resume</a>
					<a className="button" href="mailto:ohjoycelau@gmail.com?subject=Ahoy!">Drop a line</a>
				</section>
			</main>
		</div>
	)
}

export default Home;