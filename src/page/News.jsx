
// importing icon from MUI ICON and Hooks,Link from react
import { useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

// importing  API key and Hostkey from .env
const apiKey = import.meta.env.VITE_NEWS_API_KEY;
const hostKey = import.meta.env.VITE_NEWS_API_HOST;

// Declaring url, method and key, host
const url = 'https://real-time-news-data.p.rapidapi.com/top-headlines?limit=500&country=US&lang=en';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': apiKey,
		'x-rapidapi-host': hostKey
	}
};

const News = () => {
  
  // Creating Hooks for access the data from API
  const [news, setNews] = useState([]);
  const [subArticles, setSubArticles] = useState([]);
  const [article, setArticles] = useState([]);
  const [isloading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
 
  useEffect(() => {
        // define the async function to fetchnews data
        const fetchNews = async () => {
            try {
              // Set loading state to true while data is being fetched
              setIsLoading(true);
              // Make a fetch request to the provided URL with specified options
              const response = await fetch(url, options);
              // Parse the JSON response
              const result = await response.json();
              // display the data result to the console and for check the data and debugging purpose
              console.log(result);
              // set the hooks to access and update states with the fetched data
              setNews(result.data[0]);
              setArticles(result.data.slice(1,6))
              setSubArticles(result.data[0].sub_articles);
            } catch (err) {
              // Handle any errors by logging them and setting an error state
              console.log(err);
              setError(true);
            } finally {
                // Set loading state to false once fetching completes (success or failure)
                setIsLoading(false);
              }
        }
        // Call fetchNews to initiate the data fetch
        fetchNews();
  }, []);

    // If the data is still loading, display a loading message
    if (isloading) {
        return <div>...LOADING</div>
    }

    // If there's an error in fetching data, display an error message
    if (error) {
        return <div>Something wrong in your API</div>
    }

  return (
      <> 
         {/* Back button to navigate back to the homepage */}
        <div className='max-w-full m-6'>
            <button className='p-2'>
                <Link to='/'><ArrowBackIosNewIcon/></Link>
            </button>
        </div>

        {/* Header for Top Headline news */}
        <div className='max-w-full m-3 flex justify-center text-2xl md:text-4xl lg:text-5xl bold border-b-2 border-blackky'>
            <h1 className='p-4 font-poppins font-bold text-blackky'>
                TOP HEADLINE NEWS
            </h1>
        </div>

        {/* Main news section that displays the main headline and sub-articles */}
        <div className='max-w-full flex justify-center gap-10 lg:flex-row flex-col'>
            {news && (
            <div className='w-98'>
                <div className='flex justify-center p-2'>
                    <img 
                        src={news.photo_url} 
                        alt={news.thumbnail_url}
                        className='w-full h-auto'
                    />
                </div>

                {/* Main news details: title, snippet, source, and publication date */}
                <div className='p-4'>
                    <a href={news.link} target="_blank" rel="noopener noreferrer">
                        <p className='block text-3xl font-bold text-blackky leading-tight hover:underline'>{news.title}</p>
                    </a>
                    <p className='text-lg mt-2 text-blacksy'>{news.snippet}</p>
                    <a href={news.source_url} target="_blank" rel="noopener noreferrer">
                        <p className='text-base text-blue-600 hover:underline mt-2'>{news.source_name}</p>
                    </a>
                    <p className='text-sm text-blacksy mt-2'> {new Date(news.published_datetime_utc).toLocaleString('en-US', 
                        { month: 'long', day: 'numeric', year: 'numeric' })}</p>
                </div>

                {/* Sub-articles section for additional content */}
                {subArticles.length > 0 && (
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 mt-6 p-4">
                        {subArticles.slice(0, 3).map((article, index) => (
                            <div key={index}>
                                <img src={article.photo_url} alt={`sub${index + 1}`} className="w-auto h-auto" />
                                <div>
                                    <a href={article.link} target="_blank" rel="noopener noreferrer">
                                        <p className="block text-base text-blackky font-bold leading-tight hover:underline">{article.title}</p>
                                    </a>
                                </div>
                                <div>
                                    <a href={article.source_url} target="_blank" rel="noopener noreferrer">
                                        <p className="text-sm text-blue-600 font-semibold hover:underline mt-2">{article.source_name}</p>
                                    </a>
                                    <p className="text-sm text-blacksy mt-2">
                                        {new Date(article.published_datetime_utc).toLocaleString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
                </div>
                )}

                {/* Section for additional articles displayed in a list */}
                {article.length > 0 && (
                <div className="space-y-4">
                    {article.map((news, index) => (
                    <div key={index} className="border-l-2 border-blackky pl-4 w-80">
                        <div>
                            <a href={news.link}target="_blank" rel="noopener noreferrer">
                                <p className="block text-base text-blackky font-bold leading-tight hover:underline">{news.title}</p>
                            </a>
                            <p className="text-sm text-blacksy mt-3">{news.snippet}</p>
                            <a href={news.source_url} target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 font-semibold hover:underline mt-4">
                                <p>{news.source_name}
                            </p></a>
                            <p className="text-xs text-blacksy mt-2">{new Date(news.published_datetime_utc).toLocaleString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
                        </div>
                    </div>
                    ))}
                </div>
                )}
        </div>
    </>
  )
}

export default News
 