// importar la función sum del archivo app.js
const { sum, fromEuroToDollar, fromDollarToYen, fromDollarToPound } = require('./app.js');

// comienza tu primera prueba
test('adds 14 + 9 to equal 23', () => {
    //dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14, 9);

    // esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23);
});


test("One euro should be 1.206 dollars", function(){        
    expect(fromEuroToDollar(3.5)).toBe(4.2); 
})

test("1 dollar should be 108.25 yen", function(){        
    expect(fromDollarToYen(1)).toBe(106.58); 
})

 test("Two dollar should be 1.33 pound", function(){        
     expect(fromDollarToPound(1)).toBe(0.67); 
 })