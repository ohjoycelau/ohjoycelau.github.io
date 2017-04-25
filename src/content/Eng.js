import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, } from 'react-router-dom';

function Eng() {
	return (
		<div>
			<div className="section--center">
				<p><b>Product Engineering Dashboard</b></p>
				<p>The Product Engineering Dashboard processes and reports the health and state of each server and the virtual machines within. The system spits all the data out in a rudimentary system of tables, colors, and (unlabled) numbers. This highly technical data heavy dashboard was a huge intellectual challenge.</p>
				<p>We needed a dashboard that was informative during outages, pushes, and just running in the background on the TV on the engineering floor. It needed to be accessible at a glance but finely detailed in a readily discoverable way.</p>
			</div>
			<div className="section--full"></div>
			<div className="section--full">
				<img src={require("./images/dashboard/dash-layer1.png")} />
				<img src={require("./images/dashboard/dash-layer2.png")} />
			</div>
			<div className="section--center">
				<p>I led researching user's pain points and designing solutions for complex data. I discovered, as a smart user and expert in the data, users tended to seek information in a targeted way.</p>
				<p>Working with an engineer to help with the code on this project freed me to design more nuanced interactions that provided a better experience. We designed an improved search and optimized the logic by nesting information.</p>
			</div>
			<div className="section--full">
				<div className="flex">
					<img src={require("./images/dashboard/mbl-dash-a.png")} />
					<img src={require("./images/dashboard/mbl-dash-b.png")} />
					<img src={require("./images/dashboard/mbl-dash-c.png")} />
					<img src={require("./images/dashboard/mbl-dash-d.png")} />
				</div>
			</div>
			<div className="section--center">
				<ul>
					<li><Link to="/Pandora-Blog">Previous</Link></li>
					<li><Link to="/Whiteboard-Sessions">Next Project</Link></li>
				</ul>
			</div>
		</div>
	)
}

export default Eng;