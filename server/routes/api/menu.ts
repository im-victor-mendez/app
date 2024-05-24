import { Router } from 'express';
import { query } from '../../db/db';
import path from 'path';
import fileUpload from 'express-fileupload';

/**
 * **Recipes**
 *
 * Handles all related recipes endpoints.
 */

const router = Router();

router.get('/images', (req, res) => {
	const sql =
		'SELECT imagen_path, nombre_platillo, descripcion_platillo, ingredientes FROM platillos';
	query(sql).then(value => res.send(value));
});

router.post('/upload', (req, res) => {
	if (!req.files || Object.keys(req.files).length === 0) {
		return res.status(400).send('No files were uploaded.');
	}

	const file = req.files.imagen as fileUpload.UploadedFile;
	const nombreArchivo = file.name;
	const rutaImagen = path.join(__dirname, 'uploads', nombreArchivo);

	const { nombrePlatillo, descripcion, ingredientes } = req.body;

	file.mv(rutaImagen, err => {
		if (err) {
			return res.status(500).send(err);
		}

		const sql =
			'INSERT INTO platillos (nombre_platillo, descripcion_platillo, ingredientes, imagen_path) VALUES (?, ?, ?, ?)';
		query(sql, [nombrePlatillo, descripcion, ingredientes, rutaImagen]).then(
			value => res.send(value)
		);
	});
});

export default router;
