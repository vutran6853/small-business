import { defineComponent, reactive } from 'vue'
import ScrollToTop from '@/components/button/scrollToTop/ScrollToTop'

const Battery = defineComponent({
  name: 'Battery',
  mounted() {
    if (window.screenY <= 100) {
      document.documentElement.scrollTop = 0
    }
  },
  setup() {
    const state = reactive({
      amazonInfo: [
        { 
          id: Math.random().toPrecision(10),
          title: '20V Lithium Battery - 2.0Ah Li-ion Battery Packs for Cordless Tools, Long Life Battery Work with SnapFresh Cordless Leaf Blower, Lithium-Ion Battery Support Fast Charging (BBT-DC20A)',
          aLink: 'https://amzn.to/2SJVOpV',
          iframeLink: '//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=mywebsit0000a-20&language=en_US&marketplace=amazon&region=US&placement=B088D1CR5K&asins=B088D1CR5K&linkId=69f5d64a4fdec7f6c04389cd7be73f28&show_border=true&link_opens_in_new_window=true'  
        },
        { 
          id: Math.random().toPrecision(10),
          title: 'Upgraded 2 Pack 6000mAh 20V MAX Lithium Replacement Battery for Porter Cable 20v Lithium Battery PCC685L PCC680L 20 Volts Batteries.',
          aLink: 'https://amzn.to/3nBzuwV',
          iframeLink: '//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=mywebsit0000a-20&language=en_US&marketplace=amazon&region=US&placement=B07Z696ZJW&asins=B07Z696ZJW&linkId=eb66738f937be3c4fb812f52319bc958&show_border=true&link_opens_in_new_window=true'  
        },
        { 
          id: Math.random().toPrecision(10),
          title: 'LiBatter 2Pack 20V MAX 6.0Ah Lithium Ion Premium Battery for DEWALT DCB204 DCB205 DCB206 DCB205-2 DCB200 DCB180 DCD985B DCD771C2 DCS355D1 DCD790B',
          aLink: 'https://amzn.to/2GLqjcJ',
          iframeLink: '//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=mywebsit0000a-20&language=en_US&marketplace=amazon&region=US&placement=B07BLPXN9N&asins=B07BLPXN9N&linkId=dad9cdeaf9ea3012b166ff6d82e0cc54&show_border=true&link_opens_in_new_window=true'  
        },
        { 
          id: Math.random().toPrecision(10),
          title: 'Miady 20V 5.0Ah Replacement Battery Compatible with Dewalt 20V MAX XR DCB206 DCB205 DCB204 DCB200 DCD771C2 DCD985B DCD780B DCF885 DCS355D1 DCD790B Power Tool DCD/DCF/DCG Series',
          aLink: 'https://amzn.to/3nDbHfX',
          iframeLink: '//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=mywebsit0000a-20&language=en_US&marketplace=amazon&region=US&placement=B089KDY611&asins=B089KDY611&linkId=29956a1eec776e5cc344e04d7639904d&show_border=true&link_opens_in_new_window=true'  
        },
        { 
          id: Math.random().toPrecision(10),
          title: 'ANTRobut Replacement 5.0Ah Dewalt 20V Battery and Charger Kit DCB205 DCB204 Lithium-Ion 20 Volt Max Battery + 4.5A Battery Charger for Dewalt 12V 20V Max DC118 DCB112',
          aLink: 'https://amzn.to/30SqLN4',
          iframeLink: '//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=mywebsit0000a-20&language=en_US&marketplace=amazon&region=US&placement=B07Y61VKFP&asins=B07Y61VKFP&linkId=9ec3d27743c0569c8670b45efc3a33b2&show_border=true&link_opens_in_new_window=true'  
        },
        { 
          id: Math.random().toPrecision(10),
          title: 'Replacement Battery Pack & Charger for DEWALT, Upgraded 3700mAh Battery Compatible with DEWALT Cordless Power Tools, with 7.2v - 18v Multiple Volt Output Battery Charger',
          aLink: 'https://amzn.to/30WtGEv',
          iframeLink: '//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=mywebsit0000a-20&language=en_US&marketplace=amazon&region=US&placement=B085DS46HR&asins=B085DS46HR&linkId=7b315b047d6f815961554a27b299c0df&show_border=true&link_opens_in_new_window=true'  
        },
        // { 
        //   id: Math.random().toPrecision(10),
        //   title: '2 Pack 3.6Ah 18V Ni-MH Power Tool Replacement Battery for Dewalt 18 Volts DC9096 DC9098 DC9099 DW9095 DW9096 DW9098 DW9099 DE9039 DE9095 DE9096 DE9503 DE9098 DC9181',
        //   aLink: 'https://amzn.to/3nypSTL',
        //   iframeLink: '//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=mywebsit0000a-20&language=en_US&marketplace=amazon&region=US&placement=B07SPS8WRX&asins=B07SPS8WRX&linkId=7cdb8832959012e4b0dc178afc74ad9a&show_border=true&link_opens_in_new_window=true'  
        // },
        // { 
        //   id: Math.random().toPrecision(10),
        //   title: '',
        //   aLink: '',
        //   iframeLink: ''  
        // },
        // { 
        //   id: Math.random().toPrecision(10),
        //   title: '',
        //   aLink: '',
        //   iframeLink: ''  
        // },
        // { 
        //   id: Math.random().toPrecision(10),
        //   title: '',
        //   aLink: '',
        //   iframeLink: ''  
        // },
        // { 
        //   id: Math.random().toPrecision(10),
        //   title: '',
        //   aLink: '',
        //   iframeLink: ''  
        // },
        // { 
        //   id: Math.random().toPrecision(10),
        //   title: '',
        //   aLink: '',
        //   iframeLink: ''  
        // },
        // { 
        //   id: Math.random().toPrecision(10),
        //   title: '',
        //   aLink: '',
        //   iframeLink: ''  
        // },
        // { 
        //   id: Math.random().toPrecision(10),
        //   title: '',
        //   aLink: '',
        //   iframeLink: ''  
        // },
        // { 
        //   id: Math.random().toPrecision(10),
        //   title: '',
        //   aLink: '',
        //   iframeLink: ''  
        // },
        // { 
        //   id: Math.random().toPrecision(10),
        //   title: '',
        //   aLink: '',
        //   iframeLink: ''  
        // }
      ]
    })

    return {
      state
    }
  },
  render() {

    let renderItems = this.state.amazonInfo.map((value) => {
      return (
        <div key={value.id} class="col-lg-4 col-md-6 mb-4">
          <div class="card p-4">
            <p><small><a href="https://amzn.to/36Pk42j">{value.title}</a></small></p>
            <iframe style="width:120px; height:240px; margin: auto" 
              marginwidth={0} 
              marginheight={0} 
              scrolling="no" 
              frameborder="0" 
              src={value.iframeLink}>
            </iframe>
            <div class="card-footer mt-2">
              <small class="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
            </div>
          </div>
        </div>
      )
    })

    return (
      <section class="col-lg-9">
        {/* <div id="carouselExampleIndicators" class="carousel slide my-4" data-ride="carousel">
          <div class="carousel-inner" role="listbox">
            <div class="carousel-item active">
              <img class="d-block img-fluid" src="http://placehold.it/900x350" alt="First slide"/>
            </div>
            <div class="carousel-item">
              <img class="d-block img-fluid" src="http://placehold.it/900x350" alt="Second slide"/>
            </div>
            <div class="carousel-item">
              <img class="d-block img-fluid" src="http://placehold.it/900x350" alt="Third slide"/>
            </div>
          </div>
          <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div> */}

        <div class="row">
          {renderItems}
          <ScrollToTop />
        </div>

      </section>
    )
  }
})

export default Battery