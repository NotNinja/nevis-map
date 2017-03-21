(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('nevis')) :
  typeof define === 'function' && define.amd ? define('nevis-map', ['nevis'], factory) :
  (global.NevisMap = factory(global.Nevis));
}(this, (function (nevis) { 'use strict';

  nevis = 'default' in nevis ? nevis['default'] : nevis;

  // TODO: Complete

  /**
   * TODO: Document
   *
   * @param {number} hash -
   * @param {*} key -
   * @param {*} value -
   * @param {?Entry} next -
   * @param {NevisMap~Options} options -
   * @public
   * @constructor
   * @extends Nevis
   */
  var Entry = nevis.extend('Entry', function(hash, key, value, next, options) {
    /**
     * TODO: Document
     *
     * @protected
     * @type {number}
     * @memberof Entry#
     */
    this.hash = hash;

    /**
     * TODO: Document
     *
     * @public
     * @type {*}
     * @memberof Entry#
     */
    this.key = key;

    /**
     * TODO: Document
     *
     * @public
     * @type {*}
     * @memberof Entry#
     */
    this.value = value;

    /**
     * TODO: Document
     *
     * @protected
     * @type {?Entry}
     * @memberof Entry#
     */
    this.next = next;

    /**
     * TODO: Document
     *
     * @private
     * @type {NevisMap~Options}
     * @memberof Entry#
     */
    this._options = options;
  }, {

    /**
     * @inheritdoc
     * @override
     * @memberof Entry#
     */
    equals: function(obj) {
      if (obj == null || !(obj instanceof Entry)) {
        return false
      }

      var options = this._options.equals;

      return new nevis.EqualsBuilder()
        .append(this.key, obj.key, options)
        .append(this.value, obj.value, options)
        .build()
    },

    /**
     * @inheritdoc
     * @override
     * @memberof Entry#
     */
    hashCode: function() {
      var options = this._options.hashCode;

      return nevis.hashCode(this.key, options) ^ nevis.hashCode(this.value, options)
    },

    /**
     * @inheritdoc
     * @override
     * @memberof Entry#
     */
    toString: function() {
      return this.key + '=' + this.value
    }

  });

  var entry = Entry;

  /**
   * TODO: Document
   *
   * @param {Array.<Array>} [entries] -
   * @param {NevisMap~Options} [options] -
   * @public
   * @constructor
   * @extends Nevis
   */
  var NevisMap = nevis.extend('NevisMap', function(entries, options) {
    // TODO: Complete

    /**
     * The options being used by this {@link NevisMap}.
     *
     * @private
     * @type {NevisMap~Options}
     * @memberof NevisMap#
     */
    this._options = options || {};
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
      this.entries().forEach(function(entry$$1) {
        callback.call(context, entry$$1[1], entry$$1[0], this);
      }, this);
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
     * If <code>key</code> was previously associated with a value, the old value is replaced with <code>value</code>.
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
     * Associates all of the key/value pairs within the specified <code>entries</code> in this {@link NevisMap}.
     *
     * If any key was previously associated with a value, the old value is replaced with the new value.
     *
     * <code>entries</code> can either be a multi-dimensional array where the array contains the <code>[key, value]</code>
     * pairs for each mapping or an instance of {@link NevisMap}.
     *
     * @param {Array.<Array>|NevisMap} [entries] - the key/value pairs (or {@link NevisMap} containing them) to be
     * associated
     * @return {NevisMap} A reference to this {@link NevisMap} for chaining purposes.
     * @public
     * @memberof NevisMap#
     */
    setAll: function(entries) {
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
      return new entry(hash, key, value, next, this._options)
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
    Entry: entry

  });

  /* istanbul ignore else */
  if (typeof Symbol === 'function') {
    NevisMap.prototype[Symbol.iterator] = function() {
      // TODO: Optimize, if needed
      var entries = this.entries();
      var iterator = entries[Symbol.iterator];

      return {
        next: function() {
          return iterator.next()
        }
      }
    };
  }

  var nevisMap = NevisMap;

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

  var index$2 = nevisMap;

  var index = index$2;

  return index;

})));

//# sourceMappingURL=nevis-map.js.map