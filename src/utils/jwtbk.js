// demo link: https://supertokens.com/static/b0172cabbcd583dd4ed222bdb83fc51a/9af93/jwt-structure.png
const JWT_SECRET = "b808024aecf320bc2d5cddbf847ad757def6a962346d43916dc2c6477f85c920";
const crypto = require('crypto');

const base64Encode = (string) => {
    const encoded = Buffer.from(string, "utf8").toString('base64');
    // An toàn về đường dẫn
    return encoded.replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

const base64Decode = (string) => {
    const decoded = Buffer.from(string, 'base64').toString('utf-8');
    // An toàn về đường dẫn
    return decoded.replace(/-/g, '+').replace(/_/g, '/')
}

const generateSignature = (header, payload) => {
    // Create the HMAC using SHA-256
    const hmac = crypto.createHmac(`sha256`, JWT_SECRET);
    hmac.update(`${header}.${payload}`)

    const signature = hmac.digest('base64url')
    return signature
}


// ttl: time to life
const sign = (_payload, ttl = 3600) => {
    const header = base64Encode(JSON.stringify({
        alg: "HS256",
        typ:"JWT",
    }))
 
    const payload = base64Encode(JSON.stringify({
        exp: Math.floor(Date.now() / 1000) + ttl,
        ..._payload
    }))

    const signature = generateSignature(header, payload)

    const token = `${header}.${payload}.${signature}`
    return token
}

const verify = (token) => {
    const tokens = token.replace('Bearer ','').split(".")
    const header = JSON.parse(base64Decode(tokens[0]))
    const payload = JSON.parse(base64Decode(tokens[1]))
    const tokenSign = tokens[2]    

    const signature = generateSignature(tokens[0], tokens[1])

    if (tokenSign !== signature) {
        // response 401 authorized
        return console.log(401, "Unauthorized")
    }

    const timestamp = Math.floor(Date.now() / 1000);

    if( timestamp > payload.exp) {
        return console.log("Hết hạn")
    }

    // const user = userService.findById(payload.userId)

}

const myToken = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3NTE5MTA0NDksInVzZXJJZCI6MTB9.wHdWsxLNABEEpurJmJweUtgOYq52ZrUMd6SUvNexaD4`

verify(myToken)
                   