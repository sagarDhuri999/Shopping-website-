import { useState } from "react";
import { useContext } from "react"
import { Cart } from "../contextFolder/Context"


const FilterPhone = () => {

    const { productDispatch, } = useContext(Cart);
    const [show, setShow] = useState(false)


    let brand = ["Apple", "Samsung", "OnePlus", "Nothing", "Redmi", "Real me", "OPPO", "Vivo", "iQOO", "Moto", "Nokia"]

    let priceSort = ["LOW TO HIGH", "HIGH TO LOW"]

    let color = ["Black", "Blue", "Green", "Grey", "White", "Purple"]

    let PriceRange = ["8K TO 12K", "13K TO 20K", "21K TO 30K", "31K TO 40K", "41K TO 60K", "61K AND ABOVE"]




    return (
        <>

            <h2 className="filter" onClick={() => setShow(!show)} >Add Filters +</h2>

            <div className={show ? "filterPhone  active" : "filterPhone"}>

                <label htmlFor="brand">Select Brand : </label>

                <select name="Select Brand" id="" onClick={(e) => productDispatch({ type: "view_Product", payload: e.target.value })} >
                    <option value=""></option>
                    {
                        brand = brand.map((brand, i) => {
                            return <option key={i} value={brand} > {brand} </option>
                        })
                    }
                </select>

                <label htmlFor="brand">Sort : </label>

                <select name="sort price" id="" onClick={(e) => productDispatch({ type: "SORT_BY_PRICE", payload: e.target.value })} >

                    {
                        priceSort = priceSort.map((p, i) => {
                            return <option value={p} key={i} >{p}</option>
                        })
                    }
                </select>


                <label >Color : </label>
                <select name="" id="" onClick={(e) => productDispatch({ type: "COLOR", payload: e.target.value })} >
                    {
                        color.map((color, i) => {
                            return <option value={color} key={i} >{color}</option>
                        })

                    }
                </select>

                <label htmlFor="brand">Price Range :</label>

                <select onClick={(e) => productDispatch({ type: "PRICE_RANGE", payload: e.target.value })} >
                    {
                        PriceRange.map((PR, i) => {
                            return <option value={PR} key={i} >{PR}</option>
                        })
                    }
                </select>


            </div>

        </>
    )
}

export default FilterPhone
