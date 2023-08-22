function authorize(request, response, next) {
    const { username } = request.query;
    console.log('je suis authorize');
    if (username !== 'Dramix') {
        return response.send('Tu n\'es pas le bienvenue ici :/');
    }
    next();
}

exports.authorize = authorize;