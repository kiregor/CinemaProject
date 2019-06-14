import React from 'react'
import { Container, Row, Pagination, Col, PaginationItem, PaginationLink} from 'reactstrap';

const AppPagination = (props) => {
    const pageLinks = []

    for(let i=1; i <= props.pages + 1; i++){
        let active = props.currentPage === i ? 'active' : ''

        pageLinks.push(<li className={`${active}`} key={i} onClick={() => props.nextPage(i)}><a href="#">{i}</a></li>)
    }

    return (
        <Container>
            <Row>
                <Col>
                    <Pagination>
                        <PaginationItem>
                            <PaginationLink>
                                {pageLinks[0]}
                            </PaginationLink>
                        </PaginationItem>          
                        <PaginationItem>
                            <PaginationLink>
                                {pageLinks[1]}
                            </PaginationLink>
                        </PaginationItem>                
                    </Pagination>
                </Col>
            </Row>
        </Container>
    )
}

export default AppPagination;
