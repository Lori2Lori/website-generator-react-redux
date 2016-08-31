const h = require('react-hyperscript');

const JobView = (
  { title
  , client
  , start
  , end
  , description
  , experiences
  }
) => {
  return h(
    'dl', [
      h('dt', 'title'),
      h('dd', title),
      h('dt', 'client'),
      h('dd', client)
    ]
  )
}

module.exports = JobView
