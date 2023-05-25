import React, { useState } from 'react';

function Encriptador() {
	//Constantes para almacenar los datos de los inputs
	const [numeroOriginal, setNumeroOriginal] = useState({
		numero: '',
	});
	const [numeroOriginal2, setNumeroOriginal2] = useState('');
	const [numeroEncriptado, setNumeroEncriptado] = useState('');
	const [numeroDesencriptado, setNumeroDesencriptado] = useState('');

	//Funciones para manejar los cambios en los inputs
	const handleNumberChange = e => {
		const { value } = e.target;
		const number = parseInt(value);
		if (isNaN(number)) {
			setNumeroOriginal('');
		} else {
			setNumeroOriginal(value);
		}
	};

	const handleNumberChange2 = e => {
		const { value } = e.target;
		const number = parseInt(value);
		if (isNaN(number)) {
			setNumeroOriginal2('');
		} else {
			setNumeroOriginal2(value);
		}
	};
	const handleNumberChange1 = e => {
		const value = e.target.value;
		const regex = /^[0-9\b]+$/;
		if (value === '' || regex.test(value)) {
			setNumeroOriginal({
				...numeroOriginal,
				[e.target.id]: value,
			});
		}
	};
	//Funciones para encriptar y desencriptar
	const encriptarNumero = e => {
		const numero = parseInt(numeroOriginal);
		console.log(numero);
		const digito1 = ((numero % 10) + 7) % 10;
		console.log(digito1);
		const digito2 = ((Math.floor(numero / 10) % 10) + 7) % 10;
		console.log(digito2);
		const digito3 = ((Math.floor(numero / 100) % 10) + 7) % 10;
		console.log(digito3);
		const digito4 = ((Math.floor(numero / 1000) % 10) + 7) % 10;
		console.log(digito4);
		const numeronuevo = parseInt(`${digito3}${digito4}${digito1}${digito2}`);
		console.log(numeronuevo);
		//const numeroEncriptado = `${digito3}${digito4}${digito1}${digito2}`;
		setNumeroEncriptado(numeronuevo);
	};

	const desencriptarNumero = () => {
		const numeroEncriptado = parseInt(numeroOriginal2);
		const digito1 = (((numeroEncriptado - 7) % 10) + 10) % 10;
		const digito2 = (((Math.floor(numeroEncriptado / 10) - 7) % 10) + 10) % 10;
		const digito3 = (((Math.floor(numeroEncriptado / 100) - 7) % 10) + 10) % 10;
		const digito4 =
			(((Math.floor(numeroEncriptado / 1000) - 7) % 10) + 10) % 10;
		const numeroDesencriptado = parseInt(
			`${digito3}${digito4}${digito1}${digito2}`,
		);
		setNumeroDesencriptado(numeroDesencriptado);
	};

	return (
		<div className='h-60 w-96 bg-sky-200 rounded-2xl p-2'>
			<div>
				<h2>Encriptador</h2>
				<label>
					Número a encriptar:
					<input
						type='text'
						value={numeroOriginal.numero}
						onChange={handleNumberChange}
						id='numero'
					/>
				</label>
				<button
					className='rounded-3xl p-2 bg-sky-800 text-white'
					onClick={encriptarNumero}
				>
					Encriptar
				</button>
				<p>Número Encriptado: {numeroEncriptado}</p>
			</div>
			<div>
				<h2>Desencriptador</h2>
				<label>
					Número a desencriptar:
					<input
						type='text'
						value={numeroOriginal2}
						onChange={handleNumberChange2}
					/>
				</label>
				<button
					className='rounded-3xl p-2 bg-sky-800 text-white'
					onClick={desencriptarNumero}
				>
					Desencriptar
				</button>
				<p>Número Desencriptado: {numeroDesencriptado}</p>
			</div>
		</div>
	);
}

export default Encriptador;
