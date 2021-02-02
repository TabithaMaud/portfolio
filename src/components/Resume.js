import React from 'react';
import PDF from '../images/TabithaPerryResume.pdf';
// import { Document } from 'react-pdf';
// import { ReactPDF } from 'react-pdf';

function Resume(props) {
	return (
		<div>
			<embed src={PDF} type='application/pdf' height={800} width={500} />
		</div>
	);
}

export default Resume;
