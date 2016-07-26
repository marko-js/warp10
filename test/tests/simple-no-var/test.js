module.exports = function(helpers) {
    var frank = {
        name: 'Frank',
        age: 30,
        adult: true,
        children: [
            {
                name: 'Sue',
                age: 5,
                adult: false
            },
            {
                name: 'Henry',
                age: 10,
                adult: false
            }
        ],
        address: {
            street: '123 Star Trek Way',
            city: 'Fort Collins',
            state: 'CO'
        }
    };

    helpers.browserVerify({
        frank: frank
    });
};