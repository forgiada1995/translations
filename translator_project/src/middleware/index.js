const axios = require('axios');

const Middleware = {
    post: {}
}

Middleware.post.translate = async (req, res) => {
    const {
        text,
        source,
        target
    } = req.query

    const URL = `https://translation.googleapis.com/language/translate/v2`;
    const APIKEY = process.env.APIKEY;
    params = {
        q:text,
        source, 
        target, 
        format:'text', key: APIKEY
    }
    
    try {
        const response = await axios.post(URL, null, { params })
        console.log(response.data, Object.keys(response.data.data))
        
        const resp = {
            success: true,
            tranlations: response.data.data.translations.map(t => {
                return {
                    lang: source ? source : t.detectedSourceLanguage,
                    translatedText: t.translatedText
                }
            })
        }
        
        return res.json(resp);
      } catch (error) {
        console.log(error)
        return res.status(400).send(error);
      }

}

module.exports = {
    Middleware
}