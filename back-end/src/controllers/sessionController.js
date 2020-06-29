const connection = require('../database/connection')

module.exports = {
    async create(request, response) {
        const { user, password } = request.body

        const profile = await connection('funcionario')
            .where('user', user)
            .andWhere('password', password)
            .select('name')
            .first()

        if (!user || !password) {
            return response.status(400).json({ error: "Email ou senha incorretos." })
        }
        response.status(200).json(profile)
 
    }
}