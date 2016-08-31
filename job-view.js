const h = require('react-hyperscript');
const ExperiencesView = require('./experiences-view');

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
      h('dd', client),
      h('dt', 'start'),
      h('dd', start),
      h('dt', 'end'),
      h('dd', end),
      h('dt', 'description'),
      h('dd', description),
      h('dt', 'experiences'),
      h('dd', [
        h(ExperiencesView, {experiences})
      ])
    ]
  )
}

module.exports = JobView
