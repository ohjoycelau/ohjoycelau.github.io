import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, } from 'react-router-dom';


function Systems() {
	return (
		<div>

			<main>
				<section className="section-default">
					<p className="font-h1">Awkward Adolescence, A Design Team Story</p>
				</section>
				<section className="section-default font-body">
					<p>Fifteen years in, the Pandora design team — in human terms — was quite the awkward teenager.</p>
					<p>Pandora a scrappy start up and it became increasingly evident our design practices were not scaling. Wrapping up a redesign in 2016, it was clear there were major gaps in the design process. A product team retrospective provided insight into the pain points both engineers and designers were facing due to scale. Well intended suggestions were inevitably quick fixes to the real problem: the need for design system thinking.</p>
					<p>Tasked by a Lead Designer, I lead the effort to transform the way Pandora’s design team approached problems both <b><i>in</i></b> our work and <b><i>how</i></b> we work.</p>
				</section>
				<section className="section-default font-body">
					<p className="font-h2">How do we design design?</p>
					<p><b>Early Insights</b><br/>
					I began by diving deep into our current practices, conducting interviews with designers, engineers and pm’s about their process and expectations. Surveys and audits pointed to fragmented processes and as a result, fragmented designs.</p>
					<p><b>Design Ovrehead</b><br/>
					Final decisions were difficult to follow and duplicative work was being done. Design needed a scalable process so designers don’t spend time solving problems that have already been solved and address the meatier questions.</p>
					<p><b>Inconsistency and slowed process</b><br/>
					Out of date and conflicting specs caused engineering to spend extra time chasing down or constantly revisit a design. We were at risk of creating 7 different row styles that were very similar but ultimately inconsistent. (Yes, that did happen in a previous iteration of Pandora.) With a coherent system, iterating becomes easier as you don’t have to worry about maintaining those 7 different rows and focus more on experience.</p>
					<p><b>Fragmented Leadership</b><br/>
					A fragmented team from the outside also has a fragmented voice. When a team’s got your back, a designer is empowered to have greater ownership and accountability in their designs (when working with other teams.)</p>
					<p><b>The user suffers</b><br/>
					In the end, inconsistencies impact our users from increased cognitive load to sub-optimal experiences (performance).</p>
				</section>
				<section className="section-default font-body">
					<p className="font-h2">Laying the foundation</p>
					<p>I partnered with design and engineering managers to coordinate laying a strong foundation for design systems as concurrent projects continued into production.</p>
					<p>I also worked closely with the design project coordinators to integrate design systems into our new Jira workflow.</p>
					<p><b>React and Design</b><br/>
					As a personal project, I had been learning ReactJS on the side. In partnership, methodologies in React and design come together well to organize components as it does in a design language.</p>
					<p>I found myself often facilitating these conversations between designers and engineers. Jargon was often misconstrued; establishing clarity on both sides paved the way for better collaboration.</p>
					<p><b>Defining the Design Language</b><br/>
					Starting with the foundation, I audited, defined and documented our base styles. As we defined progressively more complex patterns, each was built from preceding pattern. (We reexamined patterns when it proved necessary.)</p>
					<p>Once all the core components were documented into a library and understood across teams, productivity improved significantly. Time originally spent clarifying hex codes and spacing is now reallocated to tackle concepts and refine experiences.</p>
					<p><b>Creating a new workflow</b><br/>
					Designers are now accountable to maintain a cohesive experience. They must be prepared to justify their design decisions – across teams and to the user. At the onset, it may seem to slow down the design process, but it also builds in thoughtfulness that turns backtracking overhead into iteration and evolution.</p>
					<p>Borrowing concepts from engineering git flow, updates are accompanied by a change log that is included in the library master file as well as notifying the team. Decisions concerning the UI were now easily propagated through a single source of truth.</p>
				</section>
				<section className="section-default font-body">
					<p className="font-h2">Continuing the work</p>
					<p>As the Pandora’s design system was in progress congruently as the product moved on, we were doing design QA to our own work as they were being shipped. As with any large company, legacy code is inevitable so we took provision to clearly document deprecated patterns.</p>
					<p>Technologies within the design community was also still in progress of being flushed out. At the start of the endeavor, Sketch Libraries had not yet been released. After exploring numerous technologies (Figma, Invision, Brand.ai, Lingo, UX Pin, etc.), we decided to stick with a Sketch using symbols in anticipation for Libraries. Our custom solution included some flimflam with symbolic linking on a shared network which works for now.</p>
					<p>The design system processes has been successfully laid on the design team, we are still working on propagating it across all platforms. Working with the core web engineering team has been the proof of concept and now the challenge is scaling this even further across more teams.</p>
				</section>
				<section className="section-full bg-grey">
					<section className="section-last section-nav">
						<Link className="button" to="/Pandora-Blog">Previous</Link>
						<Link className="button" to="/Pandora-ATV">Next</Link>
					</section>
				</section>
			</main>
		</div>
	)
}

export default Systems;