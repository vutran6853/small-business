import { defineComponent, reactive } from 'vue'
import ScrollToTop from '@/components/button/scrollToTop/ScrollToTop'

const LinesSpools = defineComponent({
  name: 'LinesSpools',
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
          title: 'WORX WA0010 6-Pack Replacement Trimmer Line for Select Electric String Trimmers',
          aLink: 'https://amzn.to/3nOBe6e',
          iframeLink: '//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=mywebsit0000a-20&language=en_US&marketplace=amazon&region=US&placement=B001FE32ZU&asins=B001FE32ZU&linkId=c5fa5f3085c447dc53257b2b2b82c8ed&show_border=true&link_opens_in_new_window=true'  
        },
        { 
          id: Math.random().toPrecision(10),
          title: 'RONGJU 12-Pack Replacement Trimmer Spool Line for Worx WA0010 WG180 WG163 WG175 Electric Trimmer/Edger Weed Eater Line 10ft 0.065 ”+ 2 Pack Spool Cap Covers (12 Spools, 2 Caps)',
          aLink: 'https://amzn.to/3dpgkG0',
          iframeLink: '//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=mywebsit0000a-20&language=en_US&marketplace=amazon&region=US&placement=B07TPSFCXY&asins=B07TPSFCXY&linkId=8e0740e599bdc3ad0cd88867fb744b13&show_border=true&link_opens_in_new_window=true'  
        },
        { 
          id: Math.random().toPrecision(10),
          title: 'ZONOWN 16 Pack Replacement Trimmer Spool Line for Worx Weed Eater String Wa0010 WG180 WG163, with WA6531 Spool Cap Covers (16 Spools + 2 Caps)',
          aLink: 'https://amzn.to/3jPBmjx',
          iframeLink: '//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=mywebsit0000a-20&language=en_US&marketplace=amazon&region=US&placement=B087NPCJL7&asins=B087NPCJL7&linkId=6115afd0b5e6de99b20de96cc8883385&show_border=true&link_opens_in_new_window=true' 
        },
        { 
          id: Math.random().toPrecision(10),
          title: 'Thten Trimmer Replacement Spools for Worx WA0014 WG168 WG184 WG190 WG191 Weed Eater String Edger Spool Line Refills Parts Auto-Feed 20ft 0.080" with WA0037 Cap Covers (6 spools,2 Cap)',
          aLink: 'https://amzn.to/2GQ7Pro',
          iframeLink: '//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=mywebsit0000a-20&language=en_US&marketplace=amazon&region=US&placement=B07SZ12LYY&asins=B07SZ12LYY&linkId=1de8d4849438281f20e46ce1daf276ec&show_border=true&link_opens_in_new_window=true'  
        },
        { 
          id: Math.random().toPrecision(10),
          title: 'YHLFOOZ Edger Spools Replacement 10ft 0.065" for Worx WG180 WG163 WA0010 Weed Wacker Eater String with WA6531 GT Spool Cover 50006531 String Trimmer Refills 10ft 0.065"(10 Spools, 2 Caps)',
          aLink: 'https://amzn.to/2H0zUvO',
          iframeLink: '//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=mywebsit0000a-20&language=en_US&marketplace=amazon&region=US&placement=B08953K5YP&asins=B08953K5YP&linkId=90054a69773ee8cf0fe8401497990623&show_border=true&link_opens_in_new_window=true'  
        }
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

export default LinesSpools