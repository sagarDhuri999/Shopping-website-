import React, { useContext, useEffect, useState } from 'react'
import { Cart } from '../contextFolder/Context'

const Header = () => {
    const [show, setShow] = useState(true)
    const [total, setTotal] = useState()
    const { cart, decrement, productDispatch, increment } = useContext(Cart)
    // console.log('qty:', cart);

    useEffect(() => {
        setTotal(
            cart.reduce((pre, curr) => {
                const value = curr.price.slice(1).split(",").join("")
                return pre + Number(value) * curr.qty
            }, 0)
        )

    }, [cart])

    return (
        <>
            <div className='Header' >

                {/* headline */}

                <h1>PHONE <strong className='strong-tag'>WORLD</strong> </h1>

                {/* input-div*/}

                <div className='input-box' >
                    <input type="text" placeholder='Search...' onChange={(e) => productDispatch({ type: "view_Product", payload: e.target.value })} />

                </div>


                {show ?

                    // cart-icon div 

                    <div className="cart-icon" onClick={() => setShow(false)} >

                        {/* cart img link */}

                        <img src="https://img.icons8.com/fluency/2x/shopping-cart-loaded.png" alt="Cart " style={{ maxWidth: "100%" }} />

                        {/* number-cart display */}

                        <div className="number-cart"> <span>{cart.length}</span> </div>
                    </div> :
                    //  add to cart display

                    <div className={`shopping-List`}>

                        <div className='item-box' >

                            <h3 style={{ lineHeight: "6rem" }} >YOUR WISH LIST</h3>

                        </div>

                        {/* close icon */}

                        <div className='close-image' onClick={() => setShow(true)}>
                            <img src="https://img.icons8.com/flat-round/2x/delete-sign.png" alt="close btn" style={{ maxWidth: "100%" }} />

                        </div>
                        {cart.length !== 0 ?
                            cart.map((item, i) => <>
                                <div className='item-box' key={i} >
                                    <div className='item-box-image' >
                                        <img style={{ maxWidth: "100%" }} src={item.image} alt={item.name} />
                                    </div>
                                    <div className='item-box-specs' >

                                        <h4>{item.name}</h4>
                                        <p> {item.price}</p>

                                        <div className="add-minus-quantity">

                                            <button className='qtyBtn' onClick={() => increment(item.id)} > <img src="https://static.thenounproject.com/png/4911233-200.png" alt="Plus btn" style={{ maxWidth: "100% " }} /> </button>
                                            <input type="text" placeholder={item.qty} disabled className='qty-input' />
                                            <button className='qtyBtn' onClick={() => decrement(item.id)} > <img src="https://static.thenounproject.com/png/2013058-200.png" alt="Minus btn" style={{ maxWidth: "100% " }} /> </button>
                                        </div>


                                    </div>

                                </div>




                            </>

                            ) : <>

                                <h1 style={{ color: "black", textAlign: "center" }} >Your wish list is empty :( </h1>


                            </>

                        }

                        <div className='total-item'>
                            <p> Total Cart Amount : ₹{total.toLocaleString("en-IN")}</p>

                        </div>

                    </div>



                }
            </div>

        </>
    )
}

export default Header
