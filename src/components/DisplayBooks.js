import React from 'react';
import Book from './Book';
import Counter from './Counter';

const DisplayBooks = ({ books, handleRemoveBook, handleUpdateBook, setIsEdit, isEdit }) => {
	return (
		<div className="display-books">
			<div className="container">
				<div className="col-12">
					<Counter books={books} />
					<ul className="list-group">
						{books && isEdit.open ? (
							books.map((book) => {
								let editBook;
								if (book.id === isEdit.selectedId) {
									editBook = (
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
								return editBook;
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
