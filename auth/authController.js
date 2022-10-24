const { OAuth2Client } = require('google-auth-library');
const client = new OAuth2Client(process.env.GOOGLE_DEFAULT_CLIENT_ID);
const clientId = process.env.GOOGLE_DEFAULT_CLIENT_ID;

//https://dev.to/adi73/reactjs-nodejs-google-auth-login-implementation-on-webapps-4n7a
//https://www.tutsmake.com/react-facebook-login-example-tutorial/
exports.googleLogin = (req, res) => {
    let inputJSON = JSON.stringify(req.body);
    let parsedJSON = JSON.parse(inputJSON);
    const { tokenId } = parsedJSON;
    let verifyObject = {};
    verifyObject.idToken = tokenId;
    verifyObject.audience = clientId;
    client.verifyIdToken(verifyObject)
        .then(response => {
            const { email_verified } = response.payload;
            if (email_verified) {
                console.log(req, res, response.payload)
            } else {
                res.json({ status: 403, message: 'Email Not Verified, use another method to login!' });
            }
        });
};
