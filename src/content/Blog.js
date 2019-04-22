import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, } from 'react-router-dom';


function Blog() {
	return (
		<div>
			<main>
				<section className="section-default font-h1">
					<p>Pandora Blog</p>
				</section>
				<section className="section-default font-body">
					<p>
						<b>Background</b><br/>
						The Pandora blog reflected the design trends when it was created in 2003 and hasn't been updated since. Engagement was modest and sharing was obscure and often mis-configured.
					</p>
					<p>
						As lead designer and developer, I guided the social team to divise a new content strategy and organize past content for a better user experience. I created visual guidlines to unify and ensure the quality of each post, a standard that it previously lacked.
					</p>
					<p>
						<b>Goal</b><br/>
						<ul>
							<li>Upgrade the platform for a better experience for rich media content</li>
							<li>To increase engagement on the platform and social reposting</li>
							<li>Optimize responsive web viewable on mobile</li>
						</ul>
					</p>
				</section>
				<section className="section-full">
					<img className="maxWidth-900" src={require("./images/blog/1-wires.png")} alt="Pandora Blog - Wireframes" />
				</section>
				<section className="section-default font-body">
					<p>
						<b>The Case for Responsive</b><br/>
						<ul>
							<li>60% of visits were on mobile devices in 2014 and growing year over year, currently 92% of visits in 2017.</li>
							<li>The longest session durations were split between tablet and desktop depending on the referral source.</li>
						</ul>
					</p>
					<p>
						<b>Results</b><br/>
						Compared to the previous year,
						<ul>
							<li>Average session duration grew 20%</li>
							<li>Pages per session grew 5%</li>
							<li>Drop off rates dropped by 4%</li>
						</ul>
					</p>
				</section>
				<section className="section-full margin-8rem">
					<img className="maxWidth-1100" src={require("./images/blog/2-mbl.png")} alt="Pandora Blog - Mobile" />
				</section>
				<section className="section-full padding-8rem bg-grey">
					<img className="maxWidth-900" src={require("./images/blog/3-blog.png")} alt="Pandora Blog - Desktop" />
					<img className="maxWidth-900" src={require("./images/blog/4-blog.png")} alt="Pandora Blog - Desktop" />
					<img className="maxWidth-900" src={require("./images/blog/5-blog.png")} alt="Pandora Blog - Desktop" />
				</section>
				<section className="section-default font-body">
					<p>
						<b>Technical</b><br/>
						The blog runs on Wordpress VIP and the prior theme was not optimized to feature rich media content. Starting with the underscores framework, a new theme was built from the ground up.
					</p>
					<p>
						Social reposting was implemented with the latest SDKs and followed Facebook's recommended Open Graph best practices.
					</p>
					<p>
						<a className="button button-inverted" href="http://blog.pandora.com" target="blank">See the real thing</a>
					</p>
				</section>
				<section className="section-full bg-grey">
					<section className="section-last section-nav">
						<Link className="button" to="/USC-Annenberg">Previous</Link>
						<Link className="button button-inverted" to="/Pandora-Dashboard">Next Project</Link>
					</section>
				</section>
			</main>
		</div>
	)
}

export default Blog;