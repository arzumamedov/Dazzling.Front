import React from 'react'
import AddForm from '../components/AddFrom'
import { Helmet } from 'react-helmet-async'

function Addpage() {
  return (
    <>
    <Helmet><title>Add</title></Helmet>
      <AddForm />
    </>
  )
}

export default Addpage