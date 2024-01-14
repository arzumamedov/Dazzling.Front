import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './DetailPage.scss'
import { Helmet } from 'react-helmet-async'
function Detailpage() {

    const [detail, setDetail] = useState([])
    const { id } = useParams()

    useEffect(() => {
        fetch("http://localhost:3030/" + id)
            .then((res) => res.json())
            .then((api) => setDetail(api))
    }, [])


    return (
        <>
        <Helmet><title>Detail</title></Helmet>
          <div>
          <ul>
                <img src={detail.img} alt="" />
                <li>{detail.name}</li>
                <li>{new Date(detail.createdAt).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</li>
                <li>{detail.title}</li>
            </ul>
          </div>
        </>
    )
}

export default Detailpage