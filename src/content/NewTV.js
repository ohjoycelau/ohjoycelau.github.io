import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, } from 'react-router-dom';


function NewTV() {
	return (
		<div>
			<main className="font-body">
				
				<section className="section-default pt-8 pb-4">


					<h3><strike>Smallest</strike> Seamless</h3>
					<h2 className="my-4">From Iron Man to Wreck it Ralph, although portability and compactness are cool technological feats, the magic when something just works smartly is really where you go oooh~</h2>


					<video className="new-ironman py-1" autoPlay loop type="video/mp4" src={require("./images/newtv/0-home.mp4")} alt="A gif of Tony Stark and J.A.R.V.I.S."></video>


					<p>With the last re-design, although improved usability, was simple and left the experience wanting. In a new iteration, I wanted to create space for intelligence and accommodate personality.</p>
					<p>I revisited navigation, this time focusing on the elements of gesture, motion, and depth.</p>


				</section>


				<section className="section-full py-8">
					<img className="" src={require("./images/newtv/1-motion.gif")} alt="Lots of motion" />
				</section>


				<section className="section-default">


					<h3>Persistence is key</h3>
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


					<img className="my-8" alt="Funnel" src={require("./images/newtv/1-direction.jpg")} />


					<p>The disunion also helps keep long press affordances consistent; long press &uarr; to get to the top of a list, long press &larr; to jump to the outermost scope (top-level navigation).</p>


				</section>


				<section className="section-full my-8">
					<video className="width-900" autoPlay loop type="video/mp4" src={require("./images/newtv/1-demo.mp4")} alt="Animating new navigation"></video>					
				</section>


				<section className="section-default">
					<h3>J.A.R.V.I.S. is that you?</h3>
					<p>Just as J.A.R.V.I.S. reminds Tony Stark about his dates with Pepper, also calculates and advises on enemy weak points. I look forward to the day when Voice is readily available and smart enough on the platform, a direction Pandora was already <a href="https://www.theverge.com/2019/1/15/18183331/pandora-voice-mode-commands-music-streaming" target="blank">investing in</a>. Voice assists both menial and intelligent work. You can say ‘Hey Pandora, show me my Home Alone Jams playlist’ to ‘Hey Pandora, play me something new’.</p>
				</section>


				<section className="section-full my-8">
					<img className="width-900" alt="Pandora Voice on TV" src={require("./images/newtv/1-voice.png")} />
				</section>


				<section className="section-default mb-8">
					<p>The persistent side navigation allows Voice to take over without introducing a new visual pattern. It is balancing user feedback signals and content.</p>
					<h2 className="mt-12">“A re-style is where designers ruin your life by coming up with something prettier than they had previously come up with, resulting in you having to rewrite a bunch of CSS/LESS/SASS/etc”</h2>
					<p>— Jacob Thornton, @<a href="https://twitter.com/fat" target="blank">fat</a></p>
					<img className="my-2" alt="component library" src={require("./images/newtv/2-component.png")} />
					<p>Have no fear, engineer — design systems to the rescue. As a part of the 2016 re-design, a component library and accompanying processes were successfully integrated into the 10 some people engineering team. A “re-style”? No&nbsp;problemo.</p>
				</section>





				<section className="section-default flex-between pt-8 pb-12">
					<Link className="button" to="/">Back Home</Link>
					<Link className="button button-inverted" to="/Pandora-Systems">Next Project</Link>
				</section>
			</main>
		</div>
	)
}

export default NewTV;