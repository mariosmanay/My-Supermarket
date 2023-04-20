import React from 'react'
import { BsFillCartFill } from "react-icons/bs";

export const CartWidget = () => {

    const style = {
        cart: {
            fontSize: 30,
        },
        margin: {
            paddingLeft: 10,
            paddingRight: 10,
            fontWeight: 700
        }
    }

  return (
    <>
        <BsFillCartFill style={style.cart} />
        <span style={style.margin}>0</span>
    </>
  )
}
