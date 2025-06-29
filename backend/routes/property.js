const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const { getProperties, newProperty, getSingleProperty, updateProperty, deleteProperty, createReview, getReviews, deleteReviews } = require("../controllers/propertyController");
const { isAuthenticatedUser, authorizeRoles } = require("../middlewares/authenticate");
const { getAdminProducts } = require("../controllers/productController");

const upload = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname, "..", "uploads/property"));
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname);
    },
  }),
});

router.route("/properties").get(getProperties);
router.route('/property/:id').get(getSingleProperty)

router.route('/review').put(isAuthenticatedUser,createReview)

// Admin routes
router.route("/admin/properties").get(isAuthenticatedUser,authorizeRoles('admin'),getAdminProducts)
router.route("/admin/property/new").post(isAuthenticatedUser,authorizeRoles('admin'),upload.array('images'),newProperty)
router.route('/admin/property/:id').put(isAuthenticatedUser,authorizeRoles('admin'),upload.array('images'),updateProperty)
router.route('/admin/property/:id').delete(isAuthenticatedUser,authorizeRoles('admin'),deleteProperty)
router.route('/admin/reviews').get(isAuthenticatedUser,authorizeRoles('admin'),getReviews)
router.route('/admin/review').delete(isAuthenticatedUser,authorizeRoles('admin'),deleteReviews)
module.exports = router;
