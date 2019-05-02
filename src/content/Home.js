import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, } from 'react-router-dom';


function Home() {
	return (
		<div>
			<main>
				<section class="section-default py-8">
					<h1 class="pb-4"><a href="#">joyce lau</a> is an interaction designer based in beautiful <a href="#">oakland, california</a></h1>
					<h2 class="pb-4">currently writing narratives at <a href="#">github</a> previously herding visual systems and wrangling sass at <a href="#">pandora</a>.</h2>
					<ul class="font-h2">
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
