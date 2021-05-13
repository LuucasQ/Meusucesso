import {createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	a {
		text-decoration: none;
		color: #fff;
	}

	body {
		background: #000;
		width: 100vw;
	}


	body, input, textarea, button {
		font: bold 16px Arial, sans-serif;
	}

`;