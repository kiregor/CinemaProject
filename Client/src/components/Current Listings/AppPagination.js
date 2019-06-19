import React from 'react'
import { Container, Row, Pagination, Col, PaginationItem, PaginationLink} from 'reactstrap';

const AppPagination = (props) => {
    const pageLinks = []

    for(let i=1; i <= props.pages + 1; i++){
        let active = props.currentPage === i ? 'active' : ''

        pageLinks.push(<a href="#"><PaginationLink><li className={`${active}`} key={i} onClick={() => props.nextPage(i)}>{i}</li></PaginationLink></a>)
    }

    return (
        <Container>
            <Row>
                <Col>
                    <Pagination>
                        <PaginationItem>
                            {pageLinks[0]}
                        </PaginationItem>          
                        <PaginationItem>
                            {pageLinks[1]}
                        </PaginationItem>                
                    </Pagination>
                </Col>
            </Row>
        </Container>
    )
}

export default AppPagination;
