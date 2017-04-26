import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, } from 'react-router-dom';


function Annenberg() {
	return (
		<div>
			<div className="section--center">
				<p><b>USC Annenberg School for Communication and Journalism</b></p>
				<p>Reconceptualizing USC Annenberg's <a href="#">website</a>. As a part of the preliminary design research team, we dissected problems into smaller pieces to address current pain points. I focused on navigation and events, exploring ways to present nested content.</p>
			</div>
			<div className="section--full" id="annenberg--menu">
				<img src={require("./images/annenberg/annenberg-menu.png")} />
			</div>
			<div className="section--full" id="annenberg--mbl">
				<div className="flex">
					<img src={require("./images/annenberg/mbl-1.png")} />
					<img src={require("./images/annenberg/mbl-2.png")} />
					<img src={require("./images/annenberg/mbl-3.png")} />
				</div>
			</div>
			<div className="section--full">
				<div className="section--center">
					<p>Re-thinking the calendar to highlight events, this was one concept where the division of the week highlighted more eventful days. Keeping the traditional 7 day week while de-emphasizing uneventful days retains familiarity to the eye.</p>
				</div>
			</div>
			<div className="section--full" id="annenberg--calendar">
				<img src={require("./images/annenberg/annenberg-calendar.png")} />
			</div>
			<div className="section--full" id="annenberg--event">
				<img src={require("./images/annenberg/annenberg-event-browser.png")} />
			</div>
			<div className="section--center">
				<ul className="group--button">
					<li><Link to="/" className="button">Back Home</Link></li>
					<li><Link to="/Pandora-Blog" className="button">Next Project</Link></li>
				</ul>
			</div>
		</div>
	)
}

export default Annenberg;