
const NewsItem = ({title, description, src, url}) => {
    return (
      src && description ? (
        <div class="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2" style={{maxWidth:"345px"}}>
          <img src= {src} style={{height:"200px", width:"325px"}} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">{title.slice(0,50)}</h5>
            <p class="card-text">
              {description?description.slice(0,90):"These are the events that have transpired today."}
            </p>
            <a href= {url}class="btn btn-primary">
              Read More
            </a>
          </div>
        </div>
      ) :null
    );
}

export default NewsItem