import React from 'react';
import styled from 'styled-components';
import Lottie from 'lottie-react';
import animationYes from '../imgs/spaceManYes.json';
import Fireworks from '../Components/Fireworks';

const StyledYes = styled.div`
	width: 100vw;
	height: 100vh;
	text-align: center;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	font-size: 1.5rem;
	.title {
		color: #f0f0f0;
		z-index: 10;
	}
	.animationYes {
		height: 50vh;
		width: auto;
	}
`;

function SheSaidYYes() {
	return (
		<StyledYes>
			<Fireworks />
			<Lottie className="animationYes" animationData={animationYes} />
			<h2 className="title">💋 </h2>
		</StyledYes>
	);
}

export default SheSaidYYes;
