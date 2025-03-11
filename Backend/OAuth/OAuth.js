const axios = require('axios');
const config = require('./google.json');
const qs = require('qs');


async function getGoogleOAuthTokens(code){
    const url = 'https://oauth2.googleapis.com/token'
    const values = {
        code,
        client_id: config.ClientID,
        client_secret: config.ClientSecret,
        redirect_uri: config.RedirectURL,
        grant_type: "authorization_code"
    }

    try{
        const res = await axios.post(url, qs.stringify(values), {headers:{
            'Content-Type': 'application/x-www-form-urlencoded'
        }})
        return res.data;
    } catch(e){
        console.log(e);
    }
}

async function getGoogleUser(id_token, access_token){
    try{
        const res = await axios.get(`https://www.googleapis.com/oauth2/v1/userinfo`,{
            headers:{
                Authorization: `Bearer ${id_token}`
            },
            params:{
                alt: 'json',
                access_token: access_token
            }
        })
        return res.data;
    }catch(e){
        console.log(e);
    }
}
module.exports = {getGoogleOAuthTokens, getGoogleUser};