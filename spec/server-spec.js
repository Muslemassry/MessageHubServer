

var request = require('supertest')
var url = 'http://localhost:4201/'; 
describe('name', function () {
    var server;
    // var server = require('../server.js');
    beforeAll((done) => {
        server = require('../server.js');
        done();
    });

    afterAll((done) => {
        server.close();
        done();
    });

    it('should be supported', function (done) {
        var testMSG = {
            MessageTitle: "testMSGTitle",  
            MessageText: "testMSGText", 
            MessageId: 2  
          }
        request(url).post('messageAdd').send(testMSG).set('Accept', 'application/json').expect(200, 
            {
                MessageId: 2,
                MessageText: 'MessageTexttestMSGText',
                MessageTitle : 'MessageTitletestMSGTitle'
            }, done);        
    });

    it('should be supported', function (done) {
        var testMSG = {
            MessageTitle: "testMSGTitle",  
            MessageText: "testMSGText",  
          }
        request(url).put('messageUpdate').send(testMSG).set('Accept', 'application/json').expect(200, 
            {
                MessageId: 555,
                MessageText: 'testMSGText',
                MessageTitle : 'testMSGTitle'
            }, done);        
    });

    it('should be supported', function (done) {
        var testMSG = {
            MessageTitle: "testMSGTitle",  
            MessageText: "testMSGText",  
          }
        request(url).get('message?messageId=5').set('Accept', 'application/json').expect(200, 
            {
                MessageId: '5',
                MessageText: 'MessageText5',
                MessageTitle : 'MessageTitle5'
            }, done);        
    });

    //server.close();
});

// describe('name', function () {
//     it('should be supported', function (done) {
//         var testMSG = {
//             MessageTitle: "testMSGTitle",  
//             MessageText: "testMSGText", 
//             MessageId: 2  
//           }
//         request(url).post('messageAdd').send(testMSG).set('Accept', 'application/json').expect(200, 
//             {
//                 MessageId: 2,
//                 MessageText: 'MessageTexttestMSGText',
//                 MessageTitle : 'MessageTitletestMSGTitle'
//             }, done);        
//     });
// });

// describe('name', function () {
//     it('should be supported', function (done) {
//         var testMSG = {
//             MessageTitle: "testMSGTitle",  
//             MessageText: "testMSGText",  
//           }
//         request(url).put('messageUpdate').send(testMSG).set('Accept', 'application/json').expect(200, 
//             {
//                 MessageId: 555,
//                 MessageText: 'testMSGText',
//                 MessageTitle : 'testMSGTitle'
//             }, done);        
//     });
// });

// describe('name', function () {
//     it('should be supported', function (done) {
//         var testMSG = {
//             MessageTitle: "testMSGTitle",  
//             MessageText: "testMSGText",  
//           }
//         request(url).get('message?messageId=5').set('Accept', 'application/json').expect(200, 
//             {
//                 MessageId: '5',
//                 MessageText: 'MessageText5',
//                 MessageTitle : 'MessageTitle5'
//             }, done);        
//     });
// });

//console.log('heee ', server);
