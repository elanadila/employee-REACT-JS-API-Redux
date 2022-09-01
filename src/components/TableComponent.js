import React from 'react'
import BootstrapTable from 'react-bootstrap-table-next';
import { Container, Button, Row, Col, Spinner } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash, faPlus } from '@fortawesome/free-solid-svg-icons';
import ToolkitProvider, {Search} from 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit';
import paginationFactory from 'react-bootstrap-table2-paginator';

import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const { SearchBar } = Search;

const columns = [{
  dataField: 'id',
  text: 'ID',
  headerStyle: () => {
    return { width: "5"};
  }
}, {
  dataField: 'first_name',
  text: 'Name',
  sort: true
}, {
  dataField: 'phone',
  text: 'Phone',
  sort: true
}, {
  dataField: 'date_of_birth',
  text: 'DOB',
  sort: true
}, {
  dataField: 'street',
  text: 'Address',
  sort: true
}, {
  dataField: 'current_position',
  text: 'Current Position',
  sort: true
}, {
  dataField: 'ktp_number',
  text: 'KTP Number',
  sort: true
}, {
  dataField: "link",
  text: "KTP File",
  formatter: (rowContent, row) => {
      return (
          <div>

              <Link to={"detail/" + row.id}>
                  <Button color="info" className="ms-2">
                      View
                  </Button>
              </Link>
          </div>
      )

  }
}, {
    dataField: "link",
    text: "Action",
    formatter: (rowContent, row) => {
        return (
            <div>

                <Link to={"edit/" + row.id}>
                    <Button color="warning" className="ms-2">
                        <FontAwesomeIcon icon={faEdit} /> Edit
                    </Button>
                </Link>
                

                <Button color="danger" className="ms-2">
                    <FontAwesomeIcon icon={faTrash} /> Delete
                </Button>
            </div>
        )

    }
}

];

const defaultSorted = [{
    dataField: 'id',
    order: 'asc'
  }];

  const mapStateToProps = (state) => {
    return { getUsersList: state.users.getUsersList, errorUsersList: state.users.errorUsersList };
  };
  

const TableComponent = (props) => {
  return (
     
    <Container>
        { props.getUsersList ?  <ToolkitProvider
  bootstrap4 keyField='id' data={ props.getUsersList } columns={ columns } defaultSorted={ defaultSorted }  pagination={ paginationFactory() }
  search
>
  {
    props => (
      <div>
        <hr />
        <Row>
            <Col>
                <Link to="create/">
                    <Button color="primary" className="ms-2">
                        <FontAwesomeIcon icon={faPlus} /> Create Todo
                    </Button>
                </Link>
            </Col>
            <Col>
                <div className="float-lg-right">
                    <SearchBar { ...props.searchProps } />
                </div>
            </Col>
        </Row>
        <hr />
        <BootstrapTable
          { ...props.baseProps } 
          pagination={ paginationFactory() }
        />
      </div>
    )
  }
</ToolkitProvider> : (
        <div className="text-center">
          {props.errorUsersList ? (
            <h4>{props.errorUsersList}</h4>
          ) : (
            <Spinner color="dark" />
          )}
        </div>
      )}
       

    </Container>
  )
}

export default connect(mapStateToProps, null)(TableComponent)