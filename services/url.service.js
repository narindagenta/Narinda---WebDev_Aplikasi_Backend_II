const { databaseQuery } = require('../database');

const getUrls = async () => {
    try {
        const query = `SELECT * FROM links`;
        // Return from SELECT query is an array of objects
        const result = await databaseQuery(query);
        return {
            count: result.rowCount,
            rows: result.rows,
        };
    } catch (error) {
        return error;
    }
}

const getUrlByName = async (name) => {
    try {
        // This is not safe, but it's just an example
        const query = `SELECT * FROM links WHERE name='${name}'`;
        const result = await databaseQuery(query);

        // This is safer. It uses a parameterized query
        // const query = `SELECT * FROM links WHERE name=$1`;
        // const result = await databaseQuery(query, [name]);

        return {
            count: result.rowCount,
            rows: result.rows,
        };
    } catch (error) {
        return error
    }
}

const insertUrl = async (url, name, description) => {
    try {
        // This is not safe, but it's just an example
        const query = `INSERT INTO links (url, name, description) VALUES ('${url}', '${name}', '${description}')`;
        const result = await databaseQuery(query);

        // This is safer. It uses a parameterized query
        // const query = `INSERT INTO links (url, name, description) VALUES ($1, $2, $3)`;
        // const result = await databaseQuery(query, [url, name, description]);

        if (!result) {
            throw new Error('Error inserting URL');
        }
        return {
            message: 'URL inserted successfully',
        }; 
    } catch (error) {
        return error 
    }
}

const deleteUrl = async (url) => {
    try {
        // This is not safe, but it's just an example
        const query = `DELETE FROM links WHERE url='${url}'`;
        const result = await databaseQuery(query);

        // This is safer. It uses a parameterized query
        // const query = `DELETE FROM links WHERE url=$1`;
        // const result = await databaseQuery(query, [url]);

        if (!result) {
            throw new Error('Error deleting URL');
        }
        if (result.rowCount === 0) {
            throw new Error('URL not found');
        }
        return {
            message: 'URL deleted successfully',
        }; 
    } catch (error) {
        return error
    }
}

const updateUrl = async (url, name, description) => {
    try {
        // This is not safe, but it's just an example
        const query = `UPDATE links SET name='${name}', description='${description}' WHERE url='${url}'`;
        const result = await databaseQuery(query);

        // This is safer. It uses a parameterized query
        // const query = `UPDATE links SET name=$1, description=$2 WHERE url=$3`;
        // const result = await databaseQuery(query, [name, description, url]);
        if (!result) {
            throw new Error('Error deleting URL');
        }
        if (result.rowCount === 0) {
            throw new Error('URL not found');
        }
        return {
            message: 'URL updated successfully',
        };
    } catch (error) {
        return error
    }
}

module.exports =  {
    getUrls,
    getUrlByName,
    insertUrl,
    deleteUrl,
    updateUrl
}