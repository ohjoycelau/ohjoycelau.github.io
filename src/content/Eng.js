import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, } from 'react-router-dom';

function Eng() {
	return (
		<div>
			<main>
				<section className="section-default font-h1">
					<p>Product Engineering Dashboard</p>
				</section>
				<section className="section-default font-body">
					<p>
						<b>Goals</b><br/>
						Replace the server auto generated data display with a more usable interface. The resulting dashboard will display and alert important events for engineers on-call and shown on a large screen in the team area.
					</p>
					<p>
						<b>Process</b><br/>
						It was challenging figuring out requirements on a subject I knew close to zero about. I conducted interviews with engineers on and related to the team, honing in on the data views needed. I neede to balance simplified summaries yet still empower engineers to find the complex data they needed.
					</p>
				</section>
				<section className="section-full">
					<img src={require("./images/dashboard/1-pre.jpg")} />
				</section>
				<section className="section-default font-body">
					<p>
						<b>User Profile</b><br/>
						<ul>
							<li>Server engineers</li>
							<li>Highly skilled and technical, well versed in content</li>
						</ul>
					</p>
					<p>
						<b>Persona</b><br/>
						<ul>
							<li>Chris, 38, server engineer on-call</li>
							<li>Monitoring server statuses in the background both during and outside business hours, during shift</li>
							<li>Responsible for fixing immediate problems indicated by the system</li>
						</ul>
					</p>
					<p>
						<b>Scenario</b><br/>
						<ul>
							<li>A problem occurs in a server group.</li>
							<li>Chris, on-call sees a notification about the problem.</li>
							<li>They must identify and remedy the problem on the correct server in the correct group on the problem axis.</li>
							<li>Chris monitors the dashboard as different solutions are tested.</li>
							<li>When problem is fixed and the error is cached and a fixed state is recorded.</li>
							<li>Chris backgrounds the dashboard until the next error notification.</li>
						</ul>
					</p>
				</section>
				<section className="section-full padding-8rem bg-grey">
					<img className="maxWidth-900" src={require("./images/dashboard/2-dash.png")} />
					<img className="maxWidth-900" src={require("./images/dashboard/3-dash.png")} />
				</section>
				<section className="section-full padding-8rem">
					<img className="maxWidth-1100" src={require("./images/dashboard/4-mbl.png")} />
				</section>
				<section className="section-full bg-grey">
					<section className="section-last section-nav">
						<Link className="button" to="/Pandora-Systems">Previous</Link>
						<Link className="button" to="/USC-Annenberg">Next Project</Link>
					</section>
				</section>
			</main>
		</div>
	)
}

export default Eng;