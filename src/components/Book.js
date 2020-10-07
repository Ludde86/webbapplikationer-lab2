import React, { useState } from 'react';

const Book = ({ book, handleRemoveBook, handleUpdateBook, setIsEdit, isEdit }) => {
	const [ newTitle, setNewTitle ] = useState('');
	const [ newAuthor, setNewAuthor ] = useState('');
	console.log(isEdit);
	return (
		<li className="list-item list-group-item d-flex align-items-center">
			{isEdit.open ? (
				<div className="form-group">
					<input
						type="text"
						className="form-control"
						aria-describedby="title"
						placeholder="Ändra titel"
						onChange={(e) => setNewTitle(e.target.value)}
					/>

					<input
						type="text"
						className="form-control"
						rows="3"
						data-gramm="true"
						data-txt_gramm_id="63b74fb6-c7e4-7f0e-0c1f-438d47ac87a0"
						data-gramm_id="63b74fb6-c7e4-7f0e-0c1f-438d47ac87a0"
						data-gramm_editor="true"
						placeholder="Ändra författare"
						onChange={(e) => setNewAuthor(e.target.value)}
					/>
				</div>
			) : (
				<div>
					<strong className="title"> {book.title} </strong>

					<div className="author"> {book.author} </div>
				</div>
			)}

			<div className="buttons">
				{isEdit.open ? (
					<button
						type="button"
						className="btn btn-success"
						onClick={() => handleUpdateBook(book.id, newTitle, newAuthor)}
					>
						Uppdatera
					</button>
				) : (
					<button
						type="button"
						className="btn btn-success"
						onClick={() => setIsEdit({ open: true, selectedId: book.id })}
					>
						Editera
					</button>
				)}

				<button type="button" className="btn btn-danger" onClick={() => handleRemoveBook(book.id)}>
					Ta bort
				</button>
			</div>
		</li>
	);
};

export default Book;
