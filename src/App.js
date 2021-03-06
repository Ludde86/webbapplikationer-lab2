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
	const [ error, setError ] = useState({ success: null, message: '' });
	const [ isEdit, setIsEdit ] = useState({ open: false, selectedId: null });
	const [ toggleBookForm, setToggleBookForm ] = useState(true);

	const handleFetchBooks = async () => {
		try {
			let res = await fetchBooks();
			setBooks(res.data);
			setCount(books.length);
		} catch (error) {
			setErrors({ success: false, message: 'Kunde ej hämta böcker' });
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
			setErrors({ success: true, message: 'Bok lades till' });
		} catch (error) {
			setErrors({ success: false, message: 'Kunde ej lägga till bok' });
		}
	};

	const handleRemoveBook = async (id) => {
		try {
			await removeBook(id);
			setCount(books.length);
			handleFetchBooks();
			setErrors({ success: true, message: 'Bok raderad' });
		} catch (error) {
			setErrors({ success: false, message: 'Kunde ej lägga till bok' });
		}
	};

	const handleUpdateBook = async (id, title, author) => {
		try {
			await updateBook(id, title, author);
			setIsEdit({ open: false, selectedId: id });
			handleFetchBooks();
			setErrors({ success: true, message: 'Bok uppdaterad' });
		} catch (error) {
			setErrors({ success: false, message: 'Kunde ej uppdatera bok' });
		}
	};

	const getNewApiKey = async () => {
		try {
			localStorage.removeItem('apiKey');
			await requestApiKey();
			setErrors({ success: true, message: 'Ny API-nyckel hämtad' });
			console.log('new API key: ', localStorage.getItem('apiKey'));
		} catch (error) {
			setError({ success: false, message: 'Kunde inte hämta API-nyckel' });
		}
	};

	const handleToggleBookForm = () => {
		setToggleBookForm(!toggleBookForm);
	};

	const setErrors = (error) => {
		setError(error);
		setTimeout(() => {
			setError({ success: null, message: '' });
		}, 5000);
	};

	useEffect(
		() => {
			console.log('API key: ', localStorage.getItem('apiKey'));
			async function fetchData() {
				try {
					await handleFetchBooks();
				} catch (error) {
					setErrors({ success: false, message: 'Kunde ej hämta böcker' });
				}
			}
			fetchData();
		},
		[ count ]
	);

	return (
		<div className="App">
			<Header
				getNewApiKey={getNewApiKey}
				handleToggleBookForm={handleToggleBookForm}
				toggleBookForm={toggleBookForm}
			/>
			{toggleBookForm && (
				<Form
					setTitle={setTitle}
					setAuthor={setAuthor}
					handleAddBook={handleAddBook}
					title={title}
					author={author}
				/>
			)}

			{error.message && <Errors error={error} />}
			{books ? (
				<DisplayBooks
					count={count}
					books={books}
					handleRemoveBook={handleRemoveBook}
					handleUpdateBook={handleUpdateBook}
					setIsEdit={setIsEdit}
					isEdit={isEdit}
				/>
			) : (
				<Errors
					error={{ success: false, message: 'Fel när böckerna skulle hämtas. Vänligen ladda om sidan' }}
				/>
			)}
		</div>
	);
};

export default App;
