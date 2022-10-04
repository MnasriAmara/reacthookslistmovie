import { Card } from "react-bootstrap";
import ReactStars from "react-rating-stars-component";
import App from "../App.css"

export default function MovieCard({ ele }) {
  return (
    <div className="MovieCard" >
      <Card style={{ width: '20rem', height: '40rem',  }}>
      <Card.Body>
          <Card.Title className="text-danger">{ele.title}</Card.Title>
          <hr/>
          <Card.Text className="text-muted"  style={{ height: '10rem' }}>
          {ele.description}
          </Card.Text>
        </Card.Body>
        <Card.Img variant="top" src={ele.posterURL} alt="Poster"style={{ height: '20rem' }}/>
        <Card.Footer>
        <ReactStars count={10}
                                size={20}
                                isHalf={false}
                                emptyIcon={<i className="far fa-star"></i>}
                                halfIcon={<i className="fa fa-star-half-alt"></i>}
                                fullIcon={<i className="fa fa-star"></i>}
                                activeColor="#ffd700"
                                value={ele.rating}
                                edit={false}/>
        </Card.Footer>
      </Card>
    </div>
  );
}