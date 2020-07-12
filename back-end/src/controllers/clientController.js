const connection = require('../database/connection')


module.exports = {
    async index(request, response){

       const {name} = request.query

        try {
            
            if(name == null){
                const clientes = await connection('clientes').select('*')

                return response.json(clientes)
            }
    
            const clientes = await connection('clientes')
            .where('name', 'like',  '%' + name + '%')
            .select('*')
    
            return response.json(clientes)

        } catch (error) {
            console.log(error)
        }
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

    async update(request, response, next){
        const {id} = request.params
        
        const{
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
        }

        await connection('clientes').update({
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
        .where('id', id)
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