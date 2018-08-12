var FtpDeploy = require('ftp-deploy');
var ftpDeploy = new FtpDeploy();

var config = {
    user: "joycelau",                   // NOTE that this was username in 1.x 
    password: "Framing89thug",           // optional, prompted if none given
    host: "joycelau.org",
    port: 21,
    localRoot: __dirname + '/build',
    remoteRoot: '/public_html',
    // include: ['*', '**/*'],      // this would upload everything except dot files
    // include: ['*.php', 'dist/*'],
    // exclude: ['dist/**/*.map'],     // e.g. exclude sourcemaps
    deleteRemote: true              // delete existing files at destination before uploading
}

// use with promises
ftpDeploy.deploy(config)
    .then(res => console.log('finished'))
    .catch(err => console.log(err))

// use with callback
ftpDeploy.deploy(config, function(err) {
    if (err) console.log(err)
    else console.log('finished');
});