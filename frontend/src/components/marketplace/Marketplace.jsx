import React, { useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom'
import './index.css'

function Marketplace() {

  const navigate = useNavigate()
  const [productList, setProductList] = useState([])
  const [highestReviewsState, setHighestReviewsState] = useState(0)

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
    getAllProducts().then((res) => {
      setProductList(res)
      const highestReviews = res.reduce((highest, current) => {
        return current.reviews > highest.reviews ? current : highest;
      }, res[0]);
      setHighestReviewsState(highestReviews.reviews);
    })
  }, [])

  const numVerticalContainers = Math.ceil(productList.length / 4)

  // // Define the options for the Intersection Observer
  // const options = {
  //   root: null, // Use the viewport as the root
  //   rootMargin: '0px',
  //   threshold: 0.5, // When at least 50% of the element is visible
  // };

  // // Create a new Intersection Observer instance
  // const observer = new IntersectionObserver(entries => {
  //   entries.forEach(entry => {
  //       if (entry.isIntersecting) {
  //           // Add your animation class when the element is in the viewport
  //           entry.target.classList.add('animated');
  //           // Unobserve the element to avoid unnecessary animations
  //           observer.unobserve(entry.target);
  //       }
  //   });
  // }, options);

  // // Observe all elements with the class .animate-me
  // document.querySelectorAll('.prod-card').forEach(element => {
  //   observer.observe(element);
  // });


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
                          <a href="#"><i class="fa-regular fa-thumbs-up"></i></a>
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
                            <img src={item.imgurl} alt=""/>
                          </div>
                        </div>
                        <div className="half">
                          <div className="description">
                            <p>{item.description}</p>
                          </div>
                          <span className="stock"><i className="fa fa-pen"></i> In stock - {item.availableStock}</span>
                          <div className="reviews">
                            <ul className="stars">
                              {/* <li><i className="fa fa-star"></i></li>
                              <li><i className="fa fa-star"></i></li>
                              <li><i className="fa fa-star"></i></li>
                              <li><i className="fa fa-star"></i></li>
                              <li><i className="fa fa-star-o"></i></li> */}
                              {
                                Array.from({length: Math.floor((item.reviews / highestReviewsState) * 5)}, (_, index) => (
                                  <li><i key={index} className="fa fa-star"></i></li>
                                ))
                              }
                              {
                                Array.from({length: 5 - Math.floor((item.reviews / highestReviewsState) * 5)}, (_, index) => (
                                  <li><i key={index} className="fa fa-star-o"></i></li>
                                ))
                              }
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
                          {
                            item.availableStock > 0 ? (<button type="button" onClick={() => {addToCartOnPress(item._id)}}>Add to cart</button>):(<div></div>)
                          }
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
