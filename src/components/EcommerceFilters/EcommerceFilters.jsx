import React, { useState, useEffect } from "react";
import products from "../../assets/Data/productData";
import { FiFilter, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";
import { addToCart } from "../../redux/cartSlice";
import { useDispatch } from "react-redux";

const EcommerceFilters = () => {
  const dispatch = useDispatch();
  // Calculate default min and max price from product data
  const defaultMinPrice = Math.min(...products.map((p) => p.price));
  const defaultMaxPrice = Math.max(...products.map((p) => p.price));

  // Temporary filters selected by user before applying
  const [tempFilters, setTempFilters] = useState({
    categories: [],
    priceRange: [defaultMinPrice, defaultMaxPrice],
  });
  // Filters that are currently applied
  const [activeFilters, setActiveFilters] = useState({
    categories: [],
    priceRange: [defaultMinPrice, defaultMaxPrice],
  });
  // Products after applying filters
  const [filteredProducts, setFilteredProducts] = useState(products);
  // Current page for pagination
  const [currentPage, setCurrentPage] = useState(1);
  // Show or hide mobile filter drawer
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  const productsPerPage = 9;

  // Extract unique categories from product data
  const allCategories = Array.from(new Set(products.map((p) => p.category)));

  // Handle checkbox and price range change (before applying)
  const handleTempFilterChange = (filterType, value) => {
    setTempFilters((prev) => {
      if (filterType === "priceRange") {
        return { ...prev, priceRange: value };
      }
      const list = prev[filterType];
      return {
        ...prev,
        [filterType]: list.includes(value)
          ? list.filter((item) => item !== value)
          : [...list, value],
      };
    });
  };

  // Apply temporary filters to active state and reset pagination
  const applyFilters = () => {
    setActiveFilters(tempFilters);
    setCurrentPage(1);
    setShowMobileFilters(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Reset all filters and pagination
  const resetFilters = () => {
    setTempFilters({
      categories: [],
      priceRange: [defaultMinPrice, defaultMaxPrice],
    });
    setActiveFilters({
      categories: [],
      priceRange: [defaultMinPrice, defaultMaxPrice],
    });
    setCurrentPage(1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Filter products whenever activeFilters change
  useEffect(() => {
    let result = products;
    if (activeFilters.categories.length)
      result = result.filter((p) =>
        activeFilters.categories.includes(p.category)
      );
    result = result.filter(
      (p) =>
        p.price >= activeFilters.priceRange[0] &&
        p.price <= activeFilters.priceRange[1]
    );
    setFilteredProducts(result);
  }, [activeFilters]);

  // Calculate current products for pagination
  const start = (currentPage - 1) * productsPerPage;
  const currentProducts = filteredProducts.slice(
    start,
    start + productsPerPage
  );
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  // Handle pagination click
  const goToPage = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-10 pb-32">
      {/* Mobile header with filter button */}
      <div className="md:hidden sticky top-0 bg-white p-4 flex justify-between items-center shadow">
        <h1 className="text-xl font-bold">Shop</h1>
        <button
          onClick={() => setShowMobileFilters(true)}
          className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-lg"
        >
          <FiFilter /> Filters
        </button>
      </div>

      <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row">
        {/* Backdrop when filter drawer is open on mobile */}
        <div
          className={`fixed inset-0 bg-black bg-opacity-50 z-20 transition-opacity md:hidden ${
            showMobileFilters ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          onClick={() => setShowMobileFilters(false)}
        />

        {/* Sidebar Filter Panel */}
        <div
          className={`fixed bottom-0 left-0 w-full md:static md:w-64 bg-white z-30 rounded-t-2xl md:rounded-none p-6 shadow-xl md:shadow-none transform transition-transform duration-300 ease-in-out ${
            showMobileFilters
              ? "translate-y-0"
              : "translate-y-full md:translate-y-0"
          }`}
        >
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-bold">Filters</h3>
            <button
              className="md:hidden text-gray-500"
              onClick={() => setShowMobileFilters(false)}
            >
              <FiX size={24} />
            </button>
          </div>
          {/* Category Filter Checkboxes */}
          <div className="mb-6">
            <h4 className="font-bold satoshi-font mb-2">Dress Style</h4>
            {allCategories.map((cat) => (
              <label key={cat} className="flex items-center space-x-2 mb-2">
                <input
                  type="checkbox"
                  checked={tempFilters.categories.includes(cat)}
                  onChange={() => handleTempFilterChange("categories", cat)}
                  className="w-4 h-4 text-blue-600 rounded"
                />
                <span className="text-gray-700">{cat}</span>
              </label>
            ))}
          </div>
          {/* Price Filter Slider */}
          <div className="mb-6">
            <h4 className="font-semibold mb-2">Price</h4>
            <div className="flex justify-between text-sm text-gray-600 mb-2">
              <span>${tempFilters.priceRange[0]}</span>
              <span>${tempFilters.priceRange[1]}</span>
            </div>
            <input
              type="range"
              min={defaultMinPrice}
              max={defaultMaxPrice}
              value={tempFilters.priceRange[1]}
              onChange={(e) =>
                handleTempFilterChange("priceRange", [
                  defaultMinPrice,
                  +e.target.value,
                ])
              }
              className="w-full h-2 bg-gray-200 rounded-lg cursor-pointer"
            />
          </div>
          {/* Filter Buttons */}
          <div className="flex space-x-4">
            <button
              onClick={resetFilters}
              className="flex-1 py-2 border border-gray-300 rounded-lg hover:bg-gray-100"
            >
              Reset
            </button>
            <button
              onClick={applyFilters}
              className="flex-1 py-2 bg-black text-white rounded-lg hover:bg-gray-800"
            >
              Apply
            </button>
          </div>
        </div>

        {/* Product Listing */}
        <div className="flex-1 md:pl-8">
          <div className="flex flex-col md:flex-row justify-between items-center mb-6">
            <p className="text-gray-600">
              Showing {start + 1}-
              {Math.min(start + productsPerPage, filteredProducts.length)} of{" "}
              {filteredProducts.length} Products
            </p>
            <select className="border rounded-lg px-3 py-2 mt-4 md:mt-0">
              <option>Most Popular</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
            </select>
          </div>

          {/* Render Products */}
          {currentProducts.length ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentProducts.map((product) => (
                <div
                  key={product.id}
                  className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition"
                >
                  <Link to={`/product/${product.id}`}>
                    <div className="w-full overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-auto object-contain"
                      />
                    </div>
                    <div className="p-5">
                      <h3 className="font-semibold text-lg mb-1">
                        {product.name}
                      </h3>
                      <div className="flex items-center mb-2">
                        <span className="text-lg font-bold">
                          ${product.price}
                        </span>
                        {product.originalPrice && (
                          <span className="ml-2 text-gray-500 line-through">
                            ${product.originalPrice}
                          </span>
                        )}
                        {product.discount && (
                          <span className="ml-2 bg-red-100 text-red-600 text-xs font-medium px-2 py-0.5 rounded">
                            {product.discount}% OFF
                          </span>
                        )}
                      </div>
                      <div className="text-sm text-gray-500">
                        {product.category}
                      </div>
                    </div>
                  </Link>
                  <div className="px-5 pt-4 pb-2">
                    <button
                      onClick={() => dispatch(addToCart(product))}
                      className="w-full bg-black text-white py-2 rounded-lg hover:shadow-xl shadow-black/30 transition"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl font-semibold mb-2">No products found</h3>
              <p className="text-gray-600 mb-6">Try adjusting your filters.</p>
              <button
                onClick={resetFilters}
                className="px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800"
              >
                Reset Filters
              </button>
            </div>
          )}

          {/* Pagination Buttons */}
          {totalPages > 1 && (
            <div className="mt-8 flex justify-center items-center space-x-2">
              <button
                disabled={currentPage === 1}
                onClick={() => goToPage(currentPage - 1)}
                className={`px-4 py-2 rounded-lg ${
                  currentPage === 1
                    ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                    : "bg-gray-200 hover:bg-gray-300"
                }`}
              >
                Previous
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (page) => (
                  <button
                    key={page}
                    onClick={() => goToPage(page)}
                    className={`w-10 h-10 rounded-lg ${
                      currentPage === page
                        ? "bg-black text-white"
                        : "bg-gray-100 hover:bg-gray-200"
                    }`}
                  >
                    {page}
                  </button>
                )
              )}
              <button
                disabled={currentPage === totalPages}
                onClick={() => goToPage(currentPage + 1)}
                className={`px-4 py-2 rounded-lg ${
                  currentPage === totalPages
                    ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                    : "bg-gray-200 hover:bg-gray-300"
                }`}
              >
                Next
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EcommerceFilters;
