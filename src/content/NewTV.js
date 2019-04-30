import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, } from 'react-router-dom';


function NewTV() {
	return (
		<div>

			<main>
				<section className="section-default font-body">
					<p className="font-h1"><strike>Smallest</strike> Seamless</p>
					<p className="font-h2">From Iron Man to Star Wars, although portability and compactness is a signal for “high-tech”, the magic when something just works smartly is what makes you go ooooh~</p>
					<div className="section-center">
						<video className="" autoPlay loop type="video/mp4" src={require("./images/newtv/0-home.mp4")} alt="A gif of Tony Stark and J.A.R.V.I.S."></video>
					</div>
					<p>With the last re-design, although improved usability, was simple and left the experience wanting. In a new iteration, I wanted to create space for intelligence and accommodate personality. Gesture, motion and depth is what will bring the connected home <a target="blank" href="https://www.imdb.com/title/tt0583497/characters/nm0001455">into the 21st century</a>.</p>
				</section>
				<section className="section-default">
					<img className="" src={require("./images/newtv/1-motion.gif")} alt="Lots of motion" />
				</section>
				<section className="section-default font-body">
					<p className="font-h2">Persistence is key</p>
					<p>Keeping navigation consistent here helps keep the user oriented, which we learned is especially important when you’re multi-tasking. I searched for a navigation that added value both in way finding and content.</p>
					<p>A persistent side navigation highlights the three main experiences of Pandora.</p>
					<p>
						<ol>
							<li>Now playing – your music right now</li>
							<li>Search (and assistant) – something smart</li>
							<li>Your collection – curated by you or for you</li>
						</ol>
					</p>
					<p>Decoupling x and y axes navigation to tell a better narrative of scale. Moving left to right to change scope; moving up and down to explore those contents. You are always 4 clicks from any other part of Pandora.</p>
					<img className="" src={require("./images/newtv/1-direction.jpg")} />
					<p>The disunion also helps keep long press affordances consistent; long press &uarr; to get to the top of a list, long press &larr; to jump to the outermost scope (top-level navigation).</p>
					<video className="maxWidth" autoPlay loop type="video/mp4" src={require("./images/newtv/1-demo.mp4")} alt="Animating new navigation"></video>					
					<p className="font-h2">J.A.R.V.I.S. is that you?</p>
					<p>Just as J.A.R.V.I.S. reminds Tony Stark about his dates with Pepper, also calculates and advises on enemy weak points. I look forward to the day when Voice is readily available and smart enough on the platform, a direction Pandora was already <a href="https://www.theverge.com/2019/1/15/18183331/pandora-voice-mode-commands-music-streaming" target="blank">investing in</a>. Voice assists both menial and intelligent work. You can say ‘Hey Pandora, show me my Home Alone Jams playlist’ to ‘Hey Pandora, play me something new’.</p>
					<img className="" src={require("./images/newtv/1-voice.png")} />
				<p>The persistent side navigation allows Voice to take over without introducing a new visual pattern. It is balancing user feedback signals and content.</p>
				</section>


				<section className="section-default font-body">
					<p className="font-h2">“A re-style is where designers ruin your life by coming up with something prettier than they had previously come up with, resulting in you having to rewrite a bunch of CSS/LESS/SASS/etc”</p>
					<p> — Jacob Thornton, @<a href="https://twitter.com/fat" target="blank">fat</a></p>
					<img src={require("./images/newtv/2-component.png")} />
					<p>Have no fear, engineer — design systems to the rescue. As a part of the 2016 re-design, a component library and accompanying processes were successfully integrated into the 10 some people engineering team. A “re-style”? No problemo.</p>
				</section>




				<section className="section-full bg-grey">
					<section className="section-last section-nav">
						<Link className="button" to="/">Back Home</Link>
						<Link className="button button-inverted" to="/Pandora-Systems">Next Project</Link>
					</section>
				</section>
			</main>
		</div>
	)
}

export default NewTV;