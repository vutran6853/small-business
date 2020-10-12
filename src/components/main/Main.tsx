import { defineComponent } from "vue"
import { RouterView, RouterLink } from 'vue-router'

const Main = defineComponent({
  name: 'Main',
  render() {
    return (
      <main class="container min-vh-100">
        
        <div class="row" style="margin-top: 4rem;">
          <div class="col-lg-3">
            <h1 class="my-4">Category</h1>
            <div class="list-group">
              <RouterLink to="/" class="list-group-item">Leaf Blower</RouterLink>
              <RouterLink to="/battery" class="list-group-item">Battery</RouterLink>
              <RouterLink to="/linesSpools" class="list-group-item">Lines & Spools</RouterLink>
            </div>
          </div>
          <RouterView />
        </div>
      </main>
    )
  }
})

export default Main