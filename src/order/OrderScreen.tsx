import { useEffect, useState } from 'react';
import Order from './Order';
import { fetchData } from '../api/data';
import { useNavigate } from 'react-router-dom'; // Importa useHistory desde react-router-dom
import './Orders.css';

function OrderScreen() {
	const [orderList, setOrderList] = useState<Array<Order>>([]);
	const navigate = useNavigate(); // Obtén la instancia de history

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

	// Función para redireccionar a la página de agregar orden
	const redirectToAddOrder = () => {
		navigate('/orders/add');
	};

	return (
		<>
			<div className='header'>
				<h1>Orders</h1>
				<button onClick={redirectToAddOrder} className='add-order-button'>
					Add Order
				</button>
			</div>
			<div className='orders-container'>{ordersMap}</div>
		</>
	);
}

export default OrderScreen;
