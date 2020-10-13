import { defineComponent, reactive } from 'vue'
import ScrollToTop from '@/components/button/scrollToTop/ScrollToTop'

const TermsOfUse = defineComponent({
  name: 'TermsOfUse',
  mounted() {
    if (window.screenY <= 100) {
      document.documentElement.scrollTop = 0
    }
  },
  render() {
    return (
      <section class="col-lg-9">
        <div class="row">
          <h3 class="text-center p-2">Terms of use for HotMarkets.shop</h3>
          <div class="container">
            <h3 class="p-2">Advertisements, Searches, and Links to Other Sites</h3>
            <p>
              HotMarkets.shop may provide links to third-party web sites. HotMarkets are participants in the Amazon Services Associates Program, an affiliate advertising program designed to provide a means for sites to earn advertising fees by advertising and linking to
              <a href="https://www.amazon.com/">Amazon.com</a> 
            </p>
            <p>
              Thus, most of our product links will lead you directly to <a href="https://www.amazon.com/">Amazon.com</a> HotMarkets.shop do not recommend and do not endorse the content on any third-party websites. HotMarkets.shop are not responsible for the content of linked third-party sites, sites framed within the Site, third-party sites provided as search results, or third-party advertisements, and does not make any representations regarding their content or accuracy. Your use of third-party websites is at your own risk and subject to the terms and conditions of use for such sites. 
              HotMarkets.shop do not endorse any product, service, or treatment advertised on the Site. Any product or treatment recommendations offered by HotMarkets are based on our subjective experiences alone, and cannot replace the advice of an expert, medical or otherwise.
            </p>
          </div>
        </div>

      </section>
    )
  }
})

export default TermsOfUse