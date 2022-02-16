import { config } from './config';

export const parseJsonOrReturnNormalText = (response) => {
    return new Promise((resolve,reject) => {
        if (!response.ok) {
            return reject("Something went wrong");
        }
        response.text().then((text) => {
            try {
                var json = JSON.parse(text)
                parseResult(json)
                .then((result)=>{
                    return resolve(result);
                });
            } catch (error) {
                return resolve(text);
            }
        });
    });
}

export const parseResult = (json) => {
    return new Promise((resolve,reject) => {
        return resolve(json);
    });
}

export const getcall = (apipath) => {
    return new Promise((resolve,reject) => {
        fetch(config('REACT_APP_API_HOST')+apipath, { 
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
            credentials: 'include'
        })
        .then(function(response) {
            parseJsonOrReturnNormalText(response).then((response) =>{
                return resolve(response);
            }).catch(error => {
                return reject(error);
            })
        }).catch(error => {
            return reject(error);
        })
    });
}

export const deletecall = (apipath, body) => {
    return new Promise((resolve,reject) => {
        fetch(config('REACT_APP_API_HOST')+apipath,{
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
            credentials: 'include',
            body: JSON.stringify(body)
        })
        .then((response)=>{
            parseJsonOrReturnNormalText(response).then((response) =>{
                return resolve(response);
            }).catch(error => {
                return reject(error);
            })
        }).catch((error)=>{
            resolve(error);
        });
    });
}

export const postcall = (apipath, body) => {
    return new Promise((resolve,reject) => {
        fetch(config('REACT_APP_API_HOST')+apipath, { 
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            credentials: 'include',
            body: JSON.stringify(body)
        })
        .then(function(response) {
            parseJsonOrReturnNormalText(response).then((response) =>{
                return resolve(response);
            }).catch(error => {
                return reject(error);
            })
        }).catch(error => {
            return reject("Something went wrong please try again after sometime");
        })
    });
}

export const patchcall = (apipath, body) => {
    return new Promise((resolve,reject) => {
        fetch(config('REACT_APP_API_HOST')+apipath, { 
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            credentials: 'include',
            body: JSON.stringify(body)
        })
        .then(function(response) {
            parseJsonOrReturnNormalText(response).then((response) =>{
                return resolve(response);
            }).catch(error => {
                return reject(error);
            })
        }).catch(error => {
            return reject(error);
        })
    });
}

export const patchcallFormData = (apipath, formData) => {
    return new Promise((resolve,reject) => {
        fetch(config('REACT_APP_API_HOST')+apipath, { 
            method: "PATCH",
            credentials: 'include',
            body: formData
        })
        .then(function(response) {
            parseJsonOrReturnNormalText(response).then((response) =>{
                return resolve(response);
            }).catch(error => {
                return reject(error);
            })
        }).catch(error => {
            return reject(error);
        })
    });
}