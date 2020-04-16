module.exports = {
    translation : {
        'WELCOME' : 'Bienvenido a casa', // <- can either be a string...
        'HELLO_WORLD' : [                  // <- or an array of strings.
            'Hello there',
            'Hey',
            'Hi!'
        ],
        'GREETING_WITH_NAME' : [
            'Hola %s',           // --> That %s is a wildcard. It will
            'Estas aquí, %s',    //     get turned into a name in our code.
            'Como estás, %s'     //     e.g. requestAttributes.t('GREETING_WITH_NAME', 'Andrea')
        ],
        // ...more...
    }
}