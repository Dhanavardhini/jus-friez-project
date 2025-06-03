

 
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // import Bootstrap styles
import logo1 from '../assets/a1.jpg';

const BlogAndNews = () => {
  return (
    <div className="container-fluid my-5">
      <div className="row align-items-center">
        
        {/* 3 cols - Left Image */}
        <div className="col-md-2">
          <img
            src={logo1}  // replace with your real image path
            alt="Left Visual"
            className="img-fluid rounded"
          />
        </div>
        
      {/* 4 cols - Text content */}
<div className="col-md-4">
  <h6 className="mb-2">Delivery</h6>
  <h3 className="mb-3"> A Moment  of Delivered on Right Time  & Place </h3>
   <p className="mb-4" style={{ maxWidth: '400px' }}>
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi odit at eius. In accusantium tempore placeat doloremque quod quae voluptatem, rem rerum, quo corporis non repellendus voluptatibus autem quis reiciendis. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint, sunt?
  </p>
  <p className="mb-4" style={{ maxWidth: '400px' }}>
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi odit at eius. In accusantium tempore placeat doloremque quod quae voluptatem, rem rerum, quo corporis non repellendus voluptatibus autem quis reiciendis.
  </p>

  <button> Place Order</button>
</div>

        
        {/* 4 cols - Right Image */}
        <div className="col-md-6">
          <img
            src={logo1}  // replace with your right image
            alt="Right Visual"
            className="img-fluid rounded"
          />
        </div>
      </div>
    </div>
  );
};

export default BlogAndNews;
