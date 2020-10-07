import React, { useState } from 'react';

const Book = ({ book, handleRemoveBook, handleUpdateBook, setIsEdit, isEdit }) => {
	const [ newTitle, setNewTitle ] = useState(book.title);
	const [ newAuthor, setNewAuthor ] = useState(book.author);
	return (
		<li className="list-item list-group-item d-flex align-items-center">
			{isEdit.open ? (
				<div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '70%' }}>
					<input
						type="text"
						className="form-control"
						value={newTitle}
						onChange={(e) => setNewTitle(e.target.value)}
					/>

					<input
						type="text"
						className="form-control"
						value={newAuthor}
						onChange={(e) => setNewAuthor(e.target.value)}
					/>
				</div>
			) : (
				<div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '80%' }}>
					<strong className="title"> {book.title} </strong>

					<div className="author"> {book.author} </div>
				</div>
			)}

			<div className="buttons">
				{isEdit.open ? (
					<div>
						<button
							type="button"
							className="btn btn-success"
							onClick={() => handleUpdateBook(book.id, newTitle, newAuthor)}
						>
							Uppdatera
						</button>
						<button
							type="button"
							className="btn btn-danger"
							onClick={() => setIsEdit({ open: false, selectedId: null })}
						>
							Stäng
						</button>
					</div>
				) : (
					<div>
						<button
							type="button"
							className="btn btn-success"
							onClick={() => setIsEdit({ open: true, selectedId: book.id })}
						>
							Editera
						</button>
						<button type="button" className="btn btn-danger" onClick={() => handleRemoveBook(book.id)}>
							Ta Bort
						</button>
					</div>
				)}
			</div>
		</li>
	);
};

export default Book;
