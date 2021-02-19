import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import pigment1 from '../images/design-images/pigment/page1.jpeg';
import pigment2 from '../images/design-images/pigment/page2.jpg';
import pigment3 from '../images/design-images/pigment/page3.jpg';
import pigment4 from '../images/design-images/pigment/page4.png';
import pigment5 from '../images/design-images/pigment/page5.png';
import pigment6 from '../images/design-images/pigment/page6.png';
import pigment7 from '../images/design-images/pigment/page7.png';
import pigment8 from '../images/design-images/pigment/page8.png';
import pigment9 from '../images/design-images/pigment/page9.png';
import pigment10 from '../images/design-images/pigment/page10.png';
import pigment11 from '../images/design-images/pigment/page11.png';

import activityTracker1 from '../images/design-images/activity-tracker/page1.jpg';
import activityTracker2 from '../images/design-images/activity-tracker/page2.jpg';
import activityTracker3 from '../images/design-images/activity-tracker/page3.jpg';
import activityTracker4 from '../images/design-images/activity-tracker/page4.jpg';
import activityTracker5 from '../images/design-images/activity-tracker/page5.jpg';
import activityTracker6 from '../images/design-images/activity-tracker/page6.jpg';
import activityTracker7 from '../images/design-images/activity-tracker/page7.jpg';
import activityTracker8 from '../images/design-images/activity-tracker/page8.jpg';

import './DesignProjects.css';

function DesignProjects(props) {
	return (
		<section className='design-work'>
			<h2>Design Work</h2>
			<div className='design-project pigment'>
				<h3>Website Redesign</h3>
				<p className='tech-list'>
					InVision / Sketch / Photoshop / Indesign / Illustrator
				</p>
				<Carousel interval={null}>
					<Carousel.Item>
						<img className='d-block' src={pigment1} alt='First slide' />
					</Carousel.Item>
					<Carousel.Item>
						<img className='d-block' src={pigment2} alt='Third slide' />
					</Carousel.Item>
					<Carousel.Item>
						<img className='d-block' src={pigment3} alt='Third slide' />
					</Carousel.Item>
					<Carousel.Item>
						<img className='d-block' src={pigment4} alt='Third slide' />
					</Carousel.Item>
					<Carousel.Item>
						<img className='d-block' src={pigment5} alt='Third slide' />
					</Carousel.Item>
					<Carousel.Item>
						<img className='d-block' src={pigment6} alt='Third slide' />
					</Carousel.Item>
					<Carousel.Item>
						<img className='d-block' src={pigment7} alt='Third slide' />
					</Carousel.Item>
					<Carousel.Item>
						<img className='d-block' src={pigment8} alt='Third slide' />
					</Carousel.Item>
					<Carousel.Item>
						<img className='d-block' src={pigment9} alt='Third slide' />
					</Carousel.Item>
					<Carousel.Item>
						<img className='d-block' src={pigment10} alt='Third slide' />
					</Carousel.Item>
					<Carousel.Item>
						<img className='d-block' src={pigment11} alt='Third slide' />
					</Carousel.Item>
				</Carousel>
			</div>
			<div className='design-project activity-tracker'>
				<h3>Activity Tracker</h3>
				<p className='tech-list'>InVision / Sketch / Photoshop / Indesign</p>
				<Carousel interval={null}>
					<Carousel.Item>
						<img className='d-block' src={activityTracker1} alt='First slide' />
					</Carousel.Item>
					<Carousel.Item>
						<img className='d-block' src={activityTracker2} alt='Third slide' />
					</Carousel.Item>
					<Carousel.Item>
						<img className='d-block' src={activityTracker3} alt='Third slide' />
					</Carousel.Item>
					<Carousel.Item>
						<img className='d-block' src={activityTracker4} alt='Third slide' />
					</Carousel.Item>
					<Carousel.Item>
						<img className='d-block' src={activityTracker5} alt='Third slide' />
					</Carousel.Item>
					<Carousel.Item>
						<img className='d-block' src={activityTracker6} alt='Third slide' />
					</Carousel.Item>
					<Carousel.Item>
						<img className='d-block' src={activityTracker7} alt='Third slide' />
					</Carousel.Item>
					<Carousel.Item>
						<img
							className='d-block w-100'
							src={activityTracker8}
							alt='Third slide'
						/>
					</Carousel.Item>
				</Carousel>
			</div>
		</section>
	);
}

export default DesignProjects;
