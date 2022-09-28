const { body } = require('express-validator');
const { urlServices } = require('../services');

const getUrls = async (req, res) => {
    try {
        const urls = await urlServices.getUrls();
        res.status(200).json(urls);
    } catch (error) {
        res.status(500).json(error);
    }
}
const getUrlByName = async (req, res) => {
    try {
        const { name } = req.params;
        const url = await urlServices.getUrlByName(name);
        res.status(200).json(url);
    } catch (error) {
        res.status(500).json(error);
    }
}
const insertUrl = async (req, res) => {
    try {
        const { url, name, description } = req.body;
        const result = await urlServices.insertUrl(url, name, description);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json(error);
    }
}
const deleteUrl = async (req, res) => {
    try {
        const { url } = req.body;
        const result = await urlServices.deleteUrl(url);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json(error);
    }
}
const updateUrl = async (req, res) => {
    try {
        const { url, name, description } = req.body;
        const result = await urlServices.updateUrl(url, name, description);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json(error);
    }
}

module.exports = {
    getUrls,
    getUrlByName,
    insertUrl,
    deleteUrl,
    updateUrl
}