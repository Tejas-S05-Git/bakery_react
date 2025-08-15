import React from 'react'
import blog1 from "../../assets/images/Blog/Blogs/Blog-1.jpg"
import blog2 from "../../assets/images/Blog/Blogs/Blog-2.jpg"
import blog3 from "../../assets/images/Blog/Blogs/Blog-3.jpg"
const OurBlog = () => {
  return (
    <>
    <section className="blog main">
        
          {/* Section Heading */}
          <div className="heading">
            <span>our recent articles</span>
            <h2>our blogs</h2>
          </div>
        
          {/* Latest Blogs */}
          <div className="box-container">
        
            {/* Blog-1 */}
            <div className="blog-item">
              <div className="image">
                <img src={blog1} alt="Blog-Image" /> {/* Blog Image */}
              </div>
              <div className="content">
                <div className="category">cakes &amp; pastries</div> {/* Blog Category */}
                <a className="main-heading" href="pages/Blog/Blog-Single.html">The Art of Cake Decorating: Tips &amp; Tricks</a> {/* Blog Title */}
                <div className="details">
                  <h3><i className="fa-regular fa-user"></i><span>By Admin</span></h3> {/* Author */}
                  <h3><i className="fa-regular fa-calendar-days"></i><span>sep 02, 2023</span></h3> {/* Date */}
                </div>
              </div>
            </div>
        
            {/* Blog-2 */}
            <div className="blog-item">
              <div className="image">
                <img src={blog2} alt="Blog-Image" /> {/* Blog Image */}
              </div>
              <div className="content">
                <div className="category">bread &amp; rolls</div> {/* Blog Category */}
                <a className="main-heading" href="pages/Blog/Blog-Single.html">The Perfect Pairings: Coffee and Pastries</a> {/* Blog Title */}
                <div className="details">
                  <h3><i className="fa-regular fa-user"></i><span>By Admin</span></h3> {/* Author */}
                  <h3><i className="fa-regular fa-calendar-days"></i><span>aug 12, 2023</span></h3> {/* Date */}
                </div>
              </div>
            </div>
        
            {/* Blog-3 */}
            <div className="blog-item">
              <div className="image">
                <img src={blog3} alt="Blog-Image" /> {/* Blog Image */}
              </div>
              <div className="content">
                <div className="category">special occasions</div> {/* Blog Category */}
                <a className="main-heading" href="pages/Blog/Blog-Single.html">Wedding Cake Trends: What's In and What's Out</a> {/* Blog Title */}
                <div className="details">
                  <h3><i className="fa-regular fa-user"></i><span>By Admin</span></h3> {/* Author */}
                  <h3><i className="fa-regular fa-calendar-days"></i><span>jun 09, 2023</span></h3> {/* Date */}
                </div>
              </div>
            </div>
        
          </div>
        
        </section>
    </>
  )
}

export default OurBlog