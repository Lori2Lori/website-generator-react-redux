const h = require('react-hyperscript');
const JobView = require('./job-view');



const JobsByExperienceView = ({jobs}) => {

    return h('div', [
      h('h2', 'This is experience view'),
      h('ul',
        Object.keys(jobs).map((experience) => {
          return h('li', [
            h('h3', experience),
            h('ul', jobs[experience].map((job) => {
                return h(JobView, job)
              })
            )
          ])
        })
      )
    ])
  }

module.exports = JobsByExperienceView
