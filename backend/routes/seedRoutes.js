import express from 'express';
import Product from '../models/productModel.js';
import data from '../data.js';
import User from '../models/userModel.js';

const seedRouter = express.Router();

//This gets an API
seedRouter.get('/', async (req, res) => {
  /*Remove all previous records in a model*/
  await Product.remove({});
  /*Insert an array of products to the product model in the DB and
  return the created product to a variable.*/
  const createdProducts = await Product.insertMany(data.products);
  await User.remove({});
  const createdUsers = await User.insertMany(data.users);
  /*Send products back to the frontend*/
  res.send({ createdProducts, createdUsers });
});
export default seedRouter;
