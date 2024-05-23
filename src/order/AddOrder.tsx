import React, { useState } from 'react';
import Order from './Order';
import './AddOrderForm.css'; // Importar el archivo de estilos CSS
import { server_url } from '../api/constants';

const AddOrderForm: React.FC = () => {
	const [date, setDate] = useState<string>(
		new Date().toISOString().split('T')[0]
	);
	const [ingredientName, setIngredientName] = useState<string>('');
	const [quantity, setQuantity] = useState<number>(0);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		const newOrder = { date, ingredient_name: ingredientName, quantity };

		try {
			const response = await fetch(`${server_url}/orders/add`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(newOrder),
			});

			if (!response.ok) {
				throw new Error('Error al agregar la orden');
			}

			// Limpiar el formulario después de un envío exitoso
			setDate(new Date().toISOString().split('T')[0]);
			setIngredientName('');
			setQuantity(0);

			alert('Orden agregada exitosamente');
		} catch (error) {
			alert('Error al agregar la orden');
			console.error(error);
		}
	};

	return (
		<form onSubmit={handleSubmit} className='add-order-form'>
			{' '}
			{/* Agregar la clase CSS */}
			<label>
				Date:
				<input
					type='date'
					value={date}
					onChange={e => setDate(e.target.value)}
				/>
			</label>
			<br />
			<label>
				Ingredient Name:
				<input
					type='text'
					value={ingredientName}
					onChange={e => setIngredientName(e.target.value)}
				/>
			</label>
			<br />
			<label>
				Quantity:
				<input
					type='number'
					value={quantity}
					onChange={e => setQuantity(parseInt(e.target.value))}
				/>
			</label>
			<br />
			<button type='submit'>Agregar Orden</button>
		</form>
	);
};

export default AddOrderForm;
