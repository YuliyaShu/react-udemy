import axios from "axios";

const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID 9ci4sK9TMqPpRCJb5ZeGYnhgn4Kp7uIkBEaB18dU_AE'
        },
        params: {
            query: term
        }
    })
    console.log('🚀 ~ searchImages ~ response:', response.data.results);
    return response.data.results;
}

export default searchImages;

