import Link from 'next/link';
import Navbar from '../components/Navbar';
import Head from 'next/head'


function Home() {
  return (
		<>
			<Head>
				<title>Jukebox</title>
			</Head>
			<Navbar />
			<section className='hero'>
				<div className='container'>
					<div className='text-wrapper'>
						<h1 className='title'>Listen music at the highest level!</h1>
						<p className='description'>
							Jukebox is an experienced discord music bot with a lot features.
						</p>

						<a
							target='_blank'
							href='https://discord.com/api/oauth2/authorize?client_id=990679488998297731&permissions=8&scope=applications.commands%20bot'
							className='cta'>
							Invite
						</a>
					</div>

					<div className='image-wrapper'>
						<img className='logo-opacity' src='/favicon.png' alt='Logo' />
					</div>
				</div>

			</section>
			

			
		</>
	);
}

export default Home;
