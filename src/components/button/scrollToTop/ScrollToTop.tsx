import { defineComponent, reactive } from 'vue'

import './scrollToTop.css'

const ScrollToTop = defineComponent({
  name: 'ScrollToTop',
  mounted() {
    window.addEventListener('scroll', this.renderScrollButton)
  },
  unmounted() {
    window.removeEventListener('scroll', this.renderScrollButton)
  },
  setup() {

    function renderScrollButton() {
      var mybutton: any = document.getElementById("myBtn")
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block"
      } else {
        mybutton.style.display = "none"
      }
    }

    function handleScrollToTop() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }

    return {
      handleScrollToTop,
      renderScrollButton
    }
  },
  render() {

    return (
      <button onClick={this.handleScrollToTop} id="myBtn" title="Go to top">Top</button>
    )
  }
})

export default ScrollToTop