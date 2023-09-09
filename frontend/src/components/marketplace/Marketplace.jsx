import React, { useEffect, useState } from 'react'
import './index.css'
import Glass1 from '../../images/glass1.jpg'

function Marketplace() {

  const [productList, setProductList] = useState([])

  const getAllProducts = async() => {
    const requestProducts = await fetch ('http://localhost:3001/marketplace/products', {
        method : 'GET'
    })
    const resultProducts = requestProducts.json()
    return resultProducts
  }

  useEffect(() => {
    getAllProducts().then((res) => {setProductList(res)})
  }, [])

  const numVerticalContainers = Math.ceil(productList.length / 4)

  return (
    <>
      <div id='palatte'>

        {Array.from({ length: numVerticalContainers }, (_, index) => (
          <div className="row" key={index}>
            {productList.slice(index * 4, (index + 1) * 4).map((item, i) => (
              <div key={i}>
                                  <div className="card">
                    <div className="card_title">
                      <div className="icon">
                        <a href="#"><i className="fa fa-arrow-left"></i></a>
                      </div>
                      <h3>{item.category}</h3>
                    </div>
                    <div className="card__body">
                      <div className="half">
                        <div className="featured_text">
                          <h1>{item.name}</h1>
                          <p className="sub">{item.category}</p>
                          <p className="price">${item.price}</p>
                        </div>
                        <div className="image">
                          <img src={Glass1} alt=""/>
                        </div>
                      </div>
                      <div className="half">
                        <div className="description">
                          <p>{item.description}</p>
                        </div>
                        <span className="stock"><i className="fa fa-pen"></i> In stock - {item.availableStock}</span>
                        <div className="reviews">
                          <ul className="stars">
                            <li><i className="fa fa-star"></i></li>
                            <li><i className="fa fa-star"></i></li>
                            <li><i className="fa fa-star"></i></li>
                            <li><i className="fa fa-star"></i></li>
                            <li><i className="fa fa-star-o"></i></li>
                          </ul>
                          <br/>
                          <span>({item.reviews})</span>
                        </div>
                      </div>
                    </div>
                    <div className="card__footer">
                      <div className="recommend">
                        <p>Recommended by</p>
                        <h3>{item.recommendation}</h3>
                      </div>
                      <div className="action">
                        <button type="button">Add to cart</button>
                      </div>
                    </div>
                  </div>
              </div>
            ))}
          </div>
        ))}

        {/* <div className='row'>
          {
            productList.map((obj, index) => {
              return(
                <div key={index}>
                  <div className="card">
                    <div className="card_title">
                      <div className="icon">
                        <a href="#"><i className="fa fa-arrow-left"></i></a>
                      </div>
                      <h3>{(index+1)%4}</h3>
                    </div>
                    <div className="card__body">
                      <div className="half">
                        <div className="featured_text">
                          <h1>{obj.name}</h1>
                          <p className="sub">{obj.category}</p>
                          <p className="price">${obj.price}</p>
                        </div>
                        <div className="image">
                          <img src={Glass1} alt=""/>
                        </div>
                      </div>
                      <div className="half">
                        <div className="description">
                          <p>{obj.description}</p>
                        </div>
                        <span className="stock"><i className="fa fa-pen"></i> In stock - {obj.availableStock}</span>
                        <div className="reviews">
                          <ul className="stars">
                            <li><i className="fa fa-star"></i></li>
                            <li><i className="fa fa-star"></i></li>
                            <li><i className="fa fa-star"></i></li>
                            <li><i className="fa fa-star"></i></li>
                            <li><i className="fa fa-star-o"></i></li>
                          </ul>
                          <br/>
                          <span>({obj.reviews})</span>
                        </div>
                      </div>
                    </div>
                    <div className="card__footer">
                      <div className="recommend">
                        <p>Recommended by</p>
                        <h3>{obj.recommendation}</h3>
                      </div>
                      <div className="action">
                        <button type="button">Add to cart</button>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div> */}

      </div>
    </>
  )
}

export default Marketplace



{/* <div className="card">
<div className="card_title">
  <div className="icon">
    <a href="#"><i className="fa fa-arrow-left"></i></a>
  </div>
  <h3>New products</h3>
</div>
<div className="card__body">
  <div className="half">
    <div className="featured_text">
      <h1>Nurton</h1>
      <p className="sub">Office Chair</p>
      <p className="price">$210.00</p>
    </div>
    <div className="image">
      <img src={Glass1} alt=""/>
    </div>
  </div>
  <div className="half">
    <div className="description">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero voluptatem nam pariatur voluptate perferendis, asperiores aspernatur! Porro similique consequatur, nobis soluta minima, quasi laboriosam hic cupiditate perferendis esse numquam magni.</p>
    </div>
    <span className="stock"><i className="fa fa-pen"></i> In stock</span>
    <div className="reviews">
      <ul className="stars">
        <li><i className="fa fa-star"></i></li>
        <li><i className="fa fa-star"></i></li>
        <li><i className="fa fa-star"></i></li>
        <li><i className="fa fa-star"></i></li>
        <li><i className="fa fa-star-o"></i></li>
      </ul>
      <span>(64 reviews)</span>
    </div>
  </div>
</div>
<div className="card__footer">
  <div className="recommend">
    <p>Recommended by</p>
    <h3>Andrew Palmer</h3>
  </div>
  <div className="action">
    <button type="button">Add to cart</button>
  </div>
</div>
</div> */}








