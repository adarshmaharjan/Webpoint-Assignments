// DOM
const assignmentTableBody = document.querySelector('#assignment-table-body')
// global variables
const assignmentData = [
  {
    title: 'Semantic HTML',
    source: 'http://github.com',
    liveDemo: './assignments/html_css/semantic_html/semantic.html',
    content: {
      html: true,
      css: false,
      js: false,
    },
  },
  {
    title: 'Assignment 2',
    source: 'http://github.com',
    liveDemo: 'http://google.com',
    content: {
      html: false,
      css: true,
      js: false,
    },
  },
  {
    title: 'Assignment 3',
    source: 'http://github.com',
    liveDemo: 'http://google.com',
    content: {
      html: true,
      css: false,
      js: true,
    },
  },
]

// functions
const getAssignmentContent = () => {
  const assignmentContent = assignmentData.map((item) => {
    const { title, source, liveDemo, content } = item
    const { html, css, js } = content

    let htmlTopic = ''
    let cssTopic = ''
    let jstTopic = ''
    let topic = ''

    if (html) htmlTopic = 'HTML'
    if (css) cssTopic = 'CSS'
    if (js) jstTopic = 'JS'

    topic = `${htmlTopic} ${cssTopic} ${jstTopic}`

    return `
    <tr>
        <td>${title}</td>
        <td><a href=${source} target="_blank" rel="noopener noreferrer">Hosted of github</a></td>
        <td><a href=${liveDemo} target="_blank" rel="noopener noreferrer">Live Demo</a></td>
        <td>${topic}</td>
    </tr>`
  })
  return assignmentContent.join('')
}
// console.log(getAssignmentContent())
const renderAssignment = () => {
  assignmentTableBody.innerHTML = getAssignmentContent()
}
// execution

renderAssignment()
