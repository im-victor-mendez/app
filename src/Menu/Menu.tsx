import React, { useEffect, useState } from 'react';
import './Menu.css';
import { fetchData } from '../api/data';

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

	useEffect(() => {
		fetchData('/images')
			.then(response => {
				setPlatillos(response.data);
			})
			.catch(error => console.error('Error:', error));
	}, []);

	const handleImageClick = (platillo: Platillo) => {
		setSelectedPlatillo(platillo);
	};

	return (
		<div>
			<header className='hero'>
				<nav className='nav container'>
					<div className='nav__Logo'>
						<a className='nav__linkLogo' href='index.html'>
							Almacen
						</a>
					</div>
					<ul className='nav__link nav__link--menu'>
						<li className='nav__itenms'>
							<a className='nav__links' target='_blank' href='1.html'>
								Acerca de
							</a>
						</li>
						<img
							src='../Imagenes/x.svg'
							className='nav__close'
							alt='Close Menu'
						/>
					</ul>
					<div className='nav__menu'>
						<img src='../Imagenes/menu.svg' alt='Menu' />
					</div>
				</nav>

				<section className='hero__container container'>
					<h1 className='hero__title'>Almacen</h1>
					<p className='hero__descrip'>
						Checa todo lo que tenemos para ofrecer, aquí podrás encontrar los
						ingredientes que contiene cada producto.
					</p>
				</section>
			</header>

			<main>
				<section className='Comida__container container'>
					<br />
					<h2>
						Presiona la imagen del producto para conocer los ingredientes que
						contiene
					</h2>
					<br />
					<br />
					<br />
					<br />
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
					<form
						id='uploadForm'
						action='/upload'
						method='post'
						encType='multipart/form-data'
					>
						<input
							type='file'
							id='imagenInput'
							name='imagen'
							style={{ display: 'none' }}
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
								<input type='text' id='nombre_platillo' name='nombrePlatillo' />
							</div>
							<div className='text__laber container'>
								<label htmlFor='descripcion_platillo'>
									Descripción del platillo:
								</label>
								<input
									type='text'
									id='descripcion_platillo'
									name='descripcion'
								/>
							</div>
							<div className='text__laber'>
								<label htmlFor='ingredientesInput'>
									Ingredientes del producto:
								</label>
								<input type='text' id='ingredientesInput' name='ingredientes' />
							</div>
						</div>
						<br />
						<div className='Button'>
							<button className='UPButton' type='submit'>
								Subir Información
							</button>
						</div>
					</form>
				</div>
			</section>

			<footer className='footer'>
				<section className='footer__container container'>
					<nav className='nav--footer'>
						<h2 className='footer__Title'>Almacen</h2>
						<ul className='nav__link nav__link--footer'>
							<li className='nav__itenms'>
								<a className='nav__links' target='_blank' href='1.html'>
									Automatización
								</a>
							</li>
						</ul>
					</nav>
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
	);
};

export default Menu;
