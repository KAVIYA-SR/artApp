
import {Card,Button,} from 'react-bootstrap';

function ProductCard(props){
    const product =props.product;
    return(
        <Card>
            <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>${product.price}</Card.Text>
                <Button variant='primary'>Know More</Button>
            </Card.Body>
        </Card>
    )
}

export default ProductCard;