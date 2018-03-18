import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, } from 'react-router-dom';


function ATV() {
	return (
		<div>

			<main>
				<section className="section-default">
					<p className="font-h1">Pandora on 10 foot</p>
					<p className="font-h2">It's television's turn to have a digitial renaissance</p>
					<p className="font-body">
						<ul>
							<li>2017 was a significant year as Pandora jumped into the on-demand world</li>
							<li>According to E-marketer, in 2017, Connected TV users grew by over 30.8%</li>
						</ul>
					</p>
				</section>
				<section className="section-default font-body">
					<p className="font-h2">My Role</p>
					<p><b>The Team</b><br/>
					Since the end of 2016, I lead design to unify the connected tv experience at Pandora. Working alongside a researcher, a product manager, and a team of engineers, I helped conduct research, executed prototyping and visual design and directed the accompanying component library.</p>
					<p><b>Planning and Scoping</b><br/>
					We were tasked to achieve feature parity within 6 months of mobile’s launching. We created a vision for the television experience and organized them into attainable milestones. I advocated and negotiated for the user while balancing business goals and technical debt.</p>
					<p>I prioritized user goals by identifying major user flows and pain-points and created a design language for common patterns, delivering them from the most global to niche. This way, I was able to coordinate with the engineering team to stagger deliverables with their back-end workload.</p>
					<p><b>Technologies and Documentation</b><br/>
					With the momentum from the Design Systems team that I lead, the new tv experience was built on a cohesive design language. We built the experience to be platform agnostic to ensure a unified experience in a forward thinking connected home.</p>
				</section>
				<section className="section-default font-body">
					<p className="font-h2">Changing Expectations</p>
					<p>While Connected Home users were growing year over year, month to month uniques were dropping. We identified the perception of limited content and lack of feature parity between devices were driving users to competitors.</p>
					<p><b>The 10' Experience</b><br/>
						<ul>
							<li>As a music app, viewing distance varies upwards of 10’</li>
							<li>The tv is often located in a common area</li>
							<li>Multitasking mindset for various reasons</li>
							<li>D-pad navigation, i.e. no cursor and linear navigation</li>
							<li>Varied capabilities depending on the platform </li>
						</ul>
					</p>
					<p>Of connected home users, around 30-50% were exclusive to the tv platform with roughly 50% under the age of 24. Each device and each segment had varying expectations that also changed with the situation of their public space. Without fragmenting our experience, navigation needed to accommodate for a dynamic public space and a larger library while maintaining a path of least clicks.</p>
					<p>[iron man gif]</p>
				</section>
				<section className="section-default font-body">
					<p className="font-h2">Initial Research</p>
					<p>User interviews showed 75% of users found our existing Browse feature helpful. At the same time, we observed that our competitors tend to forgo deeper layers of content on the tv. We took the recent expansion Pandora’s product into on-demand as an opportunity to recapture those users.</p>
					<p>Our extended feature set needed to be powerful but still simple to navigate on the tv. We sought to minimize user required actions by maximizing Pandora’s powerful music algorithms.</p>
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