import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, } from 'react-router-dom';

function Whiteboard() {
	return (
		<div>
			<div className="section--center">
				<p><b>Whiteboard Sessions</b></p>
				<p>Every week, Pandora invites artists to play acoustic sessions in our offices. The whiteboard illustrations serve as the backdrop as they perform for employees.</p>
				<p>The Whiteboard is an unusual and finicky art medium. The whiteboard marker is deceivingly permanent with its delicate ink — like any other medium, it has it's uniques advantages and disadvantages. But actually, despite its challenges, I have come to love it and it's temporal qualities and I continue to discover new marks this medium has to offer.</p>
				<p>Tools of the trade include the Universal Bullet Tip Marker and the lime green Expo Fine Point marker for sketching.</p>
			</div>
			<div className="section--full">
				<img src={require("./images/wbs/wb-aurora.jpg")} />
				<img src={require("./images/wbs/wb-aurora.jpg")} />
				<img src={require("./images/wbs/wb-aurora.jpg")} />
			</div>
			<div className="section--full">
				<img src={require("./images/wbs/wb-aurora.jpg")} />
			</div>
			<div className="section--full">
				<img src={require("./images/wbs/wb-gow.jpg")} />
			</div>
			<div className="section--full">
				<img src={require("./images/wbs/wb-hollymiranda.jpg")} />
			</div>
			<div className="section--full">
				<img src={require("./images/wbs/wb-suspect.jpg")} />
				<img src={require("./images/wbs/wb-suspect-1.jpg")} />
			</div>
			<div className="section--full">
				<img src={require("./images/wbs/wb-moontaxi.jpg")} />
			</div>
			<div className="section--full">
				<div className="section--center">
					<button>See More On Instagram</button>
					<p>Check out the rest of the talented whiteboard illustration team – Carolyn Jaeger, Shannon Ling, Jane Choi, Trent Thibodeaux and Jehan Khateeb.</p> 
				</div>
			</div>
			<div className="section--center">
				<ul>
					<li><Link to="/Pandora-Dashboard">Previous Project</Link></li>
					<li><Link to="/">Go Home</Link></li>
				</ul>
			</div>
		</div>
	)
}

export default Whiteboard;