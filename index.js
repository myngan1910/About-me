const express = require('express')
const path = require('path')
const app = express()
const port = 3000
app.use('/', express.static(path.join(__dirname, 'profile')))
app.set('view engine', 'ejs')

// 
app.get('/', (req, res) => {
  res.render('index1')
})
app.get('/admin', (req, res) => {
  res.render('index')
})
app.get('/dashboard', (req, res) => {
    res.render('index')
  })
  app.get('/dashboard-2', (req, res) => {
    res.render('index2')
  })
  app.get('/dashboard-3', (req, res) => {
    res.render('index3')
  })
  app.get('/widgets', (req, res) => {
    res.render('./pages/widgets')
  })
  // layout
  app.get('/top-nav', (req, res) => {
    res.render('./pages/layout/top-nav')
  })

  app.get('/top-navigation', (req, res) => {
    res.render('./pages/layout/top-nav-slidebar')
  })
  app.get('/boxed', (req, res) => {
    res.render('./pages/layout/boxed')
  })
  app.get('/fixed', (req, res) => {
    res.render('./pages/layout/fixed-slidebar')
  })
  app.get('/custom-area', (req, res) => {
    res.render('./pages/layout/fixed-sidebar-custom')
  })
  app.get('/fixed-navbar', (req, res) => {
    res.render('./pages/layout/fixed-topnav')
  })
  app.get('/fixed-footer', (req, res) => {
    res.render('./pages/layout/fixed-footer')
  })
  app.get('/collapsed-sidebar', (req, res) => {
    res.render('./pages/layout/collapsed-sidebar')
  })
  // Charts
  app.get('/chartJS', (req, res) => {
    res.render('./pages/charts/chartjs')
  })
  app.get('/flot', (req, res) => {
    res.render('./pages/charts/flot')
  })
  app.get('/inline', (req, res) => {
    res.render('./pages/charts/inline')
  })
  app.get('/uPlot', (req, res) => {
    res.render('./pages/charts/uplot')
  })
  // UI Elements
  app.get('/general', (req, res) => {
    res.render('./pages/UI/general')
  })
  app.get('/icons', (req, res) => {
    res.render('./pages/UI/icons')
  })
  app.get('/buttons', (req, res) => {
    res.render('./pages/UI/buttons')
  })
  app.get('/sliders', (req, res) => {
    res.render('./pages/UI/sliders')
  })
  app.get('/modals', (req, res) => {
    res.render('./pages/UI/modals')
  })
  app.get('/navbar', (req, res) => {
    res.render('./pages/UI/navbar')
  })
  app.get('/timeline', (req, res) => {
    res.render('./pages/UI/timeline')
  })
  app.get('/ribbons', (req, res) => {
    res.render('./pages/UI/ribbons')
  })

  //  Forms
  app.get('/general', (req, res) => {
    res.render('./pages/forms/generals')
  })
  app.get('/advanced', (req, res) => {
    res.render('./pages/forms/advanced')
  })
  app.get('/editors', (req, res) => {
    res.render('./pages/forms/editors')
  })
  app.get('/validation', (req, res) => {
    res.render('./pages/forms/validation')
  })

//  Tables
app.get('/simple', (req, res) => {
  res.render('./pages/tables/simple')
})
app.get('/dataTables', (req, res) => {
  res.render('./pages/tables/data')
})
app.get('/jsGrid', (req, res) => {
  res.render('./pages/tables/jsgrid')
})

//EXAMPLES
app.get('/calendar', (req, res) => {
  res.render('./pages/calendar')
})
app.get('/gallery', (req, res) => {
  res.render('./pages/gallery')
})
app.get('/kanban', (req, res) => {
  res.render('./pages/kanban')
})

//Mailbox
app.get('/inbox', (req, res) => {
  res.render('./pages/mailbox/mailbox')
})
app.get('/compose', (req, res) => {
  res.render('./pages/mailbox/compose')
})
app.get('/read', (req, res) => {
  res.render('./pages/mailbox/readmail')
})

//Pages
app.get('/invoice', (req, res) => {
  res.render('./pages/examples/invoice')
})
app.get('/invoice-print', (req, res) => {
  res.render('./pages/examples/invoice-print')
})
app.get('/profile', (req, res) => {
  res.render('./pages/examples/profile')
})
app.get('/e-commerce', (req, res) => {
  res.render('./pages/examples/e-commerce')
})
app.get('/projects', (req, res) => {
  res.render('./pages/examples/projects')
})
app.get('/project-add', (req, res) => {
  res.render('./pages/examples/project-add')
})
app.get('/project-edit', (req, res) => {
  res.render('./pages/examples/project-edit')
})
app.get('/project-detail', (req, res) => {
  res.render('./pages/examples/project-detail')
})
app.get('/contacts', (req, res) => {
  res.render('./pages/examples/contacts')
})
app.get('/faq', (req, res) => {
  res.render('./pages/examples/faq')
})
app.get('/contact-us', (req, res) => {
  res.render('./pages/examples/contact-us')
})

// Extras
// login 1
app.get('/login', (req, res) => {
  res.render('./pages/examples/login')
})
app.get('/register', (req, res) => {
  res.render('./pages/examples/register')
})

app.get('/forgot-password', (req, res) => {
  res.render('./pages/examples/forgot-password')
})
app.get('/recover-password', (req, res) => {
  res.render('./pages/examples/recover-password')
})


//login 2
app.get('/login-v2', (req, res) => {
  res.render('./pages/examples/login-v2')
})
app.get('/register-v2', (req, res) => {
  res.render('./pages/examples/register-v2')
})

app.get('/forgot-password-v2', (req, res) => {
  res.render('./pages/examples/forgot-password-v2')
})
app.get('/recover-password-v2', (req, res) => {
  res.render('./pages/examples/recover-password-v2')
})
//
app.get('/lockscreen', (req, res) => {
  res.render('./pages/examples/lockscreen')
})
app.get('/legacy-user-menu', (req, res) => {
  res.render('./pages/examples/legacy-user-menu')
})
app.get('/language-menu', (req, res) => {
  res.render('./pages/examples/language-menu')
})
app.get('/404', (req, res) => {
  res.render('./pages/examples/404')
})
app.get('/500', (req, res) => {
  res.render('./pages/examples/500')
})
app.get('/pace', (req, res) => {
  res.render('./pages/examples/pace')
})

app.get('/blank', (req, res) => {
  res.render('./pages/examples/blank')
})

app.get('/starter', (req, res) => {
  res.render('starter')
})

//  Search
app.get('/simple', (req, res) => {
  res.render('./pages/search/simples')
})
app.get('/enhanced', (req, res) => {
  res.render('./pages/search/enhanced')
})
app.get('/enhanced-results', (req, res) => {
  res.render('./pages/search/enhanced-results')
})
app.get('/simple-results', (req, res) => {
  res.render('./pages/search/simple-results')
})



app.get('/iframe', (req, res) => {
  res.render('iframe')
})



  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })