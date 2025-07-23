const { productModel } = require("../models/products.model");

const createProducts = async (req,res) => {
  const { title, image, price, brand, category, desc, rating } = req.body;

try {
  const data = new productModel({title, image, price, brand, category, desc, rating})
  await data.save();

   res.status(200).send({msg:"Data stored successfully", data:data})
} catch (error) {

res.status(400).send({error:error.message})
  
}
}

const getProduct= async(req, res)=>{
  try {
    const data = await productModel.find();

    res.status(200).send({msg:"Data retrieved!", data:data});
  } catch (error) {
     res.status(400).send({error:error.message});
  }
}

module.exports={
  createProducts, 
  getProduct
}