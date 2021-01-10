module.exports.danielFuncion = (event, context) => {
    console.log(`Esto es ${context.functionName}`)
    console.log('event', event)
    console.log('context', context)

}