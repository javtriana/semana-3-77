'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Users', [{
            name: 'carlos',
            email: 'ejemplo@gmail.com',
            password: '$2y$08$ELYvKflDNa2413xJwc0mXOoRkhCHnvMYfkVFYybE8395BtW9WaDMS',
            //'$2y$08$FTP/jKGNASwJf0ero7SBe.kQmUsOSjWYupPZ6/lS6en6RcithXFKO',
            createdAt: new Date(),
            updatedAt: new Date()
        }]);
    },

    down: async(queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Users', null, {});

    }
};