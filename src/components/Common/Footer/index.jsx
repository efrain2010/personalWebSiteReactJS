import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import Links from '../Links';

const Footer = () => (
	<footer>
		<Container maxWidth="md">
			<Grid container spacing={ 2 }>
				<Grid item xs>
					<h2 className="ftco-heading-2">About</h2>
					<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
					<ul className="ftco-footer-social list-unstyled float-md-left float-lft mt-5">
						<li className="ftco-animate"><a href="https://www.facebook.com/3fRaV" target="_blank" rel="noopener noreferrer"><span className="icon-facebook"></span></a></li>
						<li className="ftco-animate"><a href="https://www.instagram.com/efraintenso/" target="_blank" rel="noopener noreferrer"><span className="icon-instagram"></span></a></li>
					</ul>
				</Grid>
				<Grid item xs>
					<h2 className="ftco-heading-2">Links</h2>
					<Links
						alingment="column"
						space={ 1 }
					/>
				</Grid>
				<Grid item xs>
					<h2 className="ftco-heading-2">Services</h2>
					<ul className="list-unstyled">
						<li><a href="#"><span className="icon-long-arrow-right mr-2"></span>Web Design</a></li>
						<li><a href="#"><span className="icon-long-arrow-right mr-2"></span>Web Development</a></li>
						<li><a href="#"><span className="icon-long-arrow-right mr-2"></span>Business Strategy</a></li>
						<li><a href="#"><span className="icon-long-arrow-right mr-2"></span>Data Analysis</a></li>
						<li><a href="#"><span className="icon-long-arrow-right mr-2"></span>Graphic Design</a></li>
					</ul>
				</Grid>
				<Grid item xs>
					<h2 className="ftco-heading-2">Have a Questions?</h2>
					<div className="block-23 mb-3">
						<ul>
							<li><span className="icon icon-map-marker"></span><span className="text">203 Fake St. Mountain View, San Francisco, California, USA</span></li>
							<li><a href="#"><span className="icon icon-phone"></span><span className="text">+2 392 3929 210</span></a></li>
							<li><a href="#"><span className="icon icon-envelope"></span><span className="text">info@yourdomain.com</span></a></li>
						</ul>
					</div>
				</Grid>
			</Grid>
		</Container>
	</footer>
);

export default Footer;
