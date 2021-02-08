import React from 'react';
import PDF from '../images/TabithaPerryResume.pdf';

function Resume(props) {
	return (
		<div>
			<embed
				src={PDF}
				style={{ position: 'absolute', top: 0, left: 0 }}
				type='application/pdf'
				height={'100%'}
				width={'100%'}
			/>
		</div>
	);
}

export default Resume;
