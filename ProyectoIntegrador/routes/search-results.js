// search-results
const express = require("express")
const router = express.Router()
const searchResultsController= require("../controllers/search-results")

router.get("/", searchResultsController.searchResults)


module.exports= router;