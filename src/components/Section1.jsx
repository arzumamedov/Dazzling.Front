import React, { useContext, useEffect, useState } from 'react'
import './Section1.scss'
import { Link } from 'react-router-dom'
import { SearchContext } from '../context/SearchContext'
import { date } from 'yup'
function Section1() {

    const [post, setPost] = useState([])
    const { search, handleSearch } = useContext(SearchContext)

    useEffect(() => {
        fetch("http://localhost:3030/")
            .then((res) => res.json())
            .then((api) => setPost(api))
    }, [])


    return (
        <>
            <div className='section1'>
                <div className="section1Left">

                    {post
                        .filter((x) => x.name.toLowerCase().includes(search.toLowerCase()))
                        .map((x) => (
                            <div className='cards' key={x._id}>
                                <div className='name'>{x.name}</div>
                                <div>{new Date(x.createdAt).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</div>
                                <div className='imgTitle'>
                                    <img src={x.img} alt="" />
                                    <div>{x.title}</div>
                                </div>
                                <Link to={"detail/" + x._id}><button>Countine reading <i class="fa-solid fa-angle-right"></i></button></Link>
                            </div>
                        ))}


                </div>
                <div className="section1Right">
                    <div className='search'>
                        <input type="text" placeholder='Search...' onChange={(e) => handleSearch(e)} />
                        <div className='iconBg'>
                            <i class="fa-solid fa-magnifying-glass"></i>
                        </div>
                    </div>
                    <div className='popular'>
                        <div className='popular1'>
                            <img src="https://149842022.v2.pressablecdn.com/dazzling/wp-content/uploads/sites/54/2012/01/54-60x60.jpg" alt="" />
                            <div className="text">
                                <h6>Template: Sticky</h6>
                                <p>Jan 7, 2015</p>
                            </div>
                        </div>
                        <div className='popular1'>
                            <img src="https://149842022.v2.pressablecdn.com/dazzling/wp-content/uploads/sites/54/2012/01/2048-4-60x60.jpg" alt="" />
                            <div className="text">
                                <h6>Bullet Point Test</h6>
                                <p>May 30, 2014</p>
                            </div>
                        </div>
                        <div className='popular1'>
                            <img src="https://149842022.v2.pressablecdn.com/dazzling/wp-content/uploads/sites/54/2013/01/homev_updated1_02-60x60.jpg" alt="" />
                            <div className="text">
                                <h6>Markup: Title With Special Characters</h6>
                                <p>Feb 5, 2014</p>
                            </div>
                        </div>
                        <div className='popular1'>
                            <img src="https://149842022.v2.pressablecdn.com/dazzling/wp-content/uploads/sites/54/2012/01/2048-1-60x60.jpg" alt="" />
                            <div className="text">
                                <h6>Hello world!</h6>
                                <p>Feb 28, 2014</p>
                            </div>
                        </div>
                        <div className='popular1'>
                            <img src="https://149842022.v2.pressablecdn.com/dazzling/wp-content/uploads/sites/54/2013/01/slide03-60x60.jpg" alt="" />
                            <div className="text">
                                <h6>Markup: HTML Tags and Formatting</h6>
                                <p>Feb 1, 2014</p>
                            </div>
                        </div>
                    </div>
                    <div className='comments'>
                        <h2>Recent Comments</h2>
                        <div className='commentIcon'>
                            <i class="fa-regular fa-comment"></i>
                            <p>hhhh on <span>Hello world!</span></p>
                        </div>
                        <div className='commentIcon'>
                            <i class="fa-regular fa-comment"></i>
                            <p>Stefanos on <span>Bullet Point Test</span></p>
                        </div>
                        <div className='commentIcon'>
                            <i class="fa-regular fa-comment"></i>
                            <p>mimi on <span>Gallery</span></p>
                        </div>
                        <div className='commentIcon'>
                            <i class="fa-regular fa-comment"></i>
                            <p>Finn on <span>Page with comments</span></p>
                        </div>
                        <div className='commentIcon'>
                            <i class="fa-regular fa-comment"></i>
                            <p>gargi on <span>Page with comments</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Section1