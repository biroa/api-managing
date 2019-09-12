//https://egghead.io/lessons/javascript-creating-demo-apis-with-json-server
// https://github.com/marak/Faker.js/
// https://www.npmjs.com/package/json-server
// http://marak.github.io/faker.js/
var faker = require('faker');
var youTubeUrls = [
    '5DayCGCyfMk',
    'ZQHp5ndfxxI',
    '9VHkvI5DoK4',
    'uW8AZCPp3AE',
    'UEQvj3DcDuI',
    'p2Y0Sg1Hfgg',
    'kW_lf9xntVc',
    'FP2ThA4nCNI',
    'MY5ye617VEs',
    'p5TArDdv6Dw',
];

function generateEmployees () {
    var profiles = []
    for (var id = 0; id < 50; id++) {
        var name = faker.name.findName();
        var email = faker.internet.email();
        var image = faker.image.sports();
        //faker.random.number({min:0, max:9})
        var video = youTubeUrls[id%10];

        profiles.push({
            "id": id,
            "name": name,
            "email": email,
            "image":image,
            "video":video
        })
    }
    return { "profiles": profiles }
}
module.exports = generateEmployees;

