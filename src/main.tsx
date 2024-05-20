import React from 'react';
import ReactDOM from 'react-dom/client';
import Inventory from './inventory/Inventory.tsx';
import OrderScreen from './order/OrderScreen.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		{/* To replace with App properly */}
		<OrderScreen />
	</React.StrictMode>
);
