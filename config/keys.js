dbPassword = process.env.DB_CONNECTION 

module.exports = {
    mongoURI: dbPassword
};
