// import React, { useEffect, useState } from "react";
// import query from "jquery";
// import { Link, NavLink, useLocation } from "react-router-dom";
// import axios from "axios";

// const HeaderOne = () => {
//   const location = useLocation();
//   const { subCategory, parentCategory, categoryData } = location.state || {};

//   const [scroll, setScroll] = useState(false);
//   const [categories, setCategories] = useState([]);
//   const [subCategories, setSubCategories] = useState([]);
//   const [products, setProducts] = useState([]);
//   const [allProducts, setAllProducts] = useState([]);
//   const [selectedCategory, setSelectedCategory] = useState("All");
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [category, setCategory] = useState("");
//   const [filteredSubCategories, setFilteredSubCategories] = useState([]);

//   // Fetch all categories, subcategories, and products
//   const fetchData = async () => {
//     try {
//       setLoading(true);

//       const [categoryRes, subCategoryRes, productRes] = await Promise.all([
//         axios.get("https://backend-20ar.onrender.com/category"),
//         axios.get("https://backend-20ar.onrender.com/subcategory"),
//         axios.get("https://backend-20ar.onrender.com/product/allproduct"),
//       ]);

//       setCategories(categoryRes.data);
//       setSubCategories(subCategoryRes.data);
//       setFilteredSubCategories(subCategoryRes.data);

//       const formattedProducts = productRes.data.map((product) => ({
//         _id: product._id,
//         name: product.name,
//         category: product.category?.name || "Uncategorized",
//         subCategory: product.subCategory?.name || "Uncategorized",
//         img: product.images[0] || "https://via.placeholder.com/150",
//       }));

//       setAllProducts(formattedProducts);
//       setProducts(formattedProducts);
//     } catch (err) {
//       console.error("Error fetching data:", err);
//       setError("Failed to load data.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     if (name === "category") {
//       setCategory(value);
//       if (value) {
//         const filtered = subCategories.filter(
//           (sub) => sub.parentCategory && sub.parentCategory._id === value
//         );
//         setFilteredSubCategories(filtered);
//       } else {
//         setFilteredSubCategories(subCategories);
//       }
//     }
//   };

//   useEffect(() => {
//     window.onscroll = () => {
//       if (window.pageYOffset < 150) {
//         setScroll(false);
//       } else if (window.pageYOffset > 150) {
//         setScroll(true);
//       }
//       return () => (window.onscroll = null);
//     };
//     const selectElement = query(".js-example-basic-single");
//     selectElement.select2();

//     return () => {
//       if (selectElement.data("select2")) {
//         selectElement.select2("destroy");
//       }
//     };
//   }, []);

//   // Set the default language
//   const [selectedLanguage, setSelectedLanguage] = useState("Eng");
//   const handleLanguageChange = (language) => {
//     setSelectedLanguage(language);
//   };

//   // Set the default currency
//   const [selectedCurrency, setSelectedCurrency] = useState("USD");
//   const handleCurrencyChange = (currency) => {
//     setSelectedCurrency(currency);
//   };

//   // Mobile menu support
//   const [menuActive, setMenuActive] = useState(false);
//   const [activeIndex, setActiveIndex] = useState(null);
//   const handleMenuClick = (index) => {
//     setActiveIndex(activeIndex === index ? null : index);
//   };
//   const handleMenuToggle = () => {
//     setMenuActive(!menuActive);
//   };

//   // Search control support
//   const [activeSearch, setActiveSearch] = useState(false);
//   const handleSearchToggle = () => {
//     setActiveSearch(!activeSearch);
//   };

//   // category control support
//   const [activeCategory, setActiveCategory] = useState(false);
//   const handleCategoryToggle = () => {
//     setActiveCategory(!activeCategory);
//   };
//   const [activeIndexCat, setActiveIndexCat] = useState(null);
//   const handleCatClick = (index) => {
//     setActiveIndexCat(activeIndexCat === index ? null : index);
//   };

//   return (
//     <>
//       <div className='overlay' />
//       <div
//         className={`side-overlay ${(menuActive || activeCategory) && "show"}`}
//       />
//       {/* ==================== Search Box Start Here ==================== */}
//       <form action='#' className={`search-box ${activeSearch && "active"}`}>
//         <button
//           onClick={handleSearchToggle}
//           type='button'
//           className='search-box__close position-absolute inset-block-start-0 inset-inline-end-0 m-16 w-48 h-48 border border-gray-100 rounded-circle flex-center text-white hover-text-gray-800 hover-bg-white text-2xl transition-1'
//         >
//           <i className='ph ph-x' />
//         </button>
//         <div className='container'>
//           <div className='position-relative'>
//             <input
//               type='text'
//               className='form-control py-16 px-24 text-xl rounded-pill pe-64'
//               placeholder='Search for a product or brand'
//             />
//             <button
//               type='submit'
//               className='w-48 h-48 bg-main-600 rounded-circle flex-center text-xl text-white position-absolute top-50 translate-middle-y inset-inline-end-0 me-8'
//             >
//               <i className='ph ph-magnifying-glass' />
//             </button>
//           </div>
//         </div>
//       </form>
//       {/* ==================== Search Box End Here ==================== */}
//       {/* ==================== Mobile Menu Start Here ==================== */}
//       <div
//         className={`mobile-menu scroll-sm d-lg-none d-block ${
//           menuActive && "active"
//         }`}
//       >
//         <button
//           onClick={() => {
//             handleMenuToggle();
//             setActiveIndex(null);
//           }}
//           type='button'
//           className='close-button'
//         >
//           <i className='ph ph-x' />{" "}
//         </button>
//         <div className='mobile-menu__inner'>
//           <Link to='/' className='mobile-menu__logo'>
//             <img src='assets/images/logo/logo.png' alt='Logo' />
//           </Link>
//           <div className='mobile-menu__menu'>
//             {/* Nav Menu Start */}
//             <ul className='nav-menu flex-align nav-menu--mobile'>
//               {/* Home Menu */}
//               <li
//                 onClick={() => handleMenuClick(0)}
//                 className={`on-hover-item nav-menu__item  ${
//                   activeIndex === 0 ? "d-block" : ""
//                 }`}
//               >
//                   <li className='on-hover-item nav-menu__item '>
//                     <Link to='/about' className='nav-menu__link'>
//                       About
//                     </Link>

//                   </li>
//                 <Link to='#' className='nav-menu__link'>
//                   Home
//                 </Link>

//               </li>

//               {/* Shop Menu */}
//               <li
//                 onClick={() => handleMenuClick(1)}
//                 className={`on-hover-item nav-menu__item  ${
//                   activeIndex === 1 ? "d-block" : ""
//                 }`}
//               >
//                 <Link to='/shop' className='nav-menu__link'>
//                   Shop
//                 </Link>

//               </li>

//               {/* Pages Menu */}
//               {/* <li
//                 onClick={() => handleMenuClick(2)}
//                 className={`on-hover-item nav-menu__item has-submenu ${
//                   activeIndex === 2 ? "d-block" : ""
//                 }`}
//               >
//                 <span

//               {/* Vendors Menu */}
//               <li
//                 onClick={() => handleMenuClick(3)}
//                 className={`on-hover-item nav-menu__item has-submenu ${
//                   activeIndex === 3 ? "d-block" : ""
//                 }`}
//               >
//                 <span className='badge-notification bg-tertiary-600 text-white text-sm py-2 px-8 rounded-4'>
//                   New
//                 </span>
//                 <Link to='#' className='nav-menu__link'>
//                   Vendors
//                 </Link>
//                 <ul
//                   className={`on-hover-dropdown common-dropdown nav-submenu scroll-sm ${
//                     activeIndex === 3 ? "open" : ""
//                   }`}
//                 >
//                   <li className='common-dropdown__item nav-submenu__item'>
//                     <Link
//                       to='/vendor'
//                       className='common-dropdown__link nav-submenu__link hover-bg-neutral-100'
//                       onClick={() => setActiveIndex(null)}
//                     >
//                       Vendors
//                     </Link>
//                   </li>
//                   <li className='common-dropdown__item nav-submenu__item'>
//                     <Link
//                       to='/vendor-details'
//                       className='common-dropdown__link nav-submenu__link hover-bg-neutral-100'
//                       onClick={() => setActiveIndex(null)}
//                     >
//                       Vendor Details
//                     </Link>
//                   </li>
//                   <li className='common-dropdown__item nav-submenu__item'>
//                     <Link
//                       to='/vendor-two'
//                       className='common-dropdown__link nav-submenu__link hover-bg-neutral-100'
//                       onClick={() => setActiveIndex(null)}
//                     >
//                       Vendors Two
//                     </Link>
//                   </li>
//                   <li className='common-dropdown__item nav-submenu__item'>
//                     <Link
//                       to='/vendor-two-details'
//                       className='common-dropdown__link nav-submenu__link hover-bg-neutral-100'
//                       onClick={() => setActiveIndex(null)}
//                     >
//                       Vendors Two Details
//                     </Link>
//                   </li>
//                 </ul>
//               </li>


//               {/* Contact Us Menu */}
//               <li className='nav-menu__item'>
//                 <Link
//                   to='/contact'
//                   className='nav-menu__link'
//                   onClick={() => setActiveIndex(null)}
//                 >
//                   Contact Us
//                 </Link>
//               </li>
//             </ul>
//             {/* Nav Menu End */}
//           </div>
//         </div>
//       </div>
//       {/* ==================== Mobile Menu End Here ==================== */}
//       {/* ======================= Middle Top Start ========================= */}
//       <div className='header-top bg-main-600 flex-between'>
//         <div className='container container-lg'>
//           <div className='flex-between flex-wrap gap-8'>
//             <ul className='flex-align flex-wrap d-none d-md-flex'>
//               <li className='border-right-item'>
//                 <Link
//                   to='#'
//                   className='text-white text-sm hover-text-decoration-underline'
//                 >
//                   Become A Seller
//                 </Link>
//               </li>
//               <li className='border-right-item'>
//                 <Link
//                   to='#'
//                   className='text-white text-sm hover-text-decoration-underline'
//                 >
//                   About us
//                 </Link>
//               </li>
//               <li className='border-right-item'>
//                 <Link
//                   to='#'
//                   className='text-white text-sm hover-text-decoration-underline'
//                 >
//                   Free Delivery
//                 </Link>
//               </li>
//               <li className='border-right-item'>
//                 <Link
//                   to='#'
//                   className='text-white text-sm hover-text-decoration-underline'
//                 >
//                   Returns Policy
//                 </Link>
//               </li>
//             </ul>
//             <ul className='header-top__right flex-align flex-wrap'>
//               <li className='on-hover-item border-right-item border-right-item-sm-space has-submenu arrow-white'>
//                 <Link to='#' className='text-white text-sm py-8'>
//                   Help Center
//                 </Link>
//                 <ul className='on-hover-dropdown common-dropdown common-dropdown--sm max-h-200 scroll-sm px-0 py-8'>
//                   <li className='nav-submenu__item'>
//                     <Link
//                       to='#'
//                       className='nav-submenu__link hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0'
//                     >
//                       <span className='text-sm d-flex'>
//                         <i className='ph ph-headset' />
//                       </span>
//                       Call Center
//                     </Link>
//                   </li>
//                   <li className='nav-submenu__item'>
//                     <Link
//                       to='#'
//                       className='nav-submenu__link hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0'
//                     >
//                       <span className='text-sm d-flex'>
//                         <i className='ph ph-chat-circle-dots' />
//                       </span>
//                       Live Chat
//                     </Link>
//                   </li>
//                 </ul>
//               </li>
//               <li className='on-hover-item border-right-item border-right-item-sm-space has-submenu arrow-white'>
//                 {/* Display the selected language here */}
//                 <Link to='#' className='selected-text text-white text-sm py-8'>
//                   {selectedLanguage}
//                 </Link>
//                 <ul className='selectable-text-list on-hover-dropdown common-dropdown common-dropdown--sm max-h-200 scroll-sm px-0 py-8'>
//                   <li>
//                     <Link
//                       to='#'
//                       className='hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0'
//                       onClick={() => handleLanguageChange("English")}
//                     >
//                       <img
//                         src='assets/images/thumbs/flag1.png'
//                         alt=''
//                         className='w-16 h-12 rounded-4 border border-gray-100'
//                       />
//                       English
//                     </Link>
//                   </li>
//                   <li>
//                     <Link
//                       to='#'
//                       className='hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0'
//                       onClick={() => handleLanguageChange("Japan")}
//                     >
//                       <img
//                         src='assets/images/thumbs/flag2.png'
//                         alt=''
//                         className='w-16 h-12 rounded-4 border border-gray-100'
//                       />
//                       Japan
//                     </Link>
//                   </li>
//                   <li>
//                     <Link
//                       to='#'
//                       className='hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0'
//                       onClick={() => handleLanguageChange("French")}
//                     >
//                       <img
//                         src='assets/images/thumbs/flag3.png'
//                         alt=''
//                         className='w-16 h-12 rounded-4 border border-gray-100'
//                       />
//                       French
//                     </Link>
//                   </li>
//                   <li>
//                     <Link
//                       to='#'
//                       className='hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0'
//                       onClick={() => handleLanguageChange("Germany")}
//                     >
//                       <img
//                         src='assets/images/thumbs/flag4.png'
//                         alt=''
//                         className='w-16 h-12 rounded-4 border border-gray-100'
//                       />
//                       Germany
//                     </Link>
//                   </li>
//                   <li>
//                     <Link
//                       to='#'
//                       className='hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0'
//                       onClick={() => handleLanguageChange("Bangladesh")}
//                     >
//                       <img
//                         src='assets/images/thumbs/flag6.png'
//                         alt=''
//                         className='w-16 h-12 rounded-4 border border-gray-100'
//                       />
//                       Bangladesh
//                     </Link>
//                   </li>
//                   <li>
//                     <Link
//                       to='#'
//                       className='hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0'
//                       onClick={() => handleLanguageChange("South Korea")}
//                     >
//                       <img
//                         src='assets/images/thumbs/flag5.png'
//                         alt=''
//                         className='w-16 h-12 rounded-4 border border-gray-100'
//                       />
//                       South Korea
//                     </Link>
//                   </li>
//                 </ul>
//               </li>
//               <li className='on-hover-item border-right-item border-right-item-sm-space has-submenu arrow-white'>
//                 {/* Display the selected currency */}
//                 <Link to='#' className='selected-text text-white text-sm py-8'>
//                   {selectedCurrency}
//                 </Link>
//                 <ul className='selectable-text-list on-hover-dropdown common-dropdown common-dropdown--sm max-h-200 scroll-sm px-0 py-8'>
//                   <li>
//                     <Link
//                       to='#'
//                       className='hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0'
//                       onClick={() => handleCurrencyChange("USD")}
//                     >
//                       <img
//                         src='assets/images/thumbs/flag1.png'
//                         alt=''
//                         className='w-16 h-12 rounded-4 border border-gray-100'
//                       />
//                       USD
//                     </Link>
//                   </li>
//                   <li>
//                     <Link
//                       to='#'
//                       className='hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0'
//                       onClick={() => handleCurrencyChange("Yen")}
//                     >
//                       <img
//                         src='assets/images/thumbs/flag2.png'
//                         alt=''
//                         className='w-16 h-12 rounded-4 border border-gray-100'
//                       />
//                       Yen
//                     </Link>
//                   </li>
//                   <li>
//                     <Link
//                       to='#'
//                       className='hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0'
//                       onClick={() => handleCurrencyChange("Franc")}
//                     >
//                       <img
//                         src='assets/images/thumbs/flag3.png'
//                         alt=''
//                         className='w-16 h-12 rounded-4 border border-gray-100'
//                       />
//                       Franc
//                     </Link>
//                   </li>
//                   <li>
//                     <Link
//                       to='#'
//                       className='hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0'
//                       onClick={() => handleCurrencyChange("EURO")}
//                     >
//                       <img
//                         src='assets/images/thumbs/flag4.png'
//                         alt=''
//                         className='w-16 h-12 rounded-4 border border-gray-100'
//                       />
//                       EURO
//                     </Link>
//                   </li>
//                   <li>
//                     <Link
//                       to='#'
//                       className='hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0'
//                       onClick={() => handleCurrencyChange("BDT")}
//                     >
//                       <img
//                         src='assets/images/thumbs/flag6.png'
//                         alt=''
//                         className='w-16 h-12 rounded-4 border border-gray-100'
//                       />
//                       BDT
//                     </Link>
//                   </li>
//                   <li>
//                     <Link
//                       to='#'
//                       className='hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0'
//                       onClick={() => handleCurrencyChange("WON")}
//                     >
//                       <img
//                         src='assets/images/thumbs/flag5.png'
//                         alt=''
//                         className='w-16 h-12 rounded-4 border border-gray-100'
//                       />
//                       WON
//                     </Link>
//                   </li>
//                 </ul>
//               </li>
//               <li className='border-right-item'>
//                 <Link
//                   to='/account'
//                   className='text-white text-sm py-8 flex-align gap-6'
//                 >
//                   <span className='icon text-md d-flex'>
//                     {" "}
//                     <i className='ph ph-user-circle' />{" "}
//                   </span>
//                   <span className='hover-text-decoration-underline'>
//                     My Account
//                   </span>
//                 </Link>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>
//       {/* ======================= Middle Top End ========================= */}
//       {/* ======================= Middle Header Start ========================= */}
//       <header className='header-middle bg-color-one border-bottom border-gray-100'>
//         <div className='container container-lg'>
//           <nav className='header-inner flex-between'>
//             {/* Logo Start */}
//             <div className='logo'>
//               <Link to='/' className='link'>
//                 <img src='assets/images/logo/logo.png' alt='Logo' />
//               </Link>
//             </div>
//             {/* Logo End  */}
//             {/* form location Start */}
//             <form
//               action='#'
//               className='flex-align flex-wrap form-location-wrapper'
//             >
//               <div className='search-category d-flex h-48 select-border-end-0 radius-end-0 search-form d-sm-flex d-none'>
//                 <select
//                   id="category"
//                   name="category"
//                   value={category}
//                   onChange={handleChange}
//                   className="js-example-basic-single border border-gray-200 border-end-0"
//                 >
//                   <option value="">All Categories</option>
//                   {categories.map((cat) => (
//                     <option key={cat._id} value={cat._id}>
//                       {cat.name}
//                     </option>
//                   ))}
//                 </select>

//                 <div className='search-form__wrapper position-relative'>
//                   <input
//                     type='text'
//                     className='search-form__input common-input py-13 ps-16 pe-18 rounded-end-pill pe-44'
//                     placeholder='Search for a product or brand'
//                   />
//                   <button
//                     type='submit'
//                     className='w-32 h-32 bg-main-600 rounded-circle flex-center text-xl text-white position-absolute top-50 translate-middle-y inset-inline-end-0 me-8'
//                   >
//                     <i className='ph ph-magnifying-glass' />
//                   </button>
//                 </div>
//               </div>
//               <div className='location-box bg-white flex-align gap-8 py-6 px-16 rounded-pill border border-gray-100'>
//                 <span className='text-gray-900 text-xl d-xs-flex d-none'>
//                   <i className='ph ph-map-pin' />
//                 </span>
//                 <div className='line-height-1'>
//                   <span className='text-gray-600 text-xs'>Your Location</span>
//                   <div className='line-height-1'>
//                     <select
//                       id="subCategory"
//                       name="subCategory"
//                       value={subCategory}
//                       onChange={handleChange}
//                       className="js-example-basic-single border border-gray-200 border-end-0"
//                       disabled={!category}
//                     >
//                       <option value="">All Sub-Categories</option>
//                       {filteredSubCategories.map((subCat) => (
//                         <option key={subCat._id} value={subCat._id}>
//                           {subCat.name}
//                         </option>
//                       ))}
//                     </select>
//                   </div>
//                 </div>
//               </div>
//             </form>
//             {/* form location start */}
//             {/* Header Middle Right start */}
//             <div className='header-right flex-align d-lg-block d-none'>
//               <div className='flex-align flex-wrap gap-12'>
//                 <button
//                   type='button'
//                   className='search-icon flex-align d-lg-none d-flex gap-4 item-hover'
//                 >
//                   <span className='text-2xl text-gray-700 d-flex position-relative item-hover__text'>
//                     <i className='ph ph-magnifying-glass' />
//                   </span>
//                 </button>
//                  <li className='common-dropdown__item nav-submenu__item'>
//                     <Link
//                       to='/login'
//                       className='common-dropdown__link nav-submenu__link hover-bg-neutral-100'
//                       onClick={() => setActiveIndex(null)}
//                     >
//                       {" "}
//                       Login
//                     </Link>
//                   </li>
//                 <Link to='/wishlist' className='flex-align gap-4 item-hover'>
//                   <span className='text-2xl text-gray-700 d-flex position-relative me-6 mt-6 item-hover__text'>
//                     <i className='ph ph-heart' />
//                     <span className='w-16 h-16 flex-center rounded-circle bg-main-600 text-white text-xs position-absolute top-n6 end-n4'>
//                       2
//                     </span>
//                   </span>
//                   <span className='text-md text-gray-500 item-hover__text d-none d-lg-flex'>
//                     Wishlist
//                   </span>
//                 </Link>
//                 <Link to='/cart' className='flex-align gap-4 item-hover'>
//                   <span className='text-2xl text-gray-700 d-flex position-relative me-6 mt-6 item-hover__text'>
//                     <i className='ph ph-shopping-cart-simple' />
//                     <span className='w-16 h-16 flex-center rounded-circle bg-main-600 text-white text-xs position-absolute top-n6 end-n4'>
//                       2
//                     </span>
//                   </span>
//                   <span className='text-md text-gray-500 item-hover__text d-none d-lg-flex'>
//                     Cart
//                   </span>
//                 </Link>
//               </div>
//             </div>
//             {/* Header Middle Right End  */}
//           </nav>
//         </div>
//       </header>
//       {/* ======================= Middle Header End ========================= */}
//       {/* ==================== Header Start Here ==================== */}
//       <header
//         className={`header bg-white border-bottom border-gray-100 ${
//           scroll && "fixed-header"
//         }`}
//       >
//         <div className='container container-lg'>
//           <nav className='header-inner d-flex justify-content-between gap-8'>
//             <div className='flex-align menu-category-wrapper'>
//               {/* Category Dropdown Start */}
//               <div className='category on-hover-item'>
//                 <button
//                   onClick={handleCategoryToggle}
//                   type='button'
//                   className='category__button flex-align gap-8 fw-medium p-16 border-end border-start border-gray-100 text-heading'
//                 >
//                   <span className='icon text-2xl d-xs-flex d-none'>
//                     <i className='ph ph-dots-nine' />
//                   </span>
//                   <span className='d-sm-flex d-none'>All</span> Categories
//                   <span className='arrow-icon text-xl d-flex'>
//                     <i className='ph ph-caret-down' />
//                   </span>
//                 </button>
//                 <div
//                   className={`responsive-dropdown cat on-hover-dropdown common-dropdown nav-submenu p-0 submenus-submenu-wrapper ${
//                     activeCategory && "active"
//                   }`}
//                 >
//                   <button
//                     onClick={() => {
//                       handleCategoryToggle();
//                       setActiveIndexCat(null);
//                     }}
//                     type='button'
//                     className='close-responsive-dropdown rounded-circle text-xl position-absolute inset-inline-end-0 inset-block-start-0 mt-4 me-8 d-lg-none d-flex'
//                   >
//                     {" "}
//                     <i className='ph ph-x' />{" "}
//                   </button>
//                   {/* Logo Start */}
//                   <div className='logo px-16 d-lg-none d-block'>
//                     <Link to='/' className='link'>
//                       <img src='assets/images/logo/logo.png' alt='Logo' />
//                     </Link>
//                   </div>
//                   {/* Logo End */}
//                   <ul className='scroll-sm p-0 py-8 w-300 max-h-400 overflow-y-auto'>
//                     {categories.map((category, index) => (
//                       <li
//                         key={category._id}
//                         onClick={() => handleCatClick(index)}
//                         className={`has-submenus-submenu ${
//                           activeIndexCat === index ? "active" : ""
//                         }`}
//                       >
//                         <Link
//                           onClick={() => setActiveIndexCat(null)}
//                           to='#'
//                           className='text-gray-500 text-15 py-12 px-16 flex-align gap-8 rounded-0'
//                         >
//                           <span className='text-xl d-flex'>
//                             <i className='ph ph-carrot' />
//                           </span>
//                           <span>{category.name}</span>
//                           <span className='icon text-md d-flex ms-auto'>
//                             <i className='ph ph-caret-right' />
//                           </span>
//                         </Link>
//                         <div
//                           className={`submenus-submenu py-16 ${
//                             activeIndexCat === index ? "open" : ""
//                           }`}
//                         >
//                           <h6 className='text-lg px-16 submenus-submenu__title'>
//                             {category.name}
//                           </h6>
//                           <ul className='submenus-submenu__list max-h-300 overflow-y-auto scroll-sm'>
//                             {subCategories
//                               .filter(sub => sub?.parentCategory && sub.parentCategory._id === category._id)
//                               .map(subCategory => (
//                                 <li key={subCategory._id}>
//                                   <Link to={`/shop?category=${category._id}&subcategory=${subCategory._id}`}>
//                                     {subCategory.name}
//                                   </Link>
//                                 </li>
//                               ))}
//                           </ul>
//                         </div>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               </div>
//               {/* Category Dropdown End  */}
//               {/* Menu Start  */}
//               <div className='header-menu d-lg-block d-none'>
//                 {/* Nav Menu Start */}
//                 <ul className='nav-menu flex-align '>
//                   <li className='on-hover-item nav-menu__item '>
//                     <Link to='/' className='nav-menu__link'>
//                       Home
//                     </Link>

//                   </li>
//                    <li className='on-hover-item nav-menu__item '>
//                     <Link to='/about' className='nav-menu__link'>
//                       About
//                     </Link>

//                   </li>
//                   <li className='on-hover-item nav-menu__item '>
//                     <Link to='/shop' className='nav-menu__link'>
//                       Shop
//                     </Link>

//                   </li>
//                                     <li className='on-hover-item nav-menu__item has-submenu'>
//                     <span className='badge-notification bg-tertiary-600 text-white text-sm py-2 px-8 rounded-4'>
//                       New
//                     </span>
//                     <Link to='#' className='nav-menu__link'>
//                       Vendors
//                     </Link>
//                     <ul className='on-hover-dropdown common-dropdown nav-submenu scroll-sm'>
//                       <li className='common-dropdown__item nav-submenu__item'>
//                         <NavLink
//                           to='/vendor'
//                           className={(navData) =>
//                             navData.isActive
//                               ? "common-dropdown__link nav-submenu__link hover-bg-neutral-100 activePage"
//                               : "common-dropdown__link nav-submenu__link hover-bg-neutral-100"
//                           }
//                         >
//                           Vendors
//                         </NavLink>
//                       </li>
//                       <li className='common-dropdown__item nav-submenu__item'>
//                         <NavLink
//                           to='/vendor-details'
//                           className={(navData) =>
//                             navData.isActive
//                               ? "common-dropdown__link nav-submenu__link hover-bg-neutral-100 activePage"
//                               : "common-dropdown__link nav-submenu__link hover-bg-neutral-100"
//                           }
//                         >
//                           Vendor Details
//                         </NavLink>
//                       </li>
//                       <li className='common-dropdown__item nav-submenu__item'>
//                         <NavLink
//                           to='/vendor-two'
//                           className={(navData) =>
//                             navData.isActive
//                               ? "common-dropdown__link nav-submenu__link hover-bg-neutral-100 activePage"
//                               : "common-dropdown__link nav-submenu__link hover-bg-neutral-100"
//                           }
//                         >
//                           Vendors Two
//                         </NavLink>
//                       </li>

//                       <li className='common-dropdown__item nav-submenu__item'>
//                         <NavLink
//                           to='/vendor-two-details'
//                           className={(navData) =>
//                             navData.isActive
//                               ? "common-dropdown__link nav-submenu__link hover-bg-neutral-100 activePage"
//                               : "common-dropdown__link nav-submenu__link hover-bg-neutral-100"
//                           }
//                         >
//                           Vendors Two Details
//                         </NavLink>
//                       </li>
//                     </ul>
//                   </li>
//                                     <li className='nav-menu__item'>
//                     <NavLink
//                       to='/contact'
//                       className={(navData) =>
//                         navData.isActive
//                           ? "nav-menu__link activePage"
//                           : "nav-menu__link"
//                       }
//                     >
//                       Contact Us
//                     </NavLink>
//                   </li>
//                 </ul>
//                 {/* Nav Menu End */}
//               </div>
//               {/* Menu End  */}
//             </div>
//             {/* Header Right start */}
//             <div className='header-right flex-align'>
//               <Link
//                 to='/tel:01234567890'
//                 className='bg-main-600 text-white p-12 h-100 hover-bg-main-800 flex-align gap-8 text-lg d-lg-flex d-none'
//               >
//                 <div className='d-flex text-32'>
//                   <i className='ph ph-phone-call' />
//                 </div>
//                 01- 234 567 890
//               </Link>
//               <div className='me-16 d-lg-none d-block'>
//                 <div className='flex-align flex-wrap gap-12'>
//                   <button
//                     onClick={handleSearchToggle}
//                     type='button'
//                     className='search-icon flex-align d-lg-none d-flex gap-4 item-hover'
//                   >
//                     <span className='text-2xl text-gray-700 d-flex position-relative item-hover__text'>
//                       <i className='ph ph-magnifying-glass' />
//                     </span>
//                   </button>
//                   <Link to='/wishlist' className='flex-align gap-4 item-hover'>
//                     <span className='text-2xl text-gray-700 d-flex position-relative me-6 mt-6 item-hover__text'>
//                       <i className='ph ph-heart' />
//                       <span className='w-16 h-16 flex-center rounded-circle bg-main-600 text-white text-xs position-absolute top-n6 end-n4'>
//                         2
//                       </span>
//                     </span>
//                     <span className='text-md text-gray-500 item-hover__text d-none d-lg-flex'>
//                       Wishlist
//                     </span>
//                   </Link>
//                   <Link to='/cart' className='flex-align gap-4 item-hover'>
//                     <span className='text-2xl text-gray-700 d-flex position-relative me-6 mt-6 item-hover__text'>
//                       <i className='ph ph-shopping-cart-simple' />
//                       <span className='w-16 h-16 flex-center rounded-circle bg-main-600 text-white text-xs position-absolute top-n6 end-n4'>
//                         2
//                       </span>
//                     </span>
//                     <span className='text-md text-gray-500 item-hover__text d-none d-lg-flex'>
//                       Cart
//                     </span>
//                   </Link>
//                 </div>
//               </div>
//               <button
//                 onClick={handleMenuToggle}
//                 type='button'
//                 className='toggle-mobileMenu d-lg-none ms-3n text-gray-800 text-4xl d-flex'
//               >
//                 {" "}
//                 <i className='ph ph-list' />{" "}
//               </button>
//             </div>
//             {/* Header Right End  */}
//           </nav>
//         </div>
//       </header>
//       {/* ==================== Header End Here ==================== */}
//     </>
//   );
// };

// export default HeaderOne;



// import React, { useEffect, useState } from "react";
// import $ from "jquery"; // Changed 'query' to '$' for standard jQuery usage
// import { Link, NavLink, useLocation, useParams } from "react-router-dom";
// import axios from "axios";
// import { useSelector } from "react-redux";



// const HeaderOne = () => {
//   const location = useLocation();
//   const { categoryId, subCategoryId } = useParams(); // Added useParams to capture category and subcategory IDs from URL
//   const { subCategory, parentCategory, categoryData } = location.state || {};
//   const Product = useSelector((state) => state.mycart.cart);
//   const productLength = Product.length;
//   const [scroll, setScroll] = useState(false);
//   const [categories, setCategories] = useState([]);
//   const [subCategories, setSubCategories] = useState([]);
//   const [products, setProducts] = useState([]);
//   const [allProducts, setAllProducts] = useState([]);
//   const [selectedCategory, setSelectedCategory] = useState("All");
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [category, setCategory] = useState(categoryId || ""); // Initialize with categoryId from URL
//   const [filteredSubCategories, setFilteredSubCategories] = useState([]);

//   // Fetch all categories, subcategories, and products
//   const fetchData = async () => {
//     try {
//       setLoading(true);

//       const [categoryRes, subCategoryRes, productRes] = await Promise.all([
//         axios.get("https://backend-20ar.onrender.com/category"),
//         axios.get("https://backend-20ar.onrender.com//subcategory"),
//         axios.get("https://backend-20ar.onrender.com/product"),
//       ]);

//       setCategories(categoryRes.data);
//       setSubCategories(subCategoryRes.data);

//       // Filter subcategories based on selected category from URL
//       const filtered = categoryId
//         ? subCategoryRes.data.filter(
//             (sub) => sub.parentCategory && sub.parentCategory._id === categoryId
//           )
//         : subCategoryRes.data;
//       setFilteredSubCategories(filtered);

//       const formattedProducts = productRes.data.map((product) => ({
//         _id: product._id,
//         name: product.name,
//         category: product.category?.name || "Uncategorized",
//         subCategory: product.subCategory?.name || "Uncategorized",
//         img: product.images[0] || "https://via.placeholder.com/150",
//       }));

//       setAllProducts(formattedProducts);
//       setProducts(formattedProducts);
//     } catch (err) {
//       console.error("Error fetching data:", err);
//       setError("Failed to load data.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, [categoryId]); // Re-fetch when categoryId changes

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     if (name === "category") {
//       setCategory(value);
//       if (value) {
//         const filtered = subCategories.filter(
//           (sub) => sub.parentCategory && sub.parentCategory._id === value
//         );
//         setFilteredSubCategories(filtered);
//       } else {
//         setFilteredSubCategories(subCategories);
//       }
//     }
//   };

//   useEffect(() => {
//     window.onscroll = () => {
//       if (window.pageYOffset < 150) {
//         setScroll(false);
//       } else if (window.pageYOffset > 150) {
//         setScroll(true);
//       }
//       return () => (window.onscroll = null);
//     };
//     const selectElement = $(".js-example-basic-single");
//     selectElement.select2();

//     return () => {
//       if (selectElement.data("select2")) {
//         selectElement.select2("destroy");
//       }
//     };
//   }, []);

//   // Set the default language
//   const [selectedLanguage, setSelectedLanguage] = useState("Eng");
//   const handleLanguageChange = (language) => {
//     setSelectedLanguage(language);
//   };

//   // Set the default currency
//   const [selectedCurrency, setSelectedCurrency] = useState("USD");
//   const handleCurrencyChange = (currency) => {
//     setSelectedCurrency(currency);
//   };

//   // Mobile menu support
//   const [menuActive, setMenuActive] = useState(false);
//   const [activeIndex, setActiveIndex] = useState(null);
//   const handleMenuClick = (index) => {
//     setActiveIndex(activeIndex === index ? null : index);
//   };
//   const handleMenuToggle = () => {
//     setMenuActive(!menuActive);
//   };

//   // Search control support
//   const [activeSearch, setActiveSearch] = useState(false);
//   const handleSearchToggle = () => {
//     setActiveSearch(!activeSearch);
//   };

//   // Category control support
//   const [activeCategory, setActiveCategory] = useState(false);
//   const handleCategoryToggle = () => {
//     setActiveCategory(!activeCategory);
//   };
//   const [activeIndexCat, setActiveIndexCat] = useState(null);
//   const handleCatClick = (index) => {
//     setActiveIndexCat(activeIndexCat === index ? null : index);
//   };

//   return (
//     <>
//       <div className='overlay' />
//       <div
//         className={`side-overlay ${(menuActive || activeCategory) && "show"}`}
//       />
//       {/* ==================== Search Box Start Here ==================== */}
//       <form action='#' className={`search-box ${activeSearch && "active"}`}>
//         <button
//           onClick={handleSearchToggle}
//           type='button'
//           className='search-box__close position-absolute inset-block-start-0 inset-inline-end-0 m-16 w-48 h-48 border border-gray-100 rounded-circle flex-center text-white hover-text-gray-800 hover-bg-white text-2xl transition-1'
//         >
//           <i className='ph ph-x' />
//         </button>
//         <div className='container'>
//           <div className='position-relative'>
//             <input
//               type='text'
//               className='form-control py-16 px-24 text-xl rounded-pill pe-64'
//               placeholder='Search for a product or brand'
//             />
//             <button
//               type='submit'
//               className='w-48 h-48 bg-main-600 rounded-circle flex-center text-xl text-white position-absolute top-50 translate-middle-y inset-inline-end-0 me-8'
//             >
//               <i className='ph ph-magnifying-glass' />
//             </button>
//           </div>
//         </div>
//       </form>
//       {/* ==================== Search Box End Here ==================== */}
//       {/* ==================== Mobile Menu Start Here ==================== */}
//       <div
//         className={`mobile-menu scroll-sm d-lg-none d-block ${
//           menuActive && "active"
//         }`}
//       >
//         <button
//           onClick={() => {
//             handleMenuToggle();
//             setActiveIndex(null);
//           }}
//           type='button'
//           className='close-button'
//         >
//           <i className='ph ph-x' />{" "}
//         </button>
//         <div className='mobile-menu__inner'>
//           <Link to='/' className='mobile-menu__logo'>
//             <img src='assets/images/logo/logo.png' alt='Logo' />
//           </Link>
//           <div className='mobile-menu__menu'>
//             {/* Nav Menu Start */}
//             <ul className='nav-menu flex-align nav-menu--mobile'>
//               {/* Home Menu */}
//               <li
//                 onClick={() => handleMenuClick(0)}
//                 className={`on-hover-item nav-menu__item ${
//                   activeIndex === 0 ? "d-block" : ""
//                 }`}
//               >
//                 <Link to='#' className='nav-menu__link'>
//                   Home
//                 </Link>
//               </li>
//               <li className='on-hover-item nav-menu__item'>
//                 <Link to='/about' className='nav-menu__link'>
//                   About
//                 </Link>
//               </li>
//               {/* Shop Menu */}
//               <li
//                 onClick={() => handleMenuClick(1)}
//                 className={`on-hover-item nav-menu__item ${
//                   activeIndex === 1 ? "d-block" : ""
//                 }`}
//               >
//                 <Link to='/shop' className='nav-menu__link'>
//                   Shop
//                 </Link>
//               </li>
//               {/* Vendors Menu */}
//               <li
//                 onClick={() => handleMenuClick(3)}
//                 className={`on-hover-item nav-menu__item has-submenu ${
//                   activeIndex === 3 ? "d-block" : ""
//                 }`}
//               >
//                 <span className='badge-notification bg-tertiary-600 text-white text-sm py-2 px-8 rounded-4'>
//                   New
//                 </span>
//                 <Link to='#' className='nav-menu__link'>
//                   Vendors
//                 </Link>
//                 <ul
//                   className={`on-hover-dropdown common-dropdown nav-submenu scroll-sm ${
//                     activeIndex === 3 ? "open" : ""
//                   }`}
//                 >
//                   <li className='common-dropdown__item nav-submenu__item'>
//                     <Link
//                       to='/vendor'
//                       className='common-dropdown__link nav-submenu__link hover-bg-neutral-100'
//                       onClick={() => setActiveIndex(null)}
//                     >
//                       Vendors
//                     </Link>
//                   </li>
//                   <li className='common-dropdown__item nav-submenu__item'>
//                     <Link
//                       to='/vendor-details'
//                       className='common-dropdown__link nav-submenu__link hover-bg-neutral-100'
//                       onClick={() => setActiveIndex(null)}
//                     >
//                       Vendor Details
//                     </Link>
//                   </li>
//                   <li className='common-dropdown__item nav-submenu__item'>
//                     <Link
//                       to='/vendor-two'
//                       className='common-dropdown__link nav-submenu__link hover-bg-neutral-100'
//                       onClick={() => setActiveIndex(null)}
//                     >
//                       Vendors Two
//                     </Link>
//                   </li>
//                   <li className='common-dropdown__item nav-submenu__item'>
//                     <Link
//                       to='/vendor-two-details'
//                       className='common-dropdown__link nav-submenu__link hover-bg-neutral-100'
//                       onClick={() => setActiveIndex(null)}
//                     >
//                       Vendors Two Details
//                     </Link>
//                   </li>
//                 </ul>
//               </li>
//               {/* Contact Us Menu */}
//               <li className='nav-menu__item'>
//                 <Link
//                   to='/contact'
//                   className='nav-menu__link'
//                   onClick={() => setActiveIndex(null)}
//                 >
//                   Contact Us
//                 </Link>
//               </li>
//             </ul>
//             {/* Nav Menu End */}
//           </div>
//         </div>
//       </div>
//       {/* ==================== Mobile Menu End Here ==================== */}
//       {/* ======================= Middle Top Start ========================= */}
//       <div className='header-top bg-main-600 flex-between'>
//         <div className='container container-lg'>
//           <div className='flex-between flex-wrap gap-8'>
//             <ul className='flex-align flex-wrap d-none d-md-flex'>
//               <li className='border-right-item'>
//                 <Link
//                   to='#'
//                   className='text-white text-sm hover-text-decoration-underline'
//                 >
//                   Become A Seller
//                 </Link>
//               </li>
//               <li className='border-right-item'>
//                 <Link
//                   to='#'
//                   className='text-white text-sm hover-text-decoration-underline'
//                 >
//                   About us
//                 </Link>
//               </li>
//               <li className='border-right-item'>
//                 <Link
//                   to='#'
//                   className='text-white text-sm hover-text-decoration-underline'
//                 >
//                   Free Delivery
//                 </Link>
//               </li>
//               <li className='border-right-item'>
//                 <Link
//                   to='#'
//                   className='text-white text-sm hover-text-decoration-underline'
//                 >
//                   Returns Policy
//                 </Link>
//               </li>
//             </ul>
//             <ul className='header-top__right flex-align flex-wrap'>
//               <li className='on-hover-item border-right-item border-right-item-sm-space has-submenu arrow-white'>
//                 <Link to='#' className='text-white text-sm py-8'>
//                   Help Center
//                 </Link>
//                 <ul className='on-hover-dropdown common-dropdown common-dropdown--sm max-h-200 scroll-sm px-0 py-8'>
//                   <li className='nav-submenu__item'>
//                     <Link
//                       to='#'
//                       className='nav-submenu__link hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0'
//                     >
//                       <span className='text-sm d-flex'>
//                         <i className='ph ph-headset' />
//                       </span>
//                       Call Center
//                     </Link>
//                   </li>
//                   <li className='nav-submenu__item'>
//                     <Link
//                       to='#'
//                       className='nav-submenu__link hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0'
//                     >
//                       <span className='text-sm d-flex'>
//                         <i className='ph ph-chat-circle-dots' />
//                       </span>
//                       Live Chat
//                     </Link>
//                   </li>
//                 </ul>
//               </li>
//               <li className='on-hover-item border-right-item border-right-item-sm-space has-submenu arrow-white'>
//                 <Link to='#' className='selected-text text-white text-sm py-8'>
//                   {selectedLanguage}
//                 </Link>
//                 <ul className='selectable-text-list on-hover-dropdown common-dropdown common-dropdown--sm max-h-200 scroll-sm px-0 py-8'>
//                   <li>
//                     <Link
//                       to='#'
//                       className='hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0'
//                       onClick={() => handleLanguageChange("English")}
//                     >
//                       <img
//                         src='assets/images/thumbs/flag1.png'
//                         alt=''
//                         className='w-16 h-12 rounded-4 border border-gray-100'
//                       />
//                       English
//                     </Link>
//                   </li>
//                   <li>
//                     <Link
//                       to='#'
//                       className='hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0'
//                       onClick={() => handleLanguageChange("Japan")}
//                     >
//                       <img
//                         src='assets/images/thumbs/flag2.png'
//                         alt=''
//                         className='w-16 h-12 rounded-4 border border-gray-100'
//                       />
//                       Japan
//                     </Link>
//                   </li>
//                   <li>
//                     <Link
//                       to='#'
//                       className='hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0'
//                       onClick={() => handleLanguageChange("French")}
//                     >
//                       <img
//                         src='assets/images/thumbs/flag3.png'
//                         alt=''
//                         className='w-16 h-12 rounded-4 border border-gray-100'
//                       />
//                       French
//                     </Link>
//                   </li>
//                   <li>
//                     <Link
//                       to='#'
//                       className='hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0'
//                       onClick={() => handleLanguageChange("Germany")}
//                     >
//                       <img
//                         src='assets/images/thumbs/flag4.png'
//                         alt=''
//                         className='w-16 h-12 rounded-4 border border-gray-100'
//                       />
//                       Germany
//                     </Link>
//                   </li>
//                   <li>
//                     <Link
//                       to='#'
//                       className='hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0'
//                       onClick={() => handleLanguageChange("Bangladesh")}
//                     >
//                       <img
//                         src='assets/images/thumbs/flag6.png'
//                         alt=''
//                         className='w-16 h-12 rounded-4 border border-gray-100'
//                       />
//                       Bangladesh
//                     </Link>
//                   </li>
//                   <li>
//                     <Link
//                       to='#'
//                       className='hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0'
//                       onClick={() => handleLanguageChange("South Korea")}
//                     >
//                       <img
//                         src='assets/images/thumbs/flag5.png'
//                         alt=''
//                         className='w-16 h-12 rounded-4 border border-gray-100'
//                       />
//                       South Korea
//                     </Link>
//                   </li>
//                 </ul>
//               </li>
//               <li className='on-hover-item border-right-item border-right-item-sm-space has-submenu arrow-white'>
//                 <Link to='#' className='selected-text text-white text-sm py-8'>
//                   {selectedCurrency}
//                 </Link>
//                 <ul className='selectable-text-list on-hover-dropdown common-dropdown common-dropdown--sm max-h-200 scroll-sm px-0 py-8'>
//                   <li>
//                     <Link
//                       to='#'
//                       className='hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0'
//                       onClick={() => handleCurrencyChange("USD")}
//                     >
//                       <img
//                         src='assets/images/thumbs/flag1.png'
//                         alt=''
//                         className='w-16 h-12 rounded-4 border border-gray-100'
//                       />
//                       USD
//                     </Link>
//                   </li>
//                   <li>
//                     <Link
//                       to='#'
//                       className='hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0'
//                       onClick={() => handleCurrencyChange("Yen")}
//                     >
//                       <img
//                         src='assets/images/thumbs/flag2.png'
//                         alt=''
//                         className='w-16 h-12 rounded-4 border border-gray-100'
//                       />
//                       Yen
//                     </Link>
//                   </li>
//                   <li>
//                     <Link
//                       to='#'
//                       className='hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0'
//                       onClick={() => handleCurrencyChange("Franc")}
//                     >
//                       <img
//                         src='assets/images/thumbs/flag3.png'
//                         alt=''
//                         className='w-16 h-12 rounded-4 border border-gray-100'
//                       />
//                       Franc
//                     </Link>
//                   </li>
//                   <li>
//                     <Link
//                       to='#'
//                       className='hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0'
//                       onClick={() => handleCurrencyChange("EURO")}
//                     >
//                       <img
//                         src='assets/images/thumbs/flag4.png'
//                         alt=''
//                         className='w-16 h-12 rounded-4 border border-gray-100'
//                       />
//                       EURO
//                     </Link>
//                   </li>
//                   <li>
//                     <Link
//                       to='#'
//                       className='hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0'
//                       onClick={() => handleCurrencyChange("BDT")}
//                     >
//                       <img
//                         src='assets/images/thumbs/flag6.png'
//                         alt=''
//                         className='w-16 h-12 rounded-4 border border-gray-100'
//                       />
//                       BDT
//                     </Link>
//                   </li>
//                   <li>
//                     <Link
//                       to='#'
//                       className='hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0'
//                       onClick={() => handleCurrencyChange("WON")}
//                     >
//                       <img
//                         src='assets/images/thumbs/flag5.png'
//                         alt=''
//                         className='w-16 h-12 rounded-4 border border-gray-100'
//                       />
//                       WON
//                     </Link>
//                   </li>
//                 </ul>
//               </li>
//               <li className='border-right-item'>
//                 <Link
//                   to='/account'
//                   className='text-white text-sm py-8 flex-align gap-6'
//                 >
//                   <span className='icon text-md d-flex'>
//                     {" "}
//                     <i className='ph ph-user-circle' />{" "}
//                   </span>
//                   <span className='hover-text-decoration-underline'>
//                     My Account
//                   </span>
//                 </Link>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>
//       {/* ======================= Middle Top End ========================= */}
//       {/* ======================= Middle Header Start ========================= */}
//       <header className='header-middle bg-color-one border-bottom border-gray-100'>
//         <div className='container container-lg'>
//           <nav className='header-inner flex-between'>
//             {/* Logo Start */}
//             <div className='logo'>
//               <Link to='/' className='link'>
//                 <img src='assets/images/logo/logo.png' alt='Logo' />
//               </Link>
//             </div>
//             {/* Logo End  */}
//             {/* form location Start */}
//             <form
//               action='#'
//               className='flex-align flex-wrap form-location-wrapper'
//             >
//               <div className='search-category d-flex h-48 select-border-end-0 radius-end-0 search-form d-sm-flex d-none'>
//                 <select
//                   id="category"
//                   name="category"
//                   value={category}
//                   onChange={handleChange}
//                   className="js-example-basic-single border border-gray-200 border-end-0"
//                 >
//                   <option value="">All Categories</option>
//                   {categories.map((cat) => (
//                     <option key={cat._id} value={cat._id}>
//                       {cat.name}
//                     </option>
//                   ))}
//                 </select>

//                 <div className='search-form__wrapper position-relative'>
//                   <input
//                     type='text'
//                     className='search-form__input common-input py-13 ps-16 pe-18 rounded-end-pill pe-44'
//                     placeholder='Search for a product or brand'
//                   />
//                   <button
//                     type='submit'
//                     className='w-32 h-32 bg-main-600 rounded-circle flex-center text-xl text-white position-absolute top-50 translate-middle-y inset-inline-end-0 me-8'
//                   >
//                     <i className='ph ph-magnifying-glass' />
//                   </button>
//                 </div>
//               </div>
//               <div className='location-box bg-white flex-align gap-8 py-6 px-16 rounded-pill border border-gray-100'>
//                 <span className='text-gray-900 text-xl d-xs-flex d-none'>
//                   <i className='ph ph-map-pin' />
//                 </span>
//                 <div className='line-height-1'>
//                   <span className='text-gray-600 text-xs'>Your Location</span>
//                   <div className='line-height-1'>
//                     <select
//                       id="subCategory"
//                       name="subCategory"
//                       value={subCategoryId || ""} // Initialize with subCategoryId from URL
//                       onChange={handleChange}
//                       className="js-example-basic-single border border-gray-200 border-end-0"
//                       disabled={!category}
//                     >
//                       <option value="">All Sub-Categories</option>
//                       {filteredSubCategories.map((subCat) => (
//                         <option key={subCat._id} value={subCat._id}>
//                           {subCat.name}
//                         </option>
//                       ))}
//                     </select>
//                   </div>
//                 </div>
//               </div>
//             </form>
//             {/* form location End */}
//             {/* Header Middle Right Start */}
//             <div className='header-right flex-align d-lg-block d-none'>
//               <div className='flex-align flex-wrap gap-12'>
//                 <button
//                   type='button'
//                   className='search-icon flex-align d-lg-none d-flex gap-4 item-hover'
//                 >
//                   <span className='text-2xl text-gray-700 d-flex position-relative item-hover__text'>
//                     <i className='ph ph-magnifying-glass' />
//                   </span>
//                 </button>
//                 <Link to='/login' className='flex-align gap-4 item-hover'>
//                   <span className='text-md text-gray-500 item-hover__text d-none d-lg-flex'>
//                     Login
//                   </span>
//                 </Link>
//                 <Link to='/wishlist' className='flex-align gap-4 item-hover'>
//                   <span className='text-2xl text-gray-700 d-flex position-relative me-6 mt-6 item-hover__text'>
//                     <i className='ph ph-heart' />
//                     <span className='w-16 h-16 flex-center rounded-circle bg-main-600 text-white text-xs position-absolute top-n6 end-n4'>
//                       2
//                     </span>
//                   </span>
//                   <span className='text-md text-gray-500 item-hover__text d-none d-lg-flex'>
//                     Wishlist
//                   </span>
//                 </Link>
//                 <Link to='/cart' className='flex-align gap-4 item-hover'>
//                   <span className='text-2xl text-gray-700 d-flex position-relative me-6 mt-6 item-hover__text'>
//                     <i className='ph ph-shopping-cart-simple' />
//                   <span className='w-16 h-16 flex-center rounded-circle bg-main-600 text-white text-xs position-absolute top-n6 end-n4'>
//     {productLength > 0 && (
//         <span>{productLength}</span>
//     )}
// </span>
//                   </span>
//                   <span className='text-md text-gray-500 item-hover__text d-none d-lg-flex'>
//                     Cart
//                   </span>
//                 </Link>
//               </div>
//             </div>
//             {/* Header Middle Right End  */}
//           </nav>
//         </div>
//       </header>
//       {/* ======================= Middle Header End ========================= */}
//       {/* ==================== Header Start Here ==================== */}
//       <header
//         className={`header bg-white border-bottom border-gray-100 ${
//           scroll && "fixed-header"
//         }`}
//       >
//         <div className='container container-lg'>
//           <nav className='header-inner d-flex justify-content-between gap-8'>
//             <div className='flex-align menu-category-wrapper'>
//               {/* Category Dropdown Start */}
//               <div className='category on-hover-item'>
//                 <button
//                   onClick={handleCategoryToggle}
//                   type='button'
//                   className='category__button flex-align gap-8 fw-medium p-16 border-end border-start border-gray-100 text-heading'
//                 >
//                   <span className='icon text-2xl d-xs-flex d-none'>
//                     <i className='ph ph-dots-nine' />
//                   </span>
//                   <span className='d-sm-flex d-none'>All</span> Categories
//                   <span className='arrow-icon text-xl d-flex'>
//                     <i className='ph ph-caret-down' />
//                   </span>
//                 </button>
//                 <div
//                   className={`responsive-dropdown cat on-hover-dropdown common-dropdown nav-submenu p-0 submenus-submenu-wrapper ${
//                     activeCategory && "active"
//                   }`}
//                 >
//                   <button
//                     onClick={() => {
//                       handleCategoryToggle();
//                       setActiveIndexCat(null);
//                     }}
//                     type='button'
//                     className='close-responsive-dropdown rounded-circle text-xl position-absolute inset-inline-end-0 inset-block-start-0 mt-4 me-8 d-lg-none d-flex'
//                   >
//                     <i className='ph ph-x' />
//                   </button>
//                   {/* Logo Start */}
//                   <div className='logo px-16 d-lg-none d-block'>
//                     <Link to='/' className='link'>
//                       <img src='assets/images/logo/logo.png' alt='Logo' />
//                     </Link>
//                   </div>
//                   {/* Logo End */}
//                   <ul className='scroll-sm p-0 py-8 w-300 max-h-400 overflow-y-auto'>
//                     {categories.map((category, index) => (
//                       <li
//                         key={category._id}
//                         onClick={() => handleCatClick(index)}
//                         className={`has-submenus-submenu ${
//                           activeIndexCat === index || category._id === categoryId ? "active" : ""
//                         }`}
//                       >
//                         <Link
//                           to={`/shop/${category._id}`} // Updated link to include category ID
//                           onClick={() => setActiveIndexCat(null)}
//                           className='text-gray-500 text-15 py-12 px-16 flex-align gap-8 rounded-0'
//                         >
//                           <span className='text-xl d-flex'>
//                             <i className='ph ph-carrot' />
//                           </span>
//                           <span>{category.name}</span>
//                           <span className='icon text-md d-flex ms-auto'>
//                             <i className='ph ph-caret-right' />
//                           </span>
//                         </Link>
//                         <div
//                           className={`submenus-submenu py-16 ${
//                             activeIndexCat === index || category._id === categoryId ? "open" : ""
//                           }`}
//                         >
//                           <h6 className='text-lg px-16 submenus-submenu__title'>
//                             {category.name}
//                           </h6>
//                           <ul className='submenus-submenu__list max-h-300 overflow-y-auto scroll-sm'>
//                             {subCategories
//                               .filter(
//                                 (sub) =>
//                                   sub?.parentCategory &&
//                                   sub.parentCategory._id === category._id
//                               )
//                               .map((subCategory) => (
//                                 <li key={subCategory._id}>
//                                   <Link
//                                     to={`/shop/${category._id}/${subCategory._id}`} // Updated link to include both IDs
//                                     className={
//                                       subCategory._id === subCategoryId
//                                         ? "activePage"
//                                         : ""
//                                     }
//                                   >
//                                     {subCategory.name}
//                                   </Link>
//                                 </li>
//                               ))}
//                           </ul>
//                         </div>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               </div>
//               {/* Category Dropdown End  */}
//               {/* Menu Start  */}
//               <div className='header-menu d-lg-block d-none'>
//                 {/* Nav Menu Start */}
//                 <ul className='nav-menu flex-align'>
//                   <li className='on-hover-item nav-menu__item'>
//                     <Link to='/' className='nav-menu__link'>
//                       Home
//                     </Link>
//                   </li>
//                   <li className='on-hover-item nav-menu__item'>
//                     <Link to='/about' className='nav-menu__link'>
//                       About
//                     </Link>
//                   </li>
//                   <li className='on-hover-item nav-menu__item'>
//                     <Link to='/shop' className='nav-menu__link'>
//                       Shop
//                     </Link>
//                   </li>
//                   <li className='on-hover-item nav-menu__item has-submenu'>
//                     <span className='badge-notification bg-tertiary-600 text-white text-sm py-2 px-8 rounded-4'>
//                       New
//                     </span>
//                     <Link to='#' className='nav-menu__link'>
//                       Vendors
//                     </Link>
//                     <ul className='on-hover-dropdown common-dropdown nav-submenu scroll-sm'>
//                       <li className='common-dropdown__item nav-submenu__item'>
//                         <NavLink
//                           to='/vendor'
//                           className={(navData) =>
//                             navData.isActive
//                               ? "common-dropdown__link nav-submenu__link hover-bg-neutral-100 activePage"
//                               : "common-dropdown__link nav-submenu__link hover-bg-neutral-100"
//                           }
//                         >
//                           Vendors
//                         </NavLink>
//                       </li>
//                       <li className='common-dropdown__item nav-submenu__item'>
//                         <NavLink
//                           to='/vendor-details'
//                           className={(navData) =>
//                             navData.isActive
//                               ? "common-dropdown__link nav-submenu__link hover-bg-neutral-100 activePage"
//                               : "common-dropdown__link nav-submenu__link hover-bg-neutral-100"
//                           }
//                         >
//                           Vendor Details
//                         </NavLink>
//                       </li>
//                       <li className='common-dropdown__item nav-submenu__item'>
//                         <NavLink
//                           to='/vendor-two'
//                           className={(navData) =>
//                             navData.isActive
//                               ? "common-dropdown__link nav-submenu__link hover-bg-neutral-100 activePage"
//                               : "common-dropdown__link nav-submenu__link hover-bg-neutral-100"
//                           }
//                         >
//                           Vendors Two
//                         </NavLink>
//                       </li>
//                       <li className='common-dropdown__item nav-submenu__item'>
//                         <NavLink
//                           to='/vendor-two-details'
//                           className={(navData) =>
//                             navData.isActive
//                               ? "common-dropdown__link nav-submenu__link hover-bg-neutral-100 activePage"
//                               : "common-dropdown__link nav-submenu__link hover-bg-neutral-100"
//                           }
//                         >
//                           Vendors Two Details
//                         </NavLink>
//                       </li>
//                     </ul>
//                   </li>
//                   <li className='nav-menu__item'>
//                     <NavLink
//                       to='/contact'
//                       className={(navData) =>
//                         navData.isActive
//                           ? "nav-menu__link activePage"
//                           : "nav-menu__link"
//                       }
//                     >
//                       Contact Us
//                     </NavLink>
//                   </li>
//                 </ul>
//                 {/* Nav Menu End */}
//               </div>
//               {/* Menu End  */}
//             </div>
//             {/* Header Right Start */}
//             <div className='header-right flex-align'>
//               <Link
//                 to='/tel:01234567890'
//                 className='bg-main-600 text-white p-12 h-100 hover-bg-main-800 flex-align gap-8 text-lg d-lg-flex d-none'
//               >
//                 <div className='d-flex text-32'>
//                   <i className='ph ph-phone-call' />
//                 </div>
//                 01- 234 567 890
//               </Link>
//               <div className='me-16 d-lg-none d-block'>
//                 <div className='flex-align flex-wrap gap-12'>
//                   <button
//                     onClick={handleSearchToggle}
//                     type='button'
//                     className='search-icon flex-align d-lg-none d-flex gap-4 item-hover'
//                   >
//                     <span className='text-2xl text-gray-700 d-flex position-relative item-hover__text'>
//                       <i className='ph ph-magnifying-glass' />
//                     </span>
//                   </button>
//                   <Link to='/wishlist' className='flex-align gap-4 item-hover'>
//                     <span className='text-2xl text-gray-700 d-flex position-relative me-6 mt-6 item-hover__text'>
//                       <i className='ph ph-heart' />
//                       <span className='w-16 h-16 flex-center rounded-circle bg-main-600 text-white text-xs position-absolute top-n6 end-n4'>
//                         2
//                       </span>
//                     </span>
//                     <span className='text-md text-gray-500 item-hover__text d-none d-lg-flex'>
//                       Wishlist
//                     </span>
//                   </Link>
//                   <Link to='/cart' className='flex-align gap-4 item-hover'>
//                     <span className='text-2xl text-gray-700 d-flex position-relative me-6 mt-6 item-hover__text'>
//                       <i className='ph ph-shopping-cart-simple' />
//                       <span className='w-16 h-16 flex-center rounded-circle bg-main-600 text-white text-xs position-absolute top-n6 end-n4'>
//                         2
//                       </span>
//                     </span>
//                     <span className='text-md text-gray-500 item-hover__text d-none d-lg-flex'>
//                       Cart
//                     </span>
//                   </Link>
//                 </div>
//               </div>
//               <button
//                 onClick={handleMenuToggle}
//                 type='button'
//                 className='toggle-mobileMenu d-lg-none ms-3n text-gray-800 text-4xl d-flex'
//               >
//                 <i className='ph ph-list' />
//               </button>
//             </div>
//             {/* Header Right End  */}
//           </nav>
//         </div>
//       </header>
//       {/* ==================== Header End Here ==================== */}
//     </>
//   );
// };

// export default HeaderOne;

// import React, { useEffect, useState, useRef } from "react";
// import { Link, NavLink, useLocation, useParams, useNavigate } from "react-router-dom";
// import axios from "axios";
// import { useSelector } from "react-redux";
// import "./HeaderOne.css"

// const HeaderOne = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const { categoryId, subCategoryId } = useParams();
//   const { subCategory, parentCategory } = location.state || {};
//   const Product = useSelector((state) => state.mycart.cart);
//   const productLength = Product.length;
//   const [scroll, setScroll] = useState(false);
//   const [categories, setCategories] = useState([]);
//   const [subCategories, setSubCategories] = useState([]);
//   const [products, setProducts] = useState([]);
//   const [allProducts, setAllProducts] = useState([]);
//   const [selectedCategory, setSelectedCategory] = useState("All");
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [category, setCategory] = useState(categoryId || "");
//   const [filteredSubCategories, setFilteredSubCategories] = useState([]);
//   const [selectedLanguage, setSelectedLanguage] = useState("Eng");
//   const [selectedCurrency, setSelectedCurrency] = useState("USD");
//   const [menuActive, setMenuActive] = useState(false);
//   const [activeIndex, setActiveIndex] = useState(null);
//   const [activeSearch, setActiveSearch] = useState(false);
//   const [activeCategory, setActiveCategory] = useState(false);
//   const [activeIndexCat, setActiveIndexCat] = useState(null);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [searchResults, setSearchResults] = useState([]);
//   const [showSearchModal, setShowSearchModal] = useState(false);
//   const modalRef = useRef(null);
//   const searchFormRef = useRef(null);

//   // Fetch categories, subcategories, and products
//   const fetchData = async () => {
//     try {
//       setLoading(true);
//       const [categoryRes, subCategoryRes, productRes] = await Promise.all([
//         axios.get("https://backend-20ar.onrender.com/category"),
//         axios.get("https://backend-20ar.onrender.com/subcategory"),
//         axios.get("https://backend-20ar.onrender.com/product"),
//       ]);

//       setCategories(categoryRes.data);
//       setSubCategories(subCategoryRes.data);

//       const filtered = categoryId
//         ? subCategoryRes.data.filter(
//             (sub) => sub.parentCategory && sub.parentCategory._id === categoryId
//           )
//         : subCategoryRes.data;
//       setFilteredSubCategories(filtered);

//       const formattedProducts = productRes.data.map((product) => ({
//         _id: product._id,
//         name: product.name,
//         category: product.category?.name || "Uncategorized",
//         subCategory: product.subCategory?.name || "Uncategorized",
//         img: product.images?.[0] || "https://via.placeholder.com/150",
//       }));

//       setAllProducts(formattedProducts);
//       setProducts(formattedProducts);
//     } catch (err) {
//       console.error("Error fetching data:", err);
//       setError("Failed to load data.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Search products
//   const handleSearch = async (e) => {
//     e.preventDefault();
//     if (searchQuery) {
//       setSearchResults([]);
//       setShowSearchModal(false);
//       return;
//     }

//     try {
//       setLoading(true);
//       const queryParams = new URLSearchParams();
//       queryParams.append("search", searchQuery);
//       if (category) queryParams.append("category", category);

//       const response = await axios.get(
//         `https://backend-20ar.onrender.com/product?${queryParams.toString()}`
//       );

//       const formattedResults = response.data.map((product) => ({
//         _id: product._id,
//         name: product.name,
//         img: product.images?.[0] || "https://via.placeholder.com/150",
//       }));

//       setSearchResults(formattedResults);
//       setShowSearchModal(true);
//     } catch (err) {
//       console.error("Error searching products:", err);
//       setError("Failed to search products.");
//       setSearchResults([]);
//       setShowSearchModal(false);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Handle product click
//   const handleProductClick = (productId) => {
//     setShowSearchModal(false);
//     setSearchQuery("");
//     navigate(`/product-details/${productId}`);
//   };

//   // Close modal on outside click
//   const handleClickOutside = (event) => {
//     if (
//       modalRef.current &&
//       !modalRef.current.contains(event.target) &&
//       searchFormRef.current &&
//       !searchFormRef.current.contains(event.target)
//     ) {
//       setShowSearchModal(false);
//       setSearchQuery("");
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, [categoryId]);

//   // Scroll handler and click outside listener
//   useEffect(() => {
//     window.onscroll = () => {
//       setScroll(window.pageYOffset > 150);
//     };

//     document.addEventListener("mousedown", handleClickOutside);

//     return () => {
//       window.onscroll = null;
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   // Handlers
//   const handleLanguageChange = (language) => setSelectedLanguage(language);
//   const handleCurrencyChange = (currency) => setSelectedCurrency(currency);
//   const handleMenuClick = () => setActiveIndex(index => (activeIndex === index ? null : index));
//   const handleMenuToggle = () => setMenuActive(!menuActive);
//   const handleSearchToggle = () => setActiveSearch(!activeSearch);
//   const handleCategoryToggle = () => setActiveCategory(!activeCategory);
//   const handleCatClick = (index) => setActiveIndexCat(activeIndexCat === index ? null : index);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     if (name === "category") {
//       setCategory(value);
//       setSelectedCategory(
//         value === "" ? "All Categories" : categories.find((cat) => cat._id === value)?.name || "All Categories"
//       );
//       if (value) {
//         const filtered = subCategories.filter(
//           (sub) => sub.parentCategory && sub.parentCategory._id === value
//         );
//         setFilteredSubCategories(filtered);
//       } else {
//         setFilteredSubCategories(subCategories);
//       }
//     } else if (name === "search") {
//       setSearchQuery(value);
//     };
//   };

//   return (
//     <>
//       <div className={`side-overlay ${(menuActive || activeCategory) && "show"}`} />
//       {/* Search Box for Mobile */}
//       <form action="#" className={`search-box ${activeSearch && "active"}`}>
//         <button
//           onClick={handleSearchToggle}
//           type="button"
//           className="search-box__close position-absolute inset-block-start-0 inset-inline-end-0 m-16 w-48 h-40 border border-gray-100 rounded-circle flex-center text-white hover-text-gray-800 hover-bg-white text-2xl transition-1"
//         >
//           <i className="ph-x" />
//         </button>
//         <div className="container">
//           <div className="position-relative">
//             <input
//               type="text"
//               className="form-control py-16 px-24 text-xl rounded-pill pe-64"
//               placeholder="Search for a product or brand"
//               name="search"
//               value={searchQuery}
//               onChange={handleChange}
//             />
//             <button
//               type="submit"
//               onClick={handleSearch}
//               className="w-48 h-48 bg-main-600 rounded-circle flex-center text-xl text-white position-absolute top-50 translate-middle-y inset-inline-end-0 me-8"
//             >
//               <i className="ph ph-magnifying-glass" />
//             </button>
//           </div>
//         </div>
//       </form>

//       {/* Mobile Menu */}
//       <div
//         className={`mobile-menu scroll-sm d-lg-none d-block ${menuActive ? "active" : ""}`}
//       >
//         <button
//           onClick={() => {
//             handleMenuToggle();
//             setActiveIndex(null);
//           }}
//           type="button"
//           className="close-button"
//         >
//           <i className="ph ph-x" />
//         </button>
//         <div className="mobile-menu__inner">
//           <Link to="/" className="mobile-menu__logo">
//             <img src="assets/images/logo/logo.png" alt="Logo" />
//           </Link>
//           <div className="nav-menu flex-align nav-menu--mobile">
//             <ul>
//               <li
//                 onClick={() => handleMenuClick(0)}
//                 className={`on-hover-item nav-menu__item ${activeIndex === 0 ? "d-block" : ""}`}
//               >
//                 <Link to="/" className="nav-menu__link">
//                   Home
//                 </Link>
//               </li>
//               <li className="on-hover-item nav-menu__item">
//                 <Link to="/about" className="nav-menu__link">
//                   About
//                 </Link>
//               </li>
//               <li
//                 onClick={() => handleMenuClick(1)}
//                 className={`on-hover-item nav-menu__item ${activeIndex === 1 ? "d-block" : ""}`}
//               >
//                 <Link to="/shop" className="nav-menu__link">
//               Shop
//                 </Link>
//               </li>
//               <li className="nav-menu__item">
//                 <Link
//                   to="/contact"
//                   className="nav-menu__link"
//                   onClick={() => setActiveIndex(null)}
//                 >
//                   Contact Us
//                 </Link>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>

//       {/* Middle Top */}
//       <div className="header-top bg-main-600 flex-between">
//         <div className="container container-lg">
//           <div className="flex-between flex-wrap gap-8">
//             <ul className="flex-align flex-wrap d-none d-md-flex">
//               <li className="border-right-item">
//                 <Link
//                   to="#"
//                   className="text-white text-sm hover-text-decoration-underline"
//                 >
//                   Become A Seller
//                 </Link>
//               </li>
//               <li className="border-right-item">
//                 <Link
//                   to="#"
//                   className="text-white text-sm hover-text-decoration-underline"
//                 >
//                   About us
//                 </Link>
//               </li>
//               <li className="border-right-item">
//                 <Link
//                   to="#"
//                   className="text-white text-sm hover-text-decoration-underline"
//                 >
//                   Free Delivery
//                 </Link>
//               </li>
//               <li className="border-right-item">
//                 <Link
//                   to="#"
//                   className="text-white text-sm hover-text-decoration-underline"
//                 >
//                   Returns Policy
//                 </Link>
//               </li>
//             </ul>
//             <ul className="header-top__right flex-align flex-wrap">
//               <li className="on-hover-item border-right-item border-right-item-sm-space has-submenu arrow-white">
//                 <Link to="#" className="text-white text-sm py-8">
//                   Help Center
//                 </Link>
//                 <ul className="on-hover-dropdown common-dropdown common-dropdown--sm max-h-200 scroll-sm px-0 py-8">
//                   <li className="nav-submenu__item">
//                     <Link
//                       to="#"
//                       className="nav-submenu__link hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0"
//                     >
//                       <span className="text-sm d-flex">
//                         <i className="ph ph-headset" />
//                       </span>
//                       Call Center
//                     </Link>
//                   </li>
//                   <li className="nav-submenu__item">
//                     <Link
//                       to="#"
//                       className="nav-submenu__link hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0"
//                     >
//                       <span className="text-sm d-flex">
//                         <i className="ph ph-chat-circle-dots" />
//                       </span>
//                       Live Chat
//                     </Link>
//                   </li>
//                 </ul>
//               </li>
//               <li className="on-hover-item border-right-item border-right-item-sm-space has-submenu arrow-white">
//                 <Link to="#" className="selected-text text-white text-sm py-8">
//                   {selectedLanguage}
//                 </Link>
//                 <ul className="selectable-text-list on-hover-dropdown common-dropdown common-dropdown--sm max-h-200 scroll-sm px-0 py-8">
//                   <li>
//                     <Link
//                       to="#"
//                       className="hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0"
//                       onClick={() => handleLanguageChange("English")}
//                     >
//                       <img
//                         src="assets/images/thumbs/flag1.png"
//                         alt="English"
//                         className="w-16 h-12 rounded-4 border border-gray-100"
//                       />
//                       English
//                     </Link>
//                   </li>
//                   <li>
//                     <Link
//                       to="#"
//                       className="hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0"
//                       onClick={() => handleLanguageChange("Japan")}
//                     >
//                       <img
//                         src="assets/images/thumbs/flag2.png"
//                         alt="Japan"
//                         className="w-16 h-12 rounded-4 border border-gray-100"
//                       />
//                       Japan
//                     </Link>
//                   </li>
//                   <li>
//                     <Link
//                       to="#"
//                       className="hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0"
//                       onClick={() => handleLanguageChange("French")}
//                     >
//                       <img
//                         src="assets/images/thumbs/flag3.png"
//                         alt="French"
//                         className="w-16 h-12 rounded-4 border border-gray-100"
//                       />
//                       French
//                     </Link>
//                   </li>
//                   <li>
//                     <Link
//                       to="#"
//                       className="hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0"
//                       onClick={() => handleLanguageChange("Germany")}
//                     >
//                       <img
//                         src="assets/images/thumbs/flag4.png"
//                         alt="Germany"
//                         className="w-16 h-12 rounded-4 border border-gray-100"
//                       />
//                       Germany
//                     </Link>
//                   </li>
//                   <li>
//                     <Link
//                       to="#"
//                       className="hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0"
//                       onClick={() => handleLanguageChange("Bangladesh")}
//                     >
//                       <img
//                         src="assets/images/thumbs/flag6.png"
//                         alt="Bangladesh"
//                         className="w-16 h-12 rounded-4 border border-gray-100"
//                       />
//                       Bangladesh
//                     </Link>
//                   </li>
//                   <li>
//                     <Link
//                       to="#"
//                       className="hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0"
//                       onClick={() => handleLanguageChange("South Korea")}
//                     >
//                       <img
//                         src="assets/images/thumbs/flag5.png"
//                         alt="South Korea"
//                         className="w-16 h-12 rounded-4 border border-gray-100"
//                       />
//                       South Korea
//                     </Link>
//                   </li>
//                 </ul>
//               </li>
//               <li className="on-hover-item border-right-item border-right-item-sm-space has-submenu arrow-white">
//                 <Link to="#" className="selected-text text-white text-sm py-8">
//                   {selectedCurrency}
//                 </Link>
//                 <ul className="selectable-text-list on-hover-dropdown common-dropdown common-dropdown--sm max-h-200 scroll-sm px-0 py-8">
//                   <li>
//                     <Link
//                       to="#"
//                       className="hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0"
//                       onClick={() => handleCurrencyChange("USD")}
//                     >
//                       <img
//                         src="assets/images/thumbs/flag1.png"
//                         alt="USD"
//                         className="w-16 h-12 rounded-4 border border-gray-100"
//                       />
//                       USD
//                     </Link>
//                   </li>
//                   <li>
//                     <Link
//                       to="#"
//                       className="hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0"
//                       onClick={() => handleCurrencyChange("Yen")}
//                     >
//                       <img
//                         src="assets/images/thumbs/flag2.png"
//                         alt="Yen"
//                         className="w-16 h-12 rounded-4 border border-gray-100"
//                       />
//                       Yen
//                     </Link>
//                   </li>
//                   <li>
//                     <Link
//                       to="#"
//                       className="hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0"
//                       onClick={() => handleCurrencyChange("Franc")}
//                     >
//                       <img
//                         src="assets/images/thumbs/flag3.png"
//                         alt="Franc"
//                         className="w-16 h-12 rounded-4 border border-gray-100"
//                       />
//                       Franc
//                     </Link>
//                   </li>
//                   <li>
//                     <Link
//                       to="#"
//                       className="hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0"
//                       onClick={() => handleCurrencyChange("EURO")}
//                     >
//                       <img
//                         src="assets/images/thumbs/flag4.png"
//                         alt="EURO"
//                         className="w-16 h-12 rounded-4 border border-gray-100"
//                       />
//                       EURO
//                     </Link>
//                   </li>
//                   <li>
//                     <Link
//                       to="#"
//                       className="hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0"
//                       onClick={() => handleCurrencyChange("BDT")}
//                     >
//                       <img
//                         src="assets/images/thumbs/flag6.png"
//                         alt="BDT"
//                         className="w-16 h-12 rounded-4 border border-gray-100"
//                       />
//                       BDT
//                     </Link>
//                   </li>
//                   <li>
//                     <Link
//                       to="#"
//                       className="hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0"
//                       onClick={() => handleCurrencyChange("WON")}
//                     >
//                       <img
//                         src="assets/images/thumbs/flag5.png"
//                         alt="WON"
//                         className="w-16 h-12 rounded-4 border border-gray-100"
//                       />
//                       WON
//                     </Link>
//                   </li>
//                 </ul>
//               </li>
//               <li className="border-right-item">
//                 <Link
//                   to="/account"
//                   className="text-white text-sm py-8 flex-align gap-6"
//                 >
//                   <span className="icon text-md d-flex">
//                     <i className="ph ph-user-circle" />
//                   </span>
//                   <span className="hover-text-decoration-underline">
//                     My Account
//                   </span>
//                 </Link>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>

//       {/* Middle Header */}
//       <header className="header-middle bg-color-one border-bottom border-gray-100">
//         <div className="container container-lg">
//           <nav className="header-inner flex-between">
//             <div className="logo">
//               <Link to="/" className="link">
//                 <img src="assets/images/logo/logo.png" alt="Logo" />
//               </Link>
//             </div>
//             <form
//   action="#"
//   className="flex-align flex-wrap form-location-wrapper"
//   onSubmit={handleSearch}
//   ref={searchFormRef}
// >
//   <div className="search-category d-flex h-48 select-border-end-0 radius-end-0 search-form d-sm-flex d-none position-relative">
//     <select
//       id="category"
//       name="category"
//       value={category}
//       onChange={handleChange}
//       className="border border-gray-200 border-end-0"
//     >
//       <option value="">All Categories</option>
//       {categories.map((cat) => (
//         <option key={cat._id} value={cat._id}>
//           {cat.name}
//         </option>
//       ))}
//     </select>
//     <div className="search-form__wrapper position-relative">
//       <input
//         type="text"
//         className="search-form__input common-input py-13 ps-16 pe-18 rounded-end-pill pe-44"
//         placeholder="Search for a product or brand"
//         name="search"
//         value={searchQuery}
//         onChange={handleChange}
//       />
//       <button
//         type="submit"
//         className="w-32 h-32 bg-main-600 rounded-circle flex-center text-xl text-white position-absolute top-50 translate-middle-y inset-inline-end-0 me-8"
//       >
//         <i className="ph ph-magnifying-glass" />
//       </button>
//     </div>
//     {/* Search Results Modal */}
//     {showSearchModal && (
//       <div className="search-results-modal" ref={modalRef}>
//         <div className="modal-content">
//           <button
//             className="modal-close"
//             onClick={() => {
//               setShowSearchModal(false);
//               setSearchQuery("");
//             }}
//           >
//             <i className="ph ph-x" />
//           </button>
//           {searchResults.length > 0 ? (
//             <div className="row">
//               {searchResults.map((product) => (
//                 <div
//                   className="col-6 col-sm-4 col-md-3 col-lg-2"
//                   key={product._id}
//                   onClick={() => handleProductClick(product._id)}
//                 >
//                   <div className="product-card">
//                     <img
//                       src={product.img}
//                       alt={product.name}
//                       className="product-image"
//                     />
//                     <p className="product-name">{product.name}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           ) : (
//             <p className="no-results">
//               No products found. {searchResults.length} results.
//             </p>
//           )}
//         </div>
//       </div>
//     )}
//   </div>
//   <div className="location-box bg-white flex-align gap-8 py-6 px-16 rounded-pill border border-gray-100">
//     <span className="text-gray-900 text-xl d-xs-flex d-none">
//       <i className="ph ph-map-pin" />
//     </span>
//     <div className="line-height-1">
//       <span className="text-gray-600 text-xs">Your Location</span>
//       <div className="line-height-1">
//         <select
//           id="subCategory"
//           name="subCategory"
//           value={subCategoryId || ""}
//           onChange={handleChange}
//           className="border border-gray-200 border-end-0"
//           disabled={!category}
//         >
//           <option value="">All Sub-Categories</option>
//           {filteredSubCategories.map((subCat) => (
//             <option key={subCat._id} value={subCat._id}>
//               {subCat.name}
//             </option>
//           ))}
//         </select>
//       </div>
//     </div>
//   </div>
// </form>
//             <div className="header-right flex-align d-lg-block d-none">
//               <div className="flex-align flex-wrap gap-12">
//                 <button
//                   type="button"
//                   className="search-icon flex-align d-lg-none d-flex gap-4 item-hover"
//                   onClick={handleSearchToggle}
//                 >
//                   <span className="text-2xl text-gray-700 d-flex position-relative item-hover__text">
//                     <i className="ph ph-magnifying-glass" />
//                   </span>
//                 </button>
//                 <Link to="/login" className="flex-align gap-4 item-hover">
//                   <span className="text-md text-gray-500 item-hover__text d-none d-lg-flex">
//                     Login
//                   </span>
//                 </Link>
//                 <Link to="/cart" className="flex-align gap-4 item-hover">
//                   <span className="text-2xl text-gray-700 d-flex position-relative me-6 mt-6 item-hover__text">
//                     <i className="ph ph-shopping-cart-simple" />
//                     <span className="w-16 h-16 flex-center rounded-circle bg-main-600 text-white text-xs position-absolute top-n6 end-n4">
//                       {productLength}
//                     </span>
//                   </span>
//                   <span className="text-md text-gray-500 item-hover__text d-none d-lg-flex">
//                     Cart
//                   </span>
//                 </Link>
//               </div>
//             </div>
//           </nav>
//         </div>
//       </header>

//       {/* Main Header */}
//       <header
//         className={`header bg-white border-bottom border-gray-100 ${
//           scroll && "fixed-header"
//         }`}
//       >
//         <div className="container container-lg">
//           <nav className="header-inner d-flex justify-content-between gap-8">
//             <div className="flex-align menu-category-wrapper">
//               <div className="category on-hover-item">
//                 <button
//                   onClick={handleCategoryToggle}
//                   type="button"
//                   className="category__button flex-align gap-8 fw-medium p-16 border-end border-start border-gray-100 text-heading"
//                 >
//                   <span className="icon text-2xl d-xs-flex d-none">
//                     <i className="ph ph-dots-nine" />
//                   </span>
//                   <span className="d-sm-flex d-none">All</span> Categories
//                   <span className="arrow-icon text-xl d-flex">
//                     <i className="ph ph-caret-down" />
//                   </span>
//                 </button>
//                 <div
//                   className={`responsive-dropdown cat on-hover-dropdown common-dropdown nav-submenu p-0 submenus-submenu-wrapper ${
//                     activeCategory && "active"
//                   }`}
//                 >
//                   <button
//                     onClick={() => {
//                       handleCategoryToggle();
//                       setActiveIndexCat(null);
//                     }}
//                     type="button"
//                     className="close-responsive-dropdown rounded-circle text-xl position-absolute inset-inline-end-0 inset-block-start-0 mt-4 me-8 d-lg-none d-flex"
//                   >
//                     <i className="ph ph-x" />
//                   </button>
//                   <div className="logo px-16 d-lg-none d-block">
//                     <Link to="/" className="link">
//                       <img src="assets/images/logo/logo.png" alt="Logo" />
//                     </Link>
//                   </div>
//                   <ul className="scroll-sm p-0 py-8 w-300 max-h-400 overflow-y-auto">
//                     {categories.map((cat, index) => (
//                       <li
//                         key={cat._id}
//                         onClick={() => handleCatClick(index)}
//                         className={`has-submenus-submenu ${
//                           activeIndexCat === index || cat._id === categoryId
//                             ? "active"
//                             : ""
//                         }`}
//                       >
//                         <Link
//                           to={`/shop?category=${cat._id}`}
//                           className="text-gray-500 text-15 py-12 px-16 flex-align gap-8 rounded-0"
//                         >
//                           <span className="text-xl d-flex"></span>
//                           <span>{cat.name}</span>
//                           <span className="icon text-md d-flex ms-auto">
//                             <i className="ph ph-caret-right" />
//                           </span>
//                         </Link>
//                         <div
//                           className={`submenus-submenu py-16 ${
//                             activeIndexCat === index || cat._id === categoryId
//                               ? "open"
//                               : ""
//                           }`}
//                         >
//                           <h6 className="text-lg px-16 submenus-submenu__title">
//                             {cat.name}
//                           </h6>
//                           <ul className="submenus-submenu__list max-h-300 overflow-y-auto scroll-sm">
//                             {subCategories
//                               .filter(
//                                 (sub) =>
//                                   sub?.parentCategory &&
//                                   sub.parentCategory._id === cat._id
//                               )
//                               .map((subCat) => (
//                                 <li key={subCat._id}>
//                                   <Link
//                                     to={`/shop?category=${cat._id}&subcategory=${subCat._id}`}
//                                     className={
//                                       subCat._id === subCategoryId ? "activePage" : ""
//                                     }
//                                   >
//                                     {subCat.name}
//                                   </Link>
//                                 </li>
//                               ))}
//                           </ul>
//                         </div>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               </div>
//               <div className="header-menu d-lg-block d-none">
//                 <ul className="nav-menu flex-align">
//                   <li className="on-hover-item nav-menu__item">
//                     <Link to="/" className="nav-menu__link">
//                       Home
//                     </Link>
//                   </li>
//                   <li className="on-hover-item nav-menu__item">
//                     <Link to="/about" className="nav-menu__link">
//                       About
//                     </Link>
//                   </li>
//                   <li className="on-hover-item nav-menu__item">
//                     <Link to="/shop" className="nav-menu__link">
//                       Shop
//                     </Link>
//                   </li>
//                   <li className="nav-menu__item">
//                     <NavLink
//                       to="/contact"
//                       className={(navData) =>
//                         navData.isActive
//                           ? "nav-menu__link activePage"
//                           : "nav-menu__link"
//                       }
//                     >
//                       Contact Us
//                     </NavLink>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//             <div className="header-right flex-align">
//               <Link
//                 to="tel:+919368298145"
//                 className="bg-main-600 text-white p-12 h-100 hover-bg-main-800 flex-align gap-8 text-lg d-lg-flex d-none"
//               >
//                 <div className="d-flex text-32">
//                   <i className="ph ph-phone-call" />
//                 </div>
//                 +919368298145
//               </Link>
//               <div className="me-16 d-lg-none d-block">
//                 <div className="flex-align flex-wrap gap-12">
//                   <button
//                     type="button"
//                     className="search-icon flex-align d-lg-none d-flex gap-4 item-hover"
//                     onClick={handleSearchToggle}
//                   >
//                     <span className="text-2xl text-gray-700 d-flex position-relative item-hover__text">
//                       <i className="ph ph-magnifying-glass" />
//                     </span>
//                   </button>
//                   <Link to="/cart" className="flex-align gap-4 item-hover">
//                     <span className="text-2xl text-gray-700 d-flex position-relative me-6 mt-6 item-hover__text">
//                       <i className="ph ph-shopping-cart-simple" />
//                       <span className="w-16 h-16 flex-center rounded-circle bg-main-600 text-white text-xs position-absolute top-n6 end-n4">
//                         {productLength}
//                       </span>
//                     </span>
//                     <span className="text-md text-gray-500 item-hover__text d-none d-lg-flex">
//                       Cart
//                     </span>
//                   </Link>
//                 </div>
//               </div>
//               <button
//                 onClick={handleMenuToggle}
//                 type="button"
//                 className="toggle-mobileMenu d-lg-none ms-3n text-gray-800 text-4xl d-flex"
//               >
//                 <i className="ph ph-list" />
//               </button>
//             </div>
//           </nav>
//         </div>
//       </header>
//     </>
//   );
// };

// export default HeaderOne;





import React, { useEffect, useState } from "react";
import $ from "jquery"; // Changed 'query' to '$' for standard jQuery usage
import { Link, NavLink, useLocation, useParams } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";

const HeaderOne = () => {
  const location = useLocation();
  const { categoryId, subCategoryId } = useParams(); // Capture category and subcategory IDs from URL
  const { subCategory, parentCategory, categoryData } = location.state || {};
  const Product = useSelector((state) => state.mycart.cart);
  const productLength = Product.length;
  const [scroll, setScroll] = useState(false);
  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [category, setCategory] = useState(categoryId || ""); // Initialize with categoryId from URL
  const [filteredSubCategories, setFilteredSubCategories] = useState([]);
  const [selectedLanguage, setSelectedLanguage] = useState("Eng");
  const [selectedCurrency, setSelectedCurrency] = useState("USD");
  const [menuActive, setMenuActive] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  const [activeSearch, setActiveSearch] = useState(false);
  const [activeCategory, setActiveCategory] = useState(false);
  const [activeIndexCat, setActiveIndexCat] = useState(null);

  // Fetch all categories, subcategories, and products
  const fetchData = async () => {
    try {
      setLoading(true);

      const [categoryRes, subCategoryRes, productRes] = await Promise.all([
        axios.get("https://backend-20ar.onrender.com/category"),
        axios.get("https://backend-20ar.onrender.com/subcategory"),
        axios.get("https://backend-20ar.onrender.com/product"),
      ]);

      setCategories(categoryRes.data);
      setSubCategories(subCategoryRes.data);

      // Filter subcategories based on selected category from URL
      const filtered = categoryId
        ? subCategoryRes.data.filter(
            (sub) => sub.parentCategory && sub.parentCategory._id === categoryId
          )
        : subCategoryRes.data;
      setFilteredSubCategories(filtered);

      const formattedProducts = productRes.data.map((product) => ({
        _id: product._id,
        name: product.name,
        category: product.category?.name || "Uncategorized",
        subCategory: product.subCategory?.name || "Uncategorized",
        img: product.images[0] || "https://via.placeholder.com/150",
      }));

      setAllProducts(formattedProducts);
      setProducts(formattedProducts);
    } catch (err) {
      console.error("Error fetching data:", err);
      setError("Failed to load data.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [categoryId]); // Re-fetch when categoryId changes

  // Scroll handler
  useEffect(() => {
    window.onscroll = () => {
      if (window.pageYOffset < 150) {
        setScroll(false);
      } else if (window.pageYOffset > 150) {
        setScroll(true);
      }
      return () => (window.onscroll = null);
    };
    const selectElement = $(".js-example-basic-single");
    selectElement.select2();

    return () => {
      if (selectElement.data("select2")) {
        selectElement.select2("destroy");
      }
    };
  }, []);

  // Handlers
  const handleLanguageChange = (language) => setSelectedLanguage(language);
  const handleCurrencyChange = (currency) => setSelectedCurrency(currency);
  const handleMenuClick = (index) => setActiveIndex(activeIndex === index ? null : index);
  const handleMenuToggle = () => setMenuActive(!menuActive);
  const handleSearchToggle = () => setActiveSearch(!activeSearch);
  const handleCategoryToggle = () => setActiveCategory(!activeCategory);
  const handleCatClick = (index) => setActiveIndexCat(activeIndexCat === index ? null : index);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "category") {
      setCategory(value);
      setSelectedCategory(value === "" ? "All" : categories.find(cat => cat._id === value)?.name || "All");
      if (value) {
        const filtered = subCategories.filter(
          (sub) => sub.parentCategory && sub.parentCategory._id === value
        );
        setFilteredSubCategories(filtered);
      } else {
        setFilteredSubCategories(subCategories);
      }
    }
  };

  return (
    <>
      <div className='overlay' />
      <div
        className={`side-overlay ${(menuActive || activeCategory) && "show"}`}
      />
      {/* Search Box */}
      <form action='#' className={`search-box ${activeSearch && "active"}`}>
        <button
          onClick={handleSearchToggle}
          type='button'
          className='search-box__close position-absolute inset-block-start-0 inset-inline-end-0 m-16 w-48 h-48 border border-gray-100 rounded-circle flex-center text-white hover-text-gray-800 hover-bg-white text-2xl transition-1'
        >
          <i className='ph ph-x' />
        </button>
        <div className='container'>
          <div className='position-relative'>
            <input
              type='text'
              className='form-control py-16 px-24 text-xl rounded-pill pe-64'
              placeholder='Search for a product or brand'
            />
            <button
              type='submit'
              className='w-48 h-48 bg-main-600 rounded-circle flex-center text-xl text-white position-absolute top-50 translate-middle-y inset-inline-end-0 me-8'
            >
              <i className='ph ph-magnifying-glass' />
            </button>
          </div>
        </div>
      </form>

      {/* Mobile Menu */}
      <div
        className={`mobile-menu scroll-sm d-lg-none d-block ${
          menuActive && "active"
        }`}
      >
        <button
          onClick={() => {
            handleMenuToggle();
            setActiveIndex(null);
          }}
          type='button'
          className='close-button'
        >

          <i className='ph ph-x' />
        </button>
        <div className='mobile-menu__inner'>
           <Link to='/' className='mobile-menu__logo flex items-center space-x-2'>
      <h3 className='text-2xl font-bold text-blue-600 tracking-wide hover:text-blue-800 transition-all duration-300'>
        Umair <span className="text-black">Abhaya</span>
      </h3>
    </Link>
          <div className='mobile-menu__menu'>
            <ul className='nav-menu flex-align nav-menu--mobile'>
              <li
                onClick={() => handleMenuClick(0)}
                className={`on-hover-item nav-menu__item ${
                  activeIndex === 0 ? "d-block" : ""
                }`}
              >
                <Link to='/' className='nav-menu__link'>
                  Home
                </Link>
              </li>
              <li className='on-hover-item nav-menu__item'>
                <Link to='/about' className='nav-menu__link'>
                  About
                </Link>
              </li>
              <li
                onClick={() => handleMenuClick(1)}
                className={`on-hover-item nav-menu__item ${
                  activeIndex === 1 ? "d-block" : ""
                }`}
              >
                <Link to='/shop' className='nav-menu__link'>
                  Shop
                </Link>
              </li>
              {/* <li
                onClick={() => handleMenuClick(3)}
                className={`on-hover-item nav-menu__item has-submenu ${
                  activeIndex === 3 ? "d-block" : ""
                }`}
              >
                <span className='badge-notification bg-tertiary-600 text-white text-sm py-2 px-8 rounded-4'>
                  New
                </span>
                <Link to='#' className='nav-menu__link'>
                  Vendors
                </Link>
                <ul
                  className={`on-hover-dropdown common-dropdown nav-submenu scroll-sm ${
                    activeIndex === 3 ? "open" : ""
                  }`}
                >
                  <li className='common-dropdown__item nav-submenu__item'>
                    <Link
                      to='/vendor'
                      className='common-dropdown__link nav-submenu__link hover-bg-neutral-100'
                      onClick={() => setActiveIndex(null)}
                    >
                      Vendors
                    </Link>
                  </li>
                  <li className='common-dropdown__item nav-submenu__item'>
                    <Link
                      to='/vendor-details'
                      className='common-dropdown__link nav-submenu__link hover-bg-neutral-100'
                      onClick={() => setActiveIndex(null)}
                    >
                      Vendor Details
                    </Link>
                  </li>
                  <li className='common-dropdown__item nav-submenu__item'>
                    <Link
                      to='/vendor-two'
                      className='common-dropdown__link nav-submenu__link hover-bg-neutral-100'
                      onClick={() => setActiveIndex(null)}
                    >
                      Vendors Two
                    </Link>
                  </li>
                  <li className='common-dropdown__item nav-submenu__item'>
                    <Link
                      to='/vendor-two-details'
                      className='common-dropdown__link nav-submenu__link hover-bg-neutral-100'
                      onClick={() => setActiveIndex(null)}
                    >
                      Vendors Two Details
                    </Link>
                  </li>
                </ul>
              </li> */}
              <li className='nav-menu__item'>
                <Link
                  to='/contact'
                  className='nav-menu__link'
                  onClick={() => setActiveIndex(null)}
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Middle Top */}
      {/* <div className='header-top bg-main-600 flex-between'>
        <div className='container container-lg'>
          <div className='flex-between flex-wrap gap-8'>
            <ul className='flex-align flex-wrap d-none d-md-flex'>
              <li className='border-right-item'>
                <Link
                  to='#'
                  className='text-white text-sm hover-text-decoration-underline'
                >
                  Become A Seller
                </Link>
              </li>
              <li className='border-right-item'>
                <Link
                  to='#'
                  className='text-white text-sm hover-text-decoration-underline'
                >
                  About us
                </Link>
              </li>
              <li className='border-right-item'>
                <Link
                  to='#'
                  className='text-white text-sm hover-text-decoration-underline'
                >
                  Free Delivery
                </Link>
              </li>
              <li className='border-right-item'>
                <Link
                  to='#'
                  className='text-white text-sm hover-text-decoration-underline'
                >
                  Returns Policy
                </Link>
              </li>
            </ul>
            <ul className='header-top__right flex-align flex-wrap'>
              <li className='on-hover-item border-right-item border-right-item-sm-space has-submenu arrow-white'>
                <Link to='#' className='text-white text-sm py-8'>
                  Help Center
                </Link>
                <ul className='on-hover-dropdown common-dropdown common-dropdown--sm max-h-200 scroll-sm px-0 py-8'>
                  <li className='nav-submenu__item'>
                    <Link
                      to='#'
                      className='nav-submenu__link hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0'
                    >
                      <span className='text-sm d-flex'>
                        <i className='ph ph-headset' />
                      </span>
                      Call Center
                    </Link>
                  </li>
                  <li className='nav-submenu__item'>
                    <Link
                      to='#'
                      className='nav-submenu__link hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0'
                    >
                      <span className='text-sm d-flex'>
                        <i className='ph ph-chat-circle-dots' />
                      </span>
                      Live Chat
                    </Link>
                  </li>
                </ul>
              </li>
              <li className='on-hover-item border-right-item border-right-item-sm-space has-submenu arrow-white'>
                <Link to='#' className='selected-text text-white text-sm py-8'>
                  {selectedLanguage}
                </Link>
                <ul className='selectable-text-list on-hover-dropdown common-dropdown common-dropdown--sm max-h-200 scroll-sm px-0 py-8'>
                  <li>
                    <Link
                      to='#'
                      className='hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0'
                      onClick={() => handleLanguageChange("English")}
                    >
                      <img
                        src='assets/images/thumbs/flag1.png'
                        alt='English'
                        className='w-16 h-12 rounded-4 border border-gray-100'
                      />
                      English
                    </Link>
                  </li>
                  <li>
                    <Link
                      to='#'
                      className='hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0'
                      onClick={() => handleLanguageChange("Japan")}
                    >
                      <img
                        src='assets/images/thumbs/flag2.png'
                        alt='Japan'
                        className='w-16 h-12 rounded-4 border border-gray-100'
                      />
                      Japan
                    </Link>
                  </li>
                  <li>
                    <Link
                      to='#'
                      className='hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0'
                      onClick={() => handleLanguageChange("French")}
                    >
                      <img
                        src='assets/images/thumbs/flag3.png'
                        alt='French'
                        className='w-16 h-12 rounded-4 border border-gray-100'
                      />
                      French
                    </Link>
                  </li>
                  <li>
                    <Link
                      to='#'
                      className='hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0'
                      onClick={() => handleLanguageChange("Germany")}
                    >
                      <img
                        src='assets/images/thumbs/flag4.png'
                        alt='Germany'
                        className='w-16 h-12 rounded-4 border border-gray-100'
                      />
                      Germany
                    </Link>
                  </li>
                  <li>
                    <Link
                      to='#'
                      className='hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0'
                      onClick={() => handleLanguageChange("Bangladesh")}
                    >
                      <img
                        src='assets/images/thumbs/flag6.png'
                        alt='Bangladesh'
                        className='w-16 h-12 rounded-4 border border-gray-100'
                      />
                      Bangladesh
                    </Link>
                  </li>
                  <li>
                    <Link
                      to='#'
                      className='hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0'
                      onClick={() => handleLanguageChange("South Korea")}
                    >
                      <img
                        src='assets/images/thumbs/flag5.png'
                        alt='South Korea'
                        className='w-16 h-12 rounded-4 border border-gray-100'
                      />
                      South Korea
                    </Link>
                  </li>
                </ul>
              </li>
              <li className='on-hover-item border-right-item border-right-item-sm-space has-submenu arrow-white'>
                <Link to='#' className='selected-text text-white text-sm py-8'>
                  {selectedCurrency}
                </Link>
                <ul className='selectable-text-list on-hover-dropdown common-dropdown common-dropdown--sm max-h-200 scroll-sm px-0 py-8'>
                  <li>
                    <Link
                      to='#'
                      className='hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0'
                      onClick={() => handleCurrencyChange("USD")}
                    >
                      <img
                        src='assets/images/thumbs/flag1.png'
                        alt='USD'
                        className='w-16 h-12 rounded-4 border border-gray-100'
                      />
                      USD
                    </Link>
                  </li>
                  <li>
                    <Link
                      to='#'
                      className='hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0'
                      onClick={() => handleCurrencyChange("Yen")}
                    >
                      <img
                        src='assets/images/thumbs/flag2.png'
                        alt='Yen'
                        className='w-16 h-12 rounded-4 border border-gray-100'
                      />
                      Yen
                    </Link>
                  </li>
                  <li>
                    <Link
                      to='#'
                      className='hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0'
                      onClick={() => handleCurrencyChange("Franc")}
                    >
                      <img
                        src='assets/images/thumbs/flag3.png'
                        alt='Franc'
                        className='w-16 h-12 rounded-4 border border-gray-100'
                      />
                      Franc
                    </Link>
                  </li>
                  <li>
                    <Link
                      to='#'
                      className='hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0'
                      onClick={() => handleCurrencyChange("EURO")}
                    >
                      <img
                        src='assets/images/thumbs/flag4.png'
                        alt='EURO'
                        className='w-16 h-12 rounded-4 border border-gray-100'
                      />
                      EURO
                    </Link>
                  </li>
                  <li>
                    <Link
                      to='#'
                      className='hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0'
                      onClick={() => handleCurrencyChange("BDT")}
                    >
                      <img
                        src='assets/images/thumbs/flag6.png'
                        alt='BDT'
                        className='w-16 h-12 rounded-4 border border-gray-100'
                      />
                      BDT
                    </Link>
                  </li>
                  <li>
                    <Link
                      to='#'
                      className='hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0'
                      onClick={() => handleCurrencyChange("WON")}
                    >
                      <img
                        src='assets/images/thumbs/flag5.png'
                        alt='WON'
                        className='w-16 h-12 rounded-4 border border-gray-100'
                      />
                      WON
                    </Link>
                  </li>
                </ul>
              </li>
              <li className='border-right-item'>
                <Link
                  to='/account'
                  className='text-white text-sm py-8 flex-align gap-6'
                >
                  <span className='icon text-md d-flex'>
                    <i className='ph ph-user-circle' />
                  </span>
                  <span className='hover-text-decoration-underline'>
                    My Account
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div> */}

      {/* Middle Header */}
      <header className='header-middle bg-color-one border-bottom border-gray-100'>
        <div className='container container-lg'>
          <nav className='header-inner flex-between'>
            <div className='logo'>
      <Link to='/' className='mobile-menu__logo'>
  <h3 className='logo-text'>
    Umair <span className="logo-subtext">Abhaya</span>
  </h3>
</Link>

            </div>
            <form action='#' className='flex-align flex-wrap form-location-wrapper'>
              <div className='search-category d-flex h-48 select-border-end-0 radius-end-0 search-form d-sm-flex d-none'>
                {/* <select
                  id="category"
                  name="category"
                  value={category}
                  onChange={handleChange}
                  className="js-example-basic-single border border-gray-200 border-end-0"
                >
                  <option value="">All Categories</option>
                  {categories.map((cat) => (
                    <option key={cat._id} value={cat._id}>
                      {cat.name}
                    </option>
                  ))}
                </select> */}
            
                <div className='search-form__wrapper position-relative'>
                  <input
                    type='text'
                    className='search-form__input common-input py-13 ps-16 pe-18 rounded-end-pill pe-44'
                    placeholder='Search for a product or brand'
                  />
                  <button
                    type='submit'
                    className='w-32 h-32 bg-main-600 rounded-circle flex-center text-xl text-white position-absolute top-50 translate-middle-y inset-inline-end-0 me-8'
                  >
                    <i className='ph ph-magnifying-glass' />
                  </button>
                </div>
              </div>

            </form>
            <div className='header-right flex-align d-lg-block d-none'>
              <div className='flex-align flex-wrap gap-12'>
                <button
                  type='button'
                  className='search-icon flex-align d-lg-none d-flex gap-4 item-hover'
                  onClick={handleSearchToggle}
                >
                  <span className='text-2xl text-gray-700 d-flex position-relative item-hover__text'>
                    <i className='ph ph-magnifying-glass' />
                  </span>
                </button>
                <Link to='/login' className='flex-align gap-4 item-hover'>
                  <span className='text-md text-gray-500 item-hover__text d-none d-lg-flex'>

                    Account
                  </span>
                </Link>
                {/* <Link to='/wishlist' className='flex-align gap-4 item-hover'>
                  <span className='text-2xl text-gray-700 d-flex position-relative me-6 mt-6 item-hover__text'>
                    <i className='ph ph-heart' />
                    <span className='w-16 h-16 flex-center rounded-circle bg-main-600 text-white text-xs position-absolute top-n6 end-n4'>
                      2
                    </span>
                  </span>
                  <span className='text-md text-gray-500 item-hover__text d-none d-lg-flex'>
                    Wishlist
                  </span>
                </Link> */}
                <Link to='/cart' className='flex-align gap-4 item-hover'>
                  <span className='text-2xl text-gray-700 d-flex position-relative me-6 mt-6 item-hover__text'>
                    <i className='ph ph-shopping-cart-simple' />
                    <span className='w-16 h-16 flex-center rounded-circle bg-main-600 text-white text-xs position-absolute top-n6 end-n4'>
                      {productLength > 0 ? productLength : 0}
                    </span>
                  </span>
                  <span className='text-md text-gray-500 item-hover__text d-none d-lg-flex'>
                    Cart
                  </span>
                </Link>
              </div>
            </div>
          </nav>
        </div>
      </header>

      {/* Main Header */}
      <header
        className={`header bg-white border-bottom border-gray-100 ${
          scroll && "fixed-header"
        }`}
      >
        <div className='container container-lg'>
          <nav className='header-inner d-flex justify-content-between gap-8'>
            <div className='flex-align menu-category-wrapper'>
              {/* Category Dropdown */}
              <div className='category on-hover-item'>
                <button
                  onClick={handleCategoryToggle}
                  type='button'
                  className='category__button flex-align gap-8 fw-medium p-16 border-end border-start border-gray-100 text-heading'
                >
                  <span className='icon text-2xl d-xs-flex d-none'>
                    <i className='ph ph-dots-nine' />
                  </span>
                  <span className='d-sm-flex d-none'>All</span> Categories
                  <span className='arrow-icon text-xl d-flex'>
                    <i className='ph ph-caret-down' />
                  </span>
                </button>
                <div
                  className={`responsive-dropdown cat on-hover-dropdown common-dropdown nav-submenu p-0 submenus-submenu-wrapper ${
                    activeCategory && "active"
                  }`}
                >
                  <button
                    onClick={() => {
                      handleCategoryToggle();
                      setActiveIndexCat(null);
                    }}
                    type='button'
                    className='close-responsive-dropdown rounded-circle text-xl position-absolute inset-inline-end-0 inset-block-start-0 mt-4 me-8 d-lg-none d-flex'
                  >
                    <i className='ph ph-x' />
                  </button>
                  <div className='logo px-16 d-lg-none d-block'>
                    <Link to='/' className='link'>
                      <img src='assets/images/logo/logo.png' alt='Logo' />
                    </Link>
                  </div>
                  <ul className='scroll-sm p-0 py-8 w-300 max-h-400 overflow-y-auto'>
                    {categories.map((cat, index) => (
                      <li
                        key={cat._id}
                        onClick={() => handleCatClick(index)}
                        className={`has-submenus-submenu ${
                          activeIndexCat === index || cat._id === categoryId ? "active" : ""
                        }`}
                      >
                        <Link
                          to={`/shop?category=${cat._id}`}
                          className='text-gray-500 text-15 py-12 px-16 flex-align gap-8 rounded-0'
                        >
                          <span className='text-xl d-flex'>
                            {/* <i className='ph ph-carrot' /> */}
                          </span>
                          <span>{cat.name}</span>
                          <span className='icon text-md d-flex ms-auto'>
                            <i className='ph ph-caret-right' />
                          </span>
                        </Link>
                        <div
                          className={`submenus-submenu py-16 ${
                            activeIndexCat === index || cat._id === categoryId ? "open" : ""
                          }`}
                        >
                          <h6 className='text-lg px-16 submenus-submenu__title'>
                            {cat.name}
                          </h6>
                          <ul className='submenus-submenu__list max-h-300 overflow-y-auto scroll-sm'>
                            {subCategories
                              .filter(
                                (sub) =>
                                  sub?.parentCategory &&
                                  sub.parentCategory._id === cat._id
                              )
                              .map((subCat) => (
                                <li key={subCat._id}>
                                  <Link
                                    to={`/shop?category=${cat._id}&subcategory=${subCat._id}`}
                                    className={
                                      subCat._id === subCategoryId ? "activePage" : ""
                                    }
                                  >
                                    {subCat.name}
                                  </Link>
                                </li>
                              ))}
                          </ul>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Main Menu */}
              <div className='header-menu d-lg-block d-none'>
                <ul className='nav-menu flex-align'>
                  <li className='on-hover-item nav-menu__item'>
                    <Link to='/' className='nav-menu__link'>
                      Home
                    </Link>
                  </li>
                  <li className='on-hover-item nav-menu__item'>
                    <Link to='/about' className='nav-menu__link'>
                      About
                    </Link>
                  </li>
                  <li className='on-hover-item nav-menu__item'>
                    <Link to='/shop' className='nav-menu__link'>
                      Shop
                    </Link>
                  </li>

                  <li className='nav-menu__item'>
                    <NavLink
                      to='/contact'
                      className={(navData) =>
                        navData.isActive
                          ? "nav-menu__link activePage"
                          : "nav-menu__link"
                      }
                    >
                      Contact Us
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>

            {/* Header Right */}
            <div className='header-right flex-align'>
              <Link
                to='/tel:01234567890'
                className='bg-main-600 text-white p-12 h-100 hover-bg-main-800 flex-align gap-8 text-lg d-lg-flex d-none'
              >
                <div className='d-flex text-32'>
                  <i className='ph ph-phone-call' />
                </div>
               +919368298145
              </Link>
              <div className='me-16 d-lg-none d-block'>
                <div className='flex-align flex-wrap gap-12'>
                  <button
                    onClick={handleSearchToggle}
                    type='button'
                    className='search-icon flex-align d-lg-none d-flex gap-4 item-hover'
                  >
                    <span className='text-2xl text-gray-700 d-flex position-relative item-hover__text'>
                      <i className='ph ph-magnifying-glass' />
                    </span>
                  </button>
                  {/* <Link to='/wishlist' className='flex-align gap-4 item-hover'>
                    <span className='text-2xl text-gray-700 d-flex position-relative me-6 mt-6 item-hover__text'>
                      <i className='ph ph-heart' />
                      <span className='w-16 h-16 flex-center rounded-circle bg-main-600 text-white text-xs position-absolute top-n6 end-n4'>
                        2
                      </span>
                    </span>
                    <span className='text-md text-gray-500 item-hover__text d-none d-lg-flex'>
                      Wishlist
                    </span>
                  </Link> */}
                  <Link to='/cart' className='flex-align gap-4 item-hover'>
                    <span className='text-2xl text-gray-700 d-flex position-relative me-6 mt-6 item-hover__text'>
                      <i className='ph ph-shopping-cart-simple' />
                      <span className='w-16 h-16 flex-center rounded-circle bg-main-600 text-white text-xs position-absolute top-n6 end-n4'>
                        {productLength > 0 ? productLength : 2}
                      </span>
                    </span>
                    <span className='text-md text-gray-500 item-hover__text d-none d-lg-flex'>
                      Cart
                    </span>
                  </Link>
                </div>
              </div>
              <button
                onClick={handleMenuToggle}
                type='button'
                className='toggle-mobileMenu d-lg-none ms-3n text-gray-800 text-4xl d-flex'
              >
                <i className='ph ph-list' />
              </button>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default HeaderOne;




