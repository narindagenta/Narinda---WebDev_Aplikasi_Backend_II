const { databaseQuery } = require('../database');

const getUrls = async () => {
    try {
        const query = `SELECT * FROM urls`;
        // Return from SELECT query is an array of objects
        const { result } = await databaseQuery(query);
        if (result.length === 0 ) {
            return { message: 'No URL found' };
        }
        return result;
    } catch (error) {
        return error;
    }
}

const getUrlByName = async (name) => {
    try {
        // This is not safe, but it's just an example
        const query = `SELECT * FROM urls WHERE name='${name}'`;
        // Return from SELECT query is an array of objects
        const { result } = await databaseQuery(query);
        if (result.length === 0 ) {
            return { message: 'No URL found' };
        }
        return result;
    } catch (error) {
        return error
    }
}

const insertUrl = async (url, name, description) => {
    try {
        const query = `INSERT INTO urls (url, name, description) VALUES ('${url}', '${name}', '${description}' RETURNING *)`;
        // Return from SELECT query is an array of objects
        const { result } = await databaseQuery(query);
        if (!result[0]) {
            return error = { message: 'Error inserting URL' };
        }
        return result; 
    } catch (error) {
        return error 
    }
}

const deleteUrl = async (url) => {

}

const updateUrl = async (url, name, description) => {

}

module.exports =  {
    getUrls,
    getUrlByName,
    insertUrl,
    deleteUrl,
    updateUrl
}