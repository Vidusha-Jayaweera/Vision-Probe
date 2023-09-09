import React, { useEffect, useRef, useState } from 'react'
import './index.css'
import Glass1 from '../../images/glass1.jpg'

function Cart() {

  const [listOfCartProducts, setListOfCartProducts] = useState([])
  const [removedMsg, setRemovedMsg] = useState('')
  const totalPrice = useRef(0)
  const deliveryCost = useRef(4)

  const getAllCartProducts = async() => {
    const reqCart = await fetch('http://localhost:3001/marketplace/cart', {
        method: 'GET'
    })
    const resCart = reqCart.json()
    return resCart
  }

  const deleteCartProduct = async(id) => {
    const req = await fetch(`http://localhost:3001/marketplace/products/cart/${id}`, {
        method: 'DELETE'
    })
    const res = req.json()
    return res
  }

  useEffect(() => {
    getAllCartProducts().then((res) => {setListOfCartProducts(res)})
  }, [removedMsg])
    
  totalPrice.current = 0

  return (
    <>
        <div class="card">
            <div class="row">
                <div class="col-md-8 cart">
                    <div class="title">
                        <div class="row">
                            <div class="col"><h4><b>Products Cart</b></h4></div>
                            <div class="col align-self-center text-right text-muted">{listOfCartProducts.length}</div>
                        </div>
                    </div>
                    {
                        listOfCartProducts.map((obj, index) => {
                            totalPrice.current = totalPrice.current + obj.price
                            return(
                                <div class="row border-top border-bottom" key={index}>
                                    <div class="row main align-items-center">
                                        <div class="col-2"><img class="img-fluid" src='https://www.warbyparker.com/learn/wp-content/uploads/2022/12/how-long-goes-it-take-to-adjust-to-new-glasses.jpg'/></div>
                                        <div class="col">
                                            <div class="row text-muted">{obj.category}</div>
                                            <div class="row">{obj.name}</div>
                                        </div>
                                        <div class="col">
                                            {/* <a href="#">-</a><a href="#" class="border">1</a><a href="#">+</a> */}
                                        </div>
                                        <div class="col" onClick={() => {deleteCartProduct(obj._id).then((res) => {setRemovedMsg(res.msg)})}} >&euro; {obj.price} <span class="close">&#10005;</span></div>
                                    </div>
                                </div>
                            )
                        })
                    }    
                </div>
                <div class="col-md-4 summary">
                    <div><h5><b>Summary</b></h5></div>
                    <hr/>
                    <div class="row">
                        <div class="col" style={{paddingLeft: '0'}}>{listOfCartProducts.length}</div>
                        <div class="col text-right">&euro; {totalPrice.current}</div>
                    </div>
                    <form>
                        <p>SHIPPING</p>
                        <select><option class="text-muted">Standard-Delivery- &euro;{deliveryCost.current}</option></select>
                        <p>GIVE CODE</p>
                        <input id="code" placeholder="Enter your code"/>
                    </form>
                    <div class="row" style={{ borderTop: '1px solid rgba(0,0,0,.1)', padding: '2vh 0' }}>
                        <div class="col">TOTAL PRICE</div>
                        <div class="col text-right">&euro; {totalPrice.current + deliveryCost.current}</div>
                    </div>
                    <button class="btn">CHECKOUT</button>
                </div>
            </div>
            
        </div>
    </>
  )
}

export default Cart