import { useEffect, useState } from 'react';
import { fetchData } from '../api/data';
import InventoryEntity from './Inventory_Entity';

/**
 * **Inventory Ingredient**
 *
 * Component to display variable ingredient from inventory.
 */
function InventoryIngredient(entity: InventoryEntity) {
	const { name, quantity, total_weight, warning_quantity } = entity;

	const isCritical = quantity <= warning_quantity;
	const isWarning = quantity <= warning_quantity * 1.1;

	const [ingredientUsage, setIngredientUsage] = useState(0);

	useEffect(() => {
		async function getData() {
			const data = await getIngredientUsage(name);
			setIngredientUsage(data);
		}
		getData();
	}, []);

	return (
		<div
			className={`ingredient ${isCritical ? 'critical' : ''} ${
				!isCritical && isWarning ? 'warning' : ''
			}`}
		>
			<h2 className='name'>{name}</h2>

			<div className='quantity_values'>
				<p className='quantity'>Cantidad: {quantity}</p>
				<p className='warning_quantity'>
					Cantidad de Riesgo: {warning_quantity}
				</p>
				<p className='usage_quantity'>
					Cantidad que se Utiliza en Total: {ingredientUsage}
				</p>
			</div>

			<p className='total_weight'>Peso total: {total_weight} g</p>
		</div>
	);
}

async function getIngredientUsage(name: string): Promise<number> {
	const data = (await fetchData(`/ingredients/usage/${name}`)).data[0][
		'total_usage'
	];
	console.log(data);
	return data;
}

export default InventoryIngredient;
