const h = require('react-hyperscript');

const ContactView = ({phone, email}) => {
  return h(
    'dl', [
      h('dt', 'phone'),
      h('dd', phone),
      h('dt', 'email'),
      h('dd', email)
    ]
  )
}

module.exports = ContactView
