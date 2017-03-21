/*
 * Copyright (C) 2017 Alasdair Mercer, Skelp
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

'use strict'

var expect = require('chai').expect

var Entry = require('../src/entry')
var NevisMap = require('../src/nevis-map')

describe('nevis-map:NevisMap', function() {
  // TODO: Complete
  // TODO: Add test cases for options parameter

  it('should be a constructor', function() {
    expect(NevisMap).to.be.a('function')
    expect(new NevisMap()).to.be.an('object')
  })

  it('should contain any entries passed to constructor initially')

  context('when no entries are passed to constructor', function() {
    it('should be empty initially')
  })

  context('when null is passed to constructor', function() {
    it('should be empty initially')
  })

  describe('.Entry', function() {
    it('should reference the internal Entry constructor', function() {
      expect(NevisMap.Entry).to.equal(Entry)
    })
  })

  describe('#clear', function() {
    it('should remove all mappings')
  })

  describe('#delete', function() {
    it('should remove the mapping for specified key and return true')

    context('when no mapping for specified key exists', function() {
      it('should not modify map and return false')
    })
  })

  describe('#entries', function() {
    it('should return array representation of entries for each mapping')

    it('should never contain more than one entry from same key')

    context('when map is empty', function() {
      it('should return an empty array')
    })
  })

  describe('#entrySet', function() {
    it('should return entries for each mapping')

    it('should never contain more than one entry from same key')

    context('when map is empty', function() {
      it('should return an empty array')
    })
  })

  describe('#forEach', function() {
    it('should iterate over entries and invoke callback function with correct arguments')

    context('when map is empty', function() {
      it('should not invoke callback function')
    })

    context('when no context is specified', function() {
      it('should invoke callback function with any context')
    })
  })

  describe('#get', function() {
    it('should return value mapped to specified key')

    context('when no mapping for specified key exists', function() {
      it('should return undefined')
    })
  })

  describe('#has', function() {
    it('should delegate to NevisMap#hasKey')
  })

  describe('#hasKey', function() {
    context('when mapping for specified key exists', function() {
      it('should return true')
    })

    context('when no mapping for specified key exists', function() {
      it('should return false')
    })
  })

  describe('#hasValue', function() {
    context('when any key is mapped to specified value', function() {
      it('should return true')
    })

    context('when no key is mapped to specified value', function() {
      it('should return false')
    })
  })

  describe('#keys', function() {
    it('should return array containing all mapped keys')

    it('should never contain duplicate keys')

    context('when map is empty', function() {
      it('should return an empty array')
    })
  })

  describe('#remove', function() {
    it('should remove the mapping for specified key and return previously associated value')

    context('when no mapping for specified key exists', function() {
      it('should not modify map and return undefined')
    })
  })

  describe('#set', function() {
    it('should associated value with specified key and return previously associated value')

    context('when no mapping for specified key exists', function() {
      it('should associated value with specified key and return undefined')
    })
  })

  describe('#size', function() {
    it('should return number of mappings')

    context('when map is empty', function() {
      it('should return zero')
    })
  })

  describe('#toMap', function() {
    it('should return a Map containing all mappings')

    context('when map is empty', function() {
      it('should return empty Map')
    })
  })

  describe('#values', function() {
    it('should return array containing all mapped values')

    context('when value is associated with multiple keys', function() {
      it('should contain duplicate values')
    })

    context('when map is empty', function() {
      it('should return an empty array')
    })
  })

  describe('#equals', function() {
    // TODO: Complete
  })

  describe('#hashCode', function() {
    // TODO: Complete
  })

  describe('#toString', function() {
    // TODO: Complete
  })

  describe('#@@iterator', function() {
    // TODO: Complete
  })
})
