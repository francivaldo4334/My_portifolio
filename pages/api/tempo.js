function tempo(request,response){
    const tempo = new Date()
    response.json({
        date:tempo.toGMTString()
    });
}
export default tempo;