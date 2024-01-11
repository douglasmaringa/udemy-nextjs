'use client'
import React, { useState } from 'react';

function AddProducts() {
  // State for basic product information
  const [productName, setProductName] = useState('');
  const [numberOfImages, setNumberOfImages] = useState(0);
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState(0);
  const [inStock, setInStock] = useState(0);
  const [colorsAvailable, setColorsAvailable] = useState('');

  // State for image upload
  const [images, setImages] = useState([]);

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement logic for submitting the form (e.g., send data to backend)
    console.log('Form submitted:', {
      productName,
      numberOfImages,
      description,
      price,
      inStock,
      colorsAvailable,
      images,
    });
  };

  return (
    <div className="max-w-3xl mx-auto mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Basic Product Information */}
      <div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <h2 className="text-2xl font-bold mb-4">Basic Information</h2>

          {/* Product Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Product Name</label>
            <input
              type="text"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              className="input input-bordered w-full"
              placeholder="Enter product name"
              required
            />
          </div>

          {/* Number of Images */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Number of Images</label>
            <input
              type="number"
              value={numberOfImages}
              onChange={(e) => setNumberOfImages(e.target.value)}
              className="input input-bordered w-full"
              placeholder="Enter number of images"
              required
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="input input-bordered w-full"
              placeholder="Enter product description"
              required
            />
          </div>

          {/* Price */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Price</label>
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="input input-bordered w-full"
              placeholder="Enter product price"
              required
            />
          </div>

          {/* Number in Stock */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Number in Stock</label>
            <input
              type="number"
              value={inStock}
              onChange={(e) => setInStock(e.target.value)}
              className="input input-bordered w-full"
              placeholder="Enter number in stock"
              required
            />
          </div>

          {/* Colors Available */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Colors Available</label>
            <input
              type="text"
              value={colorsAvailable}
              onChange={(e) => setColorsAvailable(e.target.value)}
              className="input input-bordered w-full"
              placeholder="Enter colors available"
              required
            />
          </div>

          {/* Submit Button */}
          <button type="submit" className="btn btn-primary w-full">
            Add Product
          </button>
        </form>
      </div>

      {/* Image Upload */}
      <div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <h2 className="text-2xl font-bold mb-4">Image Upload</h2>

          {/* Image Upload Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Upload Images</label>
            <input
              type="file"
              multiple
              onChange={(e) => setImages([...e.target.files])}
              className="input input-bordered w-full"
            />
          </div>

          {/* Image Preview (Optional) */}
          {images.length > 0 && (
            <div>
              <h3 className="text-lg font-medium mb-2">Image Preview</h3>
              <div className="grid grid-cols-3 gap-4">
                {images.map((image, index) => (
                  <img
                    key={index}
                    src={URL.createObjectURL(image)}
                    alt={`Image ${index + 1}`}
                    className="w-full h-20 object-cover rounded-md"
                  />
                ))}
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

export default AddProducts;
