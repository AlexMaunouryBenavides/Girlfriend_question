import React from 'react';
import styled from 'styled-components';
import Lottie from 'lottie-react';
import questionAnimation from '../imgs/Animation - 1704033109780.json';

import { Link } from 'react-router-dom';

const StyledQuestion = styled.div`
	max-width: 100vw;
	max-height: 100vh;
	background-color: #f0f0f0;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	font-size: 1.5rem;

	.btn_yes {
		position: absolute;
		left: 45%;
		top: 85%;
		transform: translate(-50%, -50%);
		padding: 15px 40px;
		background-color: #371a45;
		border: none;
		color: #f0f0f0;
		border-radius: 3px;
		text-transform: uppercase;
		transition: all 0.2s;
		cursor: pointer;
		font-family: 'Rubik Doodle Shadow', sans-serif;
		font-size: 1.5rem;
		&:hover {
			background-color: #632d7e;

			box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.49);
			-webkit-box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.49);
			-moz-box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.49);
		}
	}
	.btn_no {
		position: absolute;
		font-size: 1.5rem;
		left: 55%;
		top: 85%;
		color: #f0f0f0;
		transform: translate(-50%, -50%);
		text-transform: uppercase;
		padding: 15px 40px;
		background-color: #371a45;
		border: none;
		border-radius: 3px;
		font-family: 'Rubik Doodle Shadow', sans-serif;
	}
	@media only screen and (max-width: 650px) {
		text-align: center;
		font-size: 1rem;

		.btn_yes {
			font-size: 1rem;
			position: absolute;
			left: 30%;
			top: 90%;
			transform: translate(-50%, -50%);
		}
		.btn_no {
			font-size: 1rem;
			position: absolute;
			left: 65%;
			top: 90%;
			transform: translate(-50%, -50%);
		}
	}
`;

function Question() {
	const handleHover = (e) => {
		e.target.style.left = `${Math.ceil(Math.random() * 90)}% `;
		e.target.style.top = `${Math.ceil(Math.random() * 90)}% `;
		const quote = getRandomQuote();
		if (quote) {
			e.target.textContent = quote;
		}
	};
	const trashTalk = [
		'Stop !',
		'Nulard(e)',
		"Tu m'auras pas",
		'Essaye Toujours',
		'Vas t-en !!',

		' Noooob',
		'Tros lent',
		'Artrose...',
		'Arrêteeeuux !',
		'Police !!!',
	];

	const getRandomNum = (num) => {
		return Math.floor(Math.random() * num);
	};
	const getRandomQuote = () => {
		const index = getRandomNum(trashTalk.length);
		return trashTalk[index];
	};
	return (
		<StyledQuestion>
			<h1>Veux-tu faire de nos vie un rêve ?</h1>
			<Lottie animationData={questionAnimation} />
			<div className="btns">
				<Link to={'/yes'}>
					<button className="btn_yes">
						<p>Yes</p>
					</button>
				</Link>

				<button className="btn_no" onMouseEnter={handleHover} onClick={handleHover}>
					<p>No</p>
				</button>
			</div>
		</StyledQuestion>
	);
}

export default Question;
