import React from 'react';

const Book = ({ book, handleRemoveBook, handleUpdateBook }) => {
	return (
		<li className="list-item list-group-item d-flex align-items-center">
			<strong className="title"> {book.title} </strong>

			<div className="author"> {book.author} </div>

			<div className="buttons">
				<button
					type="button"
					className="btn btn-success"
					onClick={() => handleUpdateBook(book.id, book.title, book.author)}
				>
					Editera
				</button>
				<button type="button" className="btn btn-danger" onClick={() => handleRemoveBook(book.id)}>
					Ta bort
				</button>
			</div>
		</li>
	);
};

export default Book;
