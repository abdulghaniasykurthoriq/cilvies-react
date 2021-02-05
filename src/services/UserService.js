import httpClient from '../common/Http'

class UserService {
    create(data){
        return httpClient.post("/users/create", data);
    }
    login(data){
        return httpClient.post("/users/login", data);
    }
    retrieveById(id){
        return httpClient.get(`/users/${id}`)
    }
}

export default new UserService();