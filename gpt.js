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