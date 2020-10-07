import React from 'react';
import Counter from '../Counter/Counter';

const DisplayBooks = ({ books, loading, handleRemoveBook }) => {
	return (
		<div className="display-books">
			<div className="container">
				<div className="col-12">
					<Counter books={books} />
					<ul className="list-group">
						{books && !loading ? (
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
