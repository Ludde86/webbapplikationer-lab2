import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import DisplayBooks from './components/DisplayBooks';
import { addBook, fetchBooks, removeBook, updateBook, requestApiKey } from './utils/api';
import Errors from './components/Errors';

const App = () => {
	const [ title, setTitle ] = useState('');
	const [ author, setAuthor ] = useState('');
	const [ books, setBooks ] = useState([]);
	const [ count, setCount ] = useState(0);
	const [ loading, setLoading ] = useState(false);
	const [ error, setError ] = useState(null);
	const [ isEdit, setIsEdit ] = useState({ open: false, selectedId: null });

	const handleFetchBooks = async () => {
		try {
			setLoading(true);
			await fetchBooks().then((res) => setBooks(res.data)).catch((err) => console.error(err));
			setCount(books.length);
			setLoading(false);
		} catch (error) {
			setErrors('Kunde ej hämta böcker');
		}
	};

	const handleAddBook = async (e) => {
		try {
			e.preventDefault();
			await addBook(title, author);
			setCount(books.length);
			setTitle('');
			setAuthor('');
			handleFetchBooks();
		} catch (error) {
			setErrors('Kunde ej lägga till bok');
		}
	};

	const handleRemoveBook = async (id) => {
		try {
			await removeBook(id);
			setCount(books.length);
			handleFetchBooks();
		} catch (error) {
			setErrors('Kunde ej lägga till bok');
		}
	};

	const handleUpdateBook = async (id, title, author) => {
		try {
			await updateBook(id, title, author);
			setIsEdit({ open: false, selectedId: id });
			handleFetchBooks();
		} catch (error) {
			setErrors('Kunde ej uppdatera bok');
		}
	};

	const getNewApiKey = async () => {
		try {
			localStorage.removeItem('apiKey');
			requestApiKey();
			setErrors('Ny API-nyckel');
		} catch (error) {
			setError('Kunde inte hämta API-nyckel');
		}
	};

	const setErrors = (error) => {
		setError(error);
		setTimeout(() => {
			setError(null);
		}, 5000);
	};

	useEffect(
		() => {
			handleFetchBooks();
		},
		[ count ]
	);

	return (
		<div className="App">
			{error && <Errors error={error} />}
			<Header getNewApiKey={getNewApiKey} />
			<Form
				setTitle={setTitle}
				setAuthor={setAuthor}
				handleAddBook={handleAddBook}
				title={title}
				author={author}
			/>
			<DisplayBooks
				count={count}
				books={books}
				loading={loading}
				handleRemoveBook={handleRemoveBook}
				handleUpdateBook={handleUpdateBook}
				setIsEdit={setIsEdit}
				isEdit={isEdit}
			/>
		</div>
	);
};

export default App;
