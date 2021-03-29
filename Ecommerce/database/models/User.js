module.exports = (sequelize, dataTypes) => {
    let alias = "users";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
        },

        name: {
            type: dataTypes.STRING(255),
        },

        email: {
            type: dataTypes.STRING(255),
        },

        password: {
            type: dataTypes.STRING(255),
        },

        verified: {
            type: dataTypes.INTEGER,
        },

        op: {
            type: dataTypes.INTEGER,
        },
    }

    let config = {
        timestamps: false,
        tableName: "users",
    }

    const User = sequelize.define(alias, cols, config);

    return User;
}