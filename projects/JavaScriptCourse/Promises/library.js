const inventory = {
    sunglasses: 1900,
    pants: 1088,
    bags: 1344
};

const checkInventory = (order) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let inStock = order.every(item => inventory[item[0]] >= item[1]);
            if (inStock) {
                // This is what we do when we are "successful" -> pass in a String to the resolve() function
                resolve(`Thank you. Your order was successful.`);
            } else {
                // This is what we do when there is a "failure" -> pass in a String to the resolve() function
                reject(`We're sorry. Your order could not be completed because some items are sold out.`);
            }
        }, 1000);
    })
};

module.exports = { checkInventory };