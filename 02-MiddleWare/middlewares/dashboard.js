async function dashboard(request, response, next) {
    console.log(request);
    const { value } = request.query;
    if(value === 'dashboard') {
        return response.send('reponse du middleWare')
    }
    next()
}

exports.dashboard = dashboard