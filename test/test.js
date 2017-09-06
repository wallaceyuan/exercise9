const css = require('../lib/css')
const assert = require('assert')
const fs = require('fs')
const path = require('path')

describe('css parse', function () {
  it('能够 parse `@import` ', function () {
    assert.deepEqual(
      css(
        fs.readFileSync(path.join(__dirname, './source/import.css'), 'utf-8')
      ),
      require('./expect/import')
    )
  })

  it('能够 parse `@charset` ', function () {
    assert.deepEqual(
      css(
        fs.readFileSync(path.join(__dirname, './source/charset.css'), 'utf-8')
      ),
      require('./expect/charset')
    )
  })
})