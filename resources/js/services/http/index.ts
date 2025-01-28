import axios from "axios";

// We gebruiken een "baseURL" zodat we niet overal /api voor hoeven te zetten
const baseURL = "/api";

const http = axios.create({
    baseURL,
    headers: {
        // Met deze header geef je aan welk soort content je verwacht terug te krijgen van de server.
        Accept: "application/json",
        // Deze header geeft aan in welk formaat de body van het verzoek is verzonden naar de server.
        "Content-Type": "application/json",
    },
});

/**
 * send a get request to the given endpoint
 */
export const getRequest = (endpoint: string) => http.get(endpoint);

/**
 * send a post/put/delete request to the given endpoint with the given data
 */
export const postRequest = (endpoint: string, data: any) =>
    http.post(endpoint, data);

export const updateRequest = (endpoint: string, data: any) =>
    http.put(endpoint, data);

export const deleteRequest = (endpoint: string, data: any) =>
    http.delete(endpoint, data);
