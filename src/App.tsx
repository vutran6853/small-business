import { defineComponent, reactive } from 'vue'
import { RouterView, RouterLink } from 'vue-router'
// import LOGO from './assets/hotmarkets-logo.png'

import './vendors/bootstrap/css/bootstrap.css'
// import './vendors/jquery/jquery.min.js'
import './app.css'

const App = defineComponent({
  name: 'App',
  methods: {
    handleToggleNavbarCollapse() {
      this.state.isNavbarCollapse = !this.state.isNavbarCollapse
    }
  },
  setup() {
    const state = reactive({
      isNavbarCollapse: true,
      isNavbarActive: false,
      navbarItems: [
        { id: (Math.random() * 64).toPrecision(10), text: 'Home', url: '/', isActive: true },
        { id: (Math.random() * 64).toPrecision(10), text: 'About', url: '/termsOfUse', isActive: false }
      ]
    })

    function handleSetNavbarItemActive(text: string) {
      state.navbarItems.filter((value) => {
        if (value.text === text) {
          value.isActive = true
        } else {
          value.isActive = false
        }
        return value
      })
      return null
    }

    function handleSetActive(text: string) {

    } 

    return {
      state,
      handleSetNavbarItemActive
    }
  },
  render() {
    let navbarStatueClass = ""
    if (this.state.isNavbarCollapse) {
      navbarStatueClass = "collapse navbar-collapse"
    } else {
      navbarStatueClass = "navbar-collapse"
    }

    let renderNavbarItems = this.state.navbarItems.map((value) => {
      return (
        <li key={value.id} class={ `nav-item p-2 ${value.isActive ? "active" : ""}` } onClick={() => this.handleSetNavbarItemActive(value.text)}>
          <RouterLink to={value.url} class="nav-link">{value.text}</RouterLink>
        </li>
      )
    })

    return (
      <div id="app2">
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
          <RouterLink to="/" class="navbar-brand">HotMarkets</RouterLink>
          {/* <img src={LOGO} alt={LOGO} srcset=""/> */}
          <button class="navbar-toggler" type="button" onClick={this.handleToggleNavbarCollapse} data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class={navbarStatueClass} id="navbarResponsive">
            <ul class="navbar-nav ml-auto">
              { renderNavbarItems }
            </ul>
          </div>
        </nav>

        <RouterView />

        <footer class="py-5 bg-dark">
          <div>
            <p class="px-5 text-white">Copyright &copy; HotMarkets { new Date().getFullYear() }</p>
            <ul class="footer-items-container">
              <li onClick={() => this.handleSetNavbarItemActive('Home')}>
                <RouterLink to="/" class="nav-link">Home</RouterLink>
              </li>
              <li onClick={() => this.handleSetNavbarItemActive('About')}>
                <RouterLink to="/termsOfUse" class="nav-link">About</RouterLink>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    )
  }
})

export default App