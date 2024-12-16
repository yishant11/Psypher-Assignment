import { products } from "../Data/data.js";
import Product from "../model/product-schema.js";

const createDatabase = async () =>{
    try{
        await Product.insertMany(products);
        console.log("Data Imported Successfully");
    }
    catch(error){
        console.log("Error while inserting data.",error.message);
    }
}

export default createDatabase;