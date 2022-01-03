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
    liveDemo: './assignments/html_css/signup_form/signup.html',
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
    liveDemo: './assignments/html_css/selectors/selector.html',
    content: {
      html: true,
      css: true,
      js: false,
    },
  },
  {
    title: 'Slicing figma design',
    source: 'https://github.com/adarshmaharjan/figma_slicing',
    liveDemo: 'https://adarshmaharjan.github.io/figma_slicing/',
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
    liveDemo: './assignments/html_css/internal_css/inline.html',
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
    liveDemo: './assignments/html_css/inline_css/inline.html',
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
    liveDemo: './assignments/html_css/google_fonts/google-fonts.html',
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
    liveDemo: './assignments/html_css/external_css/external.html',
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
      './assignments/html_css/css-variables_and_math-function/css-variable.html',
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
      './assignments/html_css/css-specificity_pseudo-class_pseudo-elements/specificity.html',
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
    liveDemo: './assignments/html_css/closing_tags/closing.html',
    content: {
      html: true,
      css: false,
      js: false,
    },
  },
  {
    title: 'Button Element',
    source:
      'https://github.com/adarshmaharjan/Webpoint-Assignments/tree/gh-pages/assignments/html_css/button',
    liveDemo: './assignments/html_css/button/button.html',
    content: {
      html: true,
      css: true,
      js: false,
    },
  },
  {
    title: 'Typography, List, Table, Circle',
    source:
      'https://github.com/adarshmaharjan/Webpoint-Assignments/blob/gh-pages/assignments/html_css/basic_html_css',
    liveDemo: './assignments/html_css/basic_html_css/basic-html-css.html',
    content: {
      html: true,
      css: true,
      js: false,
    },
  },
  {
    title: 'SOLID principles blog',
    source: 'https://github.com/adarshmaharjan/solid_principale',
    liveDemo: 'https://github.com/adarshmaharjan/solid_principale',
    content: {
      html: false,
      css: false,
      js: true,
    },
  },
  {
    title: 'OOP blog',
    source: 'https://github.com/adarshmaharjan/oop',
    liveDemo: 'https://github.com/adarshmaharjan/oop',
    content: {
      html: false,
      css: false,
      js: true,
    },
  },
  {
    title: 'Bouncing Box(Collison Detection)',
    source: 'https://github.com/adarshmaharjan/bouncingBox',
    liveDemo: 'https://adarshmaharjan.github.io/bouncingBox/',
    content: {
      html: true,
      css: true,
      js: true,
    },
  },
  {
    title: 'Simple Slider',
    source: 'https://github.com/adarshmaharjan/simple_slider',
    liveDemo: 'https://adarshmaharjan.github.io/simple_slider/',
    content: {
      html: true,
      css: true,
      js: true,
    },
  },
  {
    title: 'Car game(Collison Detection)',
    source: 'https://github.com/adarshmaharjan/car_game/tree/gh-pages',
    liveDemo: 'https://adarshmaharjan.github.io/car_game/',
    content: {
      html: true,
      css: true,
      js: true,
    },
  },
  {
    title: 'Slider with sliding animation',
    source: 'https://github.com/adarshmaharjan/sliding_slider',
    liveDemo: 'https://adarshmaharjan.github.io/sliding_slider/',
    content: {
      html: true,
      css: true,
      js: true,
    },
  },
  {
    title: 'Memory Game',
    source: '#',
    liveDemo: '#',
    content: {
      html: true,
      css: true,
      js: true,
    },
  },
  {
    title: 'Calculator',
    source:
      'https://github.com/adarshmaharjan/js-basic-assignment/tree/main/assignment-1',
    liveDemo: './assignments/js-basic-assignment/assignment-1/calculator.html',
    content: {
      html: true,
      css: true,
      js: true,
    },
  },
  {
    title: 'Area finder',
    source:
      'https://github.com/adarshmaharjan/js-basic-assignment/blob/main/assignment-2.html',
    liveDemo: './assignments//js-basic-assignment/area-finder.html',
    content: {
      html: true,
      css: true,
      js: true,
    },
  },
  {
    title: 'temperature Converter',
    source:
      'https://github.com/adarshmaharjan/js-basic-assignment/blob/main/assignment-3.html',
    liveDemo: './assignments/js-basic-assignment/temperature-converter.html',
    content: {
      html: true,
      css: true,
      js: true,
    },
  },
  {
    title: 'Leap year finder',
    source:
      'https://github.com/adarshmaharjan/js-basic-assignment/blob/main/assignment-4.html',
    liveDemo: './assignments/js-basic-assignment/leap-year-finder.html',
    content: {
      html: true,
      css: true,
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

    if (html) htmlTopic = '<i class="fab fa-html5"></i>'
    if (css) cssTopic = '<i class="fab fa-css3"></i>'
    if (js) jstTopic = '<i class="fab fa-js"></i>'

    topic = `${htmlTopic} ${cssTopic} ${jstTopic}`

    return `
    <tr>
        <td>${title}</td>
        <td>
          <a href=${source} target="_blank" rel="noopener noreferrer">
          Hosted on github
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
