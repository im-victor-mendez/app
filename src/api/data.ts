import axios from 'axios';
import { server_url } from './constants';

export async function fetchData(endpoint: string) {
	const response = await axios.get(`${server_url}${endpoint}`);
	return response;
}
