import React from 'react';
import './ResumeModal.css';
import resume from '../images/resume.png';

function ResumeModal({ openResume, showResume }) {
	return (
		<div className={openResume} onClick={showResume}>
			<div>
				<button className='close-resume' onClick={showResume}>
					Close
				</button>
				<img src={resume} alt='resume'></img>
			</div>
		</div>
	);
}

export default ResumeModal;
