const connection = require('../database/connection')

module.exports = {
    async index(request, response){
        const clientes = await connection('clientes').select('*')

        return response.json(clientes)
    },

    async create(request, response){
        const {
            name,
            address,
            number,
            cep,
            neighborhood,
            city,
            state,
            phone,
            cellPhone,
            email,
            cpf
        } = request.body
        const [id] = await connection('clientes').insert({
            name,
            address,
            number,
            cep,
            neighborhood,
            city,
            state,
            phone,
            cellPhone,
            email,
            cpf
        })

        return response.json({ id })
    },

    async delete(request, response){
        const {id} = request.params

        const cliente = await connection('clientes')
        .where('id', id)
        .first()

        await connection('clientes').where('id', id).delete()

        return response.status(204).send()

    }
}