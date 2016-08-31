const h = require('react-hyperscript');

const ExperiencesView = ({ experiences }) => {
  return h(
    'ul',
    experiences.map(
      (experience) => {
        return h('li', experience)
      }
    )
  )
}

module.exports = ExperiencesView
