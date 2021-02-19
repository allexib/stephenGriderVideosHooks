import axios from 'axios';


const KEY ='AIzaSyBtgtG_wTVC5X_EhDBT4lkfvCoyPIMiGeA';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResult: 5,
        key: KEY
    }
});

