interface Params {
	date: Date;
	ingredientName: string;
	quantity: number;
}

class Order {
	constructor(params: Params) {
		const { date, ingredientName, quantity } = params;

		this.date = date;
		this.ingredientName = ingredientName;
		this.quantity = quantity;
	}

	date: Date;
	ingredientName: string;
	quantity: number;

	static fromJson(json: never): Order {
		return new Order({
			date: json['date'],
			ingredientName: json['ingredient_name'],
			quantity: json['quantity'],
		});
	}

	toJson() {
		return {
			date: this.date,
			ingredient_name: this.ingredientName,
			quantity: this.quantity,
		};
	}
}

export default Order;
