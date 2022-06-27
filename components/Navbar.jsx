import Link from 'next/link';
import { withRouter } from 'next/router';

function Navbar() {

  return (
		<nav className='navbar'>
			<div className='container'>
				<Link href='/'>
					<a className='logo'>JUKEBOX</a>
				</Link>

				<ul className='nav-links'>
					<li>
						<Link href='/'>
							<a className='nav-item'>Home</a>
						</Link>
					</li>
					<li>
						<a
							className='nav-item'
							target='_blank'
							href='https://discord.gg/jcNfnCEaCv'>
							Support
						</a>
					</li>
				</ul>
			</div>
		</nav>
	);
}

export default withRouter(Navbar);
