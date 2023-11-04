/* eslint-disable react/prop-types */
const Keys = ({ display, setDisplay }) => {
	const handleClear = () => {
		setDisplay('0');
	};

	const handleDelete = () => {
		display === '0'
			? setDisplay('0')
			: display.length === 1
			? setDisplay('0')
			: setDisplay(display.slice(0, -1));
	};

	const handleOperator = (e) => {
		if (display === '0') {
			return;
		}
		if (
			display.slice(-1) === '+' ||
			display.slice(-1) === '-' ||
			display.slice(-1) === 'x' ||
			display.slice(-1) === '/'
		) {
			setDisplay(display.slice(0, -1) + e.target.value);
		} else {
			setDisplay(display + e.target.value);
		}
	};

	const calculate = (display) => {
		if (
			display.slice(-1) === '+' ||
			display.slice(-1) === '-' ||
			display.slice(-1) === 'x' ||
			display.slice(-1) === '/'
		) {
			setDisplay(display.slice(0, -1));
		} else {
			setDisplay(eval(display).toString());
		}
	};

	const handleValue = (e) => {
		if (display === '0') {
			setDisplay(e.target.value);
		} else {
			setDisplay(display + e.target.value);
		}
	};

	return (
		<div id="keys">
			<div className="row">
				<button id="clear" className="key key-clear" onClick={handleClear}>
					AC
				</button>
				<button
					id="divide"
					className="key key-operator"
					value="/"
					onClick={handleOperator}
				>
					/
				</button>
				<button id="delete" className="key key-delete" onClick={handleDelete}>
					DEL
				</button>
			</div>
			<div className="row">
				<button
					id="seven"
					className="key key-number"
					value={7}
					onClick={handleValue}
				>
					7
				</button>
				<button
					id="eight"
					className="key key-number"
					value={8}
					onClick={handleValue}
				>
					8
				</button>
				<button
					id="nine"
					className="key key-number"
					value={9}
					onClick={handleValue}
				>
					9
				</button>
				<button
					id="multiply"
					className="key key-operator"
					value="*"
					onClick={handleOperator}
				>
					x
				</button>
			</div>
			<div className="row">
				<button
					id="four"
					className="key key-number"
					value={4}
					onClick={handleValue}
				>
					4
				</button>
				<button
					id="five"
					className="key key-number"
					value={5}
					onClick={handleValue}
				>
					5
				</button>
				<button id="six" className="key key-number" value={6} onClick={handleValue}>
					6
				</button>
				<button
					id="subtract"
					className="key key-operator"
					value="-"
					onClick={handleOperator}
				>
					-
				</button>
			</div>
			<div className="row">
				<button id="one" className="key key-number" value={1} onClick={handleValue}>
					1
				</button>
				<button id="two" className="key key-number" value={2} onClick={handleValue}>
					2
				</button>
				<button
					id="three"
					className="key key-number"
					value={3}
					onClick={handleValue}
				>
					3
				</button>
				<button
					id="add"
					className="key key-operator"
					value="+"
					onClick={handleOperator}
				>
					+
				</button>
			</div>
			<div className="row">
				<button
					id="zero"
					className="key key-number"
					value={0}
					onClick={handleValue}
				>
					0
				</button>
				<button
					id="decimal"
					className="key key-number"
					value="."
					onClick={handleValue}
				>
					.
				</button>
				<button
					id="equals"
					className="key key-equal"
					onClick={() => calculate(display)}
				>
					=
				</button>
			</div>
		</div>
	);
};

export default Keys;
