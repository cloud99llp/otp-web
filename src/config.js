import data from './config.json';

export const config = (key)=>{
    return data[key];
}