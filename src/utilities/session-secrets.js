const get = function()
{
  // TODO Add time-based secret rotation instead of a static array
  return [
    process.env.SESSION_SECRETS
  ]
}

const push = function()
{
  // TODO Add time-based secret rotation instead of a static array
}

module.exports = { get };