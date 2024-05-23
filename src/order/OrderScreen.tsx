import { useEffect, useState } from 'react';
import Order from './Order';
import { fetchData } from '../api/data';
import './Orders.css';

function OrderScreen() {
	const [orderList, setOrderList] = useState<Array<Order>>([]);

	useEffect(() => {
		async function getData() {
			const data = (await fetchData(`/orders`)).data as Array<never>;
			const orders = data.map(value => Order.fromJson(value));

			setOrderList(orders);
		}

		getData();
	}, []);

	const ordersMap = orderList.sort(sort).map((order, index) => {
		const key = `order-${order.date}-${index}`;

		const { date, ingredientName, quantity } = order;

		return (
			<div key={key}>
				<h2>{ingredientName}</h2>
				<p>Fecha de realización: {date.toString()}</p>
				<p>Cantidad: {quantity}</p>
			</div>
		);
	});

	/**
	 * **Sort**
	 *
	 * Sort descendant orders by date.
	 *
	 * @param a Order
	 * @param b Order
	 * @returns number
	 */
	function sort(a: Order, b: Order): number {
		return new Date(b.date).getTime() - new Date(a.date).getTime();
	}

	return (
		<>
			<h1>Orders</h1>

			<div className='orders-container'>{ordersMap}</div>
		</>
	);
}

export default OrderScreen;
