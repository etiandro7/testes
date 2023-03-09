import nc from 'next-connect'
import { getlistaviaturaapreendidas} from '../../../backend/db/ListarMotorizadaApreendidas'

const Local = nc()
Local.get(getlistaviaturaapreendidas)


module.exports= Local