function retornarHora(data) {
    if (data && !(data instanceof Date)) {
        throw new TypeError('esperando instancia de Data.');
    }
    if (!data) {
        data= new Date();
    }

    return data.toLocaleTimeString('pt-br',{
        hour: '2-digit',
        minute: '2-digit',
        second:'2-digit',
        Hour12: false
    });
}
try{
    const data = new Date('01-01-1987 12:12:12')
    const hora = retornarHora(data);
    console.log();
}catch(error){

}finally{
    console.log('tenha um bom dia')
}