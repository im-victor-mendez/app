import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Inventory from './inventory/Inventory';
import OrderScreen from './order/OrderScreen';
import App from './App';
import Navbar from './components/NavBar/NavBar';
import AddOrderForm from './order/AddOrder';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route key={`App-Route`} path={'/'} element={<App />} />
				<Route
					key={`Inventory-Route`}
					path={'/inventory'}
					element={<Inventory />}
				/>
				<Route key={`Order-Route`} path={'/orders'} element={<OrderScreen />} />
				<Route
					key={`Add-Order-Route`}
					path={'/orders/add'}
					element={<AddOrderForm />}
				/>
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
);
