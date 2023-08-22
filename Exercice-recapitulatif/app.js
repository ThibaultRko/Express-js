const express = require('express');
const app = express();
const mongoose = require('mongoose');
const ejs = require('ejs');
const morgan = require('morgan');

// Middleware de journalisation avec Morgan
app.use(morgan('dev'));


// Connexion à la base de données MongoDB
mongoose.connect('mongodb://root:test123*@localhost:27017', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

// Middleware pour parser les données POST
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Schéma de l'utilisateur
const userSchema = new mongoose.Schema({
    username: String,
    email: String
  });
  
// Modèle de l'utilisateur basé sur le schéma
const User = mongoose.model('User', userSchema);

// Utiliser EJS comme moteur de rendu
app.set('view engine', 'ejs');

// Dossier contenant les vues
app.set('views', './views');

// Route pour ajouter un utilisateur
app.post('/add-user', async (req, res) => {
    try {
      const { username, email } = req.body;
  
      if (username && email) {
        const newUser = new User({ username, email });
        await newUser.save();
        res.status(201).json({ message: 'Utilisateur ajouté avec succès', user: newUser });
      } else {
        res.status(400).json({ message: 'Nom d\'utilisateur et email sont requis' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Une erreur est survenue lors de l\'ajout de l\'utilisateur.' });
    }
  });



// Route pour visualiser les utilisateurs
app.get('/view-users', async (req, res) => {
    try {
      const users = await User.find();
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ message: 'Une erreur est survenue lors de la récupération des utilisateurs.' });
    }
  });

// Route pour retrouver un utilisateur par son ID
app.get('/user/:id', async (req, res) => {
    try {
      const userId = req.params.id;
      const user = await User.findById(userId);
      
      if (user) {
        res.status(200).json(user);
      } else {
        res.status(404).json({ message: 'Utilisateur introuvable' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Une erreur est survenue lors de la recherche de l\'utilisateur.' });
    }
  });
  
// Route pour supprimer un utilisateur par son ID
app.delete('/user/:id', async (req, res) => {
try {
    const userId = req.params.id;
    const deletedUser = await User.findByIdAndDelete(userId);
    
    if (deletedUser) {
    res.status(200).json({ message: 'Utilisateur supprimé avec succès', user: deletedUser });
    } else {
    res.status(404).json({ message: 'Utilisateur introuvable' });
    }
} catch (error) {
    res.status(500).json({ message: 'Une erreur est survenue lors de la suppression de l\'utilisateur.' });
}
});


// Route pour afficher tous les utilisateurs
app.get('/users', async (req, res) => {
    try {
      const users = await User.find();
      res.render('users', { users });
    } catch (error) {
      res.status(500).json({ message: 'Une erreur est survenue lors de la récupération des utilisateurs.' });
    }
  });


// Route pour afficher les détails d'un utilisateur par son ID
app.get('/users/:id', async (req, res) => {
    try {
      const userId = req.params.id;
      const user = await User.findById(userId);
  
      if (user) {
        res.render('user-details', { user });
      } else {
        res.status(404).json({ message: 'Utilisateur introuvable' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Une erreur est survenue lors de la récupération des détails de l\'utilisateur.' });
    }
  });

// Middleware pour gérer les routes non valides (404)
app.use((req, res) => {
    res.status(404).render('404');
  });

app.listen(8001, () => {
    console.log("dis moi tout !");
})