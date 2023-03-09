import nc from 'next-connect'
import { getTodosViatura} from '../../../backend/db/TodosVeiculos'

const Local = nc()
Local.get(getTodosViatura)


module.exports= Local