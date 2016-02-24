/*global suite, test, $, Fetcher, sinon, assert*/
/*eslint-disable no-console */
'use strict';

window.Fetcher = class Fetcher {
  constructor () {
    this.error = false
    this.result = null
  }

  fetch () {
    console.log('A')
    $.ajax('/foo').done(data => {
      this.result = data
    }).fail(() => {
      console.log('B')
      this.error = true
    })
    console.log('C')
  }
}

suite('Fetcher', function () {
  test('MODIFIED BEHAVIOUR 😡 should set error when request fails', function () {
    console.log('Test one:')
    sinon.stub($, 'ajax').returns($.Deferred().reject())
    let fetcher = new Fetcher()
    fetcher.fetch()
    assert.equal(true, fetcher.error)
  })

  test('UNMODIFIED BEHAVIOUR 😄 should set error when request fails', function () {
    console.log('Test two:')
    let ajaxDeferred = null
    sinon.stub($, 'ajax', function () {
      return ajaxDeferred = $.Deferred()
    })
    let fetcher = new Fetcher()
    fetcher.fetch()
    ajaxDeferred.reject()
    assert.equal(true, fetcher.error)
  })
})
