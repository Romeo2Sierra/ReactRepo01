import {React, useState} from "react";

const SecondComp = () => {

	//let nombre = "Rubén Mendoza";
	let web = "https://peruad.com";

	const [nombre, setNombre] = useState("Rubén");

	let cursos = [
		"Javascript JSX",
		"Laravel 11+",
		"MySQL",
		"PHP 8.3x"
	];

	const cambiarNombre = (nuevoNombre) => {
		setNombre(nuevoNombre);
	}

	return (
		<div>
			<h1>Second Component</h1>
			<p>My text from Second Component.</p>
			<ol>
				<li>Nombre: <strong className={nombre.length >= 4 ? "verde" : "rojo" }>{nombre}</strong></li>
				<li>Web: {web}</li>
			</ol>
			<input type="text" onChange={(e) => cambiarNombre(e.target.value)} />
			<button onClick={(e) => {
				console.log("Valor guardado en tu estado: ", nombre);
			}}>Mostrar Valor de Estado</button>
			<button onClick={(e) => cambiarNombre("Rubén De Los Santos") }>Cambiar Nombre</button>
			<ul>{
				cursos.map((curso, index) => {
					return (
						<li key={index}>{curso}</li>
					)
				})
			}</ul>
		</div>
	)
}

export default SecondComp
