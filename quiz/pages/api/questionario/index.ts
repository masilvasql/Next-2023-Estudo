// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import questoes from '../bancoDeQuestoes'
import { embaralhar } from '@/functions/arrays'

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<any>
) {
    const ids = questoes.map(questao => questao.id)

    res.status(200).json(embaralhar(ids))


}
