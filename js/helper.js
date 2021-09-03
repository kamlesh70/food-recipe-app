import { FETCHTIMEOUT_SEC } from "./config.js";

const fetchTimeout = (sec) => {
    return new Promise((_, reject) => { 
        setTimeout(() =>reject(new Error(`fetch takes more the ${sec} sec`)), sec*1000);
    });
};

export const getJSON = async (url)=>{
    try{
        const res = await Promise.race([fetch(url), fetchTimeout(FETCHTIMEOUT_SEC)]);
        const data = await res.json();
        if(!res.ok) throw new Error(data.message);
        return data;
    }
    catch(err){
        throw err;
    }
}