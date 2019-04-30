import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, } from 'react-router-dom';


function ATV() {
	return (
		<div>

			<main>
				<section className="section-default">
					<p className="font-h1">Who even watches tv anymore?</p>
					<p className="font-h2">In 2016, a growing number of people were welcoming smart televisions into their homes; meanwhile, Pandora was gearing up to compete in the on-demand world of music streaming.</p>
				</section>
				<section className="section-default">
					<img src={require("./images/atv/0-splash.png")} />
				</section>
				<section className="section-default font-body">
					<p>Pandora on television at that point had not been updated since it’s initial release in 2013. We were in dire need of a refresh.</p>
					<p>I lead design on a tight-knit team of 8 engineers, product manager and various platform partners like Roku and Comcast. It was a balancing act prioritizing product and business development goals while delivering a compelling user experience.</p>
					<p>Our goals were to:</p>
					<p><ul>
						<li>Launch a new experience in 6 months</li>
						<li>Complete feature parity with Pandora on mobile</li>
						<li>Drive deeper engagement with content</li>
					</ul></p>
				</section>
				<section className="section-default font-body">
					<p className="font-h2">Changing Expectations</p>
					<p>In addition to the market clearly taking to smart televisions, there was already traction within the Pandora user base. Connected home users were growing year over year:
					</p>
					<p><ul>
						<li>30-50% of logins used Pandora exclusively on the television</li>
						<li>Roughly 50% of daily active users were under 24</li>
					</ul></p>
					<p>While designing for a much larger screen, I had to consider the physical context of a Pandora listener in their home:
					</p>
					<p><ul>
						<li>The television tends to be located in common area, potentially with multiple listeners.</li>
						<li>Televisions are the music device of choice because it is connected to the best sound system in the house.</li>
						<li>As a music app, the 10’ viewing distance is layered with listening distance.</li>
						<li>It is unlikely that a user is solely focused on Pandora. </li>
						<li>Capabilities varied greatly from platform to platform, e.g. xBox vs FireTV</li>
					</ul></p>
					<p>On top of that, navigating on a d-pad is at best frustrating.</p>
				</section>
				<section className="section-full">
					<img className="maxWidth-900" src={require("./images/atv/0-remote.jpg")} />
				</section>
				<section className="section-default font-body">
					<p className="font-h2">The Multitasking Homebody</p>
					<p>At the outset of the re-design, we did not have a clear picture of our users. Gathering data from our researcher and analysts, I pieced together insights and defined two guiding personas for the home experience:</p>
					<p><ul>
						<li>The Busybody
							<ul>
								<li>Their hands are occupied with different tasks.</li>
								<li>They are likely more than 10’ away, coming in and out of an area often.</li>
							</ul>
						</li>
						<li>The Activity Bundler
							<ul>
								<li>Usually they are enjoying other past-time activities with music on.</li>
								<li>Often focused on a different activity though within earshot.</li>
							</ul>
						</li>
					</ul></p>
				</section>
				<section className="section-default font-body">
					<p className="font-h2">Early Insights</p>
					<p><b>Designing for accessibility</b></p>
					<p>Improving our accessibility standards also improves the experience for a distracted user.</p>
					<img src={require("./images/atv/0-before.jpg")} />
					<span className="font-caption">Pandora on TV circa 2014</span>
					<p>I observed that users often played “spot-the-difference” with the remote to figure out where they were on the screen. Not ideal if you want to save a song but have get back to the dishes with the water still running. </p>
					<p><b>Moving information</b><br/>Horizontal navigation was prevalent in the television ecosystem; however with Pandora’s expanded content library, multi-taskers will potentially face much more information.</p>
					<p>I conducted a usability study comparing various x/y axis oriented catalogs. As expected, vertical lists were most intuitive to parse. Users were able to discerned sorting logic with vertical orientations much quicker than horizontal.</p>
				</section>
				<section className="section-full col-flex">
					<img className="atv-move" src={require("./images/atv/2-moveA.gif")} />
					<img className="atv-move" src={require("./images/atv/2-moveB.gif")} />
				</section>
				<section className="section-default font-body">
					<p><b>Grounding navigation</b><br/>
					A global navigation is a reliable visual anchor and clue. Fixed to the top of the screen, a user is able to quickly orient themselves in Pandora.</p>
					<p>Accessibility in the navigation was tested most throughly, landing on a solid enclosed border as foundation. For clarity, there must be at least and only one fully enclosed white boarder at any given time.</p>
				</section>
				<section className="section-full">
					<img src={require("./images/atv/1-globalnav.jpg")} />
				</section>
				<section className="section-default font-body">
					<p>In retrospect, the final execution of the active object state could be emphasized even further with other principles such as scale, motion and/or an even more conspicuous border treatment.</p>
				</section>

				<section className="section-default font-body">
					<p className="font-h2">Launching and Impact</p>
					<p><ul>
						<li>The re-design launched in March 2017, with on-demand features quickly following in the Fall.</li>
						<li>After the launch, we saw year-over-year user growth increase by 30%.</li>
						<li>Listening hours increased over 20%.</li>
						<li>Listener Support received 37% fewer device feature parity requests.</li>
					</ul></p>
				</section>
				<section className="section-full">
					<img className="maxWidth-900 padding-bottom-8rem" src={require("./images/atv/3-np.png")} />
				</section>
				<section className="section-default font-body">
					<p>Opening the app up to our recommendations page, Browse, contributed to more new listening sessions created.</p>
				</section>
				<section className="section-full">
					<div className="maxWidth-900 padding-bottom-8rem atv-browse">
						<img className="frame" src={require("./images/atv/3-frame.png")} />
						<video className="mov" autoPlay loop type="video/mp4" src={require("./images/atv/3-browse.mp4")} ></video>
					</div>
				</section>
				<section className="section-default font-body">
					<p className="font-h2">A Continuing Journey</p>
					<p>Scope and timing was heavily influenced by our platform partners. There were many aspects of navigation and feature parity that were de-scoped from the initial release.</p>
					<p>Through this process, I began strategizing how to move away from being Business Development led to Product led. I continued to pursue new concepts and technologies for a more connected Pandora experience.</p>
				</section>

				

				<section className="section-full bg-grey">
					<section className="section-last section-nav">
						<Link className="button" to="/">Back Home</Link>
						<Link className="button button-inverted" to="/Pandora-New-10ft">Next Project</Link>
					</section>
				</section>
			</main>
		</div>
	)
}

export default ATV;