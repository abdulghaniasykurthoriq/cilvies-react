import httpClient from '../common/Http'

class TotalHistoryService {

    retrieveAll(){
        return httpClient.get("/totalhistories/")
    }
    retrieveById(id){
        return httpClient.get(`/totalhistories/${id}`)
    }
    update(id,data){
        return httpClient.put(`/totalhistories/${id}`,data)
    }
}

export default new TotalHistoryService();