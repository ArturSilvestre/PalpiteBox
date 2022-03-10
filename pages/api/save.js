import { GoogleSpreadsheet } from 'google-spreadsheet';
import moment from 'moment';
import credentials from '../../credentials.json';

const doc = new GoogleSpreadsheet('10aE7nPYACkXJAjyE37SxGIF4V7qafgTKAW0BBFPlub0');

const genCupom = () => {
  const code = parseInt(moment().format('YYMMDDHHmmssSSS')).toString(16).toUpperCase();
  return code.substr(0,4) + '-' + code.substr(4,4) + '-' + code.substr(8,4);
}

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
      Cupom = genCupom()
      Promo = textCell.value
    }

    await sheet.addRow({
      Nome: data.Nome,
      Email: data.Email,
      WhatsApp: data.WhatsApp,
      Nota: 5,
      'Data Preenchimento': moment().format('DD/MM/YYYY, HH:mm:ss'),
      Cupom,
      Promo
    });
    res.end(JSON.stringify({
      showCoupon: Cupom !== '',
      Cupom,
      Promo
    }))
  } catch (err) {
    console.log(err);
    res.end('error')
  }
}