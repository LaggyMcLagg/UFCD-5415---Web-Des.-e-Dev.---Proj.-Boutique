import { getProduct } from "../../External-Services/testing_API.js"
import { Product } from "../../Data-Modeling/testing_models.js"

getProduct().then(product => {
    const product_ = new Product(product)

    console.log(product_)
    
    console.log(product_[1].id)
    console.log(product_[1].name)
    console.log(product_[1].description)
})
