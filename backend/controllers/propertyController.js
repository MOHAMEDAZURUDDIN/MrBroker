const Property = require("../models/propertyModel");
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncError = require("../middlewares/catchAsyncError");
const APIFeatures = require("../utils/apiFeatures");

// Get Properties  - /api/v1/properties
exports.getProperties = catchAsyncError(async (req, res, next) => {
  const resPerPage = 12;

  let buildQuery = () => {
    return new APIFeatures(Property.find(), req.query).search().filter();
  };
  const filteredPropertiesCount = await buildQuery().query.countDocuments({});
  const totalPropertiesCount = await Property.countDocuments({});
  let propertiesCount = totalPropertiesCount;

  if (filteredPropertiesCount !== totalPropertiesCount) {
    propertiesCount = filteredPropertiesCount;
  }

  const properties = await buildQuery().paginate(resPerPage).query;

  res.status(200).json({
    success: true,
    count: propertiesCount,
    resPerPage,
    properties,
  });
});

// create Property  - /api/v1/property/new
exports.newProperty = catchAsyncError(async (req, res, next) => {
  let images = [];
  let BASE_URL = process.env.BACKEND_URL;
  if (process.env.NODE_ENV === "production") {
    BASE_URL = `${req.protocol}://${req.get("host")}`;
  }

  if (req.files.length > 0) {
    req.files.forEach((file) => {
      let url = `${BASE_URL}/uploads/property/${file.originalname}`;
      images.push({ image: url });
    });
  }

  req.body.images = images;

  req.body.user = req.user.id;
  const property = await Property.create(req.body);
  res.status(201).json({
    success: true,
    property,
  });
});

//Get Single Property - api/v1/property/:id
exports.getSingleProperty = catchAsyncError(async (req, res, next) => {
  const property = await Property.findById(req.params.id).populate(
    "reviews.user",
    "name email"
  );

  if (!property) {
    return next(new ErrorHandler("Property not found", 400));
  }
  res.status(201).json({
    success: true,
    property,
  });
});

//Update Property - api/v1/property/:id
exports.updateProperty = catchAsyncError(async (req, res, next) => {
  let property = await Property.findById(req.params.id);

  if (!property) {
    return res.status(404).json({
      success: false,
      message: "Property not found",
    });
  }

  //uploading images
  let images = [];

  //if images not cleared we keep existing images
  if (req.body.imagesCleared === "false") {
    images = property.images;
  }

  let BASE_URL = process.env.BACKEND_URL;
  if (process.env.NODE_ENV === "production") {
    BASE_URL = `${req.protocol}://${req.get("host")}`;
  }

  if (req.files && req.files.length > 0) {
    for (const file of req.files) {
      let url = `${BASE_URL}/uploads/property/${file.originalname}`;
      images.push({ image: url });
    }
  }

  req.body.images = images;

  property = await Property.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({
    success: true,
    property,
  });
});

// Delete Property - api/v1/property/:id
exports.deleteProperty = catchAsyncError(async (req, res, next) => {
  const property = await Property.findById(req.params.id);

  if (!property) {
    return res.status(404).json({
      success: false,
      message: "Property not found",
    });
  }
  await property.remove();
  res.status(200).json({
    success: true,
    message: "Property Deleted!",
  });
});

// Create Review -api/v1/review
exports.createReview = catchAsyncError(async (req, res, next) => {
  const { propertyId, rating, comment } = req.body;

  const review = {
    user: req.user.id,
    rating,
    comment,
  };

  const property = await Property.findById(propertyId);
  //finding user review exists
  const isReviewed = property.reviews.find((review) => {
    return review.user.toString() == req.user.toString();
  });

  if (isReviewed) {
    //updating the  review
    property.reviews.forEach((review) => {
      if (review.user.toString() == req.user.id.toString()) {
        review.comment = comment;
        review.rating = rating;
      }
    });
  } else {
    //creating the review
    property.reviews.push(review);
    property.numOfReviews = property.reviews.length;
  }
  //find the average of the property reviews
  property.ratings =
    property.reviews.reduce((acc, review) => {
      return review.rating + acc;
    }, 0) / property.reviews.length;
  property.ratings = isNaN(property.ratings) ? 0 : property.ratings;

  await property.save({ validateBeforeSave: false });

  res.status(200).json({
    success: true,
  });
});

//Get Reviews - api/v1/reviews?id={propertyId}
exports.getReviews = catchAsyncError(async (req, res, next) => {
  const property = await Property.findById(req.query.id).populate(
    "reviews.user",
    "name email"
  );
  res.status(200).json({
    success: true,
    reviews: property.reviews,
  });
});

//Delete Review - api/v1/review/id=&productId=
exports.deleteReviews = catchAsyncError(async (req, res, next) => {
  const property = await Property.findById(req.query.propertyId);

  if(!property) {
    return res.status(404).json({
      success:false,
      message:"Property not found"
    })
  }
  //filtering the reviews which does match the deleting review id
  const reviews = property.reviews.filter(review => {
    return review._id.toString() !==  req.query.id.toString()
  })
  // number of reviews
  const numOfReviews = reviews.length;

  //finding the average with the filtered reviews
  let ratings =
    reviews.reduce((acc, review) => {
      return review.rating + acc;
    }, 0) / reviews.length;

  ratings = isNaN(ratings) ? 0 : ratings;

  // save Property document
  await Property.findByIdAndUpdate(req.query.propertyId, {
    reviews,
    numOfReviews,
    ratings,
  });

  res.status(200).json({
    success: true,
  });
});


// get admin properties   -api/v1/admin/properties
exports.getAdminProperties = catchAsyncError(async(req,res,next) => {
  const properties = await Property.find()
  res.status(200).send({
    success:true,
    properties
  })
})