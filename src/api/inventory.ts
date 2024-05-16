/**
 * **Inventory**
 * API functions related to Inventory.
 */

import InventoryEntity from '../inventory/Inventory_Entity';

export function notifyExistences(inventory: Array<InventoryEntity>): {
	critical: InventoryEntity[];
	medium: InventoryEntity[];
} {
	console.log(inventory.length);
	// Ingredient quantity is lower than warning quantity
	const critical: Array<InventoryEntity> = inventory.filter(ingredient => {
		return ingredient.quantity < ingredient.warning_quantity;
	});

	console.log(inventory.length);

	// Ingredient quantity is closer to warning quantity
	const medium: Array<InventoryEntity> = inventory.filter(ingredient => {
		const warning_margin_bottom =
			ingredient.warning_quantity * 0.1 + ingredient.warning_quantity;

		const warning_margin_top =
			ingredient.warning_quantity * 0.2 + ingredient.warning_quantity;

		return (
			ingredient.quantity == ingredient.warning_quantity ||
			(warning_margin_bottom <= ingredient.quantity &&
				warning_margin_top >= ingredient.quantity)
		);
	});

	return { critical, medium };
}
