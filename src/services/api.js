const BASEURL = import.meta.env.VITE_BASEURL

class Api {
    constructor(baseUrl) {
        this.baseUrl = baseUrl
    }

    async curl(method, restUrl = '', body){
        const auth = this.isLogged()
        const response = await fetch(this.baseUrl + restUrl, {
            method,
            headers: {
              'Content-Type': 'application/json',
              "Authorization": `Basic ${auth}`
            }, body
          });
          return await response.json()
    }

    async login(username, password){
        return localStorage.setItem('auth', btoa(`${username}:${password}`))
    }

    isLogged(){
        const auth = localStorage.getItem('auth')
        if(auth) return auth
    }

    async get(restUrl = '', body = {}) {
        return await this.curl('GET', restUrl)
    }

    async post(restUrl = '', body = {}) {
        return await this.curl('POST', restUrl, body)

    }

    async delete(restUrl = '', body = {}) {
        return await this.curl('DELETE', restUrl, body)

    }

    async put(restUrl = '', body = {}){
        return await this.curl('PUT', restUrl, body)

    }
}

export default new Api(BASEURL)