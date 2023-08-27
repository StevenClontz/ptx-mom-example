var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "colophon-1",
  "level": "1",
  "url": "colophon-1.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "   example.org   https:\/\/example.org   copyright  "
},
{
  "id": "chapter-title",
  "level": "1",
  "url": "chapter-title.html",
  "type": "Chapter",
  "number": "1",
  "title": "Chapter title",
  "body": " Chapter title  Negative Numbers and Exponents  This is an introduction, providing articulation between the MOM problem and the contents of the text. For example, you might cross-reference a result or example given previosly. (HTML Note: The resizer for the knowl is not functioning yet.)   "
},
{
  "id": "exercise-1",
  "level": "2",
  "url": "chapter-title.html#exercise-1",
  "type": "Checkpoint",
  "number": "1.0.1",
  "title": "Negative Numbers and Exponents.",
  "body": "Negative Numbers and Exponents  This is an introduction, providing articulation between the MOM problem and the contents of the text. For example, you might cross-reference a result or example given previosly. (HTML Note: The resizer for the knowl is not functioning yet.)  "
},
{
  "id": "colophon-2",
  "level": "1",
  "url": "colophon-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
