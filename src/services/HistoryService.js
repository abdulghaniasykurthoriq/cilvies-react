import httpClient from '../common/Http'

class HistoryService {

    retrieveAll(){
        return httpClient.get("/histories/")
    }
    create(data){
        return httpClient.post("/histories/",data)
    }
}

export default new HistoryService();