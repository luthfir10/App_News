const BASE_URL = {
    development : "http://localhost:8000" ,
    staging : "http://localhost:8000" ,
    production : "http://localhost:8000"
};

const ENV_URL = process.env.REACT_APP_BUILD_ENV || "development";

const API_URL = '${BASE_URL[ENV_URL]}/V1' ;
const API_FILE = BASE_URL[ENV_URL] ;
