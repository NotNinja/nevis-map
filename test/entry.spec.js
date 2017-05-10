/*
 * Copyright (C) 2017 Alasdair Mercer, !ninja
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

'use strict';

var expect = require('chai').expect;

var Entry = require('../src/entry');

describe('entry:Entry', function() {
  // TODO: Complete

  describe('#hash', function() {
    it('should be hash passed to constructor');
  });

  describe('#key', function() {
    it('should be key passed to constructor');
  });

  describe('#next', function() {
    it('should be value passed to constructor');
  });

  describe('#value', function() {
    it('should be value passed to constructor');
  });

  describe('#equals', function() {
    it('should use options passed to constructor');

    context('when specified object is equal to entry', function() {
      it('should return true');
    });

    context('when specified object is not equal to entry', function() {
      it('should return false');
    });

    context('when specified object is null', function() {
      it('should return false');
    });

    context('when specified object is not an Entry', function() {
      it('should return false');
    });
  });

  describe('#hashCode', function() {
    it('should return hash code generated for entry');

    it('should use options passed to constructor');
  });

  describe('#toString', function() {
    it('should return simple string representation of entry');
  });
});
