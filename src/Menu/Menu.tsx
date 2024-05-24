import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Menu.css';
import { fetchData } from '../api/data';
import { server_url } from '../api/constants';

interface Platillo {
	imagen_path: string;
	nombre_platillo: string;
	descripcion_platillo: string;
	ingredientes: string;
}

const Menu: React.FC = () => {
	const [platillos, setPlatillos] = useState<Platillo[]>([]);
	const [selectedPlatillo, setSelectedPlatillo] = useState<Platillo | null>(
		null
	);
	const [formData, setFormData] = useState({
		nombrePlatillo: '',
		descripcion: '',
		ingredientes: '',
	});

	useEffect(() => {
		fetchPlatillos();
	}, []);

	const fetchPlatillos = async () => {
		try {
			const response = await fetchData(`${server_url}/menu`);
			setPlatillos(response.data);
		} catch (error) {
			console.error('Error:', error);
		}
	};

	const handleImageClick = (platillo: Platillo) => {
		setSelectedPlatillo(platillo);
	};

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value, files } = e.target;
		if (name === 'imagen' && files) {
			const file = files[0];
			setFormData({
				...formData,
				imagen: file,
			});
			const reader = new FileReader();
			reader.onloadend = () => {
				setImagePreview(reader.result as string);
			};
			reader.readAsDataURL(file);
		} else {
			setFormData({
				...formData,
				[name]: value,
			});
		}
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		const { nombrePlatillo, descripcion, ingredientes, imagen } = formData;
		const data = new FormData();
		data.append('nombre_platillo', nombrePlatillo);
		data.append('descripcion_platillo', descripcion);
		data.append('ingredientes', ingredientes);
		if (imagen) {
			data.append('image', imagen);
		}

		try {
			await axios.post(`${server_url}/menu/upload`, data, {
				headers: {
					'Content-Type': 'multipart/form-data',
				},
			});
			alert('Información subida exitosamente');
			fetchPlatillos();
		} catch (error) {
			console.error('Error al subir la información:', error);
			alert('Error al subir la información');
		}
	};

	return (
		<div>
			<div>
				<header className='hero'>
					<h1 className='hero__title'>Menu</h1>
				</header>

				<main>
					<section className='Comida__container container'>
						<h2>
							Presiona la imagen del producto para conocer los ingredientes que
							contiene
						</h2>
						<div
							id='imagenesContainer'
							style={{
								display: 'grid',
								gridTemplateColumns: 'repeat(3, 1fr)',
								gap: '20px',
								justifyItems: 'center',
							}}
						>
							{platillos.map((platillo, index) => (
								<img
									key={index}
									src={platillo.imagen_path}
									alt={platillo.nombre_platillo}
									className='imagenRedimensionada'
									onClick={() => handleImageClick(platillo)}
								/>
							))}
						</div>

						{selectedPlatillo && (
							<div id='productoInfo'>
								<h2 id='nombreProducto'>{selectedPlatillo.nombre_platillo}</h2>
								<h3>Descripción del producto:</h3>
								<p id='descripcionProducto'>
									{selectedPlatillo.descripcion_platillo}
								</p>
								<h3>Ingredientes:</h3>
								<p id='ingredientesProducto'>{selectedPlatillo.ingredientes}</p>
							</div>
						)}
						<br />
					</section>
				</main>

				<section className='UpImages__Section'>
					<div className='UpImages'>
						<h2>Actualizar Menú - Inventario</h2>
						{imagePreview && (
							<img
								src={imagePreview}
								alt='Vista previa de la imagen'
								className='imagePreview'
							/>
						)}
						<input
							type='file'
							id='imagenInput'
							name='imagen'
							onChange={handleInputChange}
						/>
						<div className='Button'>
							<button
								type='button'
								className='laberImagen'
								onClick={() => document.getElementById('imagenInput')?.click()}
							>
								Seleccionar imagen
							</button>
						</div>
						<br />
						<span className='span' id='nombreArchivo'></span>
						<br />
						<div className='laber__text container'>
							<div className='text__laber'>
								<label htmlFor='nombre_platillo'>Nombre del platillo:</label>
								<input
									type='text'
									id='nombre_platillo'
									name='nombrePlatillo'
									onChange={handleInputChange}
								/>
							</div>
							<div className='text__laber container'>
								<label htmlFor='descripcion_platillo'>
									Descripción del platillo:
								</label>
								<input
									type='text'
									id='descripcion_platillo'
									name='descripcion'
									onChange={handleInputChange}
								/>
							</div>
							<div className='text__laber'>
								<label htmlFor='ingredientesInput'>
									Ingredientes del producto:
								</label>
								<input
									type='text'
									id='ingredientesInput'
									name='ingredientes'
									onChange={handleInputChange}
								/>
							</div>
						</div>
						<br />
						<div className='Button'>
							<button className='UPButton' onClick={handleSubmit}>
								Subir Información
							</button>
						</div>
					</div>
				</section>

				<footer className='footer'>
					<section className='footer__container container'>
						<form className='footer__from'>
							<div className='footer__social'>
								<br />
								<br />
								<h2>Canal de YouTube</h2>
								<br />
								<br />
								<a
									href='https://www.youtube.com/channel/UCTJJrjCNzDrrY0x4wGbAvRQ'
									className='footer__icons'
								>
									<img
										src='./../Imagenes/youtube.svg'
										className='footer__img'
										alt='YouTube'
									/>
								</a>
							</div>
						</form>
						<section className='footer__copy container'>
							<h3 className='footer__copyrigt'>
								Derechos reservados: © Flores Beltrán Juan Diego (Dishadow)
							</h3>
						</section>
					</section>
				</footer>
			</div>
		</div>
	);
};

export default Menu;
