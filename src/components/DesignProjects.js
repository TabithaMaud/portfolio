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

import pizza1 from '../images/design-images/pizzeria-luigi/pizza1.jpg';
import pizza2 from '../images/design-images/pizzeria-luigi/pizza2.jpg';
import pizza3 from '../images/design-images/pizzeria-luigi/pizza3.jpeg';
import pizza4 from '../images/design-images/pizzeria-luigi/pizza4.png';
import pizza5 from '../images/design-images/pizzeria-luigi/pizza5.png';
import pizza6 from '../images/design-images/pizzeria-luigi/pizza6.png';
import pizza7 from '../images/design-images/pizzeria-luigi/pizza7.png';
import pizza8 from '../images/design-images/pizzeria-luigi/pizza8.png';
import pizza9 from '../images/design-images/pizzeria-luigi/pizza9.png';
import pizza10 from '../images/design-images/pizzeria-luigi/pizza10.png';

import './DesignProjects.css';

function DesignProjects(props) {
	const pizzas = [
		pizza1,
		pizza2,
		pizza3,
		pizza4,
		pizza5,
		pizza6,
		pizza7,
		pizza8,
		pizza9,
		pizza10,
	];

	const activityTrackers = [
		activityTracker1,
		activityTracker2,
		activityTracker3,
		activityTracker4,
		activityTracker5,
		activityTracker6,
		activityTracker7,
		activityTracker8,
	];

	const pigments = [
		pigment1,
		pigment2,
		pigment3,
		pigment4,
		pigment5,
		pigment6,
		pigment7,
		pigment8,
		pigment9,
		pigment10,
		pigment11,
	];

	return (
		<section className='design-work'>
			<h2>Design Work</h2>
			<div className='design-project pigment'>
				<h3>Website Redesign</h3>
				<p className='tech-list'>
					InVision / Sketch / Photoshop / Indesign / Illustrator
				</p>
				<Carousel interval={null}>
					{pigments.map((image, index) => {
						return (
							<Carousel.Item>
								<img className='d-block' src={image} alt={`${index} slide`} />
							</Carousel.Item>
						);
					})}
				</Carousel>
			</div>
			<div className='design-project activity-tracker'>
				<h3>Activity Tracker</h3>
				<p className='tech-list'>
					InVision / Sketch / Photoshop / Indesign / Illustrator
				</p>
				<Carousel interval={null}>
					{activityTrackers.map((image) => {
						return (
							<Carousel.Item>
								<img className='d-block' src={image} alt='First slide' />
							</Carousel.Item>
						);
					})}
				</Carousel>
			</div>
			<div className='design-project pizza'>
				<h3>Pizzeria Luigi</h3>
				<p className='tech-list'>
					InVision / Sketch / Photoshop / Indesign / Illustrator
				</p>
				<Carousel interval={null}>
					{pizzas.map((image) => {
						return (
							<Carousel.Item>
								<img className='d-block' src={image} alt='First slide' />
							</Carousel.Item>
						);
					})}
				</Carousel>
			</div>
			<div className='line-break'></div>
		</section>
	);
}

export default DesignProjects;
