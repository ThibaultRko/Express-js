const { Router } = require('express');

const movieRouter = Router();

movieRouter.get('/', (request, response) => {
    //il va aller chercher un template movie.mustache
    //dans notre dossier views gârce à  sever.set ('views')
    response.render('movies', {
        message: 'Bienvenu sur la liste de films',
        title: 'Ma vidéothèque',
        movies: [
            {
                title: 'Forest Gump',
            },{
                title: 'Top Gun'
            }
        ],
        listElement: function() {
            return function(text, render){
                return '<li>' + render(text) + '</li>';
            }
        }
    });
})

exports.movieRouter = movieRouter;