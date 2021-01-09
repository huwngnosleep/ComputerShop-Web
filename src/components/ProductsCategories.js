import React, { Component } from 'react'

import {Link} from 'react-router-dom'

import { Container, Row, Col} from 'reactstrap'
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

export default class ProductsCategories extends Component {
  constructor() {
    super();
    this.state = {
      categories: [
        {title: 'PC', img: "https://phongvu.vn/media/wysiwyg/Hoang/uat/Case.jpg"},
        {title: 'Laptop', img: "https://phongvu.vn/media/wysiwyg/Hoang/CateBL/T112020/Hp.jpg"},
        {title: 'Screen', img: "https://phongvu.vn/media/wysiwyg/Hoang/CateBL/122020/unnamed.jpg"},
        {title: 'Accessory', img: "https://lh3.googleusercontent.com/hOKClaqdNQtQfwuDFEWc5uOZvZRJtegRXu9H9X4PnWKEe0zU1rPQHJdKOaJq96rmCMG7XfsTayBHlyPaTyfp=w500-rw-rw"},
        {title: 'Gear', img: "https://lh3.googleusercontent.com/11qFIIJkk4A9Oaa4DZCGHrKxmBJkE38B0JXwhp4JRAxwso4A4oEDhzPv1JYq8ZrCUs4qg8gNT7eKMCxWEoQ=w500-rw"},
        {title: 'Smart Watch', img: "https://phongvu.vn/media/wysiwyg/Hoang/CateBL/122020/applese.jpg"}

      ]
    }
  }
  render() {
    return (
      <Container id="products-categories">
        <Row>
          {
            this.state.categories.map(item => (
              <Col className="mt-3" sm="4">
                <div>
                  <Link to={{pathname: "/products/", category: item.title, brand: ''}}>
                    <Card>
                      <CardBody>
                        <CardTitle className="p-0" tag="h5">{item.title}</CardTitle>
                      </CardBody>
                      <CardImg top className="img-responsive" width="100%" src={item.img}/>
                    </Card>
                  </Link>
                </div>
              </Col>
            ))
          }          
          
          
        </Row>
      </Container>
    )
  }
}