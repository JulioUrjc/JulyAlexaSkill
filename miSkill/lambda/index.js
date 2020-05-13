const Alexa = require('ask-sdk-core');
const interceptors = require('./interceptors.js');
const persistence  = require('./persistence.js');
const handlers = require('./handlers.js');

//const languageStrings = {
//    'es' : require('./languajes/es'),
//    //'it' : require('./i18n/it'),
//    // ... etc
//}


/**
 * This handler acts as the entry point for your skill, routing all request and response
 * payloads to the handlers above. Make sure any new handlers or interceptors you've
 * defined are included below. The order matters - they're processed top to bottom 
 * */
exports.handler = Alexa.SkillBuilders.custom()
    .addRequestHandlers(
        handlers.LaunchRequestHandler,
        handlers.RegisterBirthdayIntentHandler,
        handlers.SayBirthdayIntentHandler,
        handlers.RemindBirthdayIntentHandler,
        handlers.CelebrityBirthdaysIntentHandler,
        handlers.HelpIntentHandler,
        handlers.CancelAndStopIntentHandler,
        handlers.FallbackIntentHandler,
        handlers.SessionEndedRequestHandler,
        handlers.IntentReflectorHandler)
    .addErrorHandlers(
        handlers.ErrorHandler)
    .addRequestInterceptors(
        interceptors.LocalisationRequestInterceptor,
        interceptors.LoggingRequestInterceptor,
        interceptors.LoadAttributesRequestInterceptor,
        interceptors.LoadNameRequestInterceptor,
        interceptors.LoadTimezoneRequestInterceptor)
    .addResponseInterceptors(
        interceptors.LoggingResponseInterceptor,
        interceptors.SaveAttributesResponseInterceptor)
    .withPersistenceAdapter(
        persistence.getPersistenceAdapter())
    .withApiClient(new Alexa.DefaultApiClient())
    .lambda();