import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, } from 'react-router-dom';


function Systems() {
	return (
		<div>
			<main className="font-body">
				<section className="section-default py-8">


					<h3>Blossoming Adolescence — A Design Team Story</h3>
					<h2  className="my-8">Fifteen years into the history of Pandora, the design team, in human terms, was quite the awkward teenager.</h2>


					<h3>The Awkward Teenager</h3>
					<p>Pandora at fifteen years was no longer a scrappy start-up. It became increasingly evident our design practices were not scaling.</p>
					<p>The launch of Pandora Premium on mobile in 2016 resulted in the bi-furcation of the app. A product team retrospective highlighted major pain points both engineers and designers faced to maintain two experiences. The process was to start again to bring Premium to television and web.</p>
					<p className="mb-6">With the support of design leadership, I lead the effort to transform the way Pandora’s design team approached problems both in our work and how we work.</p>


					<h2 className="mt-8">How do we design design?</h2>
					<h2 className="mt-1 mb-8">Do as with any design problem: understand, define, ideate, test, iterate.</h2>


					<h3>Surveying the Landscape</h3>
					<p>Recently moving teams from web design to product design, I needed to understand how the current team worked.</p>
					<p>Interviewing designers and surveying engineers and product managers on their workflows and expectations revealed a pattern of mis-communication. A fragmented process yielded fragmented designs, fragmented teams, and ultimately a fragmented product.</p>


					<h2 className="mt-8">“Clear is Kind”</h2>
					<p className="mt-0">—Brené Brown</p>

					<p>Pandora was no exception to the classic redlines-final.pdf and redlines-FINAL-final_final.pdf symptom. Out-of-date and conflicting documents caused engineering to spend time chasing redlines. Time was not just wasted, resentment builds up between teams with the lack of clarity.</p>
					<p>Creating a reliable source (or method) of truth is the foundation of design systems. Not just for the sake of the product but also the people building that product. </p>

					<h3>Inconsistencies</h3>
					<p>In a previous overhaul of Pandora, the web product contained 7 different row styles that, for all intensive purposes, were the same; They lived in the code and our redlines in 7 different places and thus needed to maintained 7 times over. </p>
					<p>Inconsistencies not only impact users, e.g. increased cognitive load, it makes our work harder than it should be. We needed to move towards a smarter and more sustainable way of building.</p>

					<h3>Design Leadership</h3>
					<p>The lack of clarity also diluted the authority of Design. When a team’s got your back, a designer is empowered to do what they do best with more ownership and accountability.</p>

					<h3>“A rising tide lifts all boats”</h3>
					<p>Personally, it is hugely disreputable when business goals prioritize investing quality into experiences based on the paid tiers. Good features are pay-walled not good UX. </p>
					<p>With a design system in place, we know our work will benefit all of our users, regardless of how much they pay. You know, because, life is better with music. </p>



					<h2 className="mt-8">Laying the Foundation</h2>

					<p>Design Systems was built concurrently with projects in production. The working team consisted of an engineer, technical design project manager, and myself leading design. </p>

					<h3>React and Design</h3>
					<p>It was important that out from the outset, our design systems were not only design documents but also truly lives one:one in the code. We landed on using the open source tool Styleguidist for its embedded markdown. Keeping the documentation as close to the code ensured context was readily available and simplified up-keep.</p>

					<h3>Defining the Design Language</h3>
					<p>Auditing our product and design documents, I documented and clarified our base styles. It was an opportunity to build relationships with the designers around me, checking in frequently with product owners and working up through progressively more complex patterns and components.</p>
					<p>The result was a unified grid system and a sticker sheet for every designer, sync’d through a web of our existing cloud tools. Rolling out and stress-testing these new processes helped refine our communication culture for the better. </p>

					<h3>Learning cross-functionally</h3>
					<p>I borrowed concepts from collaborative engineering workflows. Designers were accountable for changes in the product to follow through to designs:</p>
					<ul>
						<li>We adopted concepts from git like <kbd>pull</kbd>  and <kbd>push to master</kbd> to keep updates organized and a roll-back process.</li>
						<li>Major product updates have a final design systems review.</li>
						<li>A change log in the master file documents updates about the latest version.</li>
						<li>Updates are also posted to a dedicated Slack to keep the conversation open.</li>
					</ul>
					<p>In addition to keeping design systems relevant, updates to systems also became an avenue to keep colleagues up-to-date with active work. Through this process we clarified ideas of ownership and how feedback was expected to impact a designer’s work.</p>
					<p>Other compounding factors allowed Design Systems to thrive at Pandora including:</p>
					<ul>
						<li>A peer-only review without managers for casual feedback and FYIs</li>
						<li>Custom automated redlining tools in Sketch</li>
						<li>Live Icon Library with an automated update process in both Sketch and code</li>
						<li>A new comprehensive on-boarding process</li>
						<li>Internally public Design Hub to house all our resources</li>
					</ul>


					<h2 className="mt-8">Continuing the Work</h2>
					<p>The design systems process has been successfully embedded into the design team. It is still a work in progress to tie engineering more closely with design, e.g. mobile development. Although we have integrated a lot of our UI into design systems, there is still ample opportunity to incorporate in UX, sound, movement, copy, and more.</p>
					<p>By nature, Design Systems needs a lot of TLC — the work is never done and ever evolving for as long as the product is.</p>
				</section>


				<section className="section-default flex-between pt-8 pb-12">
					<h3><Link to="/Pandora-10ft">Previous</Link></h3>
					<h3><Link to="/Whiteboard-Sessions">Next Project</Link></h3>
				</section>
			</main>
		</div>
	)
}

export default Systems;
