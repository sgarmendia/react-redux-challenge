export default (...functions) => {
    if (functions.length === 1) return functions[0]

    const lastFunction = functions[functions.length - 1]
    const array = functions.slice(0, -1)  
    return (...args) => array.reduceRight((acc, func) => func(acc), lastFunction(...args))
};