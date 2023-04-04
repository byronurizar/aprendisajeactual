import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar/Navbar'

const HomePage = () => {
  const [productList, setProductList] = useState<TProduct[]>([])

  const getList = async () => {
    const response = await fetch('api/avo')
    const data = await response.json()
    setProductList(data.data)
  }
  useEffect(() => {
    getList()
  }, [])

  return (
    <div>
      <Navbar />
      <div>Platzi and Next.js!</div>
      {productList.map((producto) => {
        return <div>{producto.name}</div>
      })}
    </div>
  )
}

export default HomePage
