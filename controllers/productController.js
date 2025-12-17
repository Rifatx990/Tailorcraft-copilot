const db = require('../config/db');

// Fetch all products
exports.getAllProducts = async (req, res) => {
  try {
    const [products] = await db.query('SELECT * FROM products');
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Fetch a product by ID
exports.getProductById = async (req, res) => {
  try {
    const [product] = await db.query('SELECT * FROM products WHERE id = ?', [req.params.id]);
    if (product.length === 0) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.status(200).json(product[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Create a new product
exports.createProduct = async (req, res) => {
  try {
    const { name, price, description } = req.body;
    const result = await db.query('INSERT INTO products (name, price, description) VALUES (?, ?, ?)', [name, price, description]);
    res.status(201).json({ id: result[0].insertId, name, price, description });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a product
exports.updateProduct = async (req, res) => {
  try {
    const { name, price, description } = req.body;
    await db.query('UPDATE products SET name = ?, price = ?, description = ? WHERE id = ?', [name, price, description, req.params.id]);
    res.status(200).json({ message: 'Product updated successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete a product
exports.deleteProduct = async (req, res) => {
  try {
    await db.query('DELETE FROM products WHERE id = ?', [req.params.id]);
    res.status(200).json({ message: 'Product deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};