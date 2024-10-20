import { useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import react from '../assets/react.svg'

const News = () => {

  const [news, setNews] = useState([]);

  useEffect(() => {
        const fetchNews = async () => {
            try {
              const response = await fetch(url, options);
              const result = await response.json();
              console.log(result);
              setNews(result.data);
            } catch (err) {
              console.log(err);
            }
        }
        fetchNews();
  }, []);

  return (
      <>  
        <div className='max-w-full m-6'>
            <button className='p-2'>
                <Link to='/'><ArrowBackIosNewIcon/></Link>
            </button>
        </div>
        <div className='max-w-full m-5 flex justify-center text-2xl md:text-4xl lg:text-5xl bold border-b-2'>
            <h1 className='p-2'>TOP HEADLINE NEWS</h1>
        </div>
        <div className='max-w-full flex items-center justify-center gap-3 h-screen lg:flex-row md:flex-row flex-col md:top-0 lg:top-0 relative top-54'>
            <div className='md:w-1/3 lg:w-2/5 p-2 h-97 lg:mt-0 md:mt-0 mt-10'>
                <div className='flex justify-center'>
                    <img 
                        src={react}
                        alt='alter'
                        className='w-60 md:w-98 lg:w-2/4'
                    />  
                 </div>
                 <div>
                    <h1 className='p-2 mt-6'>hotdog at silog nagaway sa tapsihan</h1>
                 </div>
                 <div>
                    <p className='p-2'>dahil sa isang customer napilitang nagsara ang isang tapsihan sa isang lugar</p>
                    <p className='p-2'>the angels burger news</p>
                    <img src={react} alt="" className='p-2' />
                    <p className='p-2'>Angels burger</p>
                    <p className='p-2'>Publish : 10/20/24</p>
                 </div>
            </div>
            <div className='w-96 h-97 flex lg:flex-col md:flex-col flex-row text-xs md:text-base lg:text-base mt-10'>
                <div className='flex justify-center'>
                    <img 
                        src={react}
                        alt='alter'
                        className='w-60 md:w-44 lg:w-2/4'
                    />
                </div>
                <div className=''>
                    <h1 className='p-2'>the burger king at angels ay hindi nagkasundo</h1>
                    <p className='p-2'>dahil sa isang customer napilitang nagsara ang isang tapsihan sa isang lugar</p>
                    <p className='p-2'>Publish : 10/20/24</p>
                 </div>
            </div>
        </div>
    </>
  )
}

export default News
 