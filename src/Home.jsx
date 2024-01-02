import React from 'react';
import styled from 'styled-components';
import Question from './Components/Question';

const StyledHome = styled.div`
	width: 100vw;
	height: 100vh;
	background-color: #f0f0f0;
`;

function Home() {
	return (
		<StyledHome>
			<Question />
		</StyledHome>
	);
}

export default Home;
