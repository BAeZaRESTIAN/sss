const chalk = require("chalk")
const fs = require("fs")

global.owner = '6281244286074' 
global.toko = 'SPARKLING OFC'
global.namabot = 'NOVA BOT' 
global.telegram = ''
global.channel = ''
global.website = ''
global.server = ''
global.keydepo = "apikey paydisini" //Api Key Pay disini
global.sessionName = 'session'
global.nomorKu = '6281244286074@s.whatsapp.net'
global.pajak = `350`
global.menu = { url: 'upload gambarnya di telegra.ph' } 
global.qrisdonate = fs.readFileSync(`./Pengaturan/database/deposit/image/qr-code.jpg`)
global.antilink = false
global.packname = "NOVA BOT⚡";
global.author = "NOVA ARDIAN";
global.paydisini = { 
    validt: '1800', // GAUSAH DIUBAH
    layanan: '11', //GAUSAH DIUBAH DIUBAH
    apikey: 'apikey paydisini', //apikey paydisini 
    type_fee: '1', //GAUSAH DIUBAH
    }
global.mess = {
    daftar: '_Untuk Daftar Silahkan Ketik Seperti Di Bawah Ini_\n#daftar username|email', 
    admin: 'Khusus Admin Grup Wahh',
    botAdmin: 'Bot Nya Aja Gak Admin Duh',
    owner: 'Ada Siapa Ini Khusus Owner Ku',
    group: 'Fitur Untuk Grup Anjay',
    private: 'Fitur Cuma Bisa Di Vrivate Chat',
    
    
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})