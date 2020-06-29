const connection = require('../database/connection')

module.exports = {
    async index(request, response){
        const contratos = await connection('contratos').select('*')

        return response.json(contratos)
    },

    async create(request, response){
        const {
            serviceMethod,
            pestFound,
            characteristics,
            startDate,
            warrant,
            hour,
            budgetTechnician,
            responsibleTechnician,
            assistantTechnician,
            payment,
            value
        } = request.body

        const cliente_id = request.headers.authorization

        const [id] = await connection('contratos').insert({
            serviceMethod,
            pestFound,
            characteristics,
            startDate,
            warrant,
            hour,
            budgetTechnician,
            responsibleTechnician,
            assistantTechnician,
            payment,
            value,
            cliente_id
        })

        return response.json({ id })
    },

    async delete(request, response){
        const {id} = request.params
        const cliente_id = request.headers.authorization

        const contracts = await connection('contratos')
        .where('id', id)
        .select('cliente_id')
        .first()
        
        // if(contracts.cliente_id !== cliente_id){
        //     return response.status(401).json({ error: 'Operation not permitted.'})
        // }

        await connection('contratos').where('id', id).delete()

        return response.status(204).send()
    }
}