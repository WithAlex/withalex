'use strict'

var visit = require('unist-util-visit')
var h = require("hastscript");

module.exports = function () {
  return function (tree) {
    visit(tree, (node) => {
      if (
        node.type === 'textDirective' ||
        node.type === 'leafDirective' ||
        node.type === 'containerDirective'
      ) {


        const data = node.data || (node.data = {})
        const hast = h(node.name, node.attributes)

        if (node.type === 'containerDirective') {
          data.hTag = hast.tagName
        }

        data.hName = hast.tagName
        data.hProperties = hast.properties
      }
    })
  }
}
