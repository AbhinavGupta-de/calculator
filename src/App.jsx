import { useState } from 'react';
import Display from './components/Display';
import Keys from './components/Keys';

import './styles.css';

const App = () => {
	const [display, setDisplay] = useState('0');

	return (
		<div id="app">
			<h1 className="heading">React Calculator</h1>
			<div className="calculator">
				<Display display={display} />
				<Keys display={display} setDisplay={setDisplay} />
			</div>
		</div>
	);
};

export default App;
