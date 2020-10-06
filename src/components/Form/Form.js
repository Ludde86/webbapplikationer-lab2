import React, { useState } from 'react';
import { addBook, fetchBooks } from '../../utils/api';

const Form = () => {
	const [ title, setTitle ] = useState('');
	const [ author, setAuthor ] = useState('');

	const handleAddBook = (e) => {
		e.preventDefault();
		addBook(title, author);
		fetchBooks();
	};

	return (
		<div className="container">
			<div className="row form-section">
				<form className="book-form col-6" onSubmit={handleAddBook}>
					<legend>Lägg till dina favoritböcker</legend>
					<div className="form-group">
						<input
							type="text"
							className="form-control"
							id="title"
							aria-describedby="title"
							placeholder="Lägg till titel"
							onChange={(e) => setTitle(e.target.value)}
						/>

						<input
							type="text"
							className="form-control"
							id="author"
							rows="3"
							data-gramm="true"
							data-txt_gramm_id="63b74fb6-c7e4-7f0e-0c1f-438d47ac87a0"
							data-gramm_id="63b74fb6-c7e4-7f0e-0c1f-438d47ac87a0"
							data-gramm_editor="true"
							placeholder="Lägg till författare"
							onChange={(e) => setAuthor(e.target.value)}
						/>
					</div>
					<button type="submit" className="btn btn-primary btn-lg btn-block">
						Skicka
					</button>
				</form>
			</div>
		</div>
	);
};

export default Form;
