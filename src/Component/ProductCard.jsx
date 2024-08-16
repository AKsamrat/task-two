import React, { useState } from 'react';
import { Fade } from 'react-awesome-reveal';
import { Link } from 'react-router-dom';
import { Rating } from '@smastrom/react-rating';

import '@smastrom/react-rating/style.css';
import { FaStar } from 'react-icons/fa';

const ProductCard = ({ product }) => {
  // console.log(craft);
  const [rating, setRating] = useState(false);
  return (
    <Fade direction="up" duration={1000}>
      <div className="max-w-7xl">
        <div
          className="card  shadow-xl border-2 border-slate-200 rounded-2xl p-4 lg:p-8 h-fit relative overflow-hidden"
          // data-aos="zoom-in-up"
          // data-aos-duration="700"
        >
          <figure className="bg-[#F3F3F3] rounded-2xl">
            <img
              // data-aos-duration="1000"
              // data-aos="flip-left"
              className="w-[370px]  h-72 py-3 rounded-3xl p-2 overflow-hidden "
              src={product?.image}
              alt="Shoes"
            />
            <div className="bg-green-400 px-3 py-1 rounded-2xl absolute top-12 right-16 font-bold">
              {product?.brand}
            </div>
          </figure>
          <div className=" ">
            <div className="flex justify-between items-center">
              <div
                className=" flex gap-2 overflow-hidden  font-bold"
                // data-aos="fade-left"
                // data-aos-duration="1000"
              >
                <FaStar className="text-2xl text-yellow-600"></FaStar>
                {product?.rating}
              </div>
              <div>
                <p>{new Date(product?.added_time).toLocaleDateString()}</p>
              </div>
            </div>
            <h2
              className="card-title text-2xl font-bold pb-2 overflow-hidden"
              // data-aos="fade-left"
              // data-aos-duration="1000"
            >
              {product?.product_name}
            </h2>

            <hr />
            <p>{product?.category} </p>
            <div className="flex justify-between items-center my-2">
              <div className="flex items-center gap-2">
                <p
                  className="font-bold text-2xl text-orange-400 overflow-hidden font-sans"
                  // data-aos="fade-left"
                  // data-aos-duration="1000"
                >
                  ${product?.price}
                </p>
              </div>
              <div className="flex justify-between items-center">
                <Link
                  className="flex justify-between items-center"
                  to={`/craftDetails/${product?._id}`}
                >
                  <button
                    // data-aos="fade-right"
                    // data-aos-duration="1000"
                    type="button"
                    className="relative px-6 py-2 ml-4 overflow-hidden font-semibold rounded bg-[#FA8072] text-white mt-4 "
                  >
                    {' '}
                    View Details
                  </button>
                  {/* <p>{area}sft</p> */}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default ProductCard;
