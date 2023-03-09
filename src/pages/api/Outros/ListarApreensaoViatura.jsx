import nc from 'next-connect'
import { getViatura} from '../../../backend/db/ListarApreensaoViatura'

const Local = nc()
Local.get(getViatura)


module.exports= Local