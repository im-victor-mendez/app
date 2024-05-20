import InventoryEntity from './Inventory_Entity';

/**
 * **Inventory Ingredient**
 *
 * Component to display variable ingredient from inventory.
 */
function InventoryIngredient(entity: InventoryEntity) {
	const { name, quantity, total_weight, warning_quantity } = entity;

	return (
		<div className='ingredient'>
			<h2 className='name'>{name}</h2>

			<div className='quantity_values'>
				<p className='quantity'>Cantidad: {quantity}</p>
				<p className='warning_quantity'>
					Cantidad de Riesgo: {warning_quantity}
				</p>
			</div>

			<p className='total_weight'>Peso total: {total_weight} g</p>
		</div>
	);
}

export default InventoryIngredient;
