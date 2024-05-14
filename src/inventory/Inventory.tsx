import { useEffect, useState } from 'react';
import { fetchData } from '../api/data';
import InventoryIngredient from './Inventory_Ingredient';
import { jsonToInventoryEntity } from './Inventory_Entity';

/**
 * **Inventory**
 *
 * Inventory page to display all ingredients quantities.
 */
function Inventory() {
	const [inventory, setInventory] = useState([]);

	useEffect(() => {
		async function getData() {
			const data = (await fetchData(`/inventory`)).data as Array<never>;
			setInventory(data);
		}

		getData();
	}, []);

	const inventory_map = inventory.map((ingredient, index) => {
		const key = `inventory_ingredient_${index}`;

		const { name, quantity, total_weight, warning_quantity } =
			jsonToInventoryEntity(ingredient);

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

			{inventory_map}
		</>
	);
}

export default Inventory;
