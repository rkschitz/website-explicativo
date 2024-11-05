const express = require("express");

const SuggestionApi = require("../api/suggestion");
const authMiddleware = require("../middleware/auth");
const router = express.Router();

router.get("/", authMiddleware(), SuggestionApi.findSuggestions);
router.post("/", authMiddleware(), SuggestionApi.createSuggestion);
router.put("/:id", authMiddleware(), SuggestionApi.updateSuggestion);
router.delete("/:id", authMiddleware(), SuggestionApi.deleteSuggestion);

module.exports = router;