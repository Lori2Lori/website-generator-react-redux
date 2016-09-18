const h = require('react-hyperscript');

const JobsByExperienceView = (
    {jobs}
    // { title
    // , client
    // , start
    // , end
    // , description
    // , experiences
    // }
  ) => {
    return h('div', [
      h('h2', 'This is experience view'),
      h('pre', JSON.stringify(jobs, null, 2))
      // h('ul',
      //   experiences.map((experience) => {
      //     return h('li', experience)
      //   })
      // )
    ])
  }

module.exports = JobsByExperienceView
