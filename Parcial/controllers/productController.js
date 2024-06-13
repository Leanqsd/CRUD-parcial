const { where } = require('sequelize');
const Products = require('../models/products');
const express = require('express');

//funcion para crear productos
const createProduct = async (req, res) => {
    const {id, name, price, cant, category} = req.body;

    try{
        const product = Products.create({id, name, price, cant, category});
        res.status(201).json(product);
    }catch(error){
        console.log('ha habido un error: '+error);
    }
}

//funcion para eliminar un producto
const deleteProduct = async (req, res) => {
    const { id } = req.params;

    try{
        const product = await Products.findByPk(id);

        if(!product){
            return res.status(404).json({
                ok: false,
                message: 'no se encontro el producto'
            })
        }
        await User.destroy();
        res.status(200).json({
            ok:true,
            message: 'producto eliminado'
        })
    }catch(error){
        console.log(error);
    }
}

//funcion para buscar los productos por los atributos id, name, price o category
const searchProduct = async (req, res) => {
    const {id, name, price, category} = req.body;

    try{
        const whereClause = {};

        if(id){
            whereClause.id = id;
        }
        if(name){
            whereClause.name = name;
        }
        if(price){
            whereClause.price = price;
        }
        if(category){
            whereClause.category = category;
        }

        const product = await Products.findAll({
            where: whereClause
        });

        if(product.length > 0){
            res.status(200).json(product);
        }else{
            res.status(404).json({message: 'no se encontraron productos'});
        }
    }catch(error){
        console.log(error);
    }
}

//funcion para obtener los productos
const getProducts = async (req, res) =>{
    try{
        const products = await User.findAll();
        res.status(200).json({
            ok: true,
            products
        })
    }catch(error){
        console.log(error);
        res.status(500).json({
            ok: false,
            message: 'hubo un error con productos'
        })
    }
}

module.exports = { createProduct, deleteProduct, searchProduct, getProducts }
