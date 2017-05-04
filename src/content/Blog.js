import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, } from 'react-router-dom';


function Blog() {
	return (
		<div>
			<div className="section--center">
				<p><b>Pandora Blog</b></p>
				<p>As Pandora's brand evolved, the blog fell behind. Reiniscent of Web 1.0, the blog desperately needed a brand and experience&nbsp;refresh.</p>
				<p>The blog is written by musicians about music for music lovers. Pandora has a rich library of beautiful dynamic media that was limited by the old blog's rigid narrow layout. We set strict visual criteria to unify and ensure the quality of each post, a standard that it previously&nbsp;lacked.</p>
			</div>
			<div className="section--full" id="blog--r">
				<div className="flex" id="blog--r-1">
					<img src={require("./images/blog/Blog-R2-A-blue.jpg")} />
					<img src={require("./images/blog/Blog-R2-B-blue.jpg")} />
				</div>
				<div className="section--center" id="blog--r-text">
					<p>From research to design to development, I led the project in collboration with the marketing team to re-invent the reader's experience. Ultimately we transitioned from a category based navigation, to a tag cloud based experience, where readers can explore content in a broader and simultaneously more specific&nbsp;way.</p>
				</div>
				<div className="flex" id="blog--r-2">
					<img src={require("./images/blog/Blog-R2-C-blue.jpg")} />
					<img src={require("./images/blog/Blog-R2-D-blue.jpg")} />				
				</div>
			</div>
			<div className="section--full">
				<div className="section--center">
					<p>Mobile First Always</p>
					<p>More than 60 percent of our audience is reading their mobile devices. Our analytics confirmed optimizing for mobile is crucial; conversations and decisions revolved through on a smaller screen, including multimedia content while maintaining the user&nbsp;experience.</p>
				</div>
				<div className="flex" id="blog--mbl">
					<img src={require("./images/blog/mbl-blog-home.png")} />
					<img src={require("./images/blog/mbl-blog-inart-in.png")} />
					<img src={require("./images/blog/mbl-blog-inart.png")} />
					<img src={require("./images/blog/mbl-blog-search.png")} />
					<img src={require("./images/blog/mbl-blog-searchres.png")} />
					<img src={require("./images/blog/mbl-blog-social.png")} />
				</div>
				<div className="section--center">
					<p>After the redesign, the average session grew by 2 percent and drop-off rates decreased by 4 percent compared to the previous&nbsp;year.</p>
				</div>
			</div>
			<div className="section--full" id="blog--screens">
				<img src={require("./images/blog/blog-home.png")} />
				<img src={require("./images/blog/blog-feed.png")} />
				<img src={require("./images/blog/blog-in.png")} />
			</div>
			<div className="section--full" id="blog--outro">
				<div className="section--center">
					<p>Lessons Learned</p>
					<p>As also the lead developer, I was the point person with Wordpress VIP during their rigorous code review to ensure security and performance. The Pandora Blog is built from the ground up beginning with Wordpress's barebones starter theme. I've used Wordpress in the past, but not like this; now we're pretty good&nbsp;pals.</p>
					<p><a className="button inverted" href="http://blog.pandora.com" target="blank">See The Real Thing</a></p>
				</div>
			</div>
			<div className="section--center">
				<ul className="flex">
					<li><Link className="button button--prev" to="/USC-Annenberg">Previous</Link></li>
					<li><Link className="button button--next" to="/Pandora-Dashboard">Next Project</Link></li>
				</ul>
			</div>
		</div>
	)
}

export default Blog;