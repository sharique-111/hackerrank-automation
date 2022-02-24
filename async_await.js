function placeOrder(drink) {
    return new Promise(function (resolve,reject) {
        if(drink==='coffee'){
            resolve('Order placed');
        }
        else{
            reject('Sorry we only serve coffee');
        }
    })
}

function processOrder(order) {
    return new Promise(function (resolve) {
        console.log("Order is being Processed");
        resolve(`Coffee served for the ${order}`);
    })
}

//scenario with promises
// placeOrder('coffee').then(function (orderFromCustomer) {
//     console.log("Request Received");
//     console.log(orderFromCustomer);
//     let orderIsProcessed = processOrder(orderFromCustomer);
//     return orderIsProcessed;
// }).then(function (orderIsProcessed){
//     console.log(orderIsProcessed);
// }).catch(function (err) {
//     console.log(err);
// })

// async-await
async function serveOrder() {
    try{
        const orderReceived = await placeOrder('coffee');
        console.log(orderReceived);
        const orderIsProcessed = await processOrder(orderReceived);
        console.log(orderIsProcessed);
    }
    catch(error){
        console.log(error);
    }
}

serveOrder();