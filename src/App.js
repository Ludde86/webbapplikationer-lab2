import React, { useEffect, useState } from 'react';
import Header from './components/Header/Header';
import Form from './components/Form/Form';
import DisplayBooks from './components/DisplayBooks/DisplayBooks';
import { addBook, fetchBooks, removeBook } from './utils/api';

const App = () => {
	const [ title, setTitle ] = useState('');
	const [ author, setAuthor ] = useState('');
	const [ books, setBooks ] = useState([]);
	const [ loading, setLoading ] = useState(false);

	const handleAddBook = (e) => {
		e.preventDefault();
		setLoading(true);
		addBook(title, author);
		fetchBooks();
		setLoading(false);
	};

	const handleRemoveBook = (id) => {
		setLoading(true);
		removeBook(id);
		setLoading(false);
	};

	useEffect(() => {
		console.log('useEffect');
		setLoading(true);
		fetchBooks().then((res) => setBooks(res.data)).catch((err) => console.log(err));
		setLoading(false);
	}, []);

	return (
		<div className="App">
			<Header />
			<Form setTitle={setTitle} setAuthor={setAuthor} handleAddBook={handleAddBook} />
			<DisplayBooks books={books} loading={loading} handleRemoveBook={handleRemoveBook} />
		</div>
	);
};

export default App;
