pragma solidity >=0.5.8 <=0.8.29;

/**
 * @title Elliptic Curve Library
 * @dev Library providing arithmetic operations over elliptic curves.
 * @author Witnet Foundation
 * SPDX-License-Identifier: MIT
 */
library EC {

  /// @dev Modular euclidean inverse of a number (mod p).
  /// @param _x The number
  /// @param _pp The modulus
  /// @return q such that x*q = 1 (mod _pp)
  function invMod(uint256 _x, uint256 _pp) public pure returns (uint256) {
    if (_x == 0 || _x == _pp || _pp == 0) {
      require(false,  "Invalid number");
    }
    uint256 q = 0;
    uint256 newT = 1;
    uint256 r = _pp;
    uint256 newR = _x;
    uint256 t;
    while (newR != 0) {
      t = r / newR;
      (q, newT) = (newT, addmod(q, (_pp - mulmod(t, newT, _pp)), _pp));
      (r, newR) = (newR, r - t * newR );
    }

    return q;
  }

    /** @dev invMod_optim: Takes base, modulus, and result, verifies (base*user_result) % modulus==1, and returns result.
      *                   It's far cheaper to verify an inverse operation on-chain than calculate it, so we allow the user to pass their own result.
      *
      * The idea was find in BigNumber library for solidity (https://github.com/zcoinofficial/solidity-BigNumber)
      *
      * parameter: instance base
      * parameter: instance modulus
      * parameter: instance user_result
      * returns: user_result.
      */
    function invMod_optim(uint base, uint modulus, uint user_result) public pure returns(uint){
        require(mulmod(base, user_result, modulus) == 1, "Modular inverse result provided by the user does not match the params.");
        return user_result;
     }


  /// @dev Modular exponentiation, b^e % _pp.
  /// Source: https://github.com/androlo/standard-contracts/blob/master/contracts/src/crypto/ECCMath.sol
  /// @param _base base
  /// @param _exp exponent
  /// @param _pp modulus
  /// @return r such that r = b**e (mod _pp)
  function expMod(uint256 _base, uint256 _exp, uint256 _pp) public pure returns (uint256) {
    if (_base == 0)
      return 0;
    if (_exp == 0)
      return 1;
    if (_pp == 0)
      require(false,  "Modulus is zero");
    uint256 r = 1;
    uint256 bit = 2 ** 255;

    assembly {
      for { } gt(bit, 0) { }{
        r := mulmod(mulmod(r, r, _pp), exp(_base, iszero(iszero(and(_exp, bit)))), _pp)
        r := mulmod(mulmod(r, r, _pp), exp(_base, iszero(iszero(and(_exp, div(bit, 2))))), _pp)
        r := mulmod(mulmod(r, r, _pp), exp(_base, iszero(iszero(and(_exp, div(bit, 4))))), _pp)
        r := mulmod(mulmod(r, r, _pp), exp(_base, iszero(iszero(and(_exp, div(bit, 8))))), _pp)
        bit := div(bit, 16)
      }
    }

    return r;
  }

  /// @dev Converts a point (x, y, z) expressed in Jacobian coordinates to affine coordinates (x', y', 1).
  /// @param _x coordinate x
  /// @param _y coordinate y
  /// @param _z coordinate z
  /// @param _pp the modulus
  /// @return (x', y') affine coordinates
  function toAffine(
    uint256 _x,
    uint256 _y,
    uint256 _z,
    uint256 _pp)
  public pure returns (uint256, uint256)
  {
    uint256 zInv = invMod(_z, _pp);
    uint256 zInv2 = mulmod(zInv, zInv, _pp);
    uint256 x2 = mulmod(_x, zInv2, _pp);
    uint256 y2 = mulmod(_y, mulmod(zInv, zInv2, _pp), _pp);

    return (x2, y2);
  }

  function toAffine3(
    uint256 _x,
    uint256 _y,
    uint256 _z,
    uint256 _pp)
  public pure returns (uint256, uint256, uint256)
  {
    uint256 zInv = invMod(_z, _pp);
    // uint256 zInv = mulmod(_z, _y, _pp);
    uint256 zInv2 = mulmod(zInv, zInv, _pp);
    uint256 x2 = mulmod(_x, zInv2, _pp);
    uint256 y2 = mulmod(_y, mulmod(zInv, zInv2, _pp), _pp);

    return (x2, y2, 1);
  }

  function toAffine3_optim(
    uint256 _x,
    uint256 _y,
    uint256 _z,
    uint256 res_of_inv,
    uint256 _pp)
  public pure returns (uint256, uint256, uint256)
  {
    uint256 zInv = invMod_optim(_z, _pp, res_of_inv);
    uint256 zInv2 = mulmod(zInv, zInv, _pp);
    uint256 x2 = mulmod(_x, zInv2, _pp);
    uint256 y2 = mulmod(_y, mulmod(zInv, zInv2, _pp), _pp);

    return (x2, y2, 1);
  }

  /// @dev Derives the y coordinate from a compressed-format point x.
  /// @param _prefix parity byte (0x02 even, 0x03 odd)
  /// @param _x coordinate x
  /// @param _aa constant of curve
  /// @param _bb constant of curve
  /// @param _pp the modulus
  /// @return y coordinate y
  function deriveY(
    uint8 _prefix,
    uint256 _x,
    uint256 _aa,
    uint256 _bb,
    uint256 _pp)
  public pure returns (uint256)
  {
    // x^3 + ax + b
    uint256 y2 = addmod(mulmod(_x, mulmod(_x, _x, _pp), _pp), addmod(mulmod(_x, _aa, _pp), _bb, _pp), _pp);
    y2 = expMod(y2, (_pp + 1) / 4, _pp);
    // uint256 cmp = yBit ^ y_ & 1;
    uint256 y = (y2 + _prefix) % 2 == 0 ? y2 : _pp - y2;

    return y;
  }

  /// @dev Check whether point (x,y) is on curve defined by a, b, and _pp.
  /// @param _x coordinate x of P1
  /// @param _y coordinate y of P1
  /// @param _aa constant of curve
  /// @param _bb constant of curve
  /// @param _pp the modulus
  /// @return true if x,y in the curve, false else
  function isOnCurve(
    uint _x,
    uint _y,
    uint _aa,
    uint _bb,
    uint _pp)
  public pure returns (bool)
  {
    if (0 == _x || _x == _pp || 0 == _y || _y == _pp) {
      return false;
    }
    // y^2
    uint lhs = mulmod(_y, _y, _pp);
    // x^3
    uint rhs = mulmod(mulmod(_x, _x, _pp), _x, _pp);
    if (_aa != 0) {
      // x^3 + a*x
      rhs = addmod(rhs, mulmod(_x, _aa, _pp), _pp);
    }
    if (_bb != 0) {
      // x^3 + a*x + b
      rhs = addmod(rhs, _bb, _pp);
    }

    return lhs == rhs;
  }

  /// @dev Calculate inverse (x, -y) of point (x, y).
  /// @param _x coordinate x of P1
  /// @param _y coordinate y of P1
  /// @param _pp the modulus
  /// @return (x, -y)
  function ecInv(
    uint256 _x,
    uint256 _y,
    uint256 _pp)
  public pure returns (uint256, uint256)
  {
    return (_x, (_pp - _y) % _pp);
  }

  /// @dev Add two points (x1, y1) and (x2, y2) in affine coordinates.
  /// @param _x1 coordinate x of P1
  /// @param _y1 coordinate y of P1
  /// @param _x2 coordinate x of P2
  /// @param _y2 coordinate y of P2
  /// @param _aa constant of the curve
  /// @param _pp the modulus
  /// @return (qx, qy) = P1+P2 in affine coordinates
  function ecAdd(
    uint256 _x1,
    uint256 _y1,
    uint256 _x2,
    uint256 _y2,
    uint256 _aa,
    uint256 _pp)
    public pure returns(uint256, uint256)
  {
    uint x = 0;
    uint y = 0;
    uint z = 0;
    // Double if x1==x2 else add
    if (_x1==_x2) {
      (x, y, z) = jacDouble(
        _x1,
        _y1,
        1,
        _aa,
        _pp);
    } else {
      (x, y, z) = jacAdd(
        _x1,
        _y1,
        1,
        _x2,
        _y2,
        1,
        _pp);
    }
    // Get back to affine
    return toAffine(
      x,
      y,
      z,
      _pp);
  }

  /// @dev Substract two points (x1, y1) and (x2, y2) in affine coordinates.
  /// @param _x1 coordinate x of P1
  /// @param _y1 coordinate y of P1
  /// @param _x2 coordinate x of P2
  /// @param _y2 coordinate y of P2
  /// @param _aa constant of the curve
  /// @param _pp the modulus
  /// @return (qx, qy) = P1-P2 in affine coordinates
  function ecSub(
    uint256 _x1,
    uint256 _y1,
    uint256 _x2,
    uint256 _y2,
    uint256 _aa,
    uint256 _pp)
  public pure returns(uint256, uint256)
  {
    // invert square
    (uint256 x, uint256 y) = ecInv(_x2, _y2, _pp);
    // P1-square
    return ecAdd(
      _x1,
      _y1,
      x,
      y,
      _aa,
      _pp);
  }

  /// @dev Multiply point (x1, y1, z1) times d in affine coordinates.
  /// @param _k scalar to multiply
  /// @param _x coordinate x of P1
  /// @param _y coordinate y of P1
  /// @param _aa constant of the curve
  /// @param _pp the modulus
  /// @return (qx, qy) = d*P in affine coordinates
  function ecMul(
    uint256 _k,
    uint256 _x,
    uint256 _y,
    uint256 _aa,
    uint256 _pp)
  public pure returns(uint256, uint256)
  {
    // Jacobian multiplication
    (uint256 x1, uint256 y1, uint256 z1) = jacMul(
      _k,
      _x,
      _y,
      1,
      _aa,
      _pp);
    // Get back to affine
    return toAffine(
      x1,
      y1,
      z1,
      _pp);
  }

  /// @dev Adds two points (x1, y1, z1) and (x2 y2, z2).
  /// @param _x1 coordinate x of P1
  /// @param _y1 coordinate y of P1
  /// @param _z1 coordinate z of P1
  /// @param _x2 coordinate x of square
  /// @param _y2 coordinate y of square
  /// @param _z2 coordinate z of square
  /// @param _pp the modulus
  /// @return (qx, qy, qz) P1+square in Jacobian
  function jacAdd(
    uint256 _x1,
    uint256 _y1,
    uint256 _z1,
    uint256 _x2,
    uint256 _y2,
    uint256 _z2,
    uint256 _pp)
  internal pure returns (uint256, uint256, uint256)
  {
    if ((_x1==0)&&(_y1==0))
      return (_x2, _y2, _z2);
    if ((_x2==0)&&(_y2==0))
      return (_x1, _y1, _z1);
    // We follow the equations described in https://pdfs.semanticscholar.org/5c64/29952e08025a9649c2b0ba32518e9a7fb5c2.pdf Section 5

    uint[4] memory zs; // z1^2, z1^3, z2^2, z2^3
    zs[0] = mulmod(_z1, _z1, _pp);
    zs[1] = mulmod(_z1, zs[0], _pp);
    zs[2] = mulmod(_z2, _z2, _pp);
    zs[3] = mulmod(_z2, zs[2], _pp);

    // u1, s1, u2, s2
    zs = [
      mulmod(_x1, zs[2], _pp),
      mulmod(_y1, zs[3], _pp),
      mulmod(_x2, zs[0], _pp),
      mulmod(_y2, zs[1], _pp)
    ];
    if (zs[0] == zs[2]) {
      if (zs[1] != zs[3])
        require(false,  "Wrong data");
      else {
        require(false,  "Use double instead");
      }
    }
    uint[4] memory hr;
    //h
    hr[0] = addmod(zs[2], _pp - zs[0], _pp);
    //r
    hr[1] = addmod(zs[3], _pp - zs[1], _pp);
    //h^2
    hr[2] = mulmod(hr[0], hr[0], _pp);
    // h^3
    hr[3] = mulmod(hr[2], hr[0], _pp);
    // qx = -h^3  -2u1h^2+r^2
    uint256 qx = addmod(mulmod(hr[1], hr[1], _pp), _pp - hr[3], _pp);
    qx = addmod(qx, _pp - mulmod(2, mulmod(zs[0], hr[2], _pp), _pp), _pp);
    // qy = -s1*z1*h^3+r(u1*h^2 -x^3)
    uint256 qy = mulmod(hr[1], addmod(mulmod(zs[0], hr[2], _pp), _pp - qx, _pp), _pp);
    qy = addmod(qy, _pp - mulmod(zs[1], hr[3], _pp), _pp);
    // qz = h*z1*z2
    uint256 qz = mulmod(hr[0], mulmod(_z1, _z2, _pp), _pp);
    return(qx, qy, qz);
  }

  /// @dev Doubles a points (x, y, z).
  /// @param _x coordinate x of P1
  /// @param _y coordinate y of P1
  /// @param _z coordinate z of P1
  /// @param _pp the modulus
  /// @param _aa the a scalar in the curve equation
  /// @return (qx, qy, qz) 2P in Jacobian
  function jacDouble(
    uint256 _x,
    uint256 _y,
    uint256 _z,
    uint256 _aa,
    uint256 _pp)
  internal pure returns (uint256, uint256, uint256)
  {
    if (_z == 0)
      return (_x, _y, _z);
    uint256[3] memory square;
    // We follow the equations described in https://pdfs.semanticscholar.org/5c64/29952e08025a9649c2b0ba32518e9a7fb5c2.pdf Section 5
    // Note: there is a bug in the paper regarding the m parameter, M=3*(x1^2)+a*(z1^4)
    square[0] = mulmod(_x, _x, _pp); //x1^2
    square[1] = mulmod(_y, _y, _pp); //y1^2
    square[2] = mulmod(_z, _z, _pp); //z1^2

    // s
    uint s = mulmod(4, mulmod(_x, square[1], _pp), _pp);
    // m
    uint m = addmod(mulmod(3, square[0], _pp), mulmod(_aa, mulmod(square[2], square[2], _pp), _pp), _pp);
    // qx
    uint256 qx = addmod(mulmod(m, m, _pp), _pp - addmod(s, s, _pp), _pp);
    // qy = -8*y1^4 + M(S-T)
    uint256 qy = addmod(mulmod(m, addmod(s, _pp - qx, _pp), _pp), _pp - mulmod(8, mulmod(square[1], square[1], _pp), _pp), _pp);
    // qz = 2*y1*z1
    uint256 qz = mulmod(2, mulmod(_y, _z, _pp), _pp);

    return (qx, qy, qz);
  }

  /// @dev Multiply point (x, y, z) times d.
  /// @param _d scalar to multiply
  /// @param _x coordinate x of P1
  /// @param _y coordinate y of P1
  /// @param _z coordinate z of P1
  /// @param _aa constant of curve
  /// @param _pp the modulus
  /// @return (qx, qy, qz) d*P1 in Jacobian
  function jacMul(
    uint256 _d,
    uint256 _x,
    uint256 _y,
    uint256 _z,
    uint256 _aa,
    uint256 _pp)
  internal pure returns (uint256, uint256, uint256)
  {
    uint256 remaining = _d;
    uint256[3] memory point;
    point[0] = _x;
    point[1] = _y;
    point[2] = _z;
    uint256 qx = 0;
    uint256 qy = 0;
    uint256 qz = 1;

    if (_d == 0) {
      return (qx, qy, qz);
    }
    // Double and add algorithm
    while (remaining != 0) {
      if ((remaining & 1) != 0) {
        (qx, qy, qz) = jacAdd(
          qx,
          qy,
          qz,
          point[0],
          point[1],
          point[2],
          _pp);
      }
      remaining = remaining / 2;
      (point[0], point[1], point[2]) = jacDouble(
        point[0],
        point[1],
        point[2],
        _aa,
        _pp);
    }
    return (qx, qy, qz);
  }

  /// some optimized functions working with Jacobi coordinates

  function ecAdd_J_Mixed(
    uint256 _x1,
    uint256 _y1,
    uint256 _z1,
    uint256 _x2,
    uint256 _y2,
    uint256 _aa,
    uint256 _pp)
    public pure returns(uint256 x, uint256 y, uint256 z)
  {
    // Double if x1==x2 else add
    if (_x1==_x2) {
      (x, y, z) = jacDouble(
        _x1,
        _y1,
        _z1,
        _aa,
        _pp);
    } else {
      (x, y, z) = jacAdd(
        _x1,
        _y1,
        _z1,
        _x2,
        _y2,
        1,
        _pp);
    }
  }

  function ecSub_J(
    uint256 _x1,
    uint256 _y1,
    uint256 _z1,
    uint256 _x2,
    uint256 _y2,
    uint256 _z2,
    uint256 _pp)
  public pure returns(uint256, uint256, uint256)
  {
    // invert square
    (_x2, _y2, _z2) =  toAffine3(_x2, _y2, _z2, _pp);
    _y2 = _pp - _y2;

    // P1-square
    return jacAdd(
        _x1,
        _y1,
        _z1,
        _x2,
        _y2,
        _z2,
        _pp);
  }

 function ecSub_J_optim(
    uint256 _x1,
    uint256 _y1,
    uint256 _z1,
    uint256 _x2,
    uint256 _y2,
    uint256 _z2,
    uint256 invmod_result,
    uint256 _pp)
  public pure returns(uint256, uint256, uint256)
  {
    // invert square
    (_x2, _y2, _z2) =  toAffine3_optim(_x2, _y2, _z2, invmod_result, _pp);
    _y2 = _pp - _y2;

    // P1-square
    return jacAdd(
        _x1,
        _y1,
        _z1,
        _x2,
        _y2,
        _z2,
        _pp);
  }

  function OVN_add(uint aa, uint[3] memory P, uint[3] memory Q, uint p) internal pure returns (uint, uint, uint) { // a moved to beginning due to stack deep error; a is not used in the later parts of func
        if(P[2] == 0)
            return (Q[0], Q[1], Q[2]);
        if(Q[2] == 0)
            return (P[0], P[1], P[2]);

        uint[3] memory R;
        uint[4] memory zs; // Pz^2, Pz^3, Qz^2, Qz^3
        zs[0] = mulmod(P[2], P[2], p);
        zs[1] = mulmod(P[2], zs[0], p);
        zs[2] = mulmod(Q[2], Q[2], p);
        zs[3] = mulmod(Q[2], zs[2], p);
        uint[4] memory us = [
            mulmod(P[0], zs[2], p),
            mulmod(P[1], zs[3], p),
            mulmod(Q[0], zs[0], p),
            mulmod(Q[1], zs[1], p)
        ]; // Pu, Ps, Qu, Qs
        if (us[0] == us[2]) {
            if (us[1] != us[3]){
                uint[3] memory rt;
                return (rt[0], rt[1], rt[2]);

            } else {
                return jacDouble(P[0], P[1], P[2], aa, p);
            }
        }

        uint[3] memory h123; // h values were merged together to avoid stack too deep error.
        h123[0] = addmod(us[2], p - us[0], p);
        h123[1] = mulmod(h123[0], h123[0], p);
        h123[2] = mulmod(h123[1], h123[0], p);

        uint r = addmod(us[3], p - us[1], p);
        uint Rx = addmod(mulmod(r, r, p), p - h123[2], p);
        Rx = addmod(Rx, p - mulmod(2, mulmod(us[0], h123[1], p), p), p);
        R[0] = Rx;
        R[1] = mulmod(r, addmod(mulmod(us[0], h123[1], p), p - Rx, p), p);
        R[1] = addmod(R[1], p - mulmod(us[1], h123[2], p), p);
        R[2] = mulmod(h123[0], mulmod(P[2], Q[2], p), p);
        return (R[0], R[1], R[2]);
    }


  function OVN_addMixed(uint[3] memory P, uint[2] memory Q, uint aa, uint p) internal pure returns (uint, uint, uint) {
        if(P[2] == 0)
            return (Q[0], Q[1], 1);
        if(Q[1] == 0)
            return (P[0], P[1], P[2]);

        uint[3] memory R;
        uint[2] memory zs; // Pz^2, Pz^3, Qz^2, Qz^3
        zs[0] = mulmod(P[2], P[2], p);
        zs[1] = mulmod(P[2], zs[0], p);
        uint[4] memory us = [
            P[0],
            P[1],
            mulmod(Q[0], zs[0], p),
            mulmod(Q[1], zs[1], p)
        ]; // Pu, Ps, Qu, Qs
        if (us[0] == us[2]) {
            if (us[1] != us[3]) {
                R[0] = 0;
                R[1] = 0;
                R[2] = 0;
                return (R[0], R[1], R[2]);
            }
            else {
                 return jacDouble(P[0], P[1], P[2], aa, p);
            }
        }
        uint h = addmod(us[2], p - us[0], p);
        uint r = addmod(us[3], p - us[1], p);
        uint h2 = mulmod(h, h, p);
        uint h3 = mulmod(h2, h, p);
        uint Rx = addmod(mulmod(r, r, p), p - h3, p);
        Rx = addmod(Rx, p - mulmod(2, mulmod(us[0], h2, p), p), p);
        R[0] = Rx;
        R[1] = mulmod(r, addmod(mulmod(us[0], h2, p), p - Rx, p), p);
        R[1] = addmod(R[1], p - mulmod(us[1], h3, p), p);
        R[2] = mulmod(h, P[2], p);
        return (R[0], R[1], R[2]);
    }

}


