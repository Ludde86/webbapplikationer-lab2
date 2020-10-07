import React from 'react';
import Book from './Book';
import Counter from './Counter';

const DisplayBooks = ({ books, loading, handleRemoveBook, handleUpdateBook, setIsEdit, isEdit }) => {
	return (
		<div className="display-books">
			<div className="container">
				<div className="col-12">
					<Counter books={books} />
					<ul className="list-group">
						{books && !loading && isEdit.open ? (
							books.map((book) => {
								if (book.id === isEdit.selectedId) {
									return (
										<Book
											key={book.id}
											book={book}
											handleRemoveBook={handleRemoveBook}
											handleUpdateBook={handleUpdateBook}
											setIsEdit={setIsEdit}
											isEdit={isEdit}
										/>
									);
								}
							})
						) : (
							books.map((book) => {
								return (
									<Book
										key={book.id}
										book={book}
										handleRemoveBook={handleRemoveBook}
										handleUpdateBook={handleUpdateBook}
										setIsEdit={setIsEdit}
										isEdit={isEdit}
									/>
								);
							})
						)}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default DisplayBooks;
