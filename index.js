const data = require('./data');
const React = require('react');
const ReactDOM = require('react-dom');
const h = require('react-hyperscript');

const ContactView = require('./contact-view');
const JobView = require('./job-view');


const root = document.getElementById('root');


const CvView = () => {
  return (
    h('main', [
      h(
        'h1',
        data.name
      ),
      h(ContactView, data.contact),
      h(
        'div.jobs',
        data.jobs.map(
          (job) => {
            return h(JobView, job)
          }
        )
      ),
      h(
        'pre',
        JSON.stringify(data, null, 2)
      )
    ])
  )
}



const cv = h(CvView);

ReactDOM.render(cv, root)
