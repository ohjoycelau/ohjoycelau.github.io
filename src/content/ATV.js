import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, } from 'react-router-dom';


function ATV() {
	return (
		<div>
			<main className="font-body">

				<section className="section-default py-8">


					<h3>Who even watches TV anymore?</h3>
					<h2 className="my-4">In 2016, people increasingly welcomed smart streaming devices into their homes; meanwhile, Pandora geared up to compete in the on-demand world of music streaming.</h2>


					<img alt="LOGO" className="py-8" src={require("./images/atv/0-splash.png")} />


					<p>Pandora on television at that point had not been updated since it’s initial release in 2013. We were in dire need of a refresh.</p>
					<p>I led design on a tight-knit team of 8 engineers, product manager and various platform partners like Roku and Comcast. It was a balancing act prioritizing product and business development goals while delivering a compelling user experience. </p>
					<p>Our goals were to:
						<ul>
							<li>Launch a new experience in 6 months</li>
							<li>Achieve feature parity with Pandora on mobile</li>
							<li>Drive deeper engagement with content</li>
						</ul>
					</p>


					<h2 className="pt-8">Changing Expectations</h2>
					<p>In addition to the market clearly taking to smart televisions, there was already traction within the Pandora user base. Connected home users were growing year over year:
						<ul>
							<li>30-50% of logins used Pandora exclusively on the television</li>
							<li>Roughly 50% of daily active users were under 24</li>
						</ul>
					</p>
					<p>While designing for a much larger screen, I had to consider the physical context of a Pandora listener in their home:
						<ul>
							<li>The television tends to be located in common area, potentially with multiple listeners.</li>
							<li>Televisions are the music device of choice because it is connected to the best sound system in the house.</li>
							<li>As a music app, the 10’ viewing distance is layered with listening distance.</li>
							<li>It is unlikely that a user is solely focused on Pandora.</li>
							<li>Capabilities varied greatly from platform to platform, e.g. xBox vs FireTV.</li>
						</ul>
					</p>
					<p>On top of that, navigating a d-pad is, at best, frustrating.</p>
				</section>


				<section className="section-full">
					<img alt="REMOTES" className="width-900 py-8" src={require("./images/atv/0-remote.jpg")} />
				</section>


				<section className="section-default">
					<h2>The Multitasking Homebody</h2>
					<p>At the outset of the re-design, we did not have a clear picture of our users. Gathering data from our researcher and analysts, I pieced together insights and defined two guiding personas for the home experience:
						<ul>
							<li><b>The Busybody</b>
								<ul>
									<li>Their hands are occupied with different tasks.</li>
									<li>They are likely more than 10’ away, coming in and out of an area often.</li>
								</ul>
							</li>
							<li><b>The Activity Bundler</b>
								<ul>
									<li>Usually they are enjoying other past-time activities with music on.</li>
									<li>Often focused on a different activity though within earshot.</li>
								</ul>
							</li>
						</ul>
					</p>


					<h2 className="pt-8">Early Insights</h2>
					<h3>Designing for accessibility</h3>
					<p>Improving our accessibility standards also improves the experience for a distracted user.</p>
					

						<img alt="OLD PANDORA" className="pt-3" src={require("./images/atv/0-before.jpg")} />
						<span className="font-caption">An old experience of Pandora on most smart TVs circa 2013</span>


					<h3>Moving information</h3>
					<p>I observed that users often played “spot-the-difference” with the remote to figure out where they were on the screen. Not ideal if you want to save a song but have get back to the dishes with the water still running.</p>
					<p>Horizontal navigation was prevalent in the television ecosystem; however with Pandora’s expanded content library, multi-taskers will potentially face much more information.</p>
					<p className="mb-6">I conducted a usability study comparing various x/y axis oriented catalogs. As expected, vertical lists were most intuitive to parse. Users were able to discerned sorting logic with vertical orientations much quicker than horizontal.</p>
				</section>


				<section className="section-full flex-center atv-org">
					<img className="move" src={require("./images/atv/2-moveA.gif")} />
					<img className="move" src={require("./images/atv/2-moveB.gif")} />
				</section>


				<section className="section-default pt-8">
					<h3 className="mt-6">Grounding navigation</h3>
					<p>A global navigation is a reliable visual anchor and clue. Fixed to the top of the screen, a user is able to quickly orient themselves in Pandora.</p>
					<p>Accessibility in the navigation was tested most throughly, landing on a solid enclosed border as foundation. For clarity, there must be at least and only one fully enclosed white boarder at any given time.</p>
				</section>


				<section className="section-full my-8">
					<img src={require("./images/atv/1-globalnav.jpg")} />
				</section>


				<section className="section-default">
					<p>In retrospect, the final execution of the active object state could be emphasized even further with other principles such as scale, motion and/or an even more conspicuous border treatment.</p>


					<h2 className="pt-8">Launching and Impact</h2>
					<ul>
						<li>The re-design launched in March 2017, with on-demand features quickly following in the Fall.</li>
						<li>After the launch, we saw year-over-year user growth increase by 30%.</li>
						<li>Listening hours increased over 20%.</li>
						<li>Listener Support received 37% fewer device feature parity requests.</li>
					</ul>
				</section>


				<section className="section-full py-8">
					<img className="width-900" src={require("./images/atv/3-np.png")} />
				</section>


				<section className="section-default">
					<p>Opening the app up to our recommendations page, Browse, contributed to more new listening sessions created.</p>
				</section>


				<section className="section-full py-8 atv-browse">
					<img className="width-900 frame" src={require("./images/atv/3-frame.png")} />
					<video className="mov" autoPlay muted loop type="video/mp4" src={require("./images/atv/3-browse.mp4")} ></video>
				</section>


				<section className="section-default">
					<h2>A Continuing Journey</h2>
					<p>Scope and timing was heavily influenced by our platform partners. There were many aspects of navigation and feature parity that were de-scoped from the initial release.</p>
					<p>Through this process, I began strategizing how to move away from being Business Development led to Product led. I continued to pursue new concepts and technologies for a more connected Pandora experience.</p>

				</section>


				<section className="section-full py-8">
					<img className="width-900" alt="GRIDS" src={require("./images/atv/2-grids.png")} />
				</section>


				<section className="section-default flex-between pt-8 pb-12">
					<h3><Link to="/">Back Home</Link></h3>
					<h3><Link to="/Pandora-New-10ft">Next Project</Link></h3>
				</section>
			</main>
		</div>
	)
}

export default ATV;
