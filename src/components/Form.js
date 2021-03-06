import React from 'react';

const Form = ({ handleAddBook, setTitle, setAuthor, title, author }) => {
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
							value={title}
							onChange={(e) => setTitle(e.target.value)}
							autoComplete="off"
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
							value={author}
							onChange={(e) => setAuthor(e.target.value)}
							autoComplete="off"
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
