import React from 'react';

const DisplayBooks = ({ books, handleRemoveBook }) => {
	return (
		<div className="display-books">
			<div className="container">
				<div className="col-12">
					<ul className="list-group">
						{books ? (
							books.map((book) => {
								return (
									<li key={book.id} className="list-item list-group-item d-flex align-items-center">
										<strong className="title"> {book.title} </strong>

										<div className="author"> {book.author} </div>

										<div className="buttons">
											<button type="button" className="btn btn-success">
												Editera
											</button>
											<button
												type="button"
												className="btn btn-danger"
												onClick={() => handleRemoveBook(book.id)}
											>
												Ta bort
											</button>
										</div>
									</li>
								);
							})
						) : (
							<strong style={{ textAlign: 'center' }}>Laddar Böcker...</strong>
						)}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default DisplayBooks;
