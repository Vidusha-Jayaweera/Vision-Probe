import React, { useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom'
import './index.css'
import Glass1 from '../../images/glass1.jpg'

function Marketplace() {

  const navigate = useNavigate()
  const [productList, setProductList] = useState([])

  const getAllProducts = async() => {
    const requestProducts = await fetch ('http://localhost:3001/marketplace/products', {
        method : 'GET'
    })
    const resultProducts = requestProducts.json()
    return resultProducts
  }

  const addToCart = async(id) => {
    const request = await fetch(`http://localhost:3001/marketplace/products/cart/${id}`, {
      method: 'POST'
    })
    const result = request.json()
    return result
  }

  const addToCartOnPress = (id) => {
    addToCart(id).then((res) => {alert(`${res.name} added to the cart!`)})
  }

  useEffect(() => {
    getAllProducts().then((res) => {setProductList(res)})
  }, [])

  const numVerticalContainers = Math.ceil(productList.length / 4)

  return (
    <>
      <div className='floatigBtn' onClick={() => {navigate('/cart')}}><p><i class="fa-solid fa-cart-shopping"></i></p></div>
      <div id='palatte'>
        {
          Array.from({ length: numVerticalContainers }, (_, index) => (
            <div className="prod-row" key={index}>
              {productList.slice(index * 4, (index + 1) * 4).map((item, i) => (
                <div key={i}>
                    <div className="prod-card">
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
                          <button type="button" onClick={() => {addToCartOnPress(item._id)}}>Add to cart</button>
                        </div>
                      </div>
                    </div>
                </div>
              ))}
            </div>
          ))
        }
      </div>
    </>
  )
}

export default Marketplace
