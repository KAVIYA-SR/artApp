import {Row, Col} from 'react-bootstrap';
import { ProductArray } from './Product';
import ProductCard from './ProductCard';

function Store () {
    return(
        <>
            <h1>Welcome to Store!</h1>
            <Row xs={1} md={4} className='g-4'>{
                ProductArray.map((product,idx) =>(
                    <Col align="center" key={idx}>
                        <ProductCard product={product} />
                    </Col>
                ))
            }
            </Row>
        </>
    )
}

export default Store;