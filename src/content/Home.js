import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, } from 'react-router-dom';


function Home() {
	return (
		<div>
			<main>
				<section className="section-default my-12">
					<h1 className="pb-2"><a href="#">joyce lau</a> is an interaction designer based in beautiful <a href="#">oakland, california</a></h1>
					<h2 className="pb-2">currently writing narratives at <a href="#">github</a> previously herding visual systems and wrangling sass at <a href="#">pandora</a>.</h2>
					<ul className="font-h2">
						<li><a href="#">pandora re-design on tv</a></li>
						<li><a href="#">the seamless home experience</a></li>
						<li><a href="#">design systems at pandora</a></li>
					</ul>
				</section>
			</main>
		</div>
	)
}

export default Home;
