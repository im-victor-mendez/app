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
			</div>

			<p className='total_weight'>Peso total: {total_weight} g</p>
		</div>
	);
}

export default InventoryIngredient;
