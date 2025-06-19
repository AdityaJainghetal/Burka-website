// // import React, { useEffect, useState } from 'react';
// // import { Link } from 'react-router-dom';
// // import axios from 'axios';
// // import { toast } from 'react-toastify';

// // const RecommendedOne = () => {
// //   const [courses, setCourses] = useState([]);
// //   const [filterText, setFilterText] = useState('');

// //   const api = 'https://backend-20ar.onrender.com/product';

// //   useEffect(() => {
// //     const fetchCourses = async () => {
// //       try {
// //         const response = await axios.get(api);
// //         setCourses(response.data);
// //       } catch (error) {
// //         toast.error('Error fetching course data');
// //         console.error('Error fetching course data:', error);
// //       }
// //     };

// //     fetchCourses();
// //   }, []);

// //     return (
// //         <section className="recommended">
// //             <div className="container container-lg">
// //                 <div className="section-heading flex-between flex-wrap gap-16">
// //                     <h5 className="mb-0">Recommended for you</h5>
// //                     <ul className="nav common-tab nav-pills" id="pills-tab" role="tablist">
// //                         <li className="nav-item" role="presentation">
// //                             <button
// //                                 className="nav-link active"
// //                                 id="pills-all-tab"
// //                                 data-bs-toggle="pill"
// //                                 data-bs-target="#pills-all"
// //                                 type="button"
// //                                 role="tab"
// //                                 aria-controls="pills-all"
// //                                 aria-selected="true"
// //                             >
// //                                 All
// //                             </button>
// //                         </li>
// //                         <li className="nav-item" role="presentation">
// //                             <button
// //                                 className="nav-link"
// //                                 id="pills-grocery-tab"
// //                                 data-bs-toggle="pill"
// //                                 data-bs-target="#pills-grocery"
// //                                 type="button"
// //                                 role="tab"
// //                                 aria-controls="pills-grocery"
// //                                 aria-selected="false"
// //                             >
// //                                  Midis&Tops
// //                             </button>
// //                         </li>
// //                         <li className="nav-item" role="presentation">
// //                             <button
// //                                 className="nav-link"
// //                                 id="pills-fruits-tab"
// //                                 data-bs-toggle="pill"
// //                                 data-bs-target="#pills-fruits"
// //                                 type="button"
// //                                 role="tab"
// //                                 aria-controls="pills-fruits"
// //                                 aria-selected="false"
// //                             >
// //                                  Prayer Dresses
// //                             </button>
// //                         </li>
// //                         <li className="nav-item" role="presentation">
// //                             <button
// //                                 className="nav-link"
// //                                 id="pills-juices-tab"
// //                                 data-bs-toggle="pill"
// //                                 data-bs-target="#pills-juices"
// //                                 type="button"
// //                                 role="tab"
// //                                 aria-controls="pills-juices"
// //                                 aria-selected="false"
// //                             >
// //                                  Kids Abayas
// //                             </button>
// //                         </li>
// //                         <li className="nav-item" role="presentation">
// //                             <button
// //                                 className="nav-link"
// //                                 id="pills-vegetables-tab"
// //                                 data-bs-toggle="pill"
// //                                 data-bs-target="#pills-vegetables"
// //                                 type="button"
// //                                 role="tab"
// //                                 aria-controls="pills-vegetables"
// //                                 aria-selected="false"
// //                             >
// //                                 Vegetables
// //                             </button>
// //                         </li>
// //                         <li className="nav-item" role="presentation">
// //                             <button
// //                                 className="nav-link"
// //                                 id="pills-snacks-tab"
// //                                 data-bs-toggle="pill"
// //                                 data-bs-target="#pills-snacks"
// //                                 type="button"
// //                                 role="tab"
// //                                 aria-controls="pills-snacks"
// //                                 aria-selected="false"
// //                             >
// //                                 Snacks
// //                             </button>
// //                         </li>
// //                         <li className="nav-item" role="presentation">
// //                             <button
// //                                 className="nav-link"
// //                                 id="pills-organic-tab"
// //                                 data-bs-toggle="pill"
// //                                 data-bs-target="#pills-organic"
// //                                 type="button"
// //                                 role="tab"
// //                                 aria-controls="pills-organic"
// //                                 aria-selected="false"
// //                             >
// //                                 Organic Foods
// //                             </button>
// //                         </li>
// //                     </ul>
// //                 </div>
// //                 {courses.map((course) => (
// //                 <div className="tab-content" id="pills-tabContent">
// //                     <div
// //                         className="tab-pane fade show active"
// //                         id="pills-all"
// //                         role="tabpanel"
// //                         aria-labelledby="pills-all-tab"
// //                         tabIndex={0}
// //                     >
// //                         <div className="row g-12">
// //                             <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
// //                                 <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
// //                                     <Link
// //                                         to="/product-details"
// //                                         className="product-card__thumb flex-center"
// //                                     >
// //                                         <img src="data:image/jpeg;base64,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" alt="" />
// //                                     </Link>
// //                                     <div className="product-card__content p-sm-2">
// //                                         <h6 className="title text-lg fw-semibold mt-12 mb-8">
// //                                             <Link to="/product-details" className="link text-line-2">
// //                                        {/* Black Abaya with Dori Lacework on the Front and Sleeves */}
// //                                        {course.name}
// //                                             </Link>
// //                                         </h6>
// //                                         <div className="flex-align gap-4">
// //                                             <span className="text-main-600 text-md d-flex">
// //                                                 <i className="ph-fill ph-storefront" />
// //                                             </span>
// //                                             <span className="text-gray-500 text-xs">
// //                                                 {/* By Lucky Supermarket */}
// //                                                 {courses.fabric}
// //                                             </span>
// //                                         </div>
// //                                         <div className="product-card__content mt-12">
// //                                             <div className="product-card__price mb-8">
// //                                                 <span className="text-heading text-md fw-semibold ">
// //                                                     {courses.stocks}
// //                                                     <span className="text-gray-500 fw-normal">/Qty</span>{" "}
// //                                                 </span>
// //                                                 <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
// //                                                     {courses.price}
// //                                                 </span>
// //                                             </div>
// //                                             <div className="flex-align gap-6">
// //                                                 <span className="text-xs fw-bold text-gray-600">4.8</span>
// //                                                 <span className="text-15 fw-bold text-warning-600 d-flex">
// //                                                     <i className="ph-fill ph-star" />
// //                                                 </span>
// //                                                 <span className="text-xs fw-bold text-gray-600">({courses.price})</span>
// //                                             </div>
// //                                             <Link
// //                                                 to="/cart"
// //                                                 className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
// //                                             >
// //                                                 Add To Cart <i className="ph ph-shopping-cart" />
// //                                             </Link>
// //                                         </div>
// //                                     </div>
// //                                 </div>
// //                             </div>











// //                         </div>
// //                     </div>
// //                 </div>
// //                   ))}
// //             </div>
// //         </section>

// //     )
// // }

// // export default RecommendedOne



// // import React, { useEffect, useState } from 'react';
// // import { Link } from 'react-router-dom';
// // import axios from 'axios';
// // import { toast } from 'react-toastify';

// // const RecommendedOne = () => {
// //   const [courses, setCourses] = useState([]);
// //   const [filterText, setFilterText] = useState('');

// //   const api = 'https://backend-20ar.onrender.com/product';

// //   useEffect(() => {
// //     const fetchCourses = async () => {
// //       try {
// //         const response = await axios.get(api);
// //         setCourses(response.data);
// //       } catch (error) {
// //         toast.error('Error fetching course data');
// //         console.error('Error fetching course data:', error);
// //       }
// //     };

// //     fetchCourses();
// //   }, []);

// //   const fetchData = async () => {
// //     try {
// //       setLoading(true);

// //       const [categoryRes, subCategoryRes, productRes] = await Promise.all([
// //         axios.get("https://backend-20ar.onrender.com/category"),
// //         axios.get("https://backend-20ar.onrender.com/category/:id"),

// //         axios.get("https://backend-20ar.onrender.com/subcategory"),
// //         axios.get("https://backend-20ar.onrender.com/product/allproduct"),
// //       ]);

// //       setCategories(categoryRes.data);
// //       setSubCategories(subCategoryRes.data);
// //       setFilteredSubCategories(subCategoryRes.data);

// //       const formattedProducts = productRes.data.map((product) => ({
// //         _id: product._id,
// //         name: product.name,
// //         category: product.category?.name || "Uncategorized",
// //         subCategory: product.subCategory?.name || "Uncategorized",
// //         img: product.images[0] || "https://via.placeholder.com/150",
// //       }));

// //       setAllProducts(formattedProducts);
// //       setProducts(formattedProducts);
// //     } catch (err) {
// //       console.error("Error fetching data:", err);
// //       setError("Failed to load data.");
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   useEffect(() => {
// //     fetchData();
// //   }, []);


// //   return (
// //     <section className="recommended">
// //       <div className="container container-lg">
// //         <div className="section-heading flex-between flex-wrap gap-16">
// //           <h5 className="mb-0">Recommended for you</h5>
// //           <ul className="nav common-tab nav-pills" id="pills-tab" role="tablist">
// //             <li className="nav-item" role="presentation">
// //               <button
// //                 className="nav-link active"
// //                 id="pills-all-tab"
// //                 data-bs-toggle="pill"
// //                 data-bs-target="#pills-all"
// //                 type="button"
// //                 role="tab"
// //                 aria-controls="pills-all"
// //                 aria-selected="true"
// //               >
// //                 All
// //               </button>
// //             </li>
// //             <li className="nav-item" role="presentation">
// //               <button
// //                 className="nav-link"
// //                 id="pills-grocery-tab"
// //                 data-bs-toggle="pill"
// //                 data-bs-target="#pills-grocery"
// //                 type="button"
// //                 role="tab"
// //                 aria-controls="pills-grocery"
// //                 aria-selected="false"
// //               >
// //                 Midis&Tops
// //               </button>
// //             </li>
// //             <li className="nav-item" role="presentation">
// //               <button
// //                 className="nav-link"
// //                 id="pills-fruits-tab"
// //                 data-bs-toggle="pill"
// //                 data-bs-target="#pills-fruits"
// //                 type="button"
// //                 role="tab"
// //                 aria-controls="pills-fruits"
// //                 aria-selected="false"
// //               >
// //                 Prayer Dresses
// //               </button>
// //             </li>
// //             <li className="nav-item" role="presentation">
// //               <button
// //                 className="nav-link"
// //                 id="pills-juices-tab"
// //                 data-bs-toggle="pill"
// //                 data-bs-target="#pills-juices"
// //                 type="button"
// //                 role="tab"
// //                 aria-controls="pills-juices"
// //                 aria-selected="false"
// //               >
// //                 Kids Abayas
// //               </button>
// //             </li>
// //             <li className="nav-item" role="presentation">
// //               <button
// //                 className="nav-link"
// //                 id="pills-vegetables-tab"
// //                 data-bs-toggle="pill"
// //                 data-bs-target="#pills-vegetables"
// //                 type="button"
// //                 role="tab"
// //                 aria-controls="pills-vegetables"
// //                 aria-selected="false"
// //               >
// //                 Vegetables
// //               </button>
// //             </li>
// //             <li className="nav-item" role="presentation">
// //               <button
// //                 className="nav-link"
// //                 id="pills-snacks-tab"
// //                 data-bs-toggle="pill"
// //                 data-bs-target="#pills-snacks"
// //                 type="button"
// //                 role="tab"
// //                 aria-controls="pills-snacks"
// //                 aria-selected="false"
// //               >
// //                 Snacks
// //               </button>
// //             </li>
// //             <li className="nav-item" role="presentation">
// //               <button
// //                 className="nav-link"
// //                 id="pills-organic-tab"
// //                 data-bs-toggle="pill"
// //                 data-bs-target="#pills-organic"
// //                 type="button"
// //                 role="tab"
// //                 aria-controls="pills-organic"
// //                 aria-selected="false"
// //               >
// //                 Organic Foods
// //               </button>
// //             </li>
// //           </ul>
// //         </div>
// //         <div className="tab-content" id="pills-tabContent">
// //           <div
// //             className="tab-pane fade show active"
// //             id="pills-all"
// //             role="tabpanel"
// //             aria-labelledby="pills-all-tab"
// //             tabIndex={0}
// //           >
// //             <div className="row g-12">
// //               {courses.map((course) => (
// //                 <div className="col-xxl-2 col-lg-3 col-sm-4 col-6" key={course._id}>
// //                   <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
// //                     <Link
// //                       to="/product-details"
// //                       className="product-card__thumb flex-center"
// //                     >
// //                       <img src={course.images?.[0] || "https://via.placeholder.com/150"} alt={course.name} />
// //                     </Link>
// //                     <div className="product-card__content p-sm-2">
// //                       <h6 className="title text-lg fw-semibold mt-12 mb-8">
// //                         <Link to="/product-details" className="link text-line-2">
// //                           {course.name}
// //                         </Link>
// //                       </h6>
// //                       <div className="flex-align gap-4">
// //                         <span className="text-main-600 text-md d-flex">
// //                           <i className="ph-fill ph-storefront" />
// //                         </span>
// //                         <span className="text-gray-500 text-xs">
// //                           {course.fabric || "No fabric specified"}
// //                         </span>
// //                       </div>
// //                       <div className="product-card__content mt-12">
// //                         <div className="product-card__price mb-8">
// //                           <span className="text-heading text-md fw-semibold ">
// //                             {course.stock}
// //                             <span className="text-gray-500 fw-normal">/Qty</span>{" "}
// //                           </span>
// //                           <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
// //                             ${course.price}
// //                           </span>
// //                         </div>
// //                         <div className="flex-align gap-6">
// //                           <span className="text-xs fw-bold text-gray-600">4.8</span>
// //                           <span className="text-15 fw-bold text-warning-600 d-flex">
// //                             <i className="ph-fill ph-star" />
// //                           </span>
// //                           <span className="text-xs fw-bold text-gray-600">(${course.price})</span>
// //                         </div>
// //                         <Link
// //                           to="/cart"
// //                           className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
// //                         >
// //                           Add To Cart <i className="ph ph-shopping-cart" />
// //                         </Link>
// //                       </div>
// //                     </div>
// //                   </div>
// //                 </div>
// //               ))}
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default RecommendedOne;



// // import React, { useEffect, useState } from 'react';
// // import { Link, useNavigate } from 'react-router-dom';
// // import axios from 'axios';
// // import { toast } from 'react-toastify';


// // const RecommendedOne = () => {
// //   const [courses, setCourses] = useState([]);
// //   const [categories, setCategories] = useState([]);
// //   const [activeCategory, setActiveCategory] = useState('All');

// //   const navigate = useNavigate()
// //   const api = 'https://backend-20ar.onrender.com/product';

// //   useEffect(() => {
// //     const fetchCourses = async () => {
// //       try {
// //         const response = await axios.get(api);
// //         setCourses(response.data);
// //       } catch (error) {
// //         toast.error('Error fetching course data');
// //         console.error('Error fetching course data:', error);
// //       }
// //     };

// //     fetchCourses();
// //   }, []);




// //   const handleCourseClick = (courseId) => {
// //     navigate(`/product-details/${courseId}`);
// //   };



// //   useEffect(() => {
// //     const fetchCategories = async () => {
// //       try {
// //         const res = await axios.get('https://backend-20ar.onrender.com/category');
// //         setCategories(res.data);
// //       } catch (error) {
// //         toast.error('Error fetching categories');
// //         console.error('Error fetching categories:', error);
// //       }
// //     };

// //     fetchCategories();
// //   }, []);

// //   const filteredCourses =
// //     activeCategory === 'All'
// //       ? courses
// //       : courses.filter((course) => course.category?.name === activeCategory);

// //   return (
// //     <section className="recommended">
// //       <div className="container container-lg">
// //         <div className="section-heading flex-between flex-wrap gap-16">
// //           <h5 className="mb-0">Recommended for you</h5>
// //           <ul className="nav common-tab nav-pills" id="pills-tab" role="tablist">
// //             <li className="nav-item" role="presentation">
// //               <button
// //                 className={`nav-link ${activeCategory === 'All' ? 'active' : ''}`}
// //                 type="button"
// //                 role="tab"
// //                 onClick={() => setActiveCategory('All')}
// //               >
// //                 All
// //               </button>
// //             </li>
// //             {categories.map((cat) => (
// //               <li className="nav-item" role="presentation" key={cat._id}>
// //                 <button
// //                   className={`nav-link ${activeCategory === cat.name ? 'active' : ''}`}
// //                   type="button"
// //                   role="tab"
// //                   onClick={() => setActiveCategory(cat.name)}
// //                 >
// //                   {cat.name}
// //                 </button>
// //               </li>
// //             ))}
// //           </ul>
// //         </div>

// //         <div className="tab-content" id="pills-tabContent">
// //           <div
// //             className="tab-pane fade show active"
// //             id="pills-all"
// //             role="tabpanel"
// //             aria-labelledby="pills-all-tab"
// //             tabIndex={0}
// //           >
// //             <div className="row g-12">
// //               {filteredCourses.map((course) => (
// //                 <div className="col-xxl-2 col-lg-3 col-sm-4 col-6" key={course._id}>
// //                   <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
// //                     <Link
// //                 onClick={() => handleCourseClick(course._id)}

// //                       // to="/product-details"
// //                       // onClick={handleCourseClick()}
// //                       className="product-card__thumb flex-center"
// //                     >
// //                       <img
// //                         src={course.images?.[0] || "https://via.placeholder.com/150"}
// //                         alt={course.name}
// //                       />
// //                     </Link>
// //                     <div className="product-card__content p-sm-2">
// //                       <h6 className="title text-lg fw-semibold mt-12 mb-8">
// //                         <Link to="/product-details"

// //                         className="link text-line-2">
// //                           {course.name}
// //                         </Link>
// //                       </h6>
// //                       <div className="flex-align gap-4">
// //                         <span className="text-main-600 text-md d-flex">
// //                           <i className="ph-fill ph-storefront" />
// //                         </span>
// //                         <span className="text-gray-500 text-xs">
// //                           {course.fabric || "No fabric specified"}
// //                         </span>
// //                       </div>
// //                       <div className="product-card__content mt-12">
// //                         <div className="product-card__price mb-8">
// //                           <span className="text-heading text-md fw-semibold ">
// //                             {course.stock}
// //                             <span className="text-gray-500 fw-normal">/Qty</span>{" "}
// //                           </span>
// //                           <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
// //                             ${course.price}
// //                           </span>
// //                         </div>
// //                         <div className="flex-align gap-6">
// //                           <span className="text-xs fw-bold text-gray-600">4.8</span>
// //                           <span className="text-15 fw-bold text-warning-600 d-flex">
// //                             <i className="ph-fill ph-star" />
// //                           </span>
// //                           <span className="text-xs fw-bold text-gray-600">(${course.price})</span>
// //                         </div>
// //                         <Link
// //                           to="/cart"
// //                           className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
// //                         >
// //                           Add To Cart <i className="ph ph-shopping-cart" />
// //                         </Link>
// //                       </div>
// //                     </div>
// //                   </div>
// //                 </div>
// //               ))}
// //               {filteredCourses.length === 0 && (
// //                 <div className="col-12 text-center mt-4">
// //                   <p>No products found in this category.</p>
// //                 </div>
// //               )}
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default RecommendedOne;


// import React, { useEffect, useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { toast } from 'react-toastify';
// import { useDispatch } from 'react-redux';
// import { addtoCart } from '../Redux/CardSlice'; // Update path as needed

// const RecommendedOne = () => {
//   const [courses, setCourses] = useState([]);
//   const [categories, setCategories] = useState([]);
//   const [activeCategory, setActiveCategory] = useState('All');
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   const api = 'https://backend-20ar.onrender.com/product';

//   useEffect(() => {
//     const fetchCourses = async () => {
//       try {
//         const response = await axios.get(api);
//         setCourses(response.data);
//       } catch (error) {
//         toast.error('Error fetching course data');
//         console.error('Error fetching course data:', error);
//       }
//     };

//     fetchCourses();
//   }, []);

//   const handleCourseClick = (courseId) => {
//     navigate(`/product-details/${courseId}`);
//   };

//   useEffect(() => {
//     const fetchCategories = async () => {
//       try {
//         const res = await axios.get('https://backend-20ar.onrender.com/category');
//         setCategories(res.data);
//       } catch (error) {
//         toast.error('Error fetching categories');
//         console.error('Error fetching categories:', error);
//       }
//     };

//     fetchCategories();
//   }, []);

//   const handleaddtoCart = (course) => {
//     dispatch(
//       addtoCart({
//         id: course._id,
//         name: course.name,
//         price: course.price,
//         image: course.images?.[0] || "https://via.placeholder.com/150",
//         qnty: 1
//       })
//     );
//     toast.success(`${course.name} added to cart!`);
//   };

//   const filteredCourses =
//     activeCategory === 'All'
//       ? courses
//       : courses.filter((course) => course.category?.name === activeCategory);

//   return (
//     <section className="recommended">
//       <div className="container container-lg mt-24">
//         <div className="section-heading flex-between flex-wrap gap-16">
//           <h5 className="mb-0">Recommended for you</h5>
//           <ul className="nav common-tab nav-pills" id="pills-tab" role="tablist">
//             <li className="nav-item" role="presentation">
//               <button
//                 className={`nav-link ${activeCategory === 'All' ? 'active' : ''}`}
//                 type="button"
//                 role="tab"
//                 onClick={() => setActiveCategory('All')}
//               >
//                 All
//               </button>
//             </li>
//             {categories.map((cat) => (
//               <li className="nav-item" role="presentation" key={cat._id}>
//                 <button
//                   className={`nav-link ${activeCategory === cat.name ? 'active' : ''}`}
//                   type="button"
//                   role="tab"
//                   onClick={() => setActiveCategory(cat.name)}
//                 >
//                   {cat.name}
//                 </button>
//               </li>
//             ))}
//           </ul>
//         </div>

//         <div className="tab-content" id="pills-tabContent">
//           <div
//             className="tab-pane fade show active"
//             id="pills-all"
//             role="tabpanel"
//             aria-labelledby="pills-all-tab"
//             tabIndex={0}
//           >
//             <div className="row g-12">
//               {filteredCourses.map((course) => (
//                 <div className="col-xxl-2 col-lg-3 col-sm-4 col-6" key={course._id}>
//                   <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
//                     <div
//                       onClick={() => handleCourseClick(course._id)}
//                       className="product-card__thumb flex-center cursor-pointer"
//                     >
//                       <img
//                         src={course.images?.[0] || "https://via.placeholder.com/150"}
//                         alt={course.name}
//                       />
//                     </div>

//                                  <div className="product-card__content p-3 rounded-lg shadow-sm bg-white hover:shadow-md transition duration-300">
//   <h6 className="title text-lg fw-semibold mt-3 mb-3 text-dark">
//     <div
//       onClick={() => handleCourseClick(course._id)}
//       className="link text-line-2 cursor-pointer text-success"
//     >
//       {course.name}
//     </div>
//   </h6>

//   <div className="d-flex align-items-center justify-content-between mb-2">
//     <div className="d-flex align-items-center gap-2">
//       <span className="text-success text-md me-2">
//         <i className="ph-fill ph-storefront text-success fs-5" />
//       </span>
//       <span className="text-muted text-sm">
//         {course.fabric || "No fabric specified"}
//       </span>
//     </div>
//     <span className="text-end text-sm text-dark fw-semibold">
//       Size: <span className="text-success">{course.size}</span>
//     </span>
//   </div>

//   <div className="product-card__content mt-3">
//     <div className="product-card__price mb-3 d-flex align-items-center gap-3">
//       <span className="text-muted text-decoration-line-through fw-semibold">
//         ₹{course.originalPrice || course.price}
//       </span>
//       <span className="text-success fw-bold fs-5">
//         ₹{course.price}
//       </span>
//     </div>

//     <span className="text-sm fw-semibold text-success">
//       {course.stock}:
//       <span className="fw-normal text-muted"> Stock </span>
//     </span>

//     <button
//       onClick={() => handleaddtoCart(course)}
//       className="product-card__cart btn btn-success mt-3 w-100 rounded-pill d-flex align-items-center justify-content-center gap-2"
//     >
//       Add To Cart <i className="ph ph-shopping-cart" />
//     </button>
//   </div>
// </div>

//                   </div>
//                 </div>
//               ))}
//               {filteredCourses.length === 0 && (
//                 <div className="col-12 text-center mt-4">
//                   <p>No products found in this category.</p>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default RecommendedOne;




















// import React, { useEffect, useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { toast } from 'react-toastify';
// import { useDispatch } from 'react-redux';
// import { addtoCart } from '../Redux/CardSlice'; // Update path as needed

// const RecommendedOne = () => {
//   const [courses, setCourses] = useState([]);
//   const [categories, setCategories] = useState([]);
//   const [activeCategory, setActiveCategory] = useState('All');
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const [user, setUser] = useState(null);

//   // console.log(user.user.discount,'aaaaaaaaaaaaaaaaadasasd')
//   useEffect(() => {
//     const storedUser = JSON.parse(localStorage.getItem("user"));
//     if (storedUser) {
//       setUser(storedUser);
//     }
//   }, []);
//   const api = 'http://localhost:8080/product';

//   useEffect(() => {
//     const fetchCourses = async () => {
//       try {
//         const response = await axios.get(api);
//         setCourses(response.data);
//       } catch (error) {
//         toast.error('Error fetching course data');
//         console.error('Error fetching course data:', error);
//       }
//     };

//     fetchCourses();
//   }, []);

//   const handleCourseClick = (courseId) => {
//     navigate(`/product-details/${courseId}`);
//   };

//   useEffect(() => {
//     const fetchCategories = async () => {
//       try {
//         const res = await axios.get('http://localhost:8080/category');
//         setCategories(res.data);
//       } catch (error) {
//         toast.error('Error fetching categories');
//         console.error('Error fetching categories:', error);
//       }
//     };

//     fetchCategories();
//   }, []);

//   const handleaddtoCart = (course) => {
//     dispatch(
//       addtoCart({
//         id: course._id,
//         name: course.name,
//         price: course.price,
//         image: course.images?.[0] || "https://via.placeholder.com/150",
//         qnty: 1
//       })
//     );
//     toast.success(`${course.name} added to cart!`);
//   };

//   const filteredCourses =
//     activeCategory === 'All'
//       ? courses
//       : courses.filter((course) => course.category?.name === activeCategory);

//   return (
//     <section className="recommended">
//       <div className="container container-lg mt-24">
//         <div className="section-heading flex-between flex-wrap gap-16">
//           <h5 className="mb-0">Recommended for you</h5>
//           <ul className="nav common-tab nav-pills" id="pills-tab" role="tablist">
//             <li className="nav-item" role="presentation">
//               <button
//                 className={`nav-link ${activeCategory === 'All' ? 'active' : ''}`}
//                 type="button"
//                 role="tab"
//                 onClick={() => setActiveCategory('All')}
//               >
//                 All
//               </button>
//             </li>
//             {categories.map((cat) => (
//               <li className="nav-item" role="presentation" key={cat._id}>
//                 <button
//                   className={`nav-link ${activeCategory === cat.name ? 'active' : ''}`}
//                   type="button"
//                   role="tab"
//                   onClick={() => setActiveCategory(cat.name)}
//                 >
//                   {cat.name}
//                 </button>
//               </li>
//             ))}
//           </ul>
//         </div>

//         <div className="tab-content" id="pills-tabContent">
//           <div
//             className="tab-pane fade show active"
//             id="pills-all"
//             role="tabpanel"
//             aria-labelledby="pills-all-tab"
//             tabIndex={0}
//           >
//             <div className="row g-12">
//               {filteredCourses.map((course) => (
//                 <div className="col-xxl-2 col-lg-3 col-sm-4 col-6" key={course._id}>
//                   <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
//                     <div
//                       onClick={() => handleCourseClick(course._id)}
//                       className="product-card__thumb flex-center cursor-pointer"
//                     >
//                       <img
//                         src={course.images?.[0] || "https://via.placeholder.com/150"}
//                         alt={course.name}
//                       />
//                     </div>

//                                  <div className="product-card__content p-3 rounded-lg shadow-sm bg-white hover:shadow-md transition duration-300">
//   <h6 className="title text-lg fw-semibold mt-3 mb-3 text-dark">
//     <div
//       onClick={() => handleCourseClick(course._id)}
//       className="link text-line-2 cursor-pointer text-success"
//     >
//       {course.name}
//     </div>
//   </h6>

//   <div className="d-flex align-items-center justify-content-between mb-2">
//     <div className="d-flex align-items-center gap-2">
//       <span className="text-success text-md me-2">
//         <i className="ph-fill ph-storefront text-success fs-5" />
//       </span>
//       <span className="text-muted text-sm">
//         {course.fabric || "No fabric specified"}
//       </span>
//     </div>
//     <span className="text-end text-sm text-dark fw-semibold">
//       Size: <span className="text-success">{course.size}</span>
//     </span>
//       <span className="text-end text-sm text-dark fw-semibold pl-30">
//       Color: <span className="text-success">{course.color}</span>
//     </span>
//   </div>

//   <div className="product-card__content mt-3">
//     <div className="product-card__price mb-3 d-flex align-items-center gap-3">
//       <span className="text-muted text-decoration-line-through fw-semibold">
//         ₹{course.originalPrice || course.price}
//       </span>
//      <span className="text-success fw-bold fs-5">
//   ₹{course.price - (course.price * (user.user.discount || 0) / 100)}
// </span>

//     </div>

//     <span className="text-sm fw-semibold text-success">
//       {course.stock}:
//       <span className="fw-normal text-muted"> Stock </span>
//     </span>

//     <button
//       onClick={() => handleaddtoCart(course)}
//       className="product-card__cart btn btn-success mt-3 w-100 rounded-pill d-flex align-items-center justify-content-center gap-2"
//     >
//       Add To Cart <i className="ph ph-shopping-cart" />
//     </button>
//   </div>
// </div>

//                   </div>
//                 </div>
//               ))}
//               {filteredCourses.length === 0 && (
//                 <div className="col-12 text-center mt-4">
//                   <p>No products found in this category.</p>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default RecommendedOne;



// import React, { useEffect, useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { toast } from 'react-toastify';
// import { useDispatch } from 'react-redux';
// import { addtoCart } from '../Redux/CardSlice';

// const RecommendedOne = () => {
//   const [courses, setCourses] = useState([]);
//   const [categories, setCategories] = useState([]);
//   const [activeCategory, setActiveCategory] = useState('All');
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     const storedUser = JSON.parse(localStorage.getItem("user"));
//     if (storedUser) {
//       setUser(storedUser);
//     }
//   }, []);

//   const api = 'http://localhost:8080/product';

//   useEffect(() => {
//     const fetchCourses = async () => {
//       try {
//         const response = await axios.get(api);
//         setCourses(response.data);
//       } catch (error) {
//         toast.error('Error fetching course data');
//         console.error('Error fetching course data:', error);
//       }
//     };

//     fetchCourses();
//   }, []);

//   const handleCourseClick = (courseId) => {
//     navigate(`/product-details/${courseId}`);
//   };

//   useEffect(() => {
//     const fetchCategories = async () => {
//       try {
//         const res = await axios.get('http://localhost:8080/category');
//         setCategories(res.data);
//       } catch (error) {
//         toast.error('Error fetching categories');
//         console.error('Error fetching categories:', error);
//       }
//     };

//     fetchCategories();
//   }, []);

//   const handleaddtoCart = (course) => {
//     dispatch(
//       addtoCart({
//         id: course._id,
//         name: course.name,
//         price: course.price,
//         image: course.images?.[0] || "https://via.placeholder.com/150",
//         qnty: 1
//       })
//     );
//     toast.success(`${course.name} added to cart!`);
//   };

//   const filteredCourses =
//     activeCategory === 'All'
//       ? courses
//       : courses.filter((course) => course.category?.name === activeCategory);

//   const discount = user?.user?.discount || 0;

//   return (
//     <section className="recommended">
//       <div className="container container-lg mt-24">
//         <div className="section-heading flex-between flex-wrap gap-16">
//           <h5 className="mb-0">Recommended for you</h5>
//           <ul className="nav common-tab nav-pills" id="pills-tab" role="tablist">
//             <li className="nav-item" role="presentation">
//               <button
//                 className={`nav-link ${activeCategory === 'All' ? 'active' : ''}`}
//                 type="button"
//                 role="tab"
//                 onClick={() => setActiveCategory('All')}
//               >
//                 All
//               </button>
//             </li>
//             {categories.map((cat) => (
//               <li className="nav-item" role="presentation" key={cat._id}>
//                 <button
//                   className={`nav-link ${activeCategory === cat.name ? 'active' : ''}`}
//                   type="button"
//                   role="tab"
//                   onClick={() => setActiveCategory(cat.name)}
//                 >
//                   {cat.name}
//                 </button>
//               </li>
//             ))}
//           </ul>
//         </div>

//         <div className="tab-content" id="pills-tabContent">
//           <div
//             className="tab-pane fade show active"
//             id="pills-all"
//             role="tabpanel"
//             aria-labelledby="pills-all-tab"
//             tabIndex={0}
//           >
//             <div className="row g-12">
//               {filteredCourses.map((course) => {
//                 const discountedPrice = course.price - (course.price * discount / 100);

//                 return (
//                   <div className="col-xxl-2 col-lg-3 col-sm-4 col-6" key={course._id}>
//                     <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
//                       <div
//                         onClick={() => handleCourseClick(course._id)}
//                         className="product-card__thumb flex-center cursor-pointer"
//                       >
//                         <img
//                           src={course.images?.[0] || "https://via.placeholder.com/150"}
//                           alt={course.name}
//                         />
//                       </div>

//                       <div className="product-card__content p-3 rounded-lg shadow-sm bg-white hover:shadow-md transition duration-300">
//                         <h6 className="title text-lg fw-semibold mt-3 mb-3 text-dark">
//                           <div
//                             onClick={() => handleCourseClick(course._id)}
//                             className="link text-line-2 cursor-pointer text-success"
//                           >
//                             {course.name}
//                           </div>
//                         </h6>

//                         <div className="d-flex align-items-center justify-content-between mb-2">
//                           <div className="d-flex align-items-center gap-2">
//                             <span className="text-success text-md me-2">
//                               <i className="ph-fill ph-storefront text-success fs-5" />
//                             </span>
//                             <span className="text-muted text-sm">
//                               {course.fabric || "No fabric specified"}
//                             </span>
//                           </div>
//                           <span className="text-end text-sm text-dark fw-semibold">
//                             Size: <span className="text-success">{course.size}</span>
//                           </span>
//                           <span className="text-end text-sm text-dark fw-semibold pl-30">
//                             Color: <span className="text-success">{course.color}</span>
//                           </span>
//                         </div>

//                         <div className="product-card__content mt-3">
//                           <div className="product-card__price mb-3 d-flex align-items-center gap-3">
//                             <span className="text-muted text-decoration-line-through fw-semibold">
//                               ₹{course.originalPrice || course.price}
//                             </span>
//                             <span className="text-success fw-bold fs-5">
//                               ₹{discountedPrice.toFixed(2)}
//                             </span>
//                           </div>

//                           <span className="text-sm fw-semibold text-success">
//                             {course.stock}:
//                             <span className="fw-normal text-muted"> Stock </span>
//                           </span>

//                           <button
//                             onClick={() => handleaddtoCart(course)}
//                             className="product-card__cart btn btn-success mt-3 w-100 rounded-pill d-flex align-items-center justify-content-center gap-2"
//                           >
//                             Add To Cart <i className="ph ph-shopping-cart" />
//                           </button>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 );
//               })}
//               {filteredCourses.length === 0 && (
//                 <div className="col-12 text-center mt-4">
//                   <p>No products found in this category.</p>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default RecommendedOne;



// import React, { useEffect, useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { toast } from 'react-toastify';
// import { useDispatch } from 'react-redux';
// import { addtoCart } from '../Redux/CardSlice';

// const RecommendedOne = () => {
//   const [courses, setCourses] = useState([]);
//   const [categories, setCategories] = useState([]);
//   const [activeCategory, setActiveCategory] = useState('All');
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     const storedUser = JSON.parse(localStorage.getItem("user"));
//     if (storedUser) {
//       setUser(storedUser);
//     }
//   }, []);

//   const api = 'http://localhost:8080/product';

//   useEffect(() => {
//     const fetchCourses = async () => {
//       try {
//         const response = await axios.get(api);
//         setCourses(response.data);
//       } catch (error) {
//         toast.error('Error fetching course data');
//         console.error('Error fetching course data:', error);
//       }
//     };

//     fetchCourses();
//   }, []);

//   const handleCourseClick = (courseId) => {
//     navigate(`/product-details/${courseId}`);
//   };

//   useEffect(() => {
//     const fetchCategories = async () => {
//       try {
//         const res = await axios.get('http://localhost:8080/category');
//         setCategories(res.data);
//       } catch (error) {
//         toast.error('Error fetching categories');
//         console.error('Error fetching categories:', error);
//       }
//     };

//     fetchCategories();
//   }, []);

//   // Calculate discounted price
//   const calculateDiscountedPrice = (price) => {
//     const discount = user?.user?.discount || 0;
//     if (discount > 0) {
//       return price - (price * discount / 100);
//     }
//     return price;
//   };

//   const handleaddtoCart = (course) => {
//     dispatch(
//       addtoCart({
//         id: course._id,
//         name: course.name,
//         price: calculateDiscountedPrice(course.price),
//         image: course.images?.[0] || "https://via.placeholder.com/150",
//         qnty: 1
//       })
//     );
//     toast.success(`${course.name} added to cart!`);
//   };

//   const filteredCourses =
//     activeCategory === 'All'
//       ? courses
//       : courses.filter((course) => course.category?.name === activeCategory);

//   return (
//     <section className="recommended">
//       <div className="container container-lg mt-24">
//         <div className="section-heading flex-between flex-wrap gap-16">
//           <h5 className="mb-0">Recommended for you</h5>
//           <ul className="nav common-tab nav-pills" id="pills-tab" role="tablist">
//             <li className="nav-item" role="presentation">
//               <button
//                 className={`nav-link ${activeCategory === 'All' ? 'active' : ''}`}
//                 type="button"
//                 role="tab"
//                 onClick={() => setActiveCategory('All')}
//               >
//                 All
//               </button>
//             </li>
//             {categories.map((cat) => (
//               <li className="nav-item" role="presentation" key={cat._id}>
//                 <button
//                   className={`nav-link ${activeCategory === cat.name ? 'active' : ''}`}
//                   type="button"
//                   role="tab"
//                   onClick={() => setActiveCategory(cat.name)}
//                 >
//                   {cat.name}
//                 </button>
//               </li>
//             ))}
//           </ul>
//         </div>

//         <div className="tab-content" id="pills-tabContent">
//           <div
//             className="tab-pane fade show active"
//             id="pills-all"
//             role="tabpanel"
//             aria-labelledby="pills-all-tab"
//             tabIndex={0}
//           >
//             <div className="row g-12">
//               {filteredCourses.map((course) => {
//                 const discountedPrice = calculateDiscountedPrice(course.price);
//                 const showOriginalPrice = user?.user?.discount > 0 && discountedPrice !== course.price;

//                 return (
//                   <div className="col-xxl-2 col-lg-3 col-sm-4 col-6" key={course._id}>
//                     <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
//                       <div
//                         onClick={() => handleCourseClick(course._id)}
//                         className="product-card__thumb flex-center cursor-pointer"
//                       >
//                         <img
//                           src={course.images?.[0] || "https://via.placeholder.com/150"}
//                           alt={course.name}
//                         />
//                       </div>

//                       <div className="product-card__content p-3 rounded-lg shadow-sm bg-white hover:shadow-md transition duration-300">
//                         <h6 className="title text-lg fw-semibold mt-3 mb-3 text-dark">
//                           <div
//                             onClick={() => handleCourseClick(course._id)}
//                             className="link text-line-2 cursor-pointer text-success"
//                           >
//                             {course.name}
//                           </div>
//                         </h6>

//                         <div className="d-flex align-items-center justify-content-between mb-2">
//                           <div className="d-flex align-items-center gap-2">
//                             <span className="text-success text-md me-2">
//                               <i className="ph-fill ph-storefront text-success fs-5" />
//                             </span>
//                             <span className="text-muted text-sm">
//                               {course.fabric || "No fabric specified"}
//                             </span>
//                           </div>
//                           <span className="text-end text-sm text-dark fw-semibold">
//                             Size: <span className="text-success">{course.size}</span>
//                           </span>
//                           <span className="text-end text-sm text-dark fw-semibold pl-30">
//                             Color: <span className="text-success">{course.color}</span>
//                           </span>
//                         </div>

//                         <div className="product-card__content mt-3">
//                           <div className="product-card__price mb-3 d-flex align-items-center gap-3">
//                             {showOriginalPrice && (
//                               <span className="text-muted text-decoration-line-through fw-semibold">
//                                 ₹{course.price.toFixed(2)}
//                               </span>
//                             )}
//                             <span className="text-success fw-bold fs-5">
//                               ₹{discountedPrice.toFixed(2)}
//                             </span>
//                             {user?.user?.discount > 0 && (
//                               <span className="badge bg-danger ms-2">
//                                 {user.user.discount}% OFF
//                               </span>
//                             )}
//                           </div>

//                           <span className="text-sm fw-semibold text-success">
//                             {course.stock}:
//                             <span className="fw-normal text-muted"> Stock </span>
//                           </span>

//                           <button
//                             onClick={() => handleaddtoCart(course)}
//                             className="product-card__cart btn btn-success mt-3 w-100 rounded-pill d-flex align-items-center justify-content-center gap-2"
//                           >
//                             Add To Cart <i className="ph ph-shopping-cart" />
//                           </button>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 );
//               })}
//               {filteredCourses.length === 0 && (
//                 <div className="col-12 text-center mt-4">
//                   <p>No products found in this category.</p>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default RecommendedOne;


// import React, { useEffect, useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { toast } from 'react-toastify';
// import { useDispatch } from 'react-redux';
// import { addtoCart } from '../Redux/CardSlice';

// const RecommendedOne = () => {
//   const [courses, setCourses] = useState([]);
//   const [categories, setCategories] = useState([]);
//   const [activeCategory, setActiveCategory] = useState('All');
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     const storedUser = JSON.parse(localStorage.getItem("user"));
//     if (storedUser) {
//       setUser(storedUser);
//     }
//   }, []);

//   const api = 'http://localhost:8080/product';

//   useEffect(() => {
//     const fetchCourses = async () => {
//       try {
//         const response = await axios.get(api);
//         setCourses(response.data);
//       } catch (error) {
//         toast.error('Error fetching course data');
//         console.error('Error fetching course data:', error);
//       }
//     };

//     fetchCourses();
//   }, []);

//   const handleCourseClick = (courseId) => {
//     navigate(`/product-details/${courseId}`);
//   };

//   useEffect(() => {
//     const fetchCategories = async () => {
//       try {
//         const res = await axios.get('http://localhost:8080/category');
//         setCategories(res.data);
//       } catch (error) {
//         toast.error('Error fetching categories');
//         console.error('Error fetching categories:', error);
//       }
//     };

//     fetchCategories();
//   }, []);

//   // Calculate discounted price
//   const calculateDiscountedPrice = (price) => {
//     const discount = user?.user?.discount || 0;
//     if (discount > 0) {
//       return price - (price * discount / 100);
//     }
//     return price;
//   };

//   const handleaddtoCart = (course) => {
//     dispatch(
//       addtoCart({
//         id: course._id,
//         name: course.name,
//         price: calculateDiscountedPrice(course.price),
//         image: course.images?.[0] || "https://via.placeholder.com/150",
//         qnty: 1
//       })
//     );
//     toast.success(`${course.name} added to cart!`);
//   };

//   const filteredCourses =
//     activeCategory === 'All'
//       ? courses
//       : courses.filter((course) => course.category?.name === activeCategory);

//   return (
//     <section className="recommended">
//       <div className="container container-lg mt-24">
//         <div className="section-heading flex-between flex-wrap gap-16">
//           <h5 className="mb-0">Recommended for you</h5>
//           <ul className="nav common-tab nav-pills" id="pills-tab" role="tablist">
//             <li className="nav-item" role="presentation">
//               <button
//                 className={`nav-link ${activeCategory === 'All' ? 'active' : ''}`}
//                 type="button"
//                 role="tab"
//                 onClick={() => setActiveCategory('All')}
//               >
//                 All
//               </button>
//             </li>
//             {categories.map((cat) => (
//               <li className="nav-item" role="presentation" key={cat._id}>
//                 <button
//                   className={`nav-link ${activeCategory === cat.name ? 'active' : ''}`}
//                   type="button"
//                   role="tab"
//                   onClick={() => setActiveCategory(cat.name)}
//                 >
//                   {cat.name}
//                 </button>
//               </li>
//             ))}
//           </ul>
//         </div>

//         <div className="tab-content" id="pills-tabContent">
//           <div
//             className="tab-pane fade show active"
//             id="pills-all"
//             role="tabpanel"
//             aria-labelledby="pills-all-tab"
//             tabIndex={0}
//           >
//             <div className="row g-12">
//               {filteredCourses.map((course) => {
//                 const discountedPrice = calculateDiscountedPrice(course.price);
//                 const showOriginalPrice = user?.user?.discount > 0 && discountedPrice !== course.price;

//                 // Get all sizes as an array
//                 const sizes = course.size ?
//                   (Array.isArray(course.size) ? course.size : [course.size]) :
//                   [];

//                 return (
//                   <div className="col-xxl-2 col-lg-3 col-sm-4 col-6" key={course._id}>
//                     <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
//                       <div
//                         onClick={() => handleCourseClick(course._id)}
//                         className="product-card__thumb flex-center cursor-pointer"
//                       >
//                         <img
//                           src={course.images?.[0] || "https://via.placeholder.com/150"}
//                           alt={course.name}
//                         />
//                       </div>

//                       <div className="product-card__content p-3 rounded-lg shadow-sm bg-white hover:shadow-md transition duration-300">
//                         <h6 className="title text-lg fw-semibold mt-3 mb-3 text-dark">
//                           <div
//                             onClick={() => handleCourseClick(course._id)}
//                             className="link text-line-2 cursor-pointer text-success"
//                           >
//                             {course.name}
//                           </div>
//                         </h6>

//                         <div className="d-flex align-items-center justify-content-between mb-2">
//                           <div className="d-flex align-items-center gap-2">
//                             <span className="text-success text-md me-2">
//                               <i className="ph-fill ph-storefront text-success fs-5" />
//                             </span>
//                             <span className="text-muted text-sm">
//                               {course.fabric || "No fabric specified"}
//                             </span>
//                           </div>
//                           <span className="text-end text-sm text-dark fw-semibold">
//                             Size: <span className="text-success">
//                               {sizes.join(', ')}
//                             </span>
//                           </span>
//                         </div>

//                         <div className="d-flex align-items-center justify-content-between mb-2">
//                           <span className="text-end text-sm text-dark fw-semibold">
//                             Color: <span className="text-success">{course.color}</span>
//                           </span>
//                         </div>

//                         <div className="product-card__content mt-3">
//                           <div className="product-card__price mb-3 d-flex align-items-center gap-3">
//                             {showOriginalPrice && (
//                               <span className="text-muted text-decoration-line-through fw-semibold">
//                                 ₹{course.price.toFixed(2)}
//                               </span>
//                             )}
//                             <span className="text-success fw-bold fs-5">
//                               ₹{discountedPrice.toFixed(2)}
//                             </span>
//                             {user?.user?.discount > 0 && (
//                               <span className="badge bg-danger ms-2">
//                                 {user.user.discount}% OFF
//                               </span>
//                             )}
//                           </div>

//                           <span className="text-sm fw-semibold text-success">
//                             {course.stock}:
//                             <span className="fw-normal text-muted"> Stock </span>
//                           </span>

//                           <button
//                             onClick={() => handleaddtoCart(course)}
//                             className="product-card__cart btn btn-success mt-3 w-100 rounded-pill d-flex align-items-center justify-content-center gap-2"
//                           >
//                             Add To Cart <i className="ph ph-shopping-cart" />
//                           </button>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 );
//               })}
//               {filteredCourses.length === 0 && (
//                 <div className="col-12 text-center mt-4">
//                   <p>No products found in this category.</p>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default RecommendedOne;






import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { addtoCart } from '../Redux/CardSlice';

const RecommendedOne = () => {
  const [courses, setCourses] = useState([]);
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState('All');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [user, setUser] = useState(null);
  const [selectedSizes, setSelectedSizes] = useState({});
  const [showSizeModal, setShowSizeModal] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  const api = 'https://backend-project-g4mc.onrender.com/product';

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get(api);
        setCourses(response.data);
        const sizes = {};
        response.data.forEach(course => {
          const courseSizes = course.size ? (Array.isArray(course.size) ? course.size : [course.size]) : [];
          if (courseSizes.length > 0) {
            sizes[course._id] = courseSizes[0];
          }
        });
        setSelectedSizes(sizes);
      } catch (error) {
        toast.error('Error fetching course data');
        console.error('Error fetching course data:', error);
      }
    };

    fetchCourses();
  }, []);

  const handleCourseClick = (courseId) => {
    navigate(`/product-details/${courseId}`);
  };

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await axios.get('https://backend-project-g4mc.onrender.com/category');
        setCategories(res.data);
      } catch (error) {
        toast.error('Error fetching categories');
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, []);

  const calculateDiscountedPrice = (price) => {
    const discount = user?.user?.discount || 0;
    if (discount > 0) {
      return price - (price * discount / 100);
    }
    return price;
  };

  const handleSizeSelection = (productId, size) => {
    setSelectedSizes(prev => ({
      ...prev,
      [productId]: size
    }));
  };

  const handleAddToCartClick = (course) => {
    if (!user?.user?.firmName) {
      toast.error('Please login to add items to cart');
      navigate('/login');
      return;
    }

    const sizes = course.size ? (Array.isArray(course.size) ? course.size : [course.size]) : [];
    
    if (sizes.length > 1) {
      setCurrentProduct(course);
      setShowSizeModal(true);
    } else {
      handleaddtoCart(course, sizes[0] || '');
    }
  };

const handleaddtoCart = (course, size) => {
  if (!user?.user?.firmName) {
    toast.error('Please login to add items to cart');
    navigate('/login');
    return;
  }

  dispatch(
    addtoCart({
      id: course._id,
      name: course.name,
      price: calculateDiscountedPrice(course.price),
      image: course.images?.[0] || "https://via.placeholder.com/150",
      qnty: 1,
      size: size || "N/A" // Include selected size in cart item
    })
  );

  toast.success(`${course.name} (Size: ${size || "N/A"}) added to cart!`);
  setShowSizeModal(false);
};


  const filteredCourses =
    activeCategory === 'All'
      ? courses
      : courses.filter((course) => course.category?.name === activeCategory);

  return (
    <section className="recommended">
      <div className="container container-lg mt-24">
        <div className="section-heading flex-between flex-wrap gap-16">
          <h5 className="mb-0">Recommended for you</h5>
          <ul className="nav common-tab nav-pills" id="pills-tab" role="tablist">
            <li className="nav-item" role="presentation">
              <button
                className={`nav-link ${activeCategory === 'All' ? 'active' : ''}`}
                type="button"
                role="tab"
                onClick={() => setActiveCategory('All')}
              >
                All
              </button>
            </li>
            {categories.map((cat) => (
              <li className="nav-item" role="presentation" key={cat._id}>
                <button
                  className={`nav-link ${activeCategory === cat.name ? 'active' : ''}`}
                  type="button"
                  role="tab"
                  onClick={() => setActiveCategory(cat.name)}
                >
                  {cat.name}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {showSizeModal && currentProduct && (
          <div className="modal fade show" style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.5)' }}>
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Select Size</h5>
                  <button type="button" className="btn-close" onClick={() => setShowSizeModal(false)}></button>
                </div>
                <div className="modal-body">
                  <div className="d-flex flex-wrap gap-2">
                    {currentProduct.size.map((size) => (
                      <button
                        key={size}
                        className={`btn ${selectedSizes[currentProduct._id] === size ? 'btn-success' : 'btn-outline-secondary'}`}
                        onClick={() => handleSizeSelection(currentProduct._id, size)}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="modal-footer">
                  <button 
                    type="button" 
                    className="btn btn-secondary" 
                    onClick={() => setShowSizeModal(false)}
                  >
                    Cancel
                  </button>
                  <button 
                    type="button" 
                    className="btn btn-primary"
                    onClick={() => handleaddtoCart(currentProduct, selectedSizes[currentProduct._id])}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="tab-content" id="pills-tabContent">
          <div
            className="tab-pane fade show active"
            id="pills-all"
            role="tabpanel"
            aria-labelledby="pills-all-tab"
            tabIndex={0}
          >
            <div className="row g-12">
              {filteredCourses.map((course) => {
                const discountedPrice = calculateDiscountedPrice(course.price);
                const showOriginalPrice = user?.user?.discount > 0 && discountedPrice !== course.price;
                const sizes = course.size ? 
                  (Array.isArray(course.size) ? course.size : [course.size]) : 
                  [];
                const selectedSize = selectedSizes[course._id] || (sizes.length > 0 ? sizes[0] : '');

                return (
                  <div className="col-xxl-2 col-lg-3 col-sm-4 col-6" key={course._id}>
                    <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                      <div
                        onClick={() => handleCourseClick(course._id)}
                        className="product-card__thumb flex-center cursor-pointer"
                      >
                        <img
                          src={course.images?.[0] || "https://via.placeholder.com/150"}
                          alt={course.name}
                        />
                      </div>

                      <div className="product-card__content p-3 rounded-lg shadow-sm bg-white hover:shadow-md transition duration-300">
                        <h6 className="title text-lg fw-semibold mt-3 mb-3 text-dark">
                          <div
                            onClick={() => handleCourseClick(course._id)}
                            className="link text-line-2 cursor-pointer text-success"
                          >
                            {course.name}
                          </div>
                        </h6>

                        <div className="d-flex align-items-center justify-content-between mb-2">
                          <div className="d-flex align-items-center gap-2">
                            <span className="text-success text-md me-2">
                              <i className="ph-fill ph-storefront text-success fs-5" />
                            </span>
                            <span className="text-muted text-sm">
                              {course.fabric || "No fabric specified"}
                            </span>
                          </div>
                          <span className="text-end text-sm text-dark fw-semibold">
                            Size: <span className="text-success">
                              {sizes.length > 1 ? (
                                <select 
                                  className="form-select form-select-sm d-inline-block w-auto"
                                  value={selectedSize}
                                  onChange={(e) => handleSizeSelection(course._id, e.target.value)}
                                >
                                  {sizes.map(size => (
                                    <option key={size} value={size}>{size}</option>
                                  ))}
                                </select>
                              ) : (
                                sizes.join(', ')
                              )}
                            </span>
                          </span>
                        </div>

                        <div className="d-flex align-items-center justify-content-between mb-2">
                          <span className="text-end text-sm text-dark fw-semibold">
                            Color: <span className="text-success">{course.color}</span>
                          </span>
                        </div>

                        <div className="product-card__content mt-3">
                          <div className="product-card__price mb-3 d-flex align-items-center gap-3">
                            {showOriginalPrice && (
                              <span className="text-muted text-decoration-line-through fw-semibold">
                                ₹{course.price.toFixed(2)}
                              </span>
                            )}
                            <span className="text-success fw-bold fs-5">
                              ₹{discountedPrice.toFixed(2)}
                            </span>
                            {user?.user?.discount > 0 && (
                              <span className="badge bg-danger ms-2">
                                {user.user.discount}% OFF
                              </span>
                            )}
                          </div>

                          <span className="text-sm fw-semibold text-success">
                            {course.stock}: 
                            <span className="fw-normal text-muted"> Stock </span>
                          </span>

                          <button
                            onClick={() => handleAddToCartClick(course)}
                            className="product-card__cart btn btn-success mt-3 w-100 rounded-pill d-flex align-items-center justify-content-center gap-2"
                          >
                            Add To Cart <i className="ph ph-shopping-cart" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
              {filteredCourses.length === 0 && (
                <div className="col-12 text-center mt-4">
                  <p>No products found in this category.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecommendedOne;