const NewsBoard = () => {

    const [articles,setArticles] = useState([])

    useEffect(()=>{
        let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${import.meta.env.VITE_API_KEY}`
        fetch(url).then(Response =>Response.json()).then(data => setArticles(data.articles))
    }, [])

    return (
        <div>
            <h2 class="text-center">Latest <span class="badge bg-danger">News</span></h2>
        </div>
    )
}

export default NewsBoard