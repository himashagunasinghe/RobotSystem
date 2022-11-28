import axios from 'axios';

 class RobotService{
    
    getall(){
        return axios.get('http://localhost:8000/api/robots')
    }


    findByname(name){
        return axios.get(`http://localhost:8000/PetDetails/search?name=${name}`);
    }
}
export default new RobotService();