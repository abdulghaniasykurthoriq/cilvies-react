import httpClient from '../common/Http.js';


class FilmService {

    retrieveAll(){
        return httpClient.get("/films/");
    }
    retrieveById(id){
        return httpClient.get(`/films/${id}`);
    }
    searchByTitle(title){
        return httpClient.get(`/films?title=${title}`)
    }
    create(data){
        return httpClient.post("/films/", data);
    }
    update(id, data){
        return httpClient.put(`/films/${id}`, data);
    }
    delete(id){
        return httpClient.delete(`/films/${id}`);
    }
}

export default new FilmService();