import React, { useEffect, useState } from 'react';
import { fetchBooks } from '../../utils/api';

const DisplayBooks = () => {
	const [ books, setBooks ] = useState([]);
	console.log(books);

	useEffect(() => {
		fetchBooks().then((res) => setBooks(res.data)).catch((err) => console.log(err));
	}, []);

	return (
		<div className="display-books">
			<div className="container">
				<div className="col-12">
					<ul className="list-group">
						{books &&
							books.map((book) => {
								return (
									<li key={book.id} className="list-item list-group-item d-flex align-items-center">
										<strong className="title"> {book.title} </strong>

										<div className="author"> {book.author} </div>

										<div className="buttons">
											<button type="button" className="btn btn-success">
												Editera
											</button>
											<button type="button" className="btn btn-danger">
												Ta bort
											</button>
										</div>
									</li>
								);
							})}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default DisplayBooks;
