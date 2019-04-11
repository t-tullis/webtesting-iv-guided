//Testing endpoints
// returns correct http status code
const request = require('supertest')
const server = require('./server.js')

describe('server.js', () => {
    describe('GET /', () => {
        //testing hitting the GET endpoint
        it('should respond with 200 OK', () => {
            return request(server)
            .get('/')
            .then(response => {
                expect(response.status).toBe(200)
            })
        })

        //async example
        // it('should respond with 200 OK async', async () => {
        //     const response = await request(server).get('/')
            
        //     expect(response.status).toBe(200)
        // })

        it('should work', () => {
            return request(server)
            .get('/')
            .expect(200)
        })
        
        it('should return JSON', () => {
            return request(server).get('/').then(res => {
                expect(res.type).toBe('application/json')
            })
        })
        
        //Testing the body of the response to have {api: 'up'} in it
        it('should return { api: "up" }', () => {
            return request(server)
            .get('/')
            .then(res => {
                expect(res.body).toEqual({api: 'up'})
            })
        })
    })
})