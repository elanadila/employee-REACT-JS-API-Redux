import React from 'react'
import { Button, Row, Col} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const BackComponent = () => {
  return (
    <Row className='mb-2'>
        <Col>
            <Link to="/">
                <Button color="primary">
                    <FontAwesomeIcon icon={faArrowLeft} /> Back
                </Button>
            </Link>
        </Col>
    </Row>
  )
}

export default BackComponent