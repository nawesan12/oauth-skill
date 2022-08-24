function isAuthorized(req, res, next) {
  if (req.user) {
    next()
  } else {
    res.redirect("/")
  }
}

function isNotAuthorized(req, res, next) {
  if (req.user) {
    res.redirect("/dashboard")
  } else {
    next()
  }
}

module.exports = {
  isAuthorized,
  isNotAuthorized,
}