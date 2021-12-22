// DOM
const assignmentTableBody = document.querySelector('#assignment-table-body')
// global variables
const assignmentData = [
  {
    title: 'Semantic HTML',
    source:
      'https://github.com/adarshmaharjan/Webpoint-Assignments/tree/gh-pages/assignments/html_css/semantic_html',
    liveDemo: './assignments/html_css/semantic_html/semantic.html',
    content: {
      html: true,
      css: false,
      js: false,
    },
  },
  {
    title: 'Signup Form',
    source:
      'https://github.com/adarshmaharjan/Webpoint-Assignments/tree/gh-pages/assignments/html_css/signup_form',
    liveDemo: './assignments/html_css/signup_form',
    content: {
      html: true,
      css: false,
      js: false,
    },
  },
  {
    title: 'Selectors in CSS',
    source:
      'https://github.com/adarshmaharjan/Webpoint-Assignments/tree/gh-pages/assignments/html_css/selectors',
    liveDemo: './assignments/html_css/selectors/index.html',
    content: {
      html: true,
      css: true,
      js: false,
    },
  },
  {
    title: 'Slicing figma design',
    source:
      'https://github.com/adarshmaharjan/Webpoint-Assignments/tree/gh-pages/assignments/html_css/matter_segment_slicing',
    liveDemo: './assignments/html_css/matter_segment_slicing/index.html',
    content: {
      html: true,
      css: true,
      js: false,
    },
  },
  {
    title: 'Internal CSS',
    source:
      'https://github.com/adarshmaharjan/Webpoint-Assignments/tree/gh-pages/assignments/html_css/internal_css',
    liveDemo: './assignments/html_css/internal_css/index.html',
    content: {
      html: true,
      css: true,
      js: false,
    },
  },
  {
    title: 'Inline CSS',
    source:
      'https://github.com/adarshmaharjan/Webpoint-Assignments/tree/gh-pages/assignments/html_css/inline_css',
    liveDemo: './assignments/html_css/inline_css/index.html',
    content: {
      html: true,
      css: true,
      js: false,
    },
  },
  {
    title: 'Google Fonts',
    source:
      'https://github.com/adarshmaharjan/Webpoint-Assignments/tree/gh-pages/assignments/html_css/google_fonts',
    liveDemo: './assignments/html_css/google_fonts/index.html',
    content: {
      html: true,
      css: true,
      js: false,
    },
  },
  {
    title: 'External CSS',
    source:
      'https://github.com/adarshmaharjan/Webpoint-Assignments/tree/gh-pages/assignments/html_css/external_css',
    liveDemo: './assignments/html_css/external_css/index.html',
    content: {
      html: true,
      css: true,
      js: false,
    },
  },
  {
    title: 'CSS variable and math function',
    source:
      'https://github.com/adarshmaharjan/Webpoint-Assignments/tree/gh-pages/assignments/html_css/css-variables_and_math-function',
    liveDemo:
      './assignments/html_css/css-variables_and_math-function/index.html',
    content: {
      html: true,
      css: true,
      js: false,
    },
  },
  {
    title: 'CSS specificity, Pseudo class and Pseudo element',
    source:
      'https://github.com/adarshmaharjan/Webpoint-Assignments/tree/gh-pages/assignments/html_css/css-specificity_pseudo-class_pseudo-elements',
    liveDemo:
      './assignments/html_css/css-specificity_pseudo-class_pseudo-elements/index.html',
    content: {
      html: true,
      css: true,
      js: false,
    },
  },
  {
    title: 'Elements that dont need Closing tags',
    source:
      'https://github.com/adarshmaharjan/Webpoint-Assignments/tree/gh-pages/assignments/html_css/closing_tags',
    liveDemo: './assignments/html_css/closing_tags/index.html',
    content: {
      html: true,
      css: true,
      js: false,
    },
  },
  {
    title: 'Button Element',
    source:
      'https://github.com/adarshmaharjan/Webpoint-Assignments/tree/gh-pages/assignments/html_css/button',
    liveDemo: './assignments/html_css/button/index.html',
    content: {
      html: true,
      css: true,
      js: false,
    },
  },
  {
    title: 'Typography, List, Table, Circle',
    source:
      'https://github.com/adarshmaharjan/Webpoint-Assignments/blob/gh-pages/assignments/html_css/basic_html_css/index.html',
    liveDemo: './assignments/html_css/basic_html_css/index.html',
    content: {
      html: true,
      css: true,
      js: false,
    },
  },
  {
    title: 'OOP and SOLID principles',
    source:
      'https://github.com/adarshmaharjan/Webpoint-Assignments/tree/gh-pages/assignments/html_css/css-specificity_pseudo-class_pseudo-elements',
    liveDemo:
      './assignments/html_css/css-specificity_pseudo-class_pseudo-elements/index.html',
    content: {
      html: true,
      css: true,
      js: false,
    },
  },
  {
    title: 'CSS specificity, Pseudo class and Pseudo element',
    source:
      'https://github.com/adarshmaharjan/Webpoint-Assignments/tree/gh-pages/assignments/html_css/css-specificity_pseudo-class_pseudo-elements',
    liveDemo:
      './assignments/html_css/css-specificity_pseudo-class_pseudo-elements/index.html',
    content: {
      html: true,
      css: true,
      js: false,
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
        <td>
          <a href=${source} target="_blank" rel="noopener noreferrer">
          Hosted of github
          </a>
        </td>
        <td>
          <a href=${liveDemo} target="_blank" rel="noopener noreferrer">
          Live Demo
          </a>
        </td>
        <td>${topic}</td>
    </tr>
    `
  })
  return assignmentContent
}
// console.log(getAssignmentContent())
const renderAssignment = () => {
  assignmentTableBody.innerHTML = getAssignmentContent().join('')
}
// execution

renderAssignment()
