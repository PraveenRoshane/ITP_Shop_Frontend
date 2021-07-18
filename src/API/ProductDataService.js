import axios from "axios"
import {JPA_API_URL } from '../Constants';

class ProductDataService {

    RerieveAllProducts(){
        return axios.get(`${JPA_API_URL}/shop/products`);
    }

    RerieveProduct(id){
        return axios.get(`${JPA_API_URL }/shop/products/${id}`);
    }

    deleteProduct(id){
        return axios.delete(`${JPA_API_URL}/shop/products/${id}`);
    }

    updateProduct(id, Product){
        return axios.put(`${JPA_API_URL}/shop/products/${id}`, Product);
    }

    // addTodo(name, todo){
    //     return axios.post(`${JPA_API_URL}/users/${name}/todos/`, todo);
    // }

}

export default new ProductDataService()
