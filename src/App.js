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
	const [ loading, setLoading ] = useState(false);
	const [ error, setError ] = useState('');

	const handleFetchBooks = async () => {
		try {
			setLoading(true);
			await fetchBooks().then((res) => setBooks(res.data)).catch((err) => console.log(err));
			setCount(books.length);
			setLoading(false);
		} catch (error) {
			setError('Kunde ej hämta böcker');
		}
	};

	const handleAddBook = async (e) => {
		try {
			e.preventDefault();
			await addBook(title, author);
			setCount(books.length);
			fetchBooks();
		} catch (error) {
			setError('Kunde ej lägga till bok');
		}
	};

	const handleRemoveBook = async (id) => {
		try {
			await removeBook(id);
			setCount(books.length);
			fetchBooks();
		} catch (error) {
			setError('Kunde ej lägga till bok');
		}
	};

	const getNewApiKey = () => {
		localStorage.removeItem('apiKey');
		requestApiKey();
	};

	useEffect(
		() => {
			handleFetchBooks();
		},
		[ count ]
	);

	return (
		<div className="App">
			<Header getNewApiKey={getNewApiKey} />
			<Form setTitle={setTitle} setAuthor={setAuthor} handleAddBook={handleAddBook} />
			{error && <span style={{ color: 'red', textAlign: 'center' }}>{error}</span>}
			<DisplayBooks count={count} books={books} loading={loading} handleRemoveBook={handleRemoveBook} />
		</div>
	);
};

export default App;
