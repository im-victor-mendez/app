import { useEffect, useState } from 'react';
import { fetchData } from '../api/data';
import InventoryIngredient from './Inventory_Ingredient';
import InventoryEntity, { jsonToInventoryEntity } from './Inventory_Entity';
import { notifyExistences } from '../api/inventory';
// Notifications
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify';
import './Inventory.css';

/**
 * **Inventory**
 *
 * Inventory page to display all ingredients quantities.
 */
function Inventory() {
	const [inventory, setInventory] = useState<Array<InventoryEntity>>([]);

	useEffect(() => {
		// Clear inventory list
		setInventory([]);

		async function getData() {
			const data = (await fetchData(`/inventory`)).data as Array<never>;
			const ingredients = data.map(value => jsonToInventoryEntity(value));
			setInventory(ingredients);
		}

		getData();
	}, []);

	useEffect(() => {
		const notifications = notifyExistences(inventory);

		// Critical
		notifications.critical.forEach(ingredient => {
			toast(
				`Existences for ${ingredient.name} are critical: ${ingredient.quantity}/${ingredient.warning_quantity}`,
				{
					autoClose: false,
					closeButton: false,
					closeOnClick: false,
					hideProgressBar: true,
					type: 'error',
				}
			);
		});

		// Medium
		notifications.medium.forEach(ingredient => {
			toast(
				`Existences for ${ingredient.name} it's close to ending: ${ingredient.quantity}/${ingredient.warning_quantity}`,
				{
					autoClose: false,
					closeButton: false,
					closeOnClick: false,
					hideProgressBar: true,
					type: 'warning',
				}
			);
		});
	}, [inventory]);

	const inventory_map = inventory.map((ingredient, index) => {
		const key = `inventory_ingredient_${index}`;

		const { name, quantity, total_weight, warning_quantity } = ingredient;

		return (
			<InventoryIngredient
				key={key}
				name={name}
				quantity={quantity}
				total_weight={total_weight}
				warning_quantity={warning_quantity}
			/>
		);
	});

	return (
		<>
			<h1>Inventory</h1>
			<div className='inventory-container'>
				<div className='inventory-list'>{inventory_map}</div>
				<ToastContainer
					style={{
						position: 'fixed',
						top: 'var(--navbar-height, 50px)',
						right: 0,
						width: '320px',
						maxHeight: '80vh',
						overflowY: 'auto',
					}}
				/>
			</div>
		</>
	);
}

export default Inventory;
