const { get } = require("lodash");

const jwt = require("./jwt.service");
const db = require('../database');

async function deserializeUser(req, res, next){
  const accessToken =
    get(req, "cookies.accessToken") ??
    get(req, "headers.authorization", "").replace(/^Bearer\s/, "");

  const refreshToken =
    get(req, "cookies.refreshToken") ?? get(req, "headers.x-refresh");

  if (!accessToken) {
    return next();
  }

  const { decoded, expired } = jwt.verifyJwt(accessToken);

  if (decoded) {
    req.locals = decoded;
    return next();
  }

  if (expired && refreshToken) {
    const newAccessToken = await db.reIssueAccessToken({ refreshToken });

    if (newAccessToken) {
      res.setHeader("x-access-token", newAccessToken);

      res.cookie("accessToken", newAccessToken, {
        maxAge: 900000,
        httpOnly: true,
        domain: "localhost",
        path: "/",
        sameSite: "strict",
        secure: false,
      });
    }

    const result = jwt.verifyJwt(newAccessToken);
    res.locals.user = result.decoded;
    return next();
  }

  return next();
};

module.exports = deserializeUser;