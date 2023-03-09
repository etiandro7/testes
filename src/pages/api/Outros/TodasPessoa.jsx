import nc from 'next-connect'
import { getTodos} from '../../../backend/db/TodasPessoas'

const Local = nc()
Local.get(getTodos)

module.exports= Local