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
				<section className="section-default">
					<img src={require("./images/atv/0-splash.png")} />
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
				<section className="section-default section-center">
					<video className="maxWidth" autoPlay loop type="video/mp4" src={require("./images/atv/0-home.mp4")} ></video>
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
				</section>
				<section className="section-full">
					<img className="maxWidth-900" src={require("./images/atv/0-remote.jpg")} />
				</section>
				<section className="section-default font-body">
					<p className="font-h2">Initial Research</p>
					<p>User interviews showed 75% of users found our existing Browse feature helpful. At the same time, we observed that our competitors tend to forgo deeper layers of content on the tv. We took the recent expansion Pandora’s product into on-demand as an opportunity to recapture those users.</p>
					<p>Our extended feature set needed to be powerful but still simple to navigate on the tv. We sought to minimize user required actions by maximizing Pandora’s powerful music algorithms.</p>
					<p><b>The Multitasking Homebody</b><br/>
					Typically the best sound system in the home was the tv that could reach most areas in the home. Located in primarily in a common space, users can shift quickly between a lean back and lean forward mindsets.</p>
					<p>
						<ul>
							<li>The Busi-body</li>
								<ul><li>Hands are occupied with different tasks</li>
								<li>Likely more than 10’ away, coming in and out of an area often</li></ul>
							<li>The Activity Bundler</li>
								<ul><li>Past-time activities with music on</li>
								<li>Potentially closer the the sound system</li></ul>
						</ul>
					</p>
					<p>By nature of the tv, users are tied to a remote, and moving quickly between at home tasks did not give much time to find the remote.</p>
				</section>
				<section className="section-default font-body">
					<p clasname="font-h2">Our Approach</p>
					<p><b>Designing for accessibility</b></p>
					<img src={require("./images/atv/0-before.jpg")} />
					<span className="font-caption">Pandora on TV circa 2014</span>
					<p>Because Pandora was often paired with other activities around the house, designing for the temporarily incapacitated or distracted user was important. By fulfilling accessibility requirements, it also improves the experience of the multitasking mindset.</p>
					<p>I began with defining a clear system in our top navigation. When a user returns briefly to interact with the tv, clearly identifying their current location takes ‘spot the difference’ out of the experience. Picking up the remote no longer became a guessing game.</p>
				</section>
				<section className="section-default">
					<img src={require("./images/atv/1-options.png")} />
				</section>
				<section className="section-default font-body">
					<p><b>A Global Fixed Navigation</b><br/>
					A fixed top navigation grounded users where they were. We extended the thick white boarder pattern through the rest of the platform and reserved that ui pattern to indicate current location.</p>
				</section>
				<section className="section-full">
					<img src={require("./images/atv/1-globalnav.jpg")} />
				</section>
				<section className="section-default font-body">
					<p><b>Movement through a flat space</b><br/>
					Horizontal navigation is prevalent on the television; however as our multi-tasking users now faced a larger content library, I hypothesized reading laterally was not ideal for our users. I conducted tests with various x/y axis oriented catalogs.</p>
				</section>
				<section className="section-full col-flex">
					<img className="move" src={require("./images/atv/2-moveA.gif")} />
					<img className="move" src={require("./images/atv/2-moveB.gif")} />
				</section>
				<section className="section-default font-body">
					<p>In the end, vertical navigation was easiest to read and understand. The familiar format made browsing though lists and understanding the organization logic much more intuitive.</p>
				</section>
				<section className="section-full">
					<img src={require("./images/atv/2-grids.png")} />
				</section>
				<section className="section-default">
					[final images]
				</section>
				<section className="section-full bg-grey">
					<section className="section-default font-body">
						<p><b>Launched to Android TV</b>
							<ul>
								<li>Redesigns started in the fall of 2016 and launched by March 2017</li>
								<li>In the past year of the app being live, year over year growth has increased by 30%</li>
								<li>Sessions have increased by over 20%</li>
								<li>Listener support has received 37% fewer device feature parity requests</li>
							</ul>
						</p>
					</section>
				</section>
				<section className="section-default font-body">
					<p className="font-h2">A Continuing Journey</p>
					<p>As it often is, scope was highly influenced by the speed to market factor. There were many aspects of navigation and feature parity that were de-scoped from this initial release. We continue to test and explore concepts that were backlogged as well as pursue new ideas for a more connected Pandora experience.</p>
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