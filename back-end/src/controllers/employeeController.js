const connection = require('../database/connection')

module.exports = {
    async index(request, response) {
        const funcionario = await connection('funcionario').select('*')

        return response.json(funcionario)
    },

    async create(request, response) {
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
            cpf,
            rg,
            company,
            sector,
            occupation,
            admissionDate,
            resignationDate,
            workload,
            salary,
            user,
            password
        } = request.body
        const [id] = await connection('funcionario').insert({
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
            cpf,
            rg,
            company,
            sector,
            occupation,
            admissionDate,
            resignationDate,
            workload,
            salary,
            user,
            password
        })

        return response.json({ id })
    },

    async delete(request, response){
        const {id} = request.params

        const employee = await connection('funcionario')
        .where('id', id)
        .first()

        await connection('funcionario').where('id', id).delete()

        return response.status(204).send()
    }

}