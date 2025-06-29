const mongoose = require('mongoose')

const propertySchema = new mongoose.Schema({
  // Basic Property Information
  title: {
    type: String,
    required: [true, "Please enter property name"],
    trim: true,
    maxLength: [100, "Property name cannot exceed 100 characters"],
  },
  description: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },
  ratings: {
    type: String,
    default: 0,
  },
  images: [
    {
      image: {
        type: String,
        required: true,
      },
    },
  ],
  category: {
    type: String,
    required: [true, "Please enter property category"],
    enum: {
      values: [
        "Apartments",
        "Villas",
        "Flats",
        "Plots",
        "Office Spaces",
        "Retail Spaces",
        "Warehouses",
        "Bachelors",
        "Studios",
        "Independent Houses"
      ],
      message: "Please select a valid property category",
    },
  },
  // Property Type
  propertyType: {
    type: String,
    required: true,
    enum: {
      values: ["rental", "lease", "maintenance"],
      message:
        "Please select a valid property type (rental, lease, or maintenance)",
    },
  },
  // BHK Configuration
  bhk: {
    type: Number,
    min: 0,
    max: 4,
  },
  // Property Features
  bedrooms: {
    type: Number,
    min: 0,
  },
  bathrooms: {
    type: Number,
    min: 0,
  },
  squareFootage: {
    type: Number,
    required: true,
    min: 0,
  },
  amenities: [
    {
      type: String,
      enum: [
        "pool",
        "gym",
        "parking",
        "garden",
        "pet-friendly",
        "air-conditioning",
        "kitchen",
        "wifi",
        "balcony",
        "rooftop",
        "security",
        "laundry",
        "housekeeping",
        "conference room",
        "loading dock",
        "cafeteria"
      ],
    },
  ],
  // Property Status
  available: {
    type: Boolean,
    default: true,
  },
  featured: {
    type: Boolean,
    default: false,
  },
  // Availability (Stock)
  totalUnits: {
    type: Number,
    required: true,
    min: 1,
  },
  rentedUnits: {
    type: Number,
    default: 0,
    min: 0,
  },
  numOfReviews: {
    type: Number,
    default: 0,
  },
  reviews: [
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
      rating: {
        type: String,
        required: true,
      },
      comment: {
        type: String,
        required: true,
      },
    },
  ],
  user: {
    type: mongoose.Schema.Types.ObjectId,
  },
  // Additional Details (Optional)
  yearBuilt: Number,
  // Timestamps
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  updatedAt: {
    type: Date,
    default: Date.now(),
  },
});

let schema = mongoose.model('Property',propertySchema)
module.exports = schema