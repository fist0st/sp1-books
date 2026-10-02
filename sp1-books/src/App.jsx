import { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

function App() {
	const [tytul, setTytul] = useState("");
	const [autor, setAutor] = useState("");
	const [gatunek, setGatunek] = useState("");

	const handleSubmit = event => {
		event.preventDefault();

		const daneKsiazki = {
			tytul: tytul,
			autor: autor,
			gatunek: gatunek,
		};

		console.log(daneKsiazki);
	};

	return (
		<form onSubmit={handleSubmit}>
			<div className="form-group">
				<label htmlFor="bookTitle">Tytuł książki</label>
				<input
					type="text"
					className="form-control"
					id="bookTitle"
					value={tytul}
					onChange={event => setTytul(event.target.value)}
				/>
			</div>

			<div className="form-group">
				<label htmlFor="bookAuthor">Autor książki</label>
				<input
					type="text"
					className="form-control"
					id="bookAuthor"
					value={autor}
					onChange={event => setAutor(event.target.value)}
				/>
			</div>

			<div className="form-group">
				<label htmlFor="bookGenre">Gatunek</label>
				<select
					className="form-control"
					id="bookGenre"
					value={gatunek}
					onChange={event => setGatunek(event.target.value)}
				>
					<option value=""></option>
					<option value="1">Powieść</option>
					<option value="2">Kryminał</option>
					<option value="3">Fantastyka</option>
					<option value="4">Biografia</option>
				</select>
			</div>

			<button type="submit" className="btn btn-success">
				Dodaj
			</button>
		</form>
	);
}

export default App;
