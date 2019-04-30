import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, } from 'react-router-dom';


function Systems() {
	return (
		<div>
			<main>
				<section className="section-default">
					<p className="font-h1">Blossoming Adolescence — A Design Team Story</p>
				</section>
				<section className="section-default font-body">
					<p className="font-h2">The Awkward Teenager</p>
					<p>Pandora at fifteen years was no longer a scrappy start-up. It became increasingly evident our design practices were not scaling.</p>
					<p>The launch of Pandora Premium on mobile in 2016 resulted in the bi-furcation of the app. A product team retrospective highlighted major pain points both engineers and designers faced to maintain two experiences. The process was to start again to bring Premium to television and web.</p>
					<p>With the support of design leadership, I lead the effort to transform the way Pandora’s design team approached problems both in our work and how we work.</p>
					<p><b>How do we design design?</b><br/>As with any design problem: understand, define, ideate, prototype, test.</p>
				</section>
				<section className="section-default font-body">
					<p className="font-h2">Surveying the Landscape</p>
					<p>Recently moving teams from web design to product design, I needed to understand how the current team worked.</p>
					<p>Interviewing designers and surveying engineers and product managers on their workflows and expectations revealed a pattern of mis-communication. A fragmented process yielded fragmented designs, fragmented teams, and ultimately a fragmented product.</p>
				</section>
				<section className="section-default font-body">
					<p className="font-h2">“Clear is Kind”
						<br/><span className="font-body">—Brene Brown</span>
					</p>
					<p>Pandora was no exception to the classic redlines-final.pdf and redlines-FINAL-final_final.pdf symptom. Out-of-date and conflicting documents caused engineering to spend time chasing redlines. Time was not just wasted, resentment builds up between teams with the lack of clarity.</p>
					<p>Creating a reliable source (or method) of truth is the foundation of design systems. Not just for the sake of the product but also the people building that product.</p>
					<p><b>Inconsistencies</b><br/>In a previous overhaul of Pandora, the web product contained 7 different row styles that, for all intensive purposes, were the same; They lived in the code and our redlines in 7 different places and thus needed to maintained 7 times over.</p>
					<p>Inconsistencies not only impact users, e.g. increased cognitive load, it makes our work harder than it should be. We needed to move towards a smarter and more sustainable way of building.</p>
					<p><b>Design Leadership</b><br/>The lack of clarity also diluted the authority of Design. When a team’s got your back, a designer is empowered to do what they do best with more ownership and accountability.
					</p>
					<p><b>“A rising tide lifts all boats”</b><br/>Personally, it is hugely disreputable when business goals prioritize investing quality into experiences based on the paid tiers. Good features are pay-walled not good UX.</p>
					<p>With a design system in place, we know our work will benefit all of our users, regardless of how much they pay. You know, because, life is better with music.</p>
				</section>
				<section className="section-default font-body">
					<p className="font-h2">Laying the Foundation</p>
					<p>Design Systems was built concurrently with projects in production. The working team consisted of an engineer, technical design project manager, and myself leading design.</p>
					<p><b>React and Design</b><br/>It was important that out from the outset, our design systems were not only design documents but also truly lives one:one in the code. We landed on using the open source tool Styleguidist for its embedded markdown. Keeping the documentation as close to the code ensured context was readily available and simplified up-keep.</p>
					<p><b>Defining the Design Language</b><br/>Auditing our product and design documents, I documented and clarified our base styles. It was an opportunity to build relationships with the designers around me, checking in frequently with product owners and working up through progressively more complex patterns and components.</p>
					<p>The result was a unified grid system and a sticker sheet for every designer, sync’d through a web of our existing cloud tools. Rolling out and stress-testing these new processes helped refine our communication culture for the better.</p>
					<p><b>Learning cross-functionally</b><br/>I borrowed concepts from collaborative engineering workflows. Designers were accountable for changes in the product to follow through to designs:</p>
					<p><ul>
						<li>We adopted concepts from git like <kbd>pull</kbd>  and <kbd>push to master</kbd> to keep updates organized and a roll-back process.</li>
						<li>Major product updates have a final design systems review.</li>
						<li>A change log in the master file documents updates about the latest version.</li>
						<li>Updates are also posted to a dedicated Slack to keep the conversation open.</li>
					</ul></p>
					<p>In addition to keeping design systems relevant, updates to systems also became an avenue to keep colleagues up-to-date with active work. Through this process we clarified ideas of ownership and how feedback was expected to impact a designer’s work.</p>
					<p>Other compounding factors allowed Design Systems to thrive at Pandora including:</p>
					<p><ul>
						<li>A peer-only review without managers for casual feedback and FYIs</li>
						<li>Custom automated redlining tools in Sketch</li>
						<li>Live Icon Library with an automated update process in both Sketch and code</li>
						<li>A new comprehensive on-boarding process</li>
						<li>Internally public Design Hub to house all our resources</li>
					</ul></p>
				</section>
				<section className="section-default font-body">
					<p className="font-h2">Continuing the Work</p>
					<p>The design systems process has been successfully embedded into the design team. It is still a work in progress to tie engineering more closely with design, e.g. mobile development. Although we have integrated a lot of our UI into design systems, there is still ample opportunity to incorporate in UX, sound, movement, copy, and more.</p>
					<p>By nature, Design Systems needs a lot of TLC — the work is never done and ever evolving for as long as the product is. </p>
				</section>



				<section className="section-full bg-grey">
					<section className="section-last section-nav">
						<Link className="button" to="/Pandora-10ft">Previous</Link>
						<Link className="button button-inverted" to="/Pandora-Dashboard">Next Project</Link>
					</section>
				</section>
			</main>
		</div>
	)
}

export default Systems;
