import React, { useState } from 'react';
import { Fade } from 'react-awesome-reveal';
import { Link } from 'react-router-dom';
import { Rating } from '@smastrom/react-rating';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

import '@smastrom/react-rating/style.css';
import { FaStar } from 'react-icons/fa';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-20%',
    transform: 'translate(-50%, -50%)',
  },
};

const ProductCard = ({ product }) => {
  // console.log(craft);
  const [rating, setRating] = useState(false);
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <Fade direction="up" duration={1000}>
      <div className="max-w-7xl">
        <div
          className="card  shadow-xl border-2 border-slate-200 rounded-2xl p-4 lg:p-8 h-[520px] relative overflow-hidden"
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
                <Link className="flex justify-between items-center">
                  <button
                    // data-aos="fade-right"
                    // data-aos-duration="1000"
                    onClick={openModal}
                    type="button"
                    className="relative px-6 py-2 ml-4 overflow-hidden font-semibold rounded bg-green-300 text-blue-950 font-semibold mt-4 "
                  >
                    {' '}
                    View Details
                  </button>
                  <Modal
                    isOpen={modalIsOpen}
                    onAfterOpen={afterOpenModal}
                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                  >
                    {/* <h2 ref={_subtitle => (subtitle = _subtitle)}>Hello</h2> */}
                    <div className="flex flex-col lg:flex-row justify-center items-center text-left gap-5">
                      <div className=" rounded-lg  bg-[#F3F3F3] p-6  ">
                        <img
                          className="h-[200px]  lg:h-[300px] w-[300px] lg:w-[320px]"
                          src={product.image}
                          alt=""
                        />
                      </div>
                      <div className="flex-1 p-8">
                        <h1 className="text-3xl lg:text-4xl font-bold">
                          {product.product_name}
                        </h1>
                        <p className="py-6 font-bold">{product.description}</p>
                        <hr />
                        <div className="flex justify-between items-center py-2">
                          <p className="my-2">Category :{product.category}</p>
                          <p
                            className="font-bold text-2xl text-orange-400 overflow-hidden font-sans"
                            // data-aos="fade-left"
                            // data-aos-duration="1000"
                          >
                            ${product?.price}
                          </p>
                        </div>
                        <hr />
                        <div className="flex justify-between items-center py-2">
                          <p className="font-bold flex justify-center">
                            Review :{' '}
                            <span className="font-normal flex justify-center ">
                              <FaStar className="text-2xl text-yellow-600"></FaStar>
                              {product.rating}
                            </span>
                          </p>
                          <div className="bg-green-400 px-3 py-1 rounded-2xl font-bold">
                            {product?.brand}
                          </div>
                        </div>
                        <hr />
                        <div className="space-y-3">
                          <span className="font-bold pl-4">
                            <p>
                              Publish :
                              {new Date(
                                product?.added_time
                              ).toLocaleDateString()}
                            </p>
                          </span>
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={closeModal}
                      className="text-white bg-red-800 px-2 py-1 rounded-xl "
                    >
                      Close
                    </button>
                  </Modal>
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
