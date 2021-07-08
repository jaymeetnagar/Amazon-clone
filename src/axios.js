import axios from "axios";

const instance = axios.create({
    //API (cloud-function) URL
    baseURL: 'https://us-central1-clone-1a.cloudfunctions.net/api'
    // 'http://localhost:5001/clone-1a/us-central1/api'
});

export default instance;
