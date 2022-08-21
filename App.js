
import { useContext } from 'react';
import './App.css';
import FilterPhone from './Components/FilterPhone';
import Header from './Components/Header';
import { Cart } from './contextFolder/Context';


// 1. I have write this code very quickly, so the code quality might look bad.
// 2. I have write all CSS in App.css.
// 3. I have not install any routing packages.
// 4. I have use context & UseReducer hook for data sharing.
// 5. I have created fake API json in ProductList.js.



function App() {
  const { productItem, cart, dispatch, searchItem, sort, color, priceRange } = useContext(Cart)


  const filterProduct = () => {

    let product = productItem

    if (searchItem) {

      product = product.filter((p, i) => p.name.toLowerCase().includes(searchItem.toLowerCase()))

    }

    if (sort) {

      product = product.sort((a, b, i) => {

        let A = Number(a.price.slice(1).split(",").join(""))
        let B = Number(b.price.slice(1).split(",").join(""))
        // console.log('A,B:', A, B);

        return sort === "LOW TO HIGH" ? A - B : B - A

      });

    }

    if (color) {
      product = product.filter((c, i) => {
        // console.log('c:', c.color);

        return c.color.toLowerCase().includes(color.toLowerCase())
      })
    }

    if (priceRange) {

      product = product.filter((PR) => {

        let A = Number(PR.price.slice(1).split(",").join(""))


        if (priceRange === "8K TO 12K") {
          // console.log('done');


          return A <= 12000
        }

        else if (priceRange === "13K TO 20K") {
          // console.log('done2');

          return A >= 13000 && A <= 20000
        }

        else if (priceRange === "21K TO 30K") {
          // console.log('done3');

          return A >= 21000 && A <= 30000
        }

        else if (priceRange === "31K TO 40K") {
          // console.log('done4');

          return A >= 31000 && A <= 40000
        }

        else if (priceRange === "41K TO 60K") {
          // console.log('done5');

          return A >= 41000 && A <= 60000
        }

        else if (priceRange === "61K AND ABOVE") {
          // console.log('done6');

          return A >= 61000
        }
        else {

          return console.log("NO PHONE IN THIS PRICE RAGE");
        }


      })
    }






    return product
  }




  return (
    <div>
      <Header />
      <FilterPhone />

      {filterProduct().map((productItem, id) => {
        return <div className='container' key={id} >
          <div className='MainContainer' >
            <h1>{productItem.name}</h1>

            <img key={id} src={productItem.image} alt={productItem.name} style={{ maxWidth: "100%" }} />

          </div>
          <div className='productSpecs'>

            <h2>Product Specs</h2>

            <p>INFO : {productItem.info}</p>

            <samp>PRICE : {productItem.price}</samp>

            <br />
            <br />
            {cart.some(p => p.id === productItem.id) ? (
              <>
                <button className='btn' style={{ background: "red" }}
                  onClick={() => dispatch({ type: "REMOVE_FROM_CART", payload: productItem })} >Remove From Cart</button>


              </>
            )
              :
              (<>
                <button className='btn' onClick={() => dispatch({ type: "ADD_TO_CART", payload: productItem })} >Add to Cart</button>



              </>
              )

            }
          </div>
        </div>
      })}

    </div>
  );
}

export default App;
