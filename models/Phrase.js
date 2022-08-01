const mongoose = require('mongoose')

const PhraseSchema = new mongoose.Schema({
  eng: {
    type: String,
  },
  swe: {
    type: String,
  },
})

module.exports =
  mongoose.models.Phrase || mongoose.model('Phrase', PhraseSchema)
