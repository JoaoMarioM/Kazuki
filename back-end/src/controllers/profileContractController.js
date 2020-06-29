const connection = require('../database/connection')

module.exports = {
    async index(request, response){
        const cliente_id = request.headers.authorization
        
        const [count] = await connection('contratos').count()

        // console.log(count)

        const contract = await connection('contratos')
        .where('cliente_id', cliente_id)
        .select('*')

        response.header('X-Total-Count', count['count(*)'])

        return response.json(contract)
    }
}