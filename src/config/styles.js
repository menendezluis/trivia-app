import { injectGlobal } from 'styled-components';

// Global styles for the app.
injectGlobal`
	html,
	body {
		margin: 0;
	}

	* {
		box-sizing: border-box;
		font-family: 'Helvetica';
		text-align: center;
	}

	a {
		text-decoration: none;
	}
`;
