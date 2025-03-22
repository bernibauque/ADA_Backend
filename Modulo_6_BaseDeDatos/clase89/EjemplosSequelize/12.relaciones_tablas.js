const Post = sequelize.define("Post", {
    titulo: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    contenido: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
});

// Relación: Un usuario tiene muchos posts
Usuario.hasMany(Post);
Post.belongsTo(Usuario);

// Sincronizar cambios
sequelize.sync().then(() => console.log("📦 Tablas actualizadas"));
