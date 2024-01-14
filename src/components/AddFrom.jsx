import React, { useEffect, useState } from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import './AddFrom.scss'
import * as Yup from 'yup';
function AddForm() {

    const [data, setData] = useState([])




    function getAll() {
        fetch("http://localhost:3030/")
            .then((res) => res.json())
            .then((api) => setData(api))
    }
    useEffect(() => {
        getAll()
    }, [])





    async function addFormik(value) {
        await fetch('http://localhost:3030/', {
            method: 'POST',
            headers: {
                Accept: 'application.json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(value),
        });
        await getAll()
    }

    async function deleteData(id) {
        await fetch(`http://localhost:3030/${id}`, {
            method: 'DELETE',
        });
        await getAll()
    }







    return (
        <>
            <Formik
                initialValues={{ name: '', title: '', img: '' }}
                validationSchema={Yup.object({
                    name: Yup.string()
                        .required('Required'),
                    title: Yup.string()
                        .required('Required'),
                    img: Yup.string().required('Required'),
                })}
                onSubmit={(values, { setSubmitting, resetForm }) => {
                    setTimeout(() => {
                        addFormik(values)
                        setSubmitting(false);
                        resetForm()
                    }, 400);
                }}
            >
                <Form>
                    <label htmlFor="img">Img</label>
                    <Field name="img" type="text" />
                    <ErrorMessage name="img" />

                    <label htmlFor="name">Name</label>
                    <Field name="name" type="text" />
                    <ErrorMessage name="name" />

                    <label htmlFor="title">Title</label>
                    <Field name="title" type="text" />
                    <ErrorMessage name="title" />


                    <button type="submit">Submit</button>
                </Form>
            </Formik>

            <table>
                <thead>
                    <tr>
                        <th>Img</th>
                        <th>Name</th>
                        <th>Title</th>
                    </tr>
                </thead>
                <tbody className='body'>
                    {data.map((item) => (
                        <tr key={item._id}>
                            <img src={item.img} alt="" />
                            <td>{item.name}</td>
                            <td>{item.title}</td>
                            <td onClick={() => deleteData(item._id)}><i class="fa-solid fa-trash"></i></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}

export default AddForm