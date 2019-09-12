//https://egghead.io/lessons/javascript-creating-demo-apis-with-json-server
// https://github.com/marak/Faker.js/
// https://www.npmjs.com/package/json-server
// http://marak.github.io/faker.js/
var faker = require('faker');
var youTubeUrls = [
    'c1d2b2714428ed8ceff869ea822904e8',
    '738ba2302134af6c5c20a62b11bdd9dc',
    '3505d1c555b07b6540d1069654f47e77',
    'bbe0b0f99e7d0ccb514d4e596d6628e6',
    '2b04ed8e1b2e11c0153afde6ec5868ef',
    'ec9683830c91bc73425ed1ac3ac70dd8',
    '51beed9607dbf42e47a3fe5d032e2fb4',
    '46265fb6ec6e042c77252e9ae8d28523',
    '224ff8671464660d395162da8789dc4e',
    'fe6b2eb07666cc75d53c2733cdfaeded',
];

function generateEmployees () {
    var profiles = []
    for (var id = 0; id < 50; id++) {
        var name = faker.name.findName();
        var email = faker.internet.email();
        var image = faker.image.sports()+'?random='+ id;
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

