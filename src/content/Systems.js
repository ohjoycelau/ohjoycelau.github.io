import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, } from 'react-router-dom';


function Systems() {
	return (
		<div>
			<main>
				<section className="section-default">
					<p className="font-h1">Blossoming Adolescence — A Design Team Story</p>
					<p className="font-body">Fifteen years into the history of Pandora, the design team, in human terms, was quite the awkward teenager.</p>
				</section>
				<section className="section-default font-body">
					<p className="font-h2">Growing pains</p>
					<p>No longer a scrappy start-up, it became increasingly evident our design practices were not scaling. Wrapping up a redesign in 2016, it was clear there were major gaps in the design process. A product team retrospective provided insight into the pain points both engineers and designers were facing due to scale. Well intended suggestions were inevitably quick fixes to the real problem: the need for design system thinking.</p>
					<p>With the support of design leadership, I lead the effort to transform the way Pandora’s design team approached problems both <b><i>in</i></b> our work and <b><i>how</i></b> we work.</p>
				</section>
				<section className="section-default font-body">
					<p className="font-h1">How do we design design?</p>
					<p>As with any design problem: understand, define, ideate, prototype, test.</p>

					<p className="font-h2">Early Insights</p>
					<p>I began by diving deep into our current practices, conducting interviews with designers, engineers and pm’s on their workflows and expectations. Surveys and audits pointed to fragmented processes and as a result, fragmented designs, fragmented teams.</p>
					<p><b>Design overhead and slowed process</b><br/>
					Final decisions were difficult to follow and duplicative work was being done. Out of date and conflicting specs caused engineering to spend extra time chasing down or constantly revisit a design. We needed clearer communication channels and documentation so teams don’t lose time solving problems that have already been solved and instead spend time addressing the meatier questions.</p>
					<p><b>Inconsistencies</b><br/>
					We were at risk of creating 7 different row styles that were very similar but ultimately inconsistent. (Yes, that did happen in a previous iteration of Pandora.) In a coherent system, iterating becomes easier as you no longer worry about maintaining those 7 different rows.</p>
					<p><b>Design Leadership</b><br/>
					In a fragmented team, voices are diluted. When a team’s got your back, a designer is empowered to have greater ownership and accountability in what they do.</p>
					<p><b>The user suffers</b><br/>
					In the end, inconsistencies impact our users from increased cognitive load to sub-optimal execution.</p>
				</section>
				<section className="section-default font-body">
					<p className="font-h2">Laying the foundation</p>
					<p>I partnered with design and engineering managers to prepare a strong foundation for design systems as concurrent projects continued into production. Working closely with the design project coordinators, we integrated design systems while formulating a new designer workflow.</p>
					<p><b>React and Design</b><br/>
					As a personal project, I had been learning ReactJS on the side (as evident here). When used in partnership, React and design methodologies come together well to conceptualize and organize components as it does in a design language.</p>
					<p>Having had played the role of both designer and developer, I found myself often facilitating conversations between designers and engineers. Jargon was often misconstrued; establishing clarity on both sides paved the way for better collaboration.</p>
					<p><b>Defining the Design Language</b><br/>
					Starting with the foundation, I audited, defined and documented our base styles. As we defined progressively more complex patterns, each component was an expansion of an existing pattern. This process also lended itself to stress test patterns and revisit when necessary.</p>
					<p>Once all the core components were documented into a library and understood across teams, productivity improved significantly. Time originally spent clarifying hex codes and spacing reallocated to tackling concepts and refineing experiences.</p>
					<p><b>Creating a new workflow</b><br/>
					Borrowing concepts from engineering git flow, updates go through a review and are accompanied by a change log in the library master file as well as notifying the rest of the team. Decisions concerning the UI were now easily propagated through a single source of truth.</p>
					<p>Designers are now accountable to maintain a cohesive experience. They must be prepared to justify their design decisions – across teams and to the user. At the onset, it may seem to impede and restrict the design process, but in truth, it builds up thoughtfulness to iterate and evolve.</p>
					<p>A suite of solutions accompany a designer’s workflow:
						<ul>
							<li>Systems Design review that includes the systems design team and major stakeholders</li>
							<li>A peer-only review without managers for casual feedback and fyi’s</li>
							<li>Sticker Sheets and Linked Libraries</li>
							<li>Unified Grid System as a Sketch plugin</li>
							<li>Custom automated redlining tools for Sketch</li>
							<li>Live Component Library demonstrating 1:1 design to engineering</li>
							<li>Live Icon Library with live updates for both designers and engineers in their files</li>
							<li>Consistent on-boarding process</li>
							<li>Company wide Design Hub to house all our resources</li>
						</ul>
					</p>
				</section>
				<section className="section-default font-body">
					<p className="font-h2">Continuing the work</p>
					<p><b>Tools</b><br/>
					Systems design tools in the wild often did not fit our needs as standards in the industry are still being flushed out. At the start of the endeavor, Sketch Libraries had not yet been released. After exploring numerous technologies (Figma, Invision, Brand.ai, Lingo, UX Pin, etc.), we decided to stick with a Sketch using symbols in anticipation for Libraries. Our custom solution included some flimflam with symbolic linking on a shared network which works for now.</p>
					<p><b>Legacy work</b><br/>
					Pandora’s design system was forged congruently as the product developed on. We conducted QA on our workflow as the product was built and shipped. And as with any large company, legacy code is inevitable so we took provision to clearly document deprecated patterns.</p>
					<p><b>Systems everywhere</b><br/>
					The design system processes has been successfully laid on the design team, we are still working on propagating it across all platforms. Working with the core web engineering team has been the proof of concept and now the challenge is scaling this even further across more teams.</p>
					<p>By nature, systems design needs a lot of TLC. The work is never done and ever evolving as long as we keep innovating.</p>
				</section>
				<section className="section-full bg-grey">
					<section className="section-last section-nav">
						<Link className="button" to="/Pandora-10ft">Previous</Link>
						<Link className="button" to="/Pandora-Dashboard">Next Project</Link>
					</section>
				</section>
			</main>
		</div>
	)
}

export default Systems;
