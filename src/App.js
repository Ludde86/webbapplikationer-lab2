import React, { useEffect, useState } from 'react';
import Header from './components/Header/Header';
import Form from './components/Form/Form';
import DisplayBooks from './components/DisplayBooks/DisplayBooks';
import { addBook, fetchBooks, removeBook, requestApiKey } from './utils/api';

const App = () => {
	const [ title, setTitle ] = useState('');
	const [ author, setAuthor ] = useState('');
	const [ books, setBooks ] = useState([]);
	const [ count, setCount ] = useState(0);
	const [ loading, setLoading ] = useState(true);

	const handleFetchBooks = () => {
		fetchBooks().then((res) => setBooks(res.data)).catch((err) => console.log(err));
		setCount(books.length);
		setLoading(false);
	};

	const handleAddBook = (e) => {
		e.preventDefault();
		addBook(title, author);
		setCount(books.length);
		fetchBooks();
	};

	const handleRemoveBook = (id) => {
		removeBook(id);
		setCount(books.length);
		fetchBooks();
	};

	const getNewApiKey = () => {
		localStorage.removeItem('apiKey');
		requestApiKey();
	};

	useEffect(
		() => {
			console.log('effect');
			handleFetchBooks();
		},
		[ count ]
	);

	return (
		<div className="App">
			<Header getNewApiKey={getNewApiKey} />
			<Form setTitle={setTitle} setAuthor={setAuthor} handleAddBook={handleAddBook} />
			<DisplayBooks count={count} books={books} loading={loading} handleRemoveBook={handleRemoveBook} />
		</div>
	);
};

export default App;
