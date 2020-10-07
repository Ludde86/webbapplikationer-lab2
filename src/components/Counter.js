import React from 'react';

const Counter = ({ books }) => {
	return (
		<div>
			{books &&
			books.length !== 0 && (
				<span
					style={{
						border: '1px solid black',
						borderRadius: 50,
						paddingLeft: 5,
						paddingRight: 5,
						textAlign: 'center',
						marginLeft: -40
					}}
				>
					{books.length}
				</span>
			)}
		</div>
	);
};

export default Counter;
