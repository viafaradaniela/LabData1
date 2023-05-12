import {express, cors, os} from './dependencias.js'
const SERVER_IP = "192.168.10.12"

const server = express()
const PORT = 5050


server.use(cors({origin : '*'}))
server.use(express.json())
server.use('/client', express.static('client'))

server.listen(PORT, ()=> {

console.log(`Server is running, host http://${SERVER_IP}:${PORT}/`);

console.table({
    'Client Endpoint' : `http://${SERVER_IP}:${PORT}/client`
})
})

// Get and Post with express

let userData

server.post('/user-data', (req, res)=>{
userData = req.body
console.log(userData);
})

let metaData

server.post('/meta-data', (req, res)=>{
    metaData = req.body
    console.log(metaData);
})









