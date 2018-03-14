import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, } from 'react-router-dom';


function ATV() {
	return (
		<div>

			<main>
				<section className="section-default font-emphasis">
					<p>Pandora on 10 foot</p>
				</section>
				<section className="section-default font-primary">
					<p>
						<b>Who even watches TV anymore?</b><br/>
						<ul>
							<li>Around the US, Smart TV users grew over 30% in 2016 and is predicted to reach over 194M users by 2021.</li>
							<li>In 2016, Pandora grew in Connected Home users year over year, but seen uniques falling month over month.</li>
							<li>Since 2015, Pandora's content library and feature capabilites have grown.</li>
						</ul>
					</p>
					<p>
						<b>Demographic</b><br/>
						<ul>
							<li>Around 30-50% of users are exclusive to the TV Platform.</li>
							<li>Roughly 50% are under 24 years of age.</li>
							<li>User expectations change drastically depending on context.</li>
						</ul>
					</p>
					<p>
						<b>Why people were leaving</b><br/>
						<ul>
							<li>Perception of less content than competitors</li>
							<li>Lack of feature parity (search and play, playlisting, skips and replays)</li>
						</ul>
					</p>
				</section>
				<section className="section-default">
					<img src={require("./images/atv/0-before.jpg")} />
					<span className="font-caption">Pandora on TV circa 2015</span>
				</section>
				<section className="section-default font-primary">
					<p>
						<b>The 10' Experience</b><br/> 
						<ul>
							<li>TV often located in a common area of a household</li>
							<li>Multitasking mindset accompanying</li>
							<li>Varied device quality and capabilities</li>
							<li>Viewing from at least 10' distance</li>
							<li>D-pad navigation, i.e. no cursor & no layered interactions</li>
						</ul>
					</p>
					<p>
						<b>In Research</b><br/>
						Qualitative research combined feedback from Listener Support as well as high level survey around curated music.<br/>
						<ul>
							<li>75% of users found Pandora's existing Browse catalog helpful.</li>
							<li>Competitors tended to forgo deeper layers of content.</li>
						</ul>
					</p>
					<p>
						Previously built as a fragmented service, we sought to build a single app with the best experience that degraded gracefully through varied platform capabilities and user circumstances.
					</p>
				</section>
				<section className="section-full padding-8rem">
					<img className="maxWidth-900" src={require("./images/atv/0-remote.jpg")} />
				</section>
				<section className="section-default font-primary">
					<p>
						<b>Main Design Goals</b><br/>
						<ul>
							<li>Define clear patterns that pass accesibility instead of playing "spot the difference" with users.</li>
							<li>Combat content perception by featuring Browse explicitly.</li>
							<li>
						</ul>
					</p>
				</section>
				<section className="section-full padding-8rem">
					<img className="" src={require("./images/atv/1-globalnav.jpg")} />
					<img className="maxWidth-900" src={require("./images/annenberg/4-home.png")} />
				</section>

				<section className="section-full padding-8rem bg-grey">
					<img className="maxWidth-1100" src={require("./images/annenberg/5-mobile.png")} />
				</section>
				<section className="section-full padding-8rem">
					<img className="maxWidth-900" src={require("./images/annenberg/6-event.png")} />
					<img className="maxWidth-900" src={require("./images/annenberg/7-event.png")} />
					<section className="section-default font-primary">
						<p>
							<b>Experimenting</b><br/>
							Annenberg hosts countless events throughout the year, however discoverability was difficult and lists were overwhelming. Revamping the traditional 7-day calendar, utilizing flexible widths for days that have events versus days without can give more breathing room when available.
						</p>
					</section>
					<video className="maxWidth-900" autoPlay loop type="video/mp4" src={require("./images/annenberg/8-event.mp4")} ></video>
				</section>
				<section className="section-full bg-grey">
					<section className="section-last section-nav">
						<Link className="button" to="/Pandora-Dashboard">Previous</Link>
						<Link className="button" to="/Whiteboard-Sessions">Next Project</Link>
					</section>
				</section>
			</main>
		</div>
	)
}

export default ATV;