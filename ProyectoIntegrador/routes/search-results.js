// search-results
const express = require("express")
const router = express.Router()

router.get("/resultados", searchResultsController.searchResults)


module.exports= router;