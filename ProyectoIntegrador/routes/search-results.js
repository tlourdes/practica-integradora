// search-results
const express = require("express")
const router = express.Router()

router.get("/", searchResultsController.searchResults)


module.exports= router;