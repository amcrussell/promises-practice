



let res = slowMath.add(6, 2)
    .then((result) => {
        console.log(result);
        return slowMath.multiply(result, 2);
    }).then((result) => {
        console.log(result);
        return slowMath.divide(result, 4);
    }).then((result) => {
        console.log(result);
        return slowMath.subtract(result, 3);
    }).then((result) => {
        console.log(result);
        return slowMath.add(result, 98);
    }).then((result) => {
        console.log(result);
        return slowMath.remainder(result, 2);
    }).then((result) => {
        console.log(result);
        return slowMath.multiply(result, 50);
    }).then((result) => {
        console.log(result);
        return slowMath.remainder(result, 40);
    }).then((result) => {
        console.log(result);
        return slowMath.add(result, 32);
    }).then((result) => {
        console.log(result);
        res = result;
        console.log(`The final result is ${res}.`);
        resultFinder(6, 2);
    }).catch((err) => {
        console.log(err);
    })

async function resultFinder(a, b) {

    let res = await slowMath.add(a, b);
    $('body').append(`<h2>${res}</h2>`)
    console.log(res);
    res = await slowMath.multiply(res, 2);
    $('body').append(`<h2>${res}</h2>`)
    console.log(res);
    res = await slowMath.divide(res, 4);
    $('body').append(`<h2>${res}</h2>`)
    console.log(res);
    res = await slowMath.subtract(res, 3);
    $('body').append(`<h2>${res}</h2>`)
    console.log(res);
    res = await slowMath.add(res, 98);
    $('body').append(`<h2>${res}</h2>`)
    console.log(res);
    res = await slowMath.remainder(res, 2);
    $('body').append(`<h2>${res}</h2>`)
    console.log(res);
    res = await slowMath.multiply(res, 50);
    $('body').append(`<h2>${res}</h2>`)
    console.log(res);
    res = await slowMath.remainder(res, 40);
    $('body').append(`<h2>${res}</h2>`)
    console.log(res);
    res = await slowMath.add(res, 32);
    $('body').append(`<h2>${res}</h2>`)
    console.log(res);
    console.log(`The final result is ${res}.`);
    $('body').append(`<h2>The final result is ${res}</h2>`)


}
