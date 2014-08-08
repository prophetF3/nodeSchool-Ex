/**
 * Created by Leandro on 06/08/14.
 */

/*
Cosa devo fare per step:

1) leggere il file di log e capire se il messaggio è WARN DANGER ERROR;
2) usare le espressioni regolari ricavarmi le informazioni necessarie al fine di lanciare gli script;
3) gestire i lanci degli script e quindi gli eventi.
 */

// uso la fs.readFileAsync per interagire con il file di log
var fs = require('fs');
var client_whereExecscript = require('scp2');
var bash_script = require('child_process').spawn;
var iterOfInformationLimit = require('async');
var path = process.argv[2];
var pattern = /([A-Z]+):.*\b([\d]+\.[\d]+\.[\d]+\.[\d]+)/;
var device_password = 'LunaP!c0';


//leggo il file riga per riga ed eseguo un match sulla stringa usando un pattern definito con una regex.
// Questo per estrapolarmi unicamente ERR,LOG,WARN ecc...

fs.readFile(path,'utf8' ,function (err, file) {
    if (err) throw err;
    var lines = file.split('\n');
    lines.forEach(function(line){
        var match = line.match(pattern);
        if(match)
            process_info(match[1], match[2]);
        else
            console.log('non matcha');
    });
});

//funzione da chiamare su ciascun elemento matchato del file che analizziamo, in modo tale da lanciare
//gli script o ricavare informazioni a seconda degli eventi.

function process_info(message, ip){
    if(!ip)
    ip = 'none';
    else
    switch(message) {
        case 'WARN':
            var reboot = bash_script('/Users/Leandro/Desktop/NodeJS-Exercise/scripts/server_repair_IPDEVICE.sh', [ip]);
            reboot.stderr.on('data', function (data) {
                console.log('stderr: ' + data);
            });
            reboot.on('close', function (code) {
                console.log('child process exited with code ' + code);
            });
            break;
        case 'DANGER':
            fs.appendFile('/Users/Leandro/Desktop/NodeJS-Exercise/Testi/richiesta_sostituzione.txt', ip, function (err) {
                if (err) throw err;
                console.log('Ip is correctly written to the file');
            });
            break;
        case 'ERROR':
            client_whereExecscript.scp('/Users/Leandro/Desktop/NodeJS-Exercise/scripts/server_repair_IPDEVICE.sh', {
                host: ip,
                username: 'root',
                password: 'password',
                path: '/.'
            }, function(err) {if (err) throw err});
            break;
    }
}


