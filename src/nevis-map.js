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

var Nevis = require('nevis')

var Entry = require('./entry')

/**
 * TODO: Document
 *
 * @param {Array.<Array>} [entries] -
 * @param {NevisMap~Options} [options] -
 * @public
 * @constructor
 * @extends Nevis
 */
var NevisMap = Nevis.extend('NevisMap', function(entries, options) {
  // TODO: Complete

  /**
   * The options being used by this {@link NevisMap}.
   *
   * @private
   * @type {NevisMap~Options}
   * @memberof NevisMap#
   */
  this._options = options || {}
}, {

  /**
   * Removes all mappings from this {@link NevisMap}.
   *
   * @return {void}
   * @public
   * @memberof NevisMap#
   */
  clear: function() {
    // TODO: Complete
  },

  /**
   * Removes the mapping for the specified <code>key</code> from this {@link NevisMap}, if present.
   *
   * This method will return <code>true</code> if a mapping for <code>key</code> existed and has been removed, otherwise
   * it will return <code>false</code>.
   *
   * @param {*} key - the key whose mapping is to be removed
   * @return {boolean} <code>true</code> if a mapping for <code>key</code> existed and has been removed; otherwise
   * <code>false</code>.
   * @public
   * @memberof NevisMap#
   */
  delete: function(key) {
    // TODO: Complete
    return false
  },

  /**
   * Returns the mappings within this {@link NevisMap}.
   *
   * The mappings are returned in a multi-dimensional array where the array contains the <code>[key, value]</code> pairs
   * for each mapping.
   *
   * @return {Array.<Array>} A multi-dimensional array containing the key/value pairs for each mapping.
   * @public
   * @memberof NevisMap#
   */
  entries: function() {
    // TODO: Complete
    return []
  },

  /**
   * Returns the mappings within this {@link NevisMap}.
   *
   * @return {Entry[]} The mappings.
   * @public
   * @memberof NevisMap#
   */
  entrySet: function() {
    // TODO: Complete
    return []
  },

  /**
   * Iterates over the mappings within this {@link NevisMap}, invoking the specified <code>callback</code> function once
   * per key/value pair.
   *
   * @param {NevisMap~ForEachCallback} callback - the function to be called for each key/value pair
   * @param {Object} [context] - the context (value for <code>this</code>) to be used when invoking
   * <code>callback</code>
   * @return {void}
   * @public
   * @memberof NevisMap#
   */
  forEach: function(callback, context) {
    // TODO: Optimize, if needed
    this.entries().forEach(function(entry) {
      callback.call(context, entry[1], entry[0], this)
    }, this)
  },

  /**
   * Returns the value to which the specified <code>key</code> is mapped in this {@link NevisMap}, where possible.
   *
   * A return value of <code>undefined</code> does not necessarily indicate that this {@link NevisMap} contains no
   * mapping for <code>key</code> as it's also possible that this {@link NevisMap} explicitly maps <code>key</code> to
   * <code>undefined</code>. The {@link NevisMap#has} operation may be used to distinguish these two cases.
   *
   * @param {*} key - the key whose associated value is to be returned
   * @return {*} The value to which <code>key</code> is mapped, or <code>undefined</code> if no mapping exists for
   * <code>key</code>.
   * @public
   * @memberof NevisMap#
   */
  get: function(key) {
    // TODO: Complete
    return null
  },

  /**
   * This is a convenient shorthand for the {@link NevisMap#hasKey} method that fits well with ES2015's
   * <code>Map</code> API.
   *
   * @param {*} key - the key whose presence is to be checked
   * @return {boolean} <code>true</code> if this {@link NevisMap} contains a mapping for <code>key</code>; otherwise
   * <code>false</code>.
   * @public
   * @memberof NevisMap#
   */
  has: function(key) {
    return this.hasKey(key)
  },

  /**
   * Returns whether this {@link NevisMap} contains a mapping for the specified <code>key</code>.
   *
   * @param {*} key - the key whose presence is to be checked
   * @return {boolean} <code>true</code> if this {@link NevisMap} contains a mapping for <code>key</code>; otherwise
   * <code>false</code>.
   * @public
   * @memberof NevisMap#
   */
  hasKey: function(key) {
    // TODO: Complete
    return false
  },

  /**
   * Returns whether this {@link NevisMap} contains a mapping for the specified <code>value</code>.
   *
   * @param {*} value - the value whose presence is to be checked
   * @return {boolean} <code>true</code> if this {@link NevisMap} contains a mapping for <code>value</code>; otherwise
   * <code>false</code>.
   * @public
   * @memberof NevisMap#
   */
  hasValue: function(value) {
    // TODO: Complete
    return false
  },

  /**
   * Returns the keys contained within this {@link NevisMap}.
   *
   * @return {Array} The mapped keys.
   * @public
   * @memberof NevisMap#
   */
  keys: function() {
    // TODO: Complete
    return []
  },

  /**
   * Removes the mapping for the specified <code>key</code> from this {@link NevisMap}, if present.
   *
   * This method returns the value with which <code>key</code> was previously associated, or <code>undefined</code> no
   * mapping existed for <code>key</code>.
   *
   * A return value of <code>undefined</code> does not necessarily indicate that no mapping existed for
   * <code>key</code> as it's also possible that key was explicitly mapped to <code>undefined</code>. If this certainty
   * is needed, use in conjunction with {@link NevisMap#hasKey} or use {@link NevisMap#delete} instead.
   *
   * @param {*} key - the key whose mapping is to be removed
   * @return {*} The previous value associated with <code>key</code> or <code>undefined</code> if there was no mapping.
   * @public
   * @memberof NevisMap#
   */
  remove: function(key) {
    // TODO: Complete
    return null
  },

  /**
   * Associates the specified <code>value</code> with the <code>key</code> provided in this {@link NevisMap}.
   *
   * If <code>key</code> was previously associated with a value, the old value is replaced with <code>value</code> and
   * is returned by this method.
   *
   * A return value of <code>undefined</code> does not necessarily indicate that no mapping existed for
   * <code>key</code> as it's also possible that key was explicitly mapped to <code>undefined</code>. If this certainty
   * is needed, use in conjunction with {@link NevisMap#hasKey}.
   *
   * @param {*} key - the key with which <code>value</code> is to be associated
   * @param {*} value - the value to be associated with <code>key</code>
   * @return {NevisMap} A reference to this {@link NevisMap} for chaining purposes.
   * @public
   * @memberof NevisMap#
   */
  set: function(key, value) {
    // TODO: Complete
    return this
  },

  /**
   * Returns the number of mappings within this {@link NevisMap}.
   *
   * @return {number} The size.
   * @public
   * @memberof NevisMap#
   */
  size: function() {
    // TODO: Complete
    return 0
  },

  /**
   * Returns an ES2015 <code>Map</code> containing the mappings within this {@link NevisMap}.
   *
   * @return {Map} A <code>Map</code> containing all key/value pairs.
   * @public
   * @memberof NevisMap#
   */
  toMap: function() {
    // TODO: Optimize, if needed (would passing this work? if so, is that any better?)
    return new Map(this.entries())
  },

  /**
   * Returns the values contained within this {@link NevisMap}.
   *
   * @return {Array} The mapped values.
   * @public
   * @memberof NevisMap#
   */
  values: function() {
    // TODO: Complete
    return []
  },

  /**
   * @inheritdoc
   * @override
   * @memberof NevisMap#
   */
  equals: function(obj) {
    // TODO: Complete
    return false
  },

  /**
   * @inheritdoc
   * @override
   * @memberof NevisMap#
   */
  hashCode: function() {
    // TODO: Complete
    return 0
  },

  /**
   * @inheritdoc
   * @override
   * @memberof NevisMap#
   */
  toString: function() {
    // TODO: Complete
    return ''
  },

  /**
   * Creates an {@link Entry} based on the information provided.
   *
   * @param {number} hash - the hash code for <code>key</code>
   * @param {*} key - the mapping key
   * @param {*} value - the mapping value
   * @param {?Entry} next - the next {@link Entry} (may be <code>null</code>)
   * @return {Entry} The newly created {@link Entry}.
   * @private
   * @memberof NevisMap#
   */
  _createEntry: function(hash, key, value, next) {
    return new Entry(hash, key, value, next, this._options)
  }

}, {

  /**
   * TODO: Document
   *
   * @param {number} hash -
   * @param {*} key -
   * @param {*} value -
   * @param {?Entry} next -
   * @param {NevisMap~Options} options -
   * @public
   * @static
   * @constructor
   * @extends Nevis
   * @memberof NevisMap
   */
  Entry: Entry

})

/* istanbul ignore else */
if (typeof Symbol === 'function') {
  NevisMap.prototype[Symbol.iterator] = function() {
    // TODO: Optimize, if needed
    var entries = this.entries()
    var iterator = entries[Symbol.iterator]

    return {
      next: function() {
        return iterator.next()
      }
    }
  }
}

module.exports = NevisMap

/**
 * TODO: Document
 *
 * @callback NevisMap~ForEachCallback
 * @param {*} value -
 * @param {*} key -
 * @param {NevisMap} map -
 */

/**
 * TODO: Document
 *
 * @typedef Object NevisMap~Options
 * @property {Nevis~EqualsOptions} [equals] -
 * @property {Nevis~HashCodeOptions} [hashCode] -
 */
