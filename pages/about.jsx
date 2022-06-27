import Link from 'next/link';
import Navbar from '../components/Navbar';
import Head from 'next/head'

function About() {
	return (
		<>
			<Head>
			  <title>sickgod Music Bot - About</title>
			</Head>
			<Navbar />
			<section className="hero">
			  <div className="container">
			    <div className="text-wrapper w-full">
			      <h1 className="title">About</h1>
			      <p className="description">
				  <i class="bi bi-music-note-list"></i>
				sickgod Music Bot is a music bot of the highest quality with many commands and features. <br /> <span>Commands:</span> <br />s!play<br />s!stop<br />s!skip<br />s!filter<br />s!loop<br />s!nowplaying<br />s!pause<br />s!progress(time)<br />s!queue<br />s!resume<br />s!save<br />s!search<br />s!volume
			      </p>
		      </div>
	      </div>
			</section>
		</>
	);
}

export default About;
