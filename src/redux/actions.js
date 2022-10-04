import axios from "axios"

export function setItem(city) {
    return {
        type: 'ADD_ITEM',
        data: city
    }
}

export function replaceItem(city) {
    return {
        type: 'REPLACE_ITEM',
        data: city
    }
}
export function addData(data) {
    return {
        type: 'ADD_DATA',
        data
    }
}
export function selectCity(city) {
    return {
        type: 'SELECT_CITY',
        data: city
    }
}
export function setAuth(value) {
    return {
        type: 'AUTH',
        data: value
    }
}
export function detailInform(value) {
    return {
        type: 'SHOW_DETAIL',
        data: value
    }
}

export function cityData(data, cityName) {
    return {
        type: 'CITY_DATA',
        data,
        cityName
    }
}
export function imgURL(img, cityName) {
    return {
        type: 'BACK_IMG',
        img,
        cityName
    }
}

export const getCityData = (url, cityName) => (dispatch) => {
    axios.get(url)
        .then(response => dispatch(cityData(response.data, cityName)))
        .catch(err => console.log(err.message))
}
export const getBackImg = (url, cityName) => (dispatch) => {
    axios.get(url)
        .then(response => dispatch(imgURL(response.data.hits[0].largeImageURL, cityName)))
        .catch(err => err.name == 'TypeError' ? 'https://i.ytimg.com/vi/Jn0yaaLFNvY/maxresdefault.jpg' : alert('img', err));
}
