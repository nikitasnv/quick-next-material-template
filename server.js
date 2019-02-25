const express = require('express')
const next = require('next')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')

const dev = process.env.NODE_ENV !== 'production'
const app = next({dev})
const handle = app.getRequestHandler()

function IsAuthenticated(req, res, next) {
    if (req.cookies.TOKEN === '_TOKEN_') {
        next();
    } else {
        app.render(req, res, '/login')
    }
}

app.prepare()
    .then(() => {
        const server = express()
        server.use(cookieParser())
        server.use(bodyParser.json())

        //------------------------------------------------

        server.post('/check', (req, res) => {
            res.setHeader('Content-Type', 'application/json');
            const body = req.body;
            const status = body.email === 'test' && body.password === 'test';
            res.send(JSON.stringify({status, ...status && {token: '_TOKEN_'}}));
        })

        //-----------------------------------------------

        server.all('*', IsAuthenticated, (req, res) => {
            return handle(req, res)
        })

        server.listen(3000, (err) => {
            if (err) throw err
            console.log('> Ready on http://localhost:3000')
        })
    })
    .catch((ex) => {
        console.error(ex.stack)
        process.exit(1)
    })