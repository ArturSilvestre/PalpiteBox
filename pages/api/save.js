import { GoogleSpreadsheet } from 'google-spreadsheet';
import moment from 'moment';
import credentials from '../../credentials.json';

const doc = new GoogleSpreadsheet('10aE7nPYACkXJAjyE37SxGIF4V7qafgTKAW0BBFPlub0');

export default async(req, res) => {
  try {
    await doc.useServiceAccountAuth(credentials)
    await doc.loadInfo()

    const sheet = doc.sheetsByIndex[1]
    const data = JSON.parse(req.body)

    const sheetConf = doc.sheetsByIndex[2]
    await sheetConf.loadCells('A2:B2')

    const mostrarPromocaoCell = sheetConf.getCell(1, 0)
    const textCell = sheetConf.getCell(1, 1)

    let Cupom = ''
    let Promo = ''
    if (mostrarPromocaoCell.value === 'verdadeiro') {
      Cupom = 'temporario'
      Promo = textCell.value
    }

    // Nome	Email	WhatsApp	Cupom	Promo
    await sheet.addRow({
      Nome: data.Nome,
      Email: data.Email,
      WhatsApp: data.WhatsApp,
      Nota: 5,
      'Data Preenchimento': moment().format('DD/MM/YYYY, HH:mm:ss'),
      Cupom,
      Promo
    });
    res.end(req.body)
  } catch (err) {
    console.log(err);
    res.end('error')
  }
}