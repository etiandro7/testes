import nc from 'next-connect'
import { getlistaviaturaapreendidas} from '../../../backend/db/ListarViaturaApreendidas'

const Local = nc()
Local.get(getlistaviaturaapreendidas)


module.exports= Local