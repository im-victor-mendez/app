/**
 * **Inventory Entity Params**
 *
 * Params to create a new Inventory Entity.
 */
interface InventoryEntityParams {
	name: string;
	quantity: number;
	total_weight: number;
	warning_quantity: number;
}

/**
 * **Inventory Entity**
 *
 * Class to use to define return data type in functions.
 */
class InventoryEntity {
	name: string;
	quantity: number;
	total_weight: number;
	warning_quantity: number;

	constructor(params: InventoryEntityParams) {
		const { name, quantity, total_weight, warning_quantity } = params;

		this.name = name;
		this.quantity = quantity;
		this.total_weight = total_weight;
		this.warning_quantity = warning_quantity;
	}
}

/**
 * **Json to Inventory Entity**
 *
 * Transforms json value into Inventory Entity.
 *
 * @param ingredient Json value.
 * @returns InventoryEntity
 */
export function jsonToInventoryEntity(ingredient: never): InventoryEntity {
	const name = ingredient['ingredient_name'];
	const quantity = ingredient['quantity'];
	const total_weight = ingredient['total_weight'];
	const warning_quantity = ingredient['warning_quantity'];

	const params: InventoryEntityParams = {
		name,
		quantity,
		total_weight,
		warning_quantity,
	};

	return new InventoryEntity(params);
}

export default InventoryEntity;
