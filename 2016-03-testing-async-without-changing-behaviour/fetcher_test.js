/* @noflow */
/* eslint-disable no-console, no-undef */
class Fetcher {
  constructor() {
    this.error = false;
    this.result = null;
  }

  fetch() {
    console.log('A');
    $
      .ajax('/foo')
      .done((data) => {
        this.result = data;
      })
      .fail(() => {
        console.log('B');
        this.error = true;
      });
    console.log('C');
  }
}

suite('Fetcher', () => {
  test('MODIFIED BEHAVIOUR :( should set error when request fails', () => {
    console.log('Test one:');
    sinon
      .stub($, 'ajax')
      .returns($.Deferred().reject());
    const fetcher = new Fetcher();
    fetcher.fetch();
    assert.equal(true, fetcher.error);
    $.ajax.restore();
  });

  test('UNMODIFIED BEHAVIOUR :) should set error when request fails', () => {
    console.log('Test two:');
    let ajaxDeferred = null;
    sinon.stub($, 'ajax', () => {
      ajaxDeferred = $.Deferred();
    });
    const fetcher = new Fetcher();
    fetcher.fetch();
    ajaxDeferred.reject();
    assert.equal(true, fetcher.error);
    $.ajax.restore();
  });
});
