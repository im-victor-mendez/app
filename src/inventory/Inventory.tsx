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

	// Agrupar ingredientes por letra inicial
	const groupedInventory = inventory.reduce((acc, ingredient) => {
		const initial = ingredient.name.charAt(0).toUpperCase();
		if (!acc[initial]) {
			acc[initial] = [];
		}
		acc[initial].push(ingredient);
		return acc;
	}, {} as { [key: string]: InventoryEntity[] });

	return (
		<>
			<h1>Inventory</h1>
			<div className='inventory-container'>
				<div className='inventory-list'>
					{Object.keys(groupedInventory)
						.sort()
						.map(initial => (
							<details key={initial} className='inventory-group'>
								<summary>
									{initial}
									<span className='ingredient-count'>
										({groupedInventory[initial].length})
									</span>
								</summary>
								{groupedInventory[initial].map((ingredient, index) => (
									<InventoryIngredient
										key={`${initial}_${index}`}
										name={ingredient.name}
										quantity={ingredient.quantity}
										total_weight={ingredient.total_weight}
										warning_quantity={ingredient.warning_quantity}
									/>
								))}
							</details>
						))}
				</div>
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
