const connection = require('../database/connection')
const bcript = require('bcrypt')

module.exports = {
    async create(request, response) {
        const { user, password } = request.body

        const profile = await connection('funcionario')
        .where('user', user)
        .select('*')

        if(profile.length < 1){
            return response.status(401).json({error: 'Falha na autenticação'})
        }else{
            bcript.compare(password, profile[0].password, (error, result) => {
                if(error){
                    return response.status(401).json({error: 'Falha na autenticação'})
                }
                if(result){
                    const name = profile[0].name
                    const accessType = profile[0].accessType

                    return response.status(201).json({name, accessType})
                }
            })
        }

    }
}





// const profile = await connection('funcionario')
        //     .where('user', user)
        //     .andWhere('password', password)
        //     .select('name')
        //     .select('accessType')
        //     .first()

        // if (!user || !password) {
        //     return response.status(400).json({ error: "Email ou senha incorretos." })
        // }
        // response.status(200).json(profile)
 