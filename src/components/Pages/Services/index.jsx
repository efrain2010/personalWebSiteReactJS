import React from 'react';
import Container from '@material-ui/core/Container';

const Services = () => (
	<section className="ftco-section" id="services-section">
		<Container maxWidth="md">
			<div className="container">
				<div className="row justify-content-center py-5 mt-5">
					<div className="col-md-12 heading-section text-center ftco-animate">
						<h1 className="big big-2">Services</h1>
						<h2 className="mb-4">Services</h2>
						<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
					</div>
				</div>
				<div className="row">
					<div className="col-md-4 text-center d-flex ftco-animate">
						<span>
							<span className="icon">
								<i className="flaticon-analysis"></i>
							</span>
							<div className="desc">
								<h3 className="mb-5">Web Design</h3>
							</div>
						</span>
					</div>
					<div className="col-md-4 text-center d-flex ftco-animate">
						<span>
							<span className="icon">
								<i className="flaticon-flasks"></i>
							</span>
							<div className="desc">
								<h3 className="mb-5">Phtography</h3>
							</div>
						</span>
					</div>
					<div className="col-md-4 text-center d-flex ftco-animate">
						<span>
							<span className="icon">
								<i className="flaticon-ideas"></i>
							</span>
							<div className="desc">
								<h3 className="mb-5">Web Developer</h3>
							</div>
						</span>
					</div>

					<div className="col-md-4 text-center d-flex ftco-animate">
						<span>
							<span className="icon">
								<i className="flaticon-analysis"></i>
							</span>
							<div className="desc">
								<h3 className="mb-5">App Developing</h3>
							</div>
						</span>
					</div>
					<div className="col-md-4 text-center d-flex ftco-animate">
						<span>
							<span className="icon">
								<i className="flaticon-flasks"></i>
							</span>
							<div className="desc">
								<h3 className="mb-5">Branding</h3>
							</div>
						</span>
					</div>
					<div className="col-md-4 text-center d-flex ftco-animate">
						<span>
							<span className="icon">
								<i className="flaticon-ideas"></i>
							</span>
							<div className="desc">
								<h3 className="mb-5">Product Strategy</h3>
							</div>
						</span>
					</div>
				</div>
			</div>
		</Container>
	</section>
);

export default Services;