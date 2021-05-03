import axios from "axios";

const KEY = 'AIzaSyAdZ6I4qvXpDgJ32PNl7d4yWByHsGZBQds'
 
export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
      part: 'snippet', 
      type: 'video',
      maxResults: 10,
      key: KEY
  }
});

