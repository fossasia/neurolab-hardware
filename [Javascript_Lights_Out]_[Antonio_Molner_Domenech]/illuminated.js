/**
Illuminated.js - A 2D lights and shadows rendering engine for HTML5
applications and games.

@module illuminated
**/

// Declare a root "class" for the static methods on the main namespace.
/**
@class illuminated
**/

/*
Copyright (C) 2012 Gaëtan Renaudeau <renaudeau.gaetan@gmail.com>
http://greweb.fr/illuminated.js/

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/

(function(cp){
  /**
  Vec2 represents a 2d position or a 2d vector.
  It is used everywhere in Illuminated.js.

  Vec2 is based on Box2d’s Vec2 except that in Illuminated.js a Vec2
  vector is immutable. It means every method creates a new Vec2 instance and
  you can safely use a same Vec2 instance everywhere because the immutability
  guarantees that properties will not be modified.

  @class Vec2
  @namespace illuminated
  @constructor
  @param {Number} [x=0] X coordinate for the vector.
  @param {Number} [y=0] Y coordinate for the vector.
  **/
  cp.Vec2 = function (x, y) {
    /**
    X coordinate for the vector.
    @property x
    @type Number
    @default 0
    **/
    this.x = x||0;

    /**
    Y coordinate for the vector.
    @property y
    @type Number
    @default 0
    **/
    this.y = y||0;
  }

  /**
  Returns a copy of this vector.
  @method copy
  @return {illuminated.Vec2} A new vector that is a copy of this vector.
  **/
  cp.Vec2.prototype.copy = function () {
    return new cp.Vec2(this.x, this.y);
  }

  /**
  Calculates the dot product of this vector and the given vector.
  @method dot
  @param {illuminated.Vec2} v A vector with which to calculate the dot product.
  @return {Number} The result of the dot product.
  **/
  cp.Vec2.prototype.dot = function (v) {
    return v.x*this.x + v.y*this.y;
  }

  /**
  Subtracts the given vector from this vector.
  @method sub
  @param {illuminated.Vec2} v A vector to subtract from this vector.
  @return {illuminated.Vec2} A new vector that is the result of the subtraction.
  **/
  cp.Vec2.prototype.sub = function (v) {
    return new cp.Vec2(this.x-v.x, this.y-v.y);
  }

  /**
  Adds the given vector to this vector.
  @method add
  @param {illuminated.Vec2} v A vector to add to this vector.
  @return {illuminated.Vec2} A new vector that is the result of the addition.
  **/
  cp.Vec2.prototype.add = function (v) {
    return new cp.Vec2(this.x+v.x, this.y+v.y);
  }

  /**
  Multiplies the given vector with this vector.
  @method mul
  @param {illuminated.Vec2} v A vector to multiply with this vector.
  @return {illuminated.Vec2} A new vector that is the result of the multiplication.
  **/
  cp.Vec2.prototype.mul = function (n) {
    return new cp.Vec2(this.x*n, this.y*n);
  }

  /**
  Returns the inverse of this vector.
  @method inv
  @return {illuminated.Vec2} A new vector that is the inverse of this vector.
  **/
  cp.Vec2.prototype.inv = function () {
    return this.mul(-1);
  }

  /**
  Calculates the squared distance between this vector and the given vector.
  @method dist2
  @param {illuminated.Vec2} v A vector with which the squared distance is calculated.
  @return {Number} The squared distance.
  **/
  cp.Vec2.prototype.dist2 = function (v) {
    var dx = this.x - v.x;
    var dy = this.y - v.y;
    return dx*dx + dy*dy;
  }

  /**
  Calculates the normalized form of this vector.
  @method normalize
  @return {illuminated.Vec2} A new vector in normalized form.
  **/
  cp.Vec2.prototype.normalize = function () {
    var length = Math.sqrt(this.length2());
    return new cp.Vec2(this.x/length, this.y/length);
  }

  /**
  Calculates the squared length of this vector.
  @method length2
  @return {Number} The squared length.
  **/
  cp.Vec2.prototype.length2 = function (v) {
    return this.x*this.x + this.y*this.y;
  }

  /**
  Returns a string representing this vector.
  @method toString
  @return {String} A string representing this vector.
  **/
  cp.Vec2.prototype.toString = function () {
    return this.x+","+this.y;
  }


  /**
  Determines if this vector is within the bounds defined by the given vectors.
  @method inBound
  @param {illuminated.Vec2} topleft A vector that is the top-left of the bounds.
  @param {illuminated.Vec2} bottomright A vector that is the bottom-right of the bounds.
  @return {Boolean} True if this vector is within the given bounds.
  **/
  cp.Vec2.prototype.inBound = function (topleft, bottomright) {
    return (topleft.x < this.x && this.x < bottomright.x
         && topleft.y < this.y && this.y < bottomright.y);
  }


  /**
  Abstract class for light objects.
  @class Light
  @constructor
  @param {Object} [options] Options to be applied to this light.
  @param {illuminated.Vec2} [options.position] Position of this light. (0,0) by default.
  @param {Number} [options.distance=100] Intensity of this light.
  @param {Number} [options.diffuse=0.8] How diffuse this light is.
  **/
  cp.Light = function (options) { extend(this, cp.Light.defaults, options);}

  cp.Light.defaults = {
    /**
    Position of this light. (0,0) by default.
    @property position
    @type Vec2
    @default new Vec2(0, 0)
    **/
    position: new cp.Vec2(),

    /**
    Intensity of this light.
    @property distance
    @type Number
    @default 100
    **/
    distance: 100,

    /**
    How diffuse this light is.
    @property diffuse
    @type Number
    @default 0.8
    **/
    diffuse: 0.8
  };
  
  /**
  Render the light onto the given context.
  @method render
  @param {CanvasRenderingContext2D} ctx The canvas context onto which the
  light will be rendered.
  **/
  cp.Light.prototype.render = function (ctx) { }

  /**
  Render a mask representing the visibility. (Used by DarkMask.)
  @method mask
  @param {CanvasRenderingContext2D} ctx The canvas context onto which the mask
  will be rendered.
  **/
  cp.Light.prototype.mask = function (ctx) {
    var c = this._getVisibleMaskCache();
    ctx.drawImage(
      c.canvas,
      Math.round(this.position.x-c.w/2),
      Math.round(this.position.y-c.h/2)
    );
  }

  /**
  Calculate the boundaries of this light using the light's distance.
  @method bounds
  @return {Object} An anonymous object with the properties topleft and
  bottomright. The property values are {{#crossLink "illuminated.Vec2"}}{{/crossLink}} objects representing the corners
  of the boundary.
  **/
  cp.Light.prototype.bounds = function () {
    return {
      topleft: new cp.Vec2(this.position.x-this.distance, this.position.y-this.distance),
      bottomright: new cp.Vec2(this.position.x+this.distance, this.position.y+this.distance)
    }
  }
  
  /**
  Return the center of this light.
  i.e. The position where the light intensity is the highest
  @method center
  @return {illuminated.Vec2} A new vector that represents the center of this light.
  **/
  cp.Light.prototype.center = function () {
    return new cp.Vec2( this.distance, this.distance );
  }

  /**
  Invoke a function for every sample generated by this light.
  @method forEachSample
  @param {Function} f Function to be called for every sample. The function will
  be passed a vector representing the position of the sample.
  **/
  // Implement it by spreading samples and calling f at each time
  cp.Light.prototype.forEachSample = function (f) { f(this.position); }

  /**
  Creates a canvas context with the visible mask rendered onto it.
  @private
  @method _getVisibleMaskCache
  @return {CanvasRenderingContext2D} A canvas context with the visible mask
  rendered onto it.
  **/
  cp.Light.prototype._getVisibleMaskCache = function () {
    // By default use a radial gradient based on the distance
    var d = Math.floor(this.distance*1.4);
    var hash = ""+d;
    if (this.vismaskhash != hash) {
      this.vismaskhash = hash;
      var c = this._vismaskcache = createCanvasAnd2dContext('vm'+this.id, 2*d, 2*d);
      var g = c.ctx.createRadialGradient(d, d, 0, d, d, d);
      g.addColorStop( 0, 'rgba(0,0,0,1)' );
      g.addColorStop( 1, 'rgba(0,0,0,0)' );
      c.ctx.fillStyle = g;
      c.ctx.fillRect(0, 0, c.w, c.h);
    }
    return this._vismaskcache;
  }

  /**
  Return a string hash key representing this lamp.
  @private
  @method _getHashCache
  @return {String} The hash key.
  **/
  cp.Light.prototype._getHashCache = function () {
    return [this.distance, this.diffuse].toString();
  }


  /**
  Abstract class for opaque objects.
  @class OpaqueObject
  @constructor
  @param {Object} [options] Options to be applied to this opaque object.
  @param {Number} [options.diffuse] How diffuse this opaque object should be.
  **/
  cp.OpaqueObject = function (options) { extend(this, cp.OpaqueObject.defaults, options); }

  cp.OpaqueObject.defaults = {
    /**
    How diffuse this opaque object should be.
    @property diffuse
    @type Number
    @default 0.8
    **/
    diffuse: 0.8
  };

  cp.OpaqueObject.uniqueId = 0;

  /**
  Fill ctx with the shadows projected by this opaque object at the origin
  point, constrained by the given bounds.
  @method cast
  @param {CanvasRenderingContext2D} ctx The canvas context onto which the
  shadows will be cast.
  @param {illuminated.Vec2} origin A vector that represents the origin for the casted shadows.
  @param {Object} bounds An anonymous object with the properties topleft and
  bottomright. The property values are {{#crossLink "illuminated.Vec2"}}{{/crossLink}} objects representing the corners
  of the boundary.
  **/
  cp.OpaqueObject.prototype.cast = function (ctx, origin, bounds) { }

  /**
  Draw the path of the opaque object shape onto the ctx.
  @method path
  @param {CanvasRenderingContext2D} ctx The context onto which the path will be
  drawn.
  **/
  cp.OpaqueObject.prototype.path = function (ctx) { }

  /**
  Calculate the boundaries of this opaque object.
  @method bounds
  @return {Object} An anonymous object with the properties topleft and
  bottomright. The property values are {{#crossLink "illuminated.Vec2"}}{{/crossLink}} objects representing the corners
  of the boundary.
  **/
  cp.OpaqueObject.prototype.bounds = function () { return { topleft: new cp.Vec2(), bottomright: new cp.Vec2() } }

  /**
  Determine if the given point is inside the object.
  @method contains
  @param {illuminated.Vec2} point The point to be checked.
  @return {Boolean} True if the opaque object contains the given point.
  **/
  cp.OpaqueObject.prototype.contains = function (point) { return false }


  // LIGHTS

  /**
  A circular light rendered as a radial gradient. Lamps can also be "oriented"
  in a specific direction.
  @class Lamp
  @extends illuminated.Light
  @constructor
  @example
      new Lamp({
        position: new Vec2(12, 34),
        distance: 100,
        diffuse: 0.8,
        color: 'rgba(250,220,150,0.8)',
        radius: 0,
        samples: 1,
        angle: 0,
        roughness: 0
      })
  @param {Object} [options] Options to be applied to this lamp.
  @param {illuminated.Vec2} [options.position] Position of this lamp. (0,0) by default.
  @param {Number} [options.distance=100] Intensity of this lamp.
  @param {Number} [options.diffuse=0.8] How diffuse this lamp is.
  @param {String} [options.color='rgba(250,220,150,0.8)'] The color emitted by
  the lamp. The color can be specified in any CSS format.
  @param {Number} [options.radius=0] The size of the lamp. Bigger lamps cast
  smoother shadows.
  @param {Number} [options.samples=1] The number of points which will be used
  for shadow projection. It defines the quality of the rendering.
  @param {Number} [options.angle=0] The angle of the orientation of the lamp.
  @param {Number} [options.roughness=0] The roughness of the oriented effect.
  **/
  cp.Lamp = function (options) { extend(this, cp.Light.defaults, cp.Lamp.defaults, options);
    if(this.id===0){this.id=++cp.Lamp.uniqueId} }
  inherit(cp.Lamp, cp.Light);

  cp.Lamp.defaults = {
    /**
     * The id of this light object.
     * @property id
     * @type Number
     * @default 0
     */
    id: 0,

    /**
    The color emitted by the lamp. The color can be specified in any CSS format.
    @property color
    @type String
    @default 'rgba(250,220,150,0.8)'
    **/
    color: 'rgba(250,220,150,0.8)',

    /**
    The size of the lamp. Bigger lamps cast smoother shadows.
    @property radius
    @type Number
    @default 0
    **/
    radius: 0,

    /**
    The number of points which will be used for shadow projection. It defines
    the quality of the rendering.
    @property samples
    @type Number
    @default 1
    **/
    samples: 1,

    /**
    The angle of the orientation of the lamp.
    @property angle
    @type Number
    @default 0
    **/
    angle: 0,

    /**
    The roughness of the oriented effect.
    @property roughness
    @type Number
    @default 0
    **/
    roughness: 0
  };

  cp.Lamp.uniqueId = 0;

  /**
  Return a string hash key representing this lamp.
  @private
  @method _getHashCache
  @return {String} The hash key.
  **/
  cp.Lamp.prototype._getHashCache = function () {
    return [this.color, this.distance, this.diffuse, this.angle, this.roughness, this.samples, this.radius].toString();
  }

  /**
  Return the center of this lamp.
  i.e. The position where the lamp intensity is the highest
  @method center
  @return {illuminated.Vec2} A new vector that represents the center of this lamp.
  **/
  cp.Lamp.prototype.center = function () {
    return new cp.Vec2( (1-Math.cos(this.angle)*this.roughness)*this.distance, (1+Math.sin(this.angle)*this.roughness)*this.distance );
  }

  /**
  Calculate the boundaries of this lamp based on its properties.
  @method bounds
  @return {Object} An anonymous object with the properties topleft and
  bottomright. The property values are {{#crossLink "illuminated.Vec2"}}{{/crossLink}} objects representing the corners
  of the boundary.
  **/
  cp.Light.prototype.bounds = function () {
    var orientationCenter = new cp.Vec2(Math.cos(this.angle), -Math.sin(this.angle)).mul(this.roughness*this.distance);
    return {
      topleft: new cp.Vec2(this.position.x+orientationCenter.x-this.distance, this.position.y+orientationCenter.y-this.distance),
      bottomright: new cp.Vec2(this.position.x+orientationCenter.x+this.distance, this.position.y+orientationCenter.y+this.distance)
    }
  }

  /**
  Render a mask representing the visibility. (Used by DarkMask.)
  @method mask
  @param {CanvasRenderingContext2D} ctx The canvas context onto which the mask
  will be rendered.
  **/
  cp.Lamp.prototype.mask = function (ctx) {
    var c = this._getVisibleMaskCache();
    var orientationCenter = new cp.Vec2(Math.cos(this.angle), -Math.sin(this.angle)).mul(this.roughness*this.distance);
    ctx.drawImage(c.canvas, Math.round(this.position.x+orientationCenter.x-c.w/2), Math.round(this.position.y+orientationCenter.y-c.h/2));
  }

  /**
  Renders this lamp's gradient onto a cached canvas at the given position.
  @private
  @method _getGradientCache
  @param {illuminated.Vec2} center The position of the center of the gradient to render.
  **/
  cp.Lamp.prototype._getGradientCache = function (center) {
    var hashcode = this._getHashCache();
    if (this._cacheHashcode == hashcode) {
      return this._gcache;
    }
    this._cacheHashcode = hashcode;
    var d = Math.round(this.distance);
    var D = d*2;
    var cache = createCanvasAnd2dContext('gc'+this.id, D, D);
    var g = cache.ctx.createRadialGradient(center.x, center.y, 0, d, d, d);
    g.addColorStop( Math.min(1,this.radius/this.distance), this.color );
    g.addColorStop( 1, cp.getRGBA(this.color, 0) );
    cache.ctx.fillStyle = g;
    cache.ctx.fillRect(0, 0, cache.w, cache.h);
    return this._gcache = cache;
  }

  /**
  Render the lamp onto the given context (without any shadows).
  @method render
  @param {CanvasRenderingContext2D} ctx The canvas context onto which the
  light will be rendered.
  **/
  cp.Lamp.prototype.render = function (ctx) {
    var center = this.center();
    var c = this._getGradientCache(center);
    ctx.drawImage(c.canvas, Math.round(this.position.x-center.x), Math.round(this.position.y-center.y))
  }

  /**
  Invoke a function for every sample generated by this lamp. The samples for
  lamps are generated using a "spiral" algorithm.
  @method forEachSample
  @param {Function} f Function to be called for every sample. The function will
  be passed a vector representing the position of the sample.
  **/
  cp.Lamp.prototype.forEachSample = function (f) {
    // "spiral" algorithm for spreading emit samples
    for (var s=0, l=this.samples; s<l; ++s) {
      var a = s * GOLDEN_ANGLE;
      var r = Math.sqrt(s/this.samples)*this.radius;
      var delta = new cp.Vec2( Math.cos(a)*r, Math.sin(a)*r );
      f( this.position.add(delta) );
    }
  }

  /*
   * Spot
   * TODO
   */
  /*
  cp.Spot = function (position, distance) {
    this.position = position;
    this.distance = position;
  }
  inherit(cp.Spot, cp.Light);
  */

  /*
   * Neon
   * TODO
   */
  /*
  cp.Neon = function (position, distance, color, size, samples, angle) {
    this.position = position;
    this.distance = distance;
    this.color = color;
    this.size = size || 10;
    this.samples = samples || 2;
    this.angle = angle || 0;
  }
  inherit(cp.Neon, cp.Light);

  // TODO .center() and .bound()

  cp.Neon.prototype.render = function (ctx) {
    var center = this.center();
    var c = this._getGradientCache(center);
    ctx.drawImage(c.canvas, Math.round(this.position.x-center.x), Math.round(this.position.y-center.y))
  }

  cp.Neon.prototype._getHashCache = function () {
    return [this.color, this.distance, this.angle].toString();
  }

  cp.Neon.prototype._getGradientCache = function (center) {
    var hashcode = this._getHashCache();
    if (this.cacheHashcode == hashcode) {
      return this.gradientCache;
    }
    this.cacheHashcode = hashcode;
    var d = Math.round(this.distance);
    var D = d*2;
    var cache = createCanvasAnd2dContext(D, D);
    var g = cache.ctx.createRadialGradient(center.x, center.y, 0, d, d, d);
    g.addColorStop( 0, this.color );
    g.addColorStop( 1, 'rgba(0,0,0,0)' );
    cache.ctx.fillStyle = g;
    cache.ctx.fillRect(0, 0, cache.w, cache.h);
    return this.gradientCache = cache;
  }
  */

  /*
   * OrientedNeon: Neon with one side
   * TODO
   */
  /*
  cp.OrientedNeon = function (position, distance) {
    this.position = position;
    this.distance = position;
  }
  inherit(cp.OrientedNeon, cp.Light);
  */

  /* Get tangents from (0,0) to circle of radius with given center, for cp.DiscObject.prototype.cast. */
  function getTan2(radius, center) {
    var epsilon = getTan2.epsilon || 1e-6, // constant
        x0, y0, len2, soln, 
        solutions=[], a=radius;
    if (typeof a === "object" && typeof center === "number") { 
      var tmp=a; center = a; center = tmp; // swap
    }
    if (typeof center === "number") {
        // getTan2(radius:number, x0:number, y0:number)
        x0 = center;
        y0 = arguments[2];
        len2 = x0*x0 + y0*y0;
    } else {
        // getTans2(radius:number, center:object={x:x0,y:y0})
        x0 = center.x;
        y0 = center.y;
        len2 = center.length2();
    }
    // t = +/- Math.acos( (-a*x0 +/- y0 * Math.sqrt(x0*x0 + y0*y0 - a*a))/(x0*x0 + y0*y) );
    var len2a = y0 * Math.sqrt(len2 - a*a), 
        tt = Math.acos( (-a*x0 + len2a) / len2 ),
        nt = Math.acos( (-a*x0 - len2a) / len2 ),
        tt_cos = a*Math.cos(tt),
        tt_sin = a*Math.sin(tt),
        nt_cos = a*Math.cos(nt),
        nt_sin = a*Math.sin(nt);
    
    // Note: cos(-t) == cos(t) and sin(-t) == -sin(t) for all t, so find
    // x0 + a*cos(t), y0 +/- a*sin(t)
    // Solutions have equal lengths
    soln = new cp.Vec2(x0 + nt_cos, y0 + nt_sin);
    solutions.push(soln);
    var dist0 = soln.length2();
    
    soln = new cp.Vec2(x0 + tt_cos, y0 - tt_sin);
    solutions.push(soln);
    var dist1 = soln.length2();
    if ( Math.abs(dist0 - dist1) < epsilon ) return solutions;
    
    soln = new cp.Vec2(x0 + nt_cos, y0 - nt_sin);
    solutions.push(soln);
    var dist2 = soln.length2();
    // Changed order so no strange X of light inside the circle. Could also sort results.
    if ( Math.abs(dist1 - dist2) < epsilon ) return [soln, solutions[1]]; 
    if ( Math.abs(dist0 - dist2) < epsilon ) return [solutions[0], soln];
    
    soln = new cp.Vec2(x0 + tt_cos, y0 + tt_sin);
    solutions.push(soln);
    var dist3 = soln.length2();
    if ( Math.abs(dist2 - dist3) < epsilon ) return [solutions[2], soln];
    if ( Math.abs(dist1 - dist3) < epsilon ) return [solutions[1], soln];
    if ( Math.abs(dist0 - dist3) < epsilon ) return [solutions[0], soln];
    
    // return all 4 solutions if no matching vector lengths found.
    return solutions;
  }
  
  // OBJECTS

  /**
  A circular, opaque object.
  @class DiscObject
  @extends illuminated.OpaqueObject
  @constructor
  @param {Object} [options] Options to be applied to this disc object.
  @param {illuminated.Vec2} [options.center] Position of the disc object.
  @param {Number} [options.radius] Size of the disc object.
  @param {Number} [options.diffuse] How diffuse this disc object should be.
  **/
  cp.DiscObject = function (options) { extend(this, cp.OpaqueObject.defaults, cp.DiscObject.defaults, options); }
  inherit(cp.DiscObject, cp.OpaqueObject);

  cp.DiscObject.defaults = {
    /**
    Position of the disc object.
    @property center
    @type Vec2
    @default new illuminated.Vec2()
    **/
    center: new cp.Vec2(),

    /**
    Size of the disc object.
    @property radius
    @type Number
    @default 20
    **/
    radius: 20
  };

  /**
  Fill ctx with the shadows projected by this disc object from the origin
  point, constrained by the given bounds.
  @method cast
  @param {CanvasRenderingContext2D} ctx The canvas context onto which the
  shadows will be cast.
  @param {illuminated.Vec2} origin A vector that represents the origin for the casted shadows.
  @param {Object} bounds An anonymous object with the properties topleft and
  bottomright. The property values are {{#crossLink "illuminated.Vec2"}}{{/crossLink}} objects representing the corners
  of the boundary.
  **/
  cp.DiscObject.prototype.cast = function (ctx, origin, bounds) {
    var m = this.center;
    var originToM = m.sub(origin);

    // FIXED: this method was wrong... TODO must see http://en.wikipedia.org/wiki/Tangent_lines_to_circles
    // var d = new cp.Vec2(originToM.y, -originToM.x).normalize().mul(this.radius);
    
    // var a = this.center.add(d);
    // var b = this.center.add(d.inv());

    // var originToA = a.sub(origin);
    // var originToB = b.sub(origin);
    
    var tangentLines = getTan2(this.radius, originToM);
    var originToA = tangentLines[0];
    var originToB = tangentLines[1];
    var a = originToA.add(origin);
    var b = originToB.add(origin);

    // normalize to distance
    var distance = ((bounds.bottomright.x-bounds.topleft.x)+(bounds.bottomright.y-bounds.topleft.y))/2;
    originToM = originToM.normalize().mul(distance);
    originToA = originToA.normalize().mul(distance);
    originToB = originToB.normalize().mul(distance);
    
    // project points
    var oam = a.add(originToM);
    var obm = b.add(originToM);
    var ap = a.add(originToA);
    var bp = b.add(originToB);

    var start = Math.atan2(originToM.x, -originToM.y);
    ctx.beginPath();
    path(ctx, [b, bp, obm, oam, ap, a], true);
    ctx.arc(m.x, m.y, this.radius, start, start+Math.PI);
    ctx.fill();
  }

  /**
  Draw the path of the disc onto the ctx.
  @method path
  @param {CanvasRenderingContext2D} ctx The context onto which the path will be
  drawn.
  **/
  cp.DiscObject.prototype.path = function (ctx) {
    ctx.arc(this.center.x, this.center.y, this.radius, 0, _2PI);
  }
  
  /**
  Calculate the boundaries of this disc object.
  @method bounds
  @return {Object} An anonymous object with the properties topleft and
  bottomright. The property values are {{#crossLink "illuminated.Vec2"}}{{/crossLink}} objects representing the corners
  of the boundary.
  **/
  cp.DiscObject.prototype.bounds = function () { 
    return { 
      topleft: new cp.Vec2(this.center.x-this.radius, this.center.y-this.radius),
      bottomright: new cp.Vec2(this.center.x+this.radius, this.center.y+this.radius)
    } 
  }
  
  /**
  Determine if the given point is inside the disc.
  @method contains
  @param {illuminated.Vec2} point The point to be checked.
  @return {Boolean} True if the disc object contains the given point.
  **/
  cp.DiscObject.prototype.contains = function (point) { 
    return point.dist2(this.center) < this.radius*this.radius;
  }

  /**
  An opaque polygon object
  @class PolygonObject
  @extends illuminated.OpaqueObject
  @constructor
  @param {Object} [options] Options to be applied to this disc object.
  @param {Array} options.points An array of
  {{#crossLink "illuminated.Vec2"}}{{/crossLink}} points that define the polygon.
  @param {Number} [options.diffuse] How diffuse this polygon object should be.
  **/
  cp.PolygonObject = function (options) { extend(this, cp.OpaqueObject.defaults, cp.PolygonObject.defaults, options); }
  inherit(cp.PolygonObject, cp.OpaqueObject);

  cp.PolygonObject.defaults = {
    /**
    An array of {{#crossLink "illuminated.Vec2"}}{{/crossLink}} points that
    define the polygon.
    @property points
    @type Array
    @default []
    **/
    points: []
  };

  /**
  Calculate the boundaries of this polygon object.
  @method bounds
  @return {Object} An anonymous object with the properties topleft and
  bottomright. The property values are {{#crossLink "illuminated.Vec2"}}{{/crossLink}} objects representing the corners
  of the boundary.
  **/
  cp.PolygonObject.prototype.bounds = function () {
    var topleft = this.points[0].copy();
    var bottomright = topleft.copy();
    for (var p=1, l=this.points.length; p<l; ++p) {
      var point = this.points[p];
      if (point.x > bottomright.x)
        bottomright.x = point.x;
      if (point.y > bottomright.y)
        bottomright.y = point.y;
      if (point.x < topleft.x)
        topleft.x = point.x;
      if (point.y < topleft.y)
        topleft.y = point.y;
    }
    return { topleft: topleft, bottomright: bottomright };
  }

  /**
  Determine if the given point is inside the polygon.
  @method contains
  @param {illuminated.Vec2} point The point to be checked.
  @return {Boolean} True if the polygon object contains the given point.
  **/
  cp.PolygonObject.prototype.contains = function (p) {
    var points = this.points;
    var i, l=points.length, j=l-1;
    var x = p.x, y = p.y;
    var oddNodes = false;

    for (i=0; i<l; i++) {
      if ((points[i].y< y && points[j].y>=y
      ||   points[j].y< y && points[i].y>=y)
      &&  (points[i].x<=x || points[j].x<=x)) {
        if (points[i].x+(y-points[i].y)/(points[j].y-points[i].y)*(points[j].x-points[i].x)<x) {
          oddNodes=!oddNodes; 
        }
      }
      j=i; 
    }
    return oddNodes;
  }

  /**
  Draw the path of the polygon onto the ctx.
  @method path
  @param {CanvasRenderingContext2D} ctx The context onto which the path will be
  drawn.
  **/
  cp.PolygonObject.prototype.path = function (ctx) {
    path(ctx, this.points);
  }

  /**
  Fill ctx with the shadows projected by this polygon object from the origin
  point, constrained by the given bounds.
  @method cast
  @param {CanvasRenderingContext2D} ctx The canvas context onto which the
  shadows will be cast.
  @param {illuminated.Vec2} origin A vector that represents the origin for the casted shadows.
  @param {Object} bounds An anonymous object with the properties topleft and
  bottomright. The property values are {{#crossLink "illuminated.Vec2"}}{{/crossLink}} objects representing the corners
  of the boundary.
  **/
  cp.PolygonObject.prototype.cast = function (ctx, origin, bounds) {
    // The current implementation of projection is a bit hacky... do you have a proper solution?
    var distance = ((bounds.bottomright.x-bounds.topleft.x)+(bounds.bottomright.y-bounds.topleft.y))/2;
    this._forEachVisibleEdges(origin, bounds, function (a, b, originToA, originToB, aToB) {
      var m; // m is the projected point of origin to [a, b]
      var t = originToA.inv().dot(aToB)/aToB.length2();
      if (t<0)
        m = a;
      else if(t>1)
        m = b;
      else
        m = a.add( aToB.mul(t) );
      var originToM = m.sub(origin);
      // normalize to distance
      originToM = originToM.normalize().mul(distance);
      originToA = originToA.normalize().mul(distance);
      originToB = originToB.normalize().mul(distance);
      // project points
      var oam = a.add(originToM);
      var obm = b.add(originToM);
      var ap = a.add(originToA);
      var bp = b.add(originToB);
      ctx.beginPath();
      path(ctx, [a, b, bp, obm, oam, ap]);
      ctx.fill();
    });
  }


  /**
  Invoke a function for each of the visible edges in this polygon.
  @private
  @method _forEachVisibleEdges
  @param {illuminated.Vec2} origin A vector that represents the origin for the casted shadows.
  @param {Object} bounds An anonymous object with the properties topleft and
  bottomright. The property values are {{#crossLink "illuminated.Vec2"}}{{/crossLink}} objects representing the corners
  of the boundary of this polygon.
  @param {Function} f The function to be invoked.
  **/
  cp.PolygonObject.prototype._forEachVisibleEdges = function (origin, bounds, f) {
    var a = this.points[this.points.length-1], b;
    for (var p=0, l=this.points.length; p<l; ++p, a=b) {
      b = this.points[p];
      if (a.inBound(bounds.topleft, bounds.bottomright)) {
         var originToA = a.sub(origin);
         var originToB = b.sub(origin);
         var aToB = b.sub(a);
         var normal = new cp.Vec2(aToB.y, -aToB.x);
         if (normal.dot(originToA) < 0) {
           f(a, b, originToA, originToB, aToB);
         }
       }
    }
  }

  /**
  A rectangular, opqaue object.
  @class RectangleObject
  @extends illuminated.PolygonObject
  @constructor
  @param {Object} [options] Options to be applied to this rectangle object.
  @param {illuminated.Vec2} [options.topleft] A vector that is the top-left of the rectangle.
  @param {illuminated.Vec2} [options.bottomright] A vector that is the bottom-right of the rectangle.
  **/
  cp.RectangleObject = function (options) {
    extend(this, cp.OpaqueObject.defaults, cp.PolygonObject.defaults, cp.RectangleObject.defaults, options);
    this.syncFromTopleftBottomright();
  }
  inherit(cp.RectangleObject, cp.PolygonObject);

  cp.RectangleObject.defaults = {
    /**
    A vector that is the top-left of the rectangle.
    @property topleft
    @type Vec2
    @default new illuminated.Vec2()
    **/
    topleft: new cp.Vec2(),
    
    /**
    A vector that is the bottom-right of the rectangle.
    @property bottomright
    @type Vec2
    @default new illuminated.Vec2()
    **/
    bottomright: new cp.Vec2()
  };

  /**
  Initializes the points defining this rectangle based on its specified bounds.
  @private
  @method syncFromTopleftBottomright
  **/
  cp.RectangleObject.prototype.syncFromTopleftBottomright = function () {
    var a = this.topleft;
    var b = new cp.Vec2(this.bottomright.x, this.topleft.y);
    var c = this.bottomright;
    var d = new cp.Vec2(this.topleft.x, this.bottomright.y);
    this.points = [a, b, c, d];
  }

  /**
  Draws this rectangle onto the given context
  @method fill
  @param {CanvasRenderingContext2D} ctx The canvas context onto which the
  rectangle should be drawn.
  **/
  cp.RectangleObject.prototype.fill = function (ctx) {
    var x = this.points[0].x, y = this.points[0].y;
    ctx.rect(x, y, this.points[2].x-x, this.points[2].y-y);
  }

  /**
  An opaque line object
  @class LineObject
  @extends illuminated.PolygonObject
  @constructor
  @param {Object} [options] Options to be applied to this line object.
  @param {illuminated.Vec2} [options.a] A vector that is the first point of the line.
  @param {illuminated.Vec2} [options.b] A vector that is the last point of the line.
  **/
  cp.LineObject = function (options) {
    extend(this, cp.OpaqueObject.defaults, cp.PolygonObject.defaults, cp.LineObject.defaults, options);
    this.syncFromAB();
  }
  inherit(cp.LineObject, cp.PolygonObject);

  cp.LineObject.defaults = {
    /**
    A vector that is the first point of the line.
    @property a
    @type Vec2
    @default new illuminated.Vec2()
    **/
    a: new cp.Vec2(),

    /**
    A vector that is the last point of the line.
    @property b
    @type Vec2
    @default new illuminated.Vec2()
    **/
    b: new cp.Vec2()
  };

  /**
  Initializes the points defining this line based on its options.
  @private
  @method syncFromAB
  **/
  cp.LineObject.prototype.syncFromAB = function () {
    this.points = [this.a, this.b];
  }

  /**
  Defines the lighting of one light through a set of opaque objects.
  @class Lighting 
  @constructor
  @param {Object} [options] Options to be applied to this light.
  @param {illuminated.Light} [options.light] The source of the lighting.
  @param {Array} [options.objects] An array of 
  {{#crossLink "illuminated.OpaqueObject"}}{{/crossLink}} objects which stop the
  light and create shadows.
  **/
  cp.Lighting = function (opts) {
    extend(this, cp.Lighting.defaults, opts);
  }

  cp.Lighting.defaults = {
    /**
    The source of the lighting.
    @property light
    @type Light
    @default new illuminated.Light()
    **/
    light: new cp.Light(),

    /**
    An array of {{#crossLink "illuminated.OpaqueObject"}}{{/crossLink}} objects
    which stop the light and create shadows.
    @property objects
    @type Array
    @default []
    **/
    objects: []
  }

  /**
  Create caches for canvas contexts.
  @private
  @method createCache
  @param {Number} w Width of the contexts.
  @param {Number} h Height of the contexts.
  **/
  cp.Lighting.prototype.createCache = function (w, h) {
    this._cache = createCanvasAnd2dContext('lc', w,h);
    this._castcache = createCanvasAnd2dContext('lcc', w,h);
  }

  /**
  Draw the shadows that are cast by the objects. You usually don't have to use
  it if you use render().
  @method cast
  @param {CanvasRenderingContext2D} ctxoutput The canvas context onto which the
  shadows will be drawn.
  **/
  cp.Lighting.prototype.cast = function (ctxoutput) {
    var light = this.light;
    var n = light.samples;
    var c = this._castcache;
    var ctx = c.ctx;
    ctx.clearRect(0, 0, c.w, c.h);
    // Draw shadows for each light sample and objects
    ctx.fillStyle = "rgba(0,0,0,"+Math.round(100/n)/100+")"; // Is there any better way?
    var bounds = light.bounds();
    var objects = this.objects;
    light.forEachSample(function (position) {
      var sampleInObject = false;
      for (var o=0, l=objects.length; o<l; ++o) {
        if (objects[o].contains(position)) {
          ctx.fillRect(bounds.topleft.x, bounds.topleft.y, bounds.bottomright.x-bounds.topleft.x, bounds.bottomright.y-bounds.topleft.y);
          return;
        }
      }
      objects.forEach(function(object) {
        object.cast(ctx, position, bounds);
      });
    });
    // Draw objects diffuse - the intensity of the light penetration in objects
    objects.forEach(function(object) {
      var diffuse = object.diffuse===undefined ? 0.8 : object.diffuse;
      diffuse *= light.diffuse;
      ctx.fillStyle = "rgba(0,0,0,"+(1-diffuse)+")";
      ctx.beginPath();
      object.path(ctx);
      ctx.fill();
    });
    ctxoutput.drawImage(c.canvas, 0, 0);
  }

  /**
  Compute the shadows to cast.
  @method compute
  @param {Number} w Width of the canvas context.
  @param {Number} h Height of the canvas context.
  **/
  cp.Lighting.prototype.compute = function (w,h) {
    if (!this._cache || this._cache.w != w || this._cache.h != h)
      this.createCache(w, h);
    var ctx = this._cache.ctx;
    var light = this.light;
    ctx.save();
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    
    light.render(ctx);
    ctx.globalCompositeOperation = "destination-out";
    this.cast(ctx);
    ctx.restore();
  }

  /**
  Draws the light and shadows onto the given context.
  @method render
  @param {CanvasRenderingContext2D} ctx The canvas context on which to draw.
  **/
  cp.Lighting.prototype.render = function (ctx) {
    ctx.drawImage(this._cache.canvas, 0, 0);
  }

  /**
  Returns the light and shadows onto the given context as canvas.
  @method render
  @return {Canvas} The picture of the light and shadow.
  **/
  cp.Lighting.prototype.getCanvas = function () {
    return this._cache.canvas;
  }

  /**
  Defines the dark layer which hides the dark area not illuminated by a set of
  lights.
  @class DarkMask
  @constructor
  @param {Object} [options] Options to be applied to this light.
  @param {Array} [options.lights] An array of
  {{#crossLink "illuminated.Light"}}{{/crossLink}} objects that illuminate the
  rest of the scene.
  @param {String} [options.color] The color of the dark area in RGBA format.
  **/
  cp.DarkMask = function (options) {
    extend(this, cp.DarkMask.defaults, options);
  }

  cp.DarkMask.defaults = {
    /**
    An array of {{#crossLink "illuminated.Light"}}{{/crossLink}} objects that
    illuminate the rest of the scene.
    @property lights
    @type Array
    @default []
    **/
    lights: [],

    /**
    The color of the dark area in RGBA format.
    @property color
    @type String
    @default 'rgba(0,0,0,0.9)'
    **/
    color: 'rgba(0,0,0,0.9)'
  }

  /**
  Compute the dark mask.
  @method compute
  @param {Number} w Width of the canvas context.
  @param {Number} h Height of the canvas context.
  **/
  cp.DarkMask.prototype.compute = function (w,h) {
    if (!this._cache || this._cache.w != w || this._cache.h != h)
      this._cache = createCanvasAnd2dContext('dm', w,h);
    var ctx = this._cache.ctx;
    ctx.save();
    ctx.clearRect(0, 0, w, h);
    ctx.fillStyle = this.color;
    ctx.fillRect(0, 0, w, h);
    ctx.globalCompositeOperation = "destination-out";
    this.lights.forEach(function(light){
      light.mask(ctx);
    });
    ctx.restore();
  }

  /**
  Draws the dark mask onto the given context.
  @method render
  @param {CanvasRenderingContext2D} ctx The canvas context on which to draw.
  **/
  cp.DarkMask.prototype.render = function (ctx) {
    ctx.drawImage(this._cache.canvas, 0, 0);
  }

  /**
  Gives the dark mask back.
  @method render
  @return {CanvasRenderingContext2D} The canvas context.
  **/
  cp.DarkMask.prototype.getCanvas = function (ctx) {
    return this._cache.canvas;
  }  

   // UTILS & CONSTANTS

  var GOLDEN_ANGLE = Math.PI * (3 - Math.sqrt(5));
  var _2PI = 2*Math.PI;
  
  /**
  @class illuminated
  **/

  /**
  Creates a canvas and context with the given width and height.
  @static
  @method createCanvasAnd2dContext
  @for illuminated
  @param {Number} w Width of the canvas context.
  @param {Number} h Height of the canvas context.
  @return {Object} An anonymous object with "canvas", "ctx", "w" and "h"
  properties.
  **/
  function createCanvasAnd2dContext (id, w, h) {
    var iid = 'illujs_'+id;
    var canvas = document.getElementById(iid);

    if(canvas === null) {
      var canvas = document.createElement("canvas");
      canvas.id = iid;
      canvas.width = w;
      canvas.height = h;
      canvas.style.display = 'none';
      document.body.appendChild(canvas);
    }

    var ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    canvas.width = w;
    canvas.height = h;

    return { canvas: canvas, ctx: ctx, w: w, h: h };
  }
  cp.createCanvasAnd2dContext = createCanvasAnd2dContext;

  /**
  Draw a path defined by the given points onto the given ctx.
  @static
  @method path
  @param {CanvasRenderingContext2D} ctx The context onto which the properties
  should be drawn.
  @param {Array} points An array of
  {{#crossLink "illuminated.Vec2"}}{{/crossLink}} objects that define the path.
  @param {Boolean} dontJoinLast True if the last point should joined with the
  first point in the path.
  **/
  function path (ctx, points, dontJoinLast) {
    var p = points[0];
    ctx.moveTo(p.x, p.y);
    for (var i=1, l=points.length; i<l; ++i) {
      p = points[i];
      ctx.lineTo(p.x, p.y);
    }
    if (!dontJoinLast && points.length>2) {
      p = points[0];
      ctx.lineTo(p.x, p.y);
    }
  }
  cp.path = path;

  /**
  Converts a CSS color string into RGBA format.
  @static 
  @method getRGBA
  @param {String} color Color in any CSS format.
  @param {Number} alpha Alpha value for produced color.
  @return {String} Color in RGBA format.
  **/
  var getRGBA = cp.getRGBA = (function(){
    //var ctx = createCanvasAnd2dContext('grgba', 1, 1);
    var canvas = document.createElement("canvas");
    canvas.width = canvas.height = 1;
    var ctx = canvas.getContext("2d");

    return function (color, alpha) {
      ctx.clearRect(0,0,1,1);
      ctx.fillStyle = color;
      ctx.fillRect(0,0,1,1);
      var d = ctx.getImageData(0,0,1,1).data;
      return 'rgba('+[ d[0], d[1], d[2], alpha ]+')';
    }
  }());

  /**
  Converts a CSS color string into an anonymous object with color and alpha
  properties.
  @static 
  @method extractColorAndAlpha
  @param {String} color Color in any CSS format.
  @return {Object} An anonymous object with the properties color and alpha.
  The color property is a string in hex format and the alpha property is a
  number from 0.0 to 1.0, rounded to 3 decimal places.
  **/
  var extractColorAndAlpha = cp.extractColorAndAlpha = (function(){
    //var ctx = createCanvasAnd2dContext('grgba', 1, 1);
    var canvas = document.createElement("canvas");
    canvas.width = canvas.height = 1;
    var ctx = canvas.getContext("2d");

    function toHex (value) { 
      var s = value.toString(16); 
      if(s.length==1) s = "0"+s;
      return s;
    }

    return function (color) {
      ctx.clearRect(0,0,1,1);
      ctx.fillStyle = color;
      ctx.fillRect(0,0,1,1);
      var d = ctx.getImageData(0,0,1,1).data;
      return {
        color: "#"+toHex(d[0])+toHex(d[1])+toHex(d[2]),
        alpha: Math.round(1000*d[3]/255)/1000
      };
    }
  }());

  /**
  Merges the properties from the given parameters into the first parameter.
  @static 
  @method extend
  @param {Object} mergeInto An object to merge into.
  @param {Object} mergeFrom* Objects to merge from.
  **/
  function extend (extending /* , arg1, arg2, ... */) {
    for (var a=1, l=arguments.length; a<l; ++a) {
      var source = arguments[a];
      if (source) {
        for (var prop in source)
          if (source[prop] !== void 0)
            extending[prop] = source[prop];
      }
    }
  }
  cp.extend = extend;

  function emptyFn() {};
  function inherit (cls, base) { // from Box2d
    var tmpCtr = cls;
    emptyFn.prototype = base.prototype;
    cls.prototype = new emptyFn;
    cls.prototype.constructor = tmpCtr;
    cls.prototype.__super = base.prototype;
  }
  cp.inherit = inherit;

}(window.illuminated={}));
