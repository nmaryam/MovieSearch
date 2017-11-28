let ConfigData = {
    axiosApiRequestURL: "http://www.omdbapi.com/",
    imdbBasePath:"http://www.imdb.com/title/",
    API_key:'apikey=e753f69a',
    baseURL: "http://localhost:8080",
    url:'/',
    getURL(urlPart){
        if(urlPart === ConfigData.url){
            return urlPart;
        }
        else{
            return ConfigData.url+urlPart
        }
    },
    routes:{
        dashboard:"dashboard",
    }
};
export default ConfigData;