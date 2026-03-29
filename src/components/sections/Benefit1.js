
// import "@/node_modules/react-modal-video/css/modal-video.css"
import { useState } from 'react'
import ModalVideo from 'react-modal-video'
import "../../../node_modules/react-modal-video/css/modal-video.css"

export default function Benefit1() {
	const [isOpen, setOpen] = useState(false)
	return (
		<>

			<div className="tf-widget-benefit background-black">
				<div className="themeflat-container">
					<div className="tf-benefit">
						{/* header style v2 */}
						<div className="title-box-v2 center-title-box title-large">
							<span className="sub-title wow fadeInUp animated">Club Pillars</span>
							<h2 className="title-section wow fadeInUp animated">Benefits of the club</h2>
						</div>{/* header style v2 */}
						<div className="benefit-wrap-content">
							<div className="row">
								<div className="col-md-4 benefit-on-left">
									<div className="benefit-item">
										<div className="benefit-content">
											<h6 className="title-benefit wow fadeInLeft animated">
												Rugby for Everyone
											</h6>
											<p className="description-benefit wow fadeInLeft animated">
												All ages. All levels. All shapes. All backgrounds.
											</p>
										</div>
										<div className="benefit-number">
											<span className="number wow zoomIn animated">01</span>
										</div>
									</div>
									<div className="benefit-item">
										<div className="benefit-content">
											<h6 className="title-benefit wow fadeInLeft animated">
												A Community That Grows Together
											</h6>
											<p className="description-benefit wow fadeInLeft animated">
												Carrington is more than a team. It’s a family.
											</p>
										</div>
										<div className="benefit-number">
											<span className="number wow zoomIn animated">02</span>
										</div>
									</div>
								</div>
								<div className="col-md-4 benefit-center ">
									<div className="benefit-video">
										<img className="video" src="images/retinal/video.png" alt="" />
										{/*<a onClick={() => setOpen(true)} className="popup-youtube">
											<i className="icon-play3" />
										</a>*/}
									</div>
								</div>
								<div className="col-md-4 benefit-on-right">
									<div className="benefit-item">
										<div className="benefit-number">
											<span className="number wow zoomIn animated">03</span>
										</div>
										<div className="benefit-content">
											<h6 className="title-benefit wow fadeInRight animated">
												Be one of us
											</h6>
											<p className="description-benefit wow fadeInRight animated">
												Every member contributes, matters, and helps shape the club’s identity.
											</p>
										</div>
									</div>
									<div className="benefit-item">
										<div className="benefit-number">
											<span className="number wow zoomIn animated">04</span>
										</div>
										<div className="benefit-content">
											<h6 className="title-benefit wow fadeInRight animated">
												Proudly Carrington</h6>
											<p className="description-benefit wow fadeInRight animated">
												Rooted in local pride, etched into history and community.
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="JXMWOmuR1hU" onClose={() => setOpen(false)} />
		</>
	)
}
