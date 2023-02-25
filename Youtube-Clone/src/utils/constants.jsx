const API_KEY ="AIzaSyD0BPTPKSUhEnh7AMWA7qFdImEAAdyy0Fk"

export const YOUTUBE_VIDEO_API =`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&key=${API_KEY}&chart=mostPopular&regionCode=IN&maxResults=50`

export const SEARCH_SUGGESTIONS_API = "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q="

export const VIDEO_BY_ID_API =`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=VIDEO_ID&key=${API_KEY}`

export const COMMENTS_API =`https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=VIDEO_ID&key=${API_KEY}`

export const RELATED_VIDEOS_API = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&relatedToVideoId=VIDEO_ID&type=video&maxResults=20&key=${API_KEY}`

export const SEARCH_RESULTS_API =`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=SEARCH_QUERY&key=${API_KEY}`