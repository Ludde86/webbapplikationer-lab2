import React from 'react';

const Errors = ({ error }) => (
	<div className="errors" style={error.success ? { background: '#18BC9C' } : { background: '#e74c3c' }}>
		{error.message}
	</div>
);

export default Errors;
