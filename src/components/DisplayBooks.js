import React from 'react';
import Book from './Book';
import Counter from './Counter';

const DisplayBooks = ({ books, loading, handleRemoveBook, handleUpdateBook }) => {
	return (
		<div className="display-books">
			<div className="container">
				<div className="col-12">
					<Counter books={books} />
					<ul className="list-group">
						{books && !loading ? (
							books.map((book) => {
								return (
									<Book
										key={book.id}
										book={book}
										handleRemoveBook={handleRemoveBook}
										handleUpdateBook={handleUpdateBook}
									/>
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
