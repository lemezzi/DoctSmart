const mongoose = require("mongoose");

const DB = "mongodb://localhost:27017/mezmez";

mongoose.connect(DB, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    serverSelectionTimeoutMS: 5000 // Délai d'attente de 5 secondes
})
.then(() => console.log("Base de données connectée"))
.catch((err) => {
    console.error("Erreur de connexion à MongoDB:", err.message);
});
