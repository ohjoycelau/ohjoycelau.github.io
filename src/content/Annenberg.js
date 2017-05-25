import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, } from 'react-router-dom';


function Annenberg() {
	return (
		<div>

			<main>
				<section className="section-default">
					<p className="font-emphasis">USC Annenberg School for Communication and Journalism</p>
				</section>
				<section className="section-default font-primary">
					<p>
						<b>Goal</b><br/>
						Redesign and refresh Annenberg's online presence to reflect the school's greater strategy to become the leader in new media.
					</p>
					<p>
						<b>Process</b><br/>
						Using the lean canvas model, we clarified our audience, painpoints, and technical requirements to guide priorities and align design solutions.
					</p>
					<p>
						<b>Problems</b><br/>
						The site had grown as the school has grown, but the infrastructure technologically as well as information architecture had been neglected. Serving such a wide range of demographics who neede to sift through convoluted links.
					</p>
					<p>
						<b>Audience</b><br/>
						We identified and inverviewed six major distinct demographic groups:
						<ul>
							<li>Students (prospectives, current)</li>
							<li>Staff (faculty, administration, employees)</li>
							<li>Alumni</li>
							<li>Parents</li>
							<li>Donors</li>
							<li>Industry</li>
							<li>Parents (prospects, current, alumni)</li>
						</ul>
					</p>
				</section>
				<section className="section-full bg-grey">
					<img className="maxWidth-900" src={require("./images/annenberg/2-nav.png")} />
				</section>
				<section className="section-full">
					<img className="maxWidth-900" src={require("./images/annenberg/3-home.png")} />
					<img className="maxWidth-900" src={require("./images/annenberg/4-home.png")} />
				</section>
				<section className="section-full bg-grey">
					<img className="maxWidth-1100" src={require("./images/annenberg/5-mobile.png")} />
				</section>
				<section className="section-full">
					<img className="maxWidth-900" src={require("./images/annenberg/6-event.png")} />
					<img className="maxWidth-900" src={require("./images/annenberg/7-event.png")} />
					<section className="section-default font-primary">
						<p>
							<b>Experimenting</b><br/>
							Annenberg hosts countless events throughout the year, however discoverability was difficult and lists were overwhelming. Revamping the traditional 7-day calendar, utilizing flexible widths for days that have events versus days without can give more breathing room when available.
						</p>
					</section>
					<img className="maxWidth-900" src={require("./images/annenberg/8-event.png")} />
				</section>
			</main>
		</div>
	)
}

export default Annenberg;