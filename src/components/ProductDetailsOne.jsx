// import React, { useEffect, useState } from 'react'
// import { Link, useParams } from 'react-router-dom';
// import Slider from 'react-slick';
// import { getCountdown } from '../helper/Countdown';
// import axios from 'axios';
// import DOMPurify from 'dompurify';
// import { addtoCart } from '../Redux/CardSlice';
// import { toast } from 'react-toastify';
// import { useDispatch } from 'react-redux';

// const ProductDetailsOne = () => {
//     const { id } = useParams();
//     const [timeLeft, setTimeLeft] = useState(getCountdown());
//     const [product, setProduct] = useState(null);
//     const [error, setError] = useState(false);
//     const [loading, setLoading] = useState(false);
//     const dispatch = useDispatch();

//     useEffect(() => {
//         const fetchProduct = async () => {
//             try {
//                 setLoading(true);
//                 const response = await axios.get(`http://localhost:8080/product/${id}`);
//                 setProduct(response.data);
//                 setLoading(false);
//             } catch (err) {
//                 setError(true);
//                 setLoading(false);
//             }
//         };
//         fetchProduct();
//     }, [id]);

//     const handleaddtoCart = () => {
//         dispatch(
//             addtoCart({
//                 id: product._id,
//                 name: product.name,
//                 price: product.price,
//                 image: product.images?.[0],
//                 qnty: quantity
//             })
//         );
//         toast.success(`${product.name} added to cart!`);
//     };

//     useEffect(() => {
//         const interval = setInterval(() => {
//             setTimeLeft(getCountdown());
//         }, 1000);

//         return () => clearInterval(interval);
//     }, []);

//     const productImages = product?.images || [];
//     const [quantity, setQuantity] = useState(1);
//     const incrementQuantity = () => setQuantity(quantity + 1);
//     const decrementQuantity = () => setQuantity(quantity > 1 ? quantity - 1 : quantity);

//     const [mainImage, setMainImage] = useState('');

//     useEffect(() => {
//         if (productImages.length > 0) {
//             setMainImage(productImages[0]);
//         }
//     }, [productImages]);

//     const settingsThumbs = {
//         slidesToShow: 4,
//         swipeToSlide: true,
//         focusOnSelect: true,
//         infinite: false,
//         arrows: true,
//     };

//     const sanitize = (dirty) => ({
//         __html: DOMPurify.sanitize(dirty)
//     });

//     if (loading) return <div className="flex-center py-80"><div className="spinner-border text-main-600" role="status"></div></div>;
//     if (error) return <div className="flex-center py-80 text-danger">Error loading product</div>;
//     if (!product) return null;

//     return (
//         <section className="product-details py-80">
//             <div className="container container-lg">
//                 <div className="row gy-4">
//                     <div className="col-lg-12">
//                         <div className="row gy-4">
//                             <div className="col-xl-6">
//                                 <div className="product-details__left">
//                                     <div className="product-details__thumb-slider border border-gray-100 rounded-16">
//                                         <div className="">
//                                             <div className="product-details__thumb flex-center h-100">
//                                                 <img src={mainImage} alt="Main Product" />
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <div className="mt-24">
//                                         <div className="product-details__images-slider">
//                                             <Slider {...settingsThumbs}>
//                                                 {productImages.map((image, index) => (
//                                                     <div onClick={() => setMainImage(image)} className="center max-w-120 max-h-120 h-100 flex-center border border-gray-100 rounded-16 p-8" key={index}>
//                                                         <img className='thum' src={image} alt={`Thumbnail ${index}`} />
//                                                     </div>
//                                                 ))}
//                                             </Slider>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="col-xl-6">
//                                 <div className="product-details__content">
//                                     <h5 className="mb-12">{product.name}</h5>
//                                     <div className="flex-align flex-wrap gap-12">
//                                         <div className="flex-align gap-12 flex-wrap">
//                                             <div className="flex-align gap-8">
//                                                 <span className="text-15 fw-medium text-warning-600 d-flex">
//                                                     <i className="ph-fill ph-star" />
//                                                 </span>
//                                                 <span className="text-15 fw-medium text-warning-600 d-flex">
//                                                     <i className="ph-fill ph-star" />
//                                                 </span>
//                                                 <span className="text-15 fw-medium text-warning-600 d-flex">
//                                                     <i className="ph-fill ph-star" />
//                                                 </span>
//                                                 <span className="text-15 fw-medium text-warning-600 d-flex">
//                                                     <i className="ph-fill ph-star" />
//                                                 </span>
//                                                 <span className="text-15 fw-medium text-warning-600 d-flex">
//                                                     <i className="ph-fill ph-star" />
//                                                 </span>
//                                             </div>
//                                             <span className="text-sm fw-medium text-neutral-600">
//                                                 4.7 Star Rating
//                                             </span>
//                                             <span className="text-sm fw-medium text-gray-500">
//                                                 ₹{product.price}
//                                             </span>
//                                         </div>
//                                         <span className="text-sm fw-medium text-gray-500">|</span>
//                                         <span className="text-gray-900">
//                                             <span className="text-gray-400">Color:</span> {product.color || "EB4DRP"}
//                                         </span>
//                                     </div>
//                                     <span className="mt-32 pt-32 text-gray-700 border-top border-gray-100 d-block" />
//                                     <p className="text-gray-700" dangerouslySetInnerHTML={sanitize(product.description)} />

//                                     <div className="mt-32 flex-align flex-wrap gap-32">

//                                           {/* <div className="flex-align gap-8">

//                                                 <h1 className="text-md text-gray-500">Size: {product.size}</h1>

//                                         </div> */}

//                                         <div className="flex gap-4 flex-wrap">
//   <h1 className="text-md text-gray-500">Size:</h1>
//   {product.size?.map((s, index) => (
//     <span key={index} className="text-md text-gray-700 border px-2 py-1 rounded">
//       {s}
//     </span>
//   ))}
// </div>

//                                         <div className="flex-align gap-8">
//                                             <h4 className="mb-0">₹{product.discountedPrice || product.price}</h4>
//                                             {product.discountedPrice && (
//                                                 <span className="text-md text-gray-500">₹{product.price}</span>
//                                             )}
//                                         </div>
//                                         <Link to="#" className="btn btn-main rounded-pill">
//                                             Order on What'sApp
//                                         </Link>
//                                     </div>
//                                     <span className="mt-32 pt-32 text-gray-700 border-top border-gray-100 d-block" />
//                                     <div className="flex-align flex-wrap gap-16 bg-color-one rounded-8 py-16 px-24">
//                                         {/* Content here */}
//                                     </div>
//                                     <div className="mb-24">
//                                         <div className="mt-32 flex-align gap-12 mb-16">
//                                             <span className="w-32 h-32 bg-white flex-center rounded-circle text-main-600 box-shadow-xl">
//                                                 <i className="ph-fill ph-lightning" />
//                                             </span>
//                                             <h6 className="text-md mb-0 fw-bold text-gray-900">
//                                                 Products are almost sold out
//                                             </h6>
//                                         </div>
//                                         <div
//                                             className="progress w-100 bg-gray-100 rounded-pill h-8"
//                                             role="progressbar"
//                                             aria-valuenow={32}
//                                             aria-valuemin={0}
//                                             aria-valuemax={100}
//                                         >
//                                             <div
//                                                 className="progress-bar bg-main-two-600 rounded-pill"
//                                                 style={{ width: "32%" }}
//                                             />
//                                         </div>
//                                         <span className="text-sm text-gray-700 mt-8">
//                                             Available only: {product.stock || 45}
//                                         </span>
//                                     </div>
//                                     <span className="text-gray-900 d-block mb-8">Quantity:</span>
//                                     <div className="flex-between gap-16 flex-wrap">
//                                         <div className="flex-align flex-wrap gap-16">
//                                             <div className="border border-gray-100 rounded-pill py-9 px-16 flex-align">
//                                                 <button onClick={decrementQuantity}
//                                                     type="button"
//                                                     className="quantity__minus p-4 text-gray-700 hover-text-main-600 flex-center"
//                                                 >
//                                                     <i className="ph ph-minus" />
//                                                 </button>
//                                                 <input
//                                                     type="number"
//                                                     className="quantity__input border-0 text-center w-32"
//                                                     value={quantity} readOnly
//                                                 />
//                                                 <button onClick={incrementQuantity}
//                                                     type="button"
//                                                     className="quantity__plus p-4 text-gray-700 hover-text-main-600 flex-center"
//                                                 >
//                                                     <i className="ph ph-plus" />
//                                                 </button>
//                                             </div>
//                                             <button
//                                                 onClick={handleaddtoCart}
//                                                 className="btn btn-main rounded-pill flex-align d-inline-flex gap-8 px-48"
//                                             >
//                                                 <i className="ph ph-shopping-cart" /> Add To Cart
//                                             </button>
//                                         </div>
//                                     </div>
//                                     <span className="mt-32 pt-32 text-gray-700 border-top border-gray-100 d-block" />
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="pt-80">
//                     <div className="product-dContent border rounded-24">
//                         <div className="product-dContent__header border-bottom border-gray-100 flex-between flex-wrap gap-16">
//                             <ul
//                                 className="nav common-tab nav-pills mb-3"
//                                 id="pills-tab"
//                                 role="tablist"
//                             >
//                                 <li className="nav-item" role="presentation">
//                                     <button
//                                         className="nav-link active"
//                                         id="pills-description-tab"
//                                         data-bs-toggle="pill"
//                                         data-bs-target="#pills-description"
//                                         type="button"
//                                         role="tab"
//                                         aria-controls="pills-description"
//                                         aria-selected="true"
//                                     >
//                                         Description
//                                     </button>
//                                 </li>
//                                 <li className="nav-item" role="presentation">
//                                     <button
//                                         className="nav-link"
//                                         id="pills-reviews-tab"
//                                         data-bs-toggle="pill"
//                                         data-bs-target="#pills-reviews"
//                                         type="button"
//                                         role="tab"
//                                         aria-controls="pills-reviews"
//                                         aria-selected="false"
//                                     >
//                                         Reviews
//                                     </button>
//                                 </li>
//                             </ul>
//                             <Link
//                                 to="#"
//                                 className="btn bg-color-one rounded-16 flex-align gap-8 text-main-600 hover-bg-main-600 hover-text-white"
//                             >
//                                 <img src="assets/images/icon/satisfaction-icon.png" alt="" />
//                                 100% Satisfaction Guaranteed
//                             </Link>
//                         </div>
//                         <div className="product-dContent__box">
//                             <div className="tab-content" id="pills-tabContent">
//                                 <div
//                                     className="tab-pane fade show active"
//                                     id="pills-description"
//                                     role="tabpanel"
//                                     aria-labelledby="pills-description-tab"
//                                     tabIndex={0}
//                                 >
//                                     <div className="mb-40">
//                                         <h6 className="mb-24">Product Description</h6>
//                                         <p dangerouslySetInnerHTML={sanitize(product.description)} />
//                                         {product.additionalDescription && (
//                                             <p dangerouslySetInnerHTML={sanitize(product.additionalDescription)} />
//                                         )}
//                                     </div>
//                                 </div>
//                                 <div
//                                     className="tab-pane fade"
//                                     id="pills-reviews"
//                                     role="tabpanel"
//                                     aria-labelledby="pills-reviews-tab"
//                                     tabIndex={0}
//                                 >
//                                     {/* Reviews content remains unchanged */}
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     )
// }

// export default ProductDetailsOne

// import React, { useEffect, useState } from 'react'
// import { Link, useNavigate, useParams } from 'react-router-dom';
// import Slider from 'react-slick';
// import { getCountdown } from '../helper/Countdown';
// import axios from 'axios';
// import DOMPurify from 'dompurify';
// import { addtoCart } from '../Redux/CardSlice';
// import { toast } from 'react-toastify';
// import { useDispatch } from 'react-redux';

// const ProductDetailsOne = () => {
//     const { id } = useParams();
//     const [timeLeft, setTimeLeft] = useState(getCountdown());
//     const [product, setProduct] = useState(null);
//     const [error, setError] = useState(false);
//     const [loading, setLoading] = useState(false);
//     const dispatch = useDispatch();
//     const [selectedSize, setSelectedSize] = useState('');
//     const navigate= useNavigate()
//     useEffect(() => {
//         const fetchProduct = async () => {
//             try {
//                 setLoading(true);
//                 const response = await axios.get(`http://localhost:8080/product/${id}`);
//                 setProduct(response.data);
//                 if (response.data.size && response.data.size.length > 0) {
//                     setSelectedSize(response.data.size[0]);
//                 }
//                 setLoading(false);
//             } catch (err) {
//                 setError(true);
//                 setLoading(false);
//             }
//         };
//         fetchProduct();
//     }, [id]);

//     // const handleaddtoCart = () => {
//     //     if (!selectedSize && product.size && product.size.length > 0) {
//     //         toast.error('Please select a size');
//     //         return;
//     //     }
//     //     else{
//     //         navigate("/")
//     //     }

//     //     dispatch(
//     //         addtoCart({
//     //             id: product._id,
//     //             name: product.name,
//     //             price: product.price,
//     //             image: product.images?.[0],
//     //             qnty: quantity,
//     //             size: selectedSize
//     //         })
//     //     );
//     //     toast.success(`${product.name} (Size: ${selectedSize}) added to cart!`);
//     // };

//     const handleaddtoCart = () => {
//     // Size validation
//     if (!selectedSize && product.size && product.size.length > 0) {
//         toast.error('Please select a size');
//         return;
//     }

//     // Check localStorage for cart data
//     const cartData = localStorage.getItem('cartItems'); // 'cartItems' is just an example key

//     if (!cartData) {
//         navigate("/login");
//         return;
//     }

//     // Dispatch add to cart if localStorage has data
//     dispatch(
//         addtoCart({
//             id: product._id,
//             name: product.name,
//             price: product.price,
//             image: product.images?.[0],
//             qnty: quantity,
//             size: selectedSize
//         })
//     );

//     toast.success(`${product.name} (Size: ${selectedSize}) added to cart!`);
// };

//     useEffect(() => {
//         const interval = setInterval(() => {
//             setTimeLeft(getCountdown());
//         }, 1000);

//         return () => clearInterval(interval);
//     }, []);

//     const productImages = product?.images || [];
//     const [quantity, setQuantity] = useState(1);
//     const incrementQuantity = () => setQuantity(quantity + 1);
//     const decrementQuantity = () => setQuantity(quantity > 1 ? quantity - 1 : quantity);

//     const [mainImage, setMainImage] = useState('');

//     useEffect(() => {
//         if (productImages.length > 0) {
//             setMainImage(productImages[0]);
//         }
//     }, [productImages]);

//     const settingsThumbs = {
//         slidesToShow: 4,
//         swipeToSlide: true,
//         focusOnSelect: true,
//         infinite: false,
//         arrows: true,
//     };

//     const sanitize = (dirty) => ({
//         __html: DOMPurify.sanitize(dirty)
//     });

//     if (loading) return <div className="flex-center py-80"><div className="spinner-border text-main-600" role="status"></div></div>;
//     if (error) return <div className="flex-center py-80 text-danger">Error loading product</div>;
//     if (!product) return null;

//     return (
//         <section className="product-details py-80">
//             <div className="container container-lg">
//                 <div className="row gy-4">
//                     <div className="col-lg-12">
//                         <div className="row gy-4">
//                             <div className="col-xl-6">
//                                 <div className="product-details__left">
//                                     <div className="product-details__thumb-slider border border-gray-100 rounded-16">
//                                         <div className="">
//                                             <div className="product-details__thumb flex-center h-100">
//                                                 <img src={mainImage} alt="Main Product" />
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <div className="mt-24">
//                                         <div className="product-details__images-slider">
//                                             <Slider {...settingsThumbs}>
//                                                 {productImages.map((image, index) => (
//                                                     <div onClick={() => setMainImage(image)} className="center max-w-120 max-h-120 h-100 flex-center border border-gray-100 rounded-16 p-8" key={index}>
//                                                         <img className='thum' src={image} alt={`Thumbnail ${index}`} />
//                                                     </div>
//                                                 ))}
//                                             </Slider>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="col-xl-6">
//                                 <div className="product-details__content">
//                                     <h5 className="mb-12">{product.name}</h5>
//                                     <div className="flex-align flex-wrap gap-12">
//                                         <div className="flex-align gap-12 flex-wrap">
//                                             <div className="flex-align gap-8">
//                                                 <span className="text-15 fw-medium text-warning-600 d-flex">
//                                                     <i className="ph-fill ph-star" />
//                                                 </span>
//                                                 <span className="text-15 fw-medium text-warning-600 d-flex">
//                                                     <i className="ph-fill ph-star" />
//                                                 </span>
//                                                 <span className="text-15 fw-medium text-warning-600 d-flex">
//                                                     <i className="ph-fill ph-star" />
//                                                 </span>
//                                                 <span className="text-15 fw-medium text-warning-600 d-flex">
//                                                     <i className="ph-fill ph-star" />
//                                                 </span>
//                                                 <span className="text-15 fw-medium text-warning-600 d-flex">
//                                                     <i className="ph-fill ph-star" />
//                                                 </span>
//                                             </div>
//                                             <span className="text-sm fw-medium text-neutral-600">
//                                                 4.7 Star Rating
//                                             </span>
//                                             <span className="text-sm fw-medium text-gray-500">
//                                                 ₹{product.price}
//                                             </span>
//                                         </div>
//                                         <span className="text-sm fw-medium text-gray-500">|</span>
//                                         <span className="text-gray-900">
//                                             <span className="text-gray-400">Color:</span> {product.color || "EB4DRP"}
//                                         </span>
//                                     </div>
//                                     <span className="mt-32 pt-32 text-gray-700 border-top border-gray-100 d-block" />
//                                     <p className="text-gray-700" dangerouslySetInnerHTML={sanitize(product.description)} />

//                                     <div className="mt-32 flex-align flex-wrap gap-32 ">
//                                        {product.size && product.size.length > 0 && (
//     <div className="flex gap-4 flex-wrap align-items-center">
//         <h1 className="text-md text-gray-500 mb-0">Size:</h1>
//         <div className="d-flex flex-wrap gap-2 ">
//             {product.size.map((s, index) => (
//                 <button
//                     key={index}
//                     className={`btn ${
//                         selectedSize === s
//                             ? 'bg-black text-black border-black'
//                             : 'bg-white text-white border-gray-300 hover:bg-gray-100'
//                     } rounded-pill px-3 py-1 border`}
//                     onClick={() => setSelectedSize(s)}
//                 >
//                     {s}
//                 </button>
//             ))}
//         </div>
//     </div>
// )}

//                                         <div className="flex-align gap-8">
//                                             <h4 className="mb-0">₹{product.discountedPrice || product.price}</h4>
//                                             {product.discountedPrice && (
//                                                 <span className="text-md text-gray-500">₹{product.price}</span>
//                                             )}
//                                         </div>

//                                     </div>
//                                     <span className="mt-32 pt-32 text-gray-700 border-top border-gray-100 d-block" />
//                                     <div className="flex-align flex-wrap gap-16 bg-color-one rounded-8 py-16 px-24">
//                                         {/* Content here */}
//                                     </div>
//                                     <div className="mb-24">
//                                         <div className="mt-32 flex-align gap-12 mb-16">
//                                             <span className="w-32 h-32 bg-white flex-center rounded-circle text-main-600 box-shadow-xl">
//                                                 <i className="ph-fill ph-lightning" />
//                                             </span>
//                                             <h6 className="text-md mb-0 fw-bold text-gray-900">
//                                                 Products are almost sold out
//                                             </h6>
//                                         </div>
//                                         <div
//                                             className="progress w-100 bg-gray-100 rounded-pill h-8"
//                                             role="progressbar"
//                                             aria-valuenow={32}
//                                             aria-valuemin={0}
//                                             aria-valuemax={100}
//                                         >
//                                             <div
//                                                 className="progress-bar bg-main-two-600 rounded-pill"
//                                                 style={{ width: "32%" }}
//                                             />
//                                         </div>
//                                         <span className="text-sm text-gray-700 mt-8">
//                                             Available only: {product.stock || 45}
//                                         </span>
//                                     </div>
//                                     <span className="text-gray-900 d-block mb-8">Quantity:</span>
//                                     <div className="flex-between gap-16 flex-wrap">
//                                         <div className="flex-align flex-wrap gap-16">
//                                             <div className="border border-gray-100 rounded-pill py-9 px-16 flex-align">
//                                                 <button onClick={decrementQuantity}
//                                                     type="button"
//                                                     className="quantity__minus p-4 text-gray-700 hover-text-main-600 flex-center"
//                                                 >
//                                                     <i className="ph ph-minus" />
//                                                 </button>
//                                                 <input
//                                                     type="number"
//                                                     className="quantity__input border-0 text-center w-32"
//                                                     value={quantity} readOnly
//                                                 />
//                                                 <button onClick={incrementQuantity}
//                                                     type="button"
//                                                     className="quantity__plus p-4 text-gray-700 hover-text-main-600 flex-center"
//                                                 >
//                                                     <i className="ph ph-plus" />
//                                                 </button>
//                                             </div>
//                                             <button
//                                                 onClick={handleaddtoCart}
//                                                 className="btn btn-main rounded-pill flex-align d-inline-flex gap-8 px-48"
//                                             >
//                                                 <i className="ph ph-shopping-cart" /> Add To Cart
//                                             </button>
//                                         </div>
//                                     </div>
//                                     <span className="mt-32 pt-32 text-gray-700 border-top border-gray-100 d-block" />
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="pt-80">
//                     <div className="product-dContent border rounded-24">
//                         <div className="product-dContent__header border-bottom border-gray-100 flex-between flex-wrap gap-16">
//                             <ul
//                                 className="nav common-tab nav-pills mb-3"
//                                 id="pills-tab"
//                                 role="tablist"
//                             >
//                                 <li className="nav-item" role="presentation">
//                                     <button
//                                         className="nav-link active"
//                                         id="pills-description-tab"
//                                         data-bs-toggle="pill"
//                                         data-bs-target="#pills-description"
//                                         type="button"
//                                         role="tab"
//                                         aria-controls="pills-description"
//                                         aria-selected="true"
//                                     >
//                                         Description
//                                     </button>
//                                 </li>

//                             </ul>
//                             <Link
//                                 to="#"
//                                 className="btn bg-color-one rounded-16 flex-align gap-8 text-main-600 hover-bg-main-600 hover-text-white"
//                             >
//                                 <img src="assets/images/icon/satisfaction-icon.png" alt="" />
//                                 100% Satisfaction Guaranteed
//                             </Link>
//                         </div>
//                         <div className="product-dContent__box">
//                             <div className="tab-content" id="pills-tabContent">
//                                 <div
//                                     className="tab-pane fade show active"
//                                     id="pills-description"
//                                     role="tabpanel"
//                                     aria-labelledby="pills-description-tab"
//                                     tabIndex={0}
//                                 >
//                                     <div className="mb-40">
//                                         <h6 className="mb-24">Product Description</h6>
//                                         <p dangerouslySetInnerHTML={sanitize(product.description)} />
//                                         {product.additionalDescription && (
//                                             <p dangerouslySetInnerHTML={sanitize(product.additionalDescription)} />
//                                         )}
//                                     </div>
//                                 </div>
//                                 <div
//                                     className="tab-pane fade"
//                                     id="pills-reviews"
//                                     role="tabpanel"
//                                     aria-labelledby="pills-reviews-tab"
//                                     tabIndex={0}
//                                 >
//                                     {/* Reviews content remains unchanged */}
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     )
// }

// export default ProductDetailsOne

import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Slider from "react-slick";
import { getCountdown } from "../helper/Countdown";
import axios from "axios";
import DOMPurify from "dompurify";
import { addtoCart } from "../Redux/CardSlice";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";

const ProductDetailsOne = () => {
  const { id } = useParams();
  const [timeLeft, setTimeLeft] = useState(getCountdown());
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const [selectedSize, setSelectedSize] = useState("");
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const [mainImage, setMainImage] = useState("");

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/product/${id}`);
        setProduct(response.data);
        if (response.data.size?.length > 0) {
          setSelectedSize(response.data.size[0]);
        }
        if (response.data.images?.length > 0) {
          setMainImage(response.data.images[0]);
        }
      } catch (err) {
        setError(true);
        toast.error("Failed to load product details");
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getCountdown());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleAddToCart = () => {
    // Check if user is logged in

    // Validate size selection if product has sizes
    if (product.size?.length > 0 && !selectedSize) {
      toast.error("Please select a size");
      return;
    }

    dispatch(
      addtoCart({
        id: product._id,
        name: product.name,
        price: product.price,
        discountedPrice: product.discountedPrice,
        image: product.images?.[0],
        qnty: quantity,
        size: selectedSize,
      })
    );

    toast.success(
      `${product.name} ${
        selectedSize ? `(Size: ${selectedSize})` : ""
      } added to cart!`
    );
  };

  const incrementQuantity = () => setQuantity((prev) => prev + 1);
  const decrementQuantity = () =>
    setQuantity((prev) => (prev > 1 ? prev - 1 : prev));

  const settingsThumbs = {
    slidesToShow: 4,
    swipeToSlide: true,
    focusOnSelect: true,
    infinite: false,
    arrows: true,
  };

  const sanitize = (dirty) => ({
    __html: DOMPurify.sanitize(dirty),
  });

  if (loading)
    return (
      <div className="flex-center py-80">
        <div className="spinner-border text-main-600" role="status"></div>
      </div>
    );

  return (
    <section className="product-details py-80">
      <div className="container container-lg">
        <div className="row gy-4">
          <div className="col-lg-12">
            <div className="row gy-4">
              <div className="col-xl-6">
                <div className="product-details__left">
                  <div className="product-details__thumb-slider border border-gray-100 rounded-16">
                    <div className="flex-center h-100">
                      <img
                        src={mainImage}
                        alt="Main Product"
                        className="img-fluid"
                        onError={(e) => {
                          e.target.src = "/path/to/default-image.jpg";
                        }}
                      />
                    </div>
                  </div>
                  <div className="mt-24">
                    <div className="product-details__images-slider">
                      <Slider {...settingsThumbs}>
                        {product.images?.map((image, index) => (
                          <div
                            key={index}
                            className="center max-w-120 max-h-120 h-100 flex-center border border-gray-100 rounded-16 p-8 cursor-pointer"
                            onClick={() => setMainImage(image)}
                          >
                            <img
                              className="thum img-fluid"
                              src={image}
                              alt={`Thumbnail ${index}`}
                              onError={(e) => {
                                e.target.src = "/path/to/default-image.jpg";
                              }}
                            />
                          </div>
                        ))}
                      </Slider>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6">
                <div className="product-details__content">
                  <h5 className="mb-12">{product.name}</h5>
                  <div className="flex-align flex-wrap gap-12">
                    <div className="flex-align gap-12 flex-wrap">
                      {[...Array(5)].map((_, i) => (
                        <span
                          key={i}
                          className="text-15 fw-medium text-warning-600 d-flex"
                        >
                          <i className="ph-fill ph-star" />
                        </span>
                      ))}
                      <span className="text-sm fw-medium text-neutral-600">
                        4.7 Star Rating
                      </span>
                      <span className="text-sm fw-medium text-gray-500">
                        ₹{product.price}
                      </span>
                    </div>
                    <span className="text-sm fw-medium text-gray-500">|</span>
                    <span className="text-gray-900">
                      <span className="text-gray-400">Color:</span>{" "}
                      {product.color || "EB4DRP"}
                    </span>
                  </div>
                  <span className="mt-32 pt-32 text-gray-700 border-top border-gray-100 d-block" />
                  <p
                    className="text-gray-700"
                    dangerouslySetInnerHTML={sanitize(product.description)}
                  />

                  <div className="mt-32 flex-align flex-wrap gap-32">
                    {product.size?.length > 0 && (
                      <div className="flex gap-4 d-flex align-items-center">
                        <h1 className="text-md text-gray-500 mb-0">Size:</h1>
                        <div className="d-flex flex-wrap gap-2">
                          {product.size.map((s, index) => (
                            <button
                              key={index}
                              className={`btn ${
                                selectedSize === s
                                  ? "bg-black text-white border-black"
                                  : "bg-white text-gray-800 border-gray-300 hover:bg-gray-100"
                              } rounded-pill px-3 py-1 border`}
                              onClick={() => setSelectedSize(s)}
                            >
                              {s}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="flex-align gap-8">
                      <h4 className="mb-0">
                        ₹{product.discountedPrice || product.price}
                      </h4>
                      {product.discountedPrice && (
                        <span className="text-md text-gray-500 text-decoration-line-through">
                          ₹{product.price}
                        </span>
                      )}
                    </div>
                  </div>

                  <span className="mt-32 pt-32 text-gray-700 border-top border-gray-100 d-block" />

                  <div className="mb-24">
                    <div className="mt-32 flex-align gap-12 mb-16">
                      <span className="w-32 h-32 bg-white flex-center rounded-circle text-main-600 box-shadow-xl">
                        <i className="ph-fill ph-lightning" />
                      </span>
                      <h6 className="text-md mb-0 fw-bold text-gray-900">
                        Products are almost sold out
                      </h6>
                    </div>
                    <div
                      className="progress w-100 bg-gray-100 rounded-pill h-8"
                      role="progressbar"
                      aria-valuenow={32}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    >
                      <div
                        className="progress-bar bg-main-two-600 rounded-pill"
                        style={{ width: "32%" }}
                      />
                    </div>
                    <span className="text-sm text-gray-700 mt-8">
                      Available only: {product.stock || 45}
                    </span>
                  </div>

                  <span className="text-gray-900 d-block mb-8">Quantity:</span>
                  <div className="flex-between gap-16 flex-wrap">
                    <div className="flex-align flex-wrap gap-16">
                      <div className="border border-gray-100 rounded-pill py-9 px-16 flex-align">
                        <button
                          onClick={decrementQuantity}
                          type="button"
                          className="quantity__minus p-4 text-gray-700 hover-text-main-600 flex-center"
                          disabled={quantity <= 1}
                        >
                          <i className="ph ph-minus" />
                        </button>
                        <input
                          type="number"
                          className="quantity__input border-0 text-center w-32"
                          value={quantity}
                          min="1"
                          readOnly
                        />
                        <button
                          onClick={incrementQuantity}
                          type="button"
                          className="quantity__plus p-4 text-gray-700 hover-text-main-600 flex-center"
                        >
                          <i className="ph ph-plus" />
                        </button>
                      </div>
                      <button
                        onClick={handleAddToCart}
                        className="btn btn-main rounded-pill flex-align d-inline-flex gap-8 px-48"
                      >
                        <i className="ph ph-shopping-cart" /> Add To Cart
                      </button>
                    </div>
                  </div>
                  <span className="mt-32 pt-32 text-gray-700 border-top border-gray-100 d-block" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-80">
          <div className="product-dContent border rounded-24">
            <div className="product-dContent__header border-bottom border-gray-100 flex-between flex-wrap gap-16">
              <ul
                className="nav common-tab nav-pills mb-3"
                id="pills-tab"
                role="tablist"
              >
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link active"
                    id="pills-description-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-description"
                    type="button"
                    role="tab"
                    aria-controls="pills-description"
                    aria-selected="true"
                  >
                    Description
                  </button>
                </li>
              </ul>
              {/* <Link
                                to="#"
                                className="btn bg-color-one rounded-16 flex-align gap-8 text-main-600 hover-bg-main-600 hover-text-white"
                            >
                                <img src="assets/images/icon/satisfaction-icon.png" alt="Satisfaction Guarantee" />
                                100% Satisfaction Guaranteed
                            </Link> */}
            </div>
            <div className="product-dContent__box">
              <div className="tab-content" id="pills-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="pills-description"
                  role="tabpanel"
                  aria-labelledby="pills-description-tab"
                  tabIndex={0}
                >
                  <div className="mb-40">
                    <h6 className="mb-24">Product Description</h6>
                    <p
                      dangerouslySetInnerHTML={sanitize(product.description)}
                    />
                    {product.additionalDescription && (
                      <p
                        dangerouslySetInnerHTML={sanitize(
                          product.additionalDescription
                        )}
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetailsOne;
