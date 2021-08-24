import axios from "axios"

export default function callApi(url) {
    return axios
        .get(url)
        .then((res) => res.data)
}