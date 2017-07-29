import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, } from 'react-router-dom';

function Whiteboard() {
	return (
		<div>
			<main>
				<section className="section-default font-emphasis">
					<p>Whiteboard Sessions</p>
				</section>
				<section className="section-default font-primary">
					<p>
						<b>Premise</b><br/>
						Pandora invites artists to perform and record in our offices. The whiteboard illustrations serve as the backdrop as they perform.
					</p>
					<p>
						<b>Process</b><br/>
						The Whiteboard is an unusual and finicky medium. The whiteboard marker is misleading – it's opaqueness decieves its delicate permanence. Despite challenges, I have come to love it for its temporal and tempermental qualities and I continue to discover new marks this medium has to offer.
					</p>
					<p>
						<b>Tools of the Trade</b><br/>
						<ul>
							<li><a target="blank" href="https://www.amazon.com/Universal-Erase-Marker-Chisel-Black/dp/B002XJOT6W/ref=sr_1_4?s=office-products&ie=UTF8&qid=1495839644&sr=1-4&keywords=Universal+Chisel+Tip+dry+erase+marker">
								Universal Chisel Tip Marker</a></li>
							<li><a target="blank" href="https://www.amazon.com/Low-Odor-Erase-Markers-Bullet-12-Count/dp/B00006IFIN/ref=sr_1_2?s=office-products&ie=UTF8&qid=1495839682&sr=1-2&keywords=expo+bullet+tip+dry+erase+markers">
							Expo Bullet Tip Marker</a></li>
							<li><a target="blank" href="https://www.amazon.com/Low-Odor-Markers-Fashion-Colors-4-count/dp/B000GP0VQW/ref=pd_sbs_236_12?_encoding=UTF8&pd_rd_i=B000GP0VQW&pd_rd_r=D7EMZN5FEZJ6C2E1P6W0&pd_rd_w=f6BQi&pd_rd_wg=HWQgG&psc=1&refRID=D7EMZN5FEZJ6C2E1P6W0">
							Expo Fine Point Marker</a> (lime green)</li>
							<li>q-tips</li>
							<li>crumpled paper</li>
							<li>masking tape</li>
						</ul>
					</p>
				</section>
				<section className="section-full">
					<div className="wbs padding-bottom-8rem">
						<div className="wbs-yt bg-grey">
							<iframe src="https://www.youtube.com/embed/9krkfvdH9vQ?autoplay=0&amp;showinfo=0&amp;controls=1" frameBorder="0" allowFullScreen=""></iframe>
						</div>
						<div className="wbs-yt bg-grey">
							<iframe src="https://www.youtube.com/embed/5skBr_96dPc?autoplay=0&amp;showinfo=0&amp;controls=1" frameBorder="0" allowFullScreen=""></iframe>
						</div>
						<div className="wbs-yt bg-grey">
							<iframe src="https://www.youtube.com/embed/VZ8L_8wC4LU?autoplay=0&amp;showinfo=0&amp;controls=1" frameBorder="0" allowFullScreen=""></iframe>
						</div>
					</div>
					<img src={require("./images/wbs/1-wbs.jpg")} alt="Whiteboard - Aurora" className="padding-bottom-8rem" />
					<img src={require("./images/wbs/2-wbs.jpg")} alt="Whiteboard - Holly Miranda" className="padding-bottom-8rem" />
					<img src={require("./images/wbs/3-wbs.jpg")} alt="Whiteboard - Highly Suspect" />
					<img src={require("./images/wbs/4-wbs.jpg")} alt="Whiteboard - Highly Suspect" className="padding-bottom-8rem" />
					<img src={require("./images/wbs/5-wbs.jpg")} alt="Whiteboard - Wild Child" className="padding-bottom-8rem" />
					<img src={require("./images/wbs/6-wbs.jpg")} alt="Whiteboard - Moon Taxi" />
				</section>
				<section className="section-default font-primary">
					<p>
						I like to make and draw on other things too. Sometimes I take pictures.
					</p>
					<p>
						<a className="button button-inverted" target="blank" href="http://instagram.com/ohjoycelau">See more on Instagram</a>
					</p>
				</section>
				<section className="section-full bg-grey">
					<section className="section-last section-nav">
						<Link className="button" to="/Pandora-ATV">Previous Project</Link>
						<Link className="button" to="/">Back Home</Link>
					</section>
				</section>
			</main>
		</div>
	)
}

export default Whiteboard;