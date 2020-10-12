import { defineComponent } from 'vue'
import ScrollToTop from '@/components/button/scrollToTop/ScrollToTop'

const Main2 = defineComponent({
  name: 'Main2',
  mounted() {
    if (window.screenY <= 100) {
      document.documentElement.scrollTop = 0
    }
  },
  render() {
    return (
      <div class="col-lg-9">
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
          <div class="col-lg-4 col-md-6 mb-4">
            <div class="card p-4">
              <p><small><a href="https://amzn.to/2SFTErx">Greenworks 24252 40V 150 MPH Variable Speed Cordless Leaf Blower, 2.0Ah Battery and Charger Included</a></small></p>
              <iframe style="width:120px; height:240px; margin: auto;" 
                marginwidth={0} 
                marginheight={0} 
                scrolling="no" 
                frameborder="0" 
                src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=mywebsit0000a-20&language=en_US&marketplace=amazon&region=US&placement=B00AW72V4O&asins=B00AW72V4O&linkId=d0aa7deeecd42ed3b0ed5d1f400c86c4&show_border=true&link_opens_in_new_window=true">
              </iframe>
              <div class="card-footer mt-2">
                <small class="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 mb-4">
            <div class="card p-4">
              <p><small><a href="https://amzn.to/3lzNjdh">Sun Joe SBJ601E-RED 10 Amp 215 Max MPH All-Purpose 2-Speed Electric Blower, Red</a></small></p>
              <iframe style="width:120px; height:240px; margin: auto;" 
                marginwidth={0} 
                marginheight={0} 
                scrolling="no" 
                frameborder="0" 
                src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=mywebsit0000a-20&language=en_US&marketplace=amazon&region=US&placement=B01HIGWCQI&asins=B01HIGWCQI&linkId=026b21d28515f0a60ef5cef5ae74757f&show_border=true&link_opens_in_new_window=true">
              </iframe>
              <div class="card-footer mt-2">
                <small class="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 mb-4">
            <div class="card p-4">
              <p><small><a href="https://amzn.to/3lzNjdh">Sun Joe SBJ601E-RED 10 Amp 215 Max MPH All-Purpose 2-Speed Electric Blower, Red</a></small></p>
              <iframe style="width:120px; height:240px; margin: auto;" 
                marginwidth={0} 
                marginheight={0} 
                scrolling="no" 
                frameborder="0" 
                src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=mywebsit0000a-20&language=en_US&marketplace=amazon&region=US&placement=B076CSDNXK&asins=B076CSDNXK&linkId=3a99415b17671fb86b1c8416d7a27957&show_border=true&link_opens_in_new_window=true">

                </iframe>
              <div class="card-footer mt-2">
                <small class="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 mb-4">
            <div class="card p-4">
              <p><small><a href="https://amzn.to/2GIAw9F">Greenworks Pro 80V Cordless Brushless Axial Blower, 2.0Ah Battery and Rapid Charger Included</a></small></p>
              <iframe style="width:120px; height:240px; margin: auto;" 
                marginwidth={0} 
                marginheight={0} 
                scrolling="no" 
                frameborder="0" 
                src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=mywebsit0000a-20&language=en_US&marketplace=amazon&region=US&placement=B00R6Z4SEQ&asins=B00R6Z4SEQ&linkId=6a425fbca301c45ebe6c35ad5e37fb54&show_border=true&link_opens_in_new_window=true">
                </iframe>
              <div class="card-footer mt-2">
                <small class="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 mb-4">
            <div class="card p-4">
              <p><small><a href="https://amzn.to/36OZ6R1">SENIX BLAX5-M-0 58 Volt 520 CFM, 129 MPH Max Cordless 3 Speed Blower with Turbo, Blue</a></small></p>
              <iframe style="width:120px; height:240px; margin: auto;" 
                marginwidth={0} 
                marginheight={0} 
                scrolling="no" 
                frameborder="0" 
                src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=mywebsit0000a-20&language=en_US&marketplace=amazon&region=US&placement=B07H9X956B&asins=B07H9X956B&linkId=d462a416c74b13ec0fb7f44707492035&show_border=true&link_opens_in_new_window=true">

                </iframe>
              <div class="card-footer mt-2">
                <small class="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 mb-4">
            <div class="card p-4">
              <p><small><a href="https://amzn.to/3ltah60">Meterk Cordless Leaf Blower 20V 2.0 Ah Lithium-ion Battery&Quick Charger , 150MPH, 3 Gear Variable Speed, Mini Lightweight 2 in 1 Sweeper & Vacuum</a></small></p>
              <iframe style="width:120px; height:240px; margin: auto" 
                marginwidth={0} 
                marginheight={0} 
                scrolling="no" 
                frameborder="0" 
                src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=mywebsit0000a-20&language=en_US&marketplace=amazon&region=US&placement=B088ZMXTCS&asins=B088ZMXTCS&linkId=51a288c208990bdcfb6d4c39c56743ef&show_border=true&link_opens_in_new_window=true">
              </iframe>                    
              <div class="card-footer mt-2">
                <small class="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 mb-4">
            <div class="card p-4">
              <p><small><a href="https://amzn.to/3lzNjdh">Sun Joe SBJ601E-RED 10 Amp 215 Max MPH All-Purpose 2-Speed Electric Blower, Red</a></small></p>
              <iframe style="width:120px; height:240px; margin: auto" 
                marginwidth={0} 
                marginheight={0} 
                scrolling="no" 
                frameborder="0" 
                src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=mywebsit0000a-20&language=en_US&marketplace=amazon&region=US&placement=B01GKIYJMA&asins=B01GKIYJMA&linkId=c0e1335b8a998f7dbecc3c133eada0a6&show_border=true&link_opens_in_new_window=true">     
              </iframe>              
              <div class="card-footer mt-2">
                <small class="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 mb-4">
            <div class="card p-4">
              <p><small><a href="https://amzn.to/34EWWAF">Sun Joe SBJ597E 6 Amp 155 Max Mph All-Purpose Electric Blower</a></small></p>
              <iframe style="width:120px; height:240px; margin: auto" 
                marginwidth={0} 
                marginheight={0} 
                scrolling="no" 
                frameborder="0" 
                src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=mywebsit0000a-20&language=en_US&marketplace=amazon&region=US&placement=B07RDCKXNP&asins=B07RDCKXNP&linkId=87c5a69f5bd192305b2f440237530db1&show_border=true&link_opens_in_new_window=true">
              </iframe>               
              <div class="card-footer mt-2">
                <small class="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 mb-4">
            <div class="card p-4">
              <p><small><a href="https://amzn.to/2SDMBj3">Greenworks 24252 40V 150 MPH Variable Speed Cordless Leaf Blower, 2.0Ah Battery and Charger Included</a></small></p>
              <iframe style="width:120px; height:240px; margin: auto" 
                marginwidth={0}
                marginheight={0} 
                scrolling="no" 
                frameborder="0" 
                src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=mywebsit0000a-20&language=en_US&marketplace=amazon&region=US&placement=B00AW72V4O&asins=B00AW72V4O&linkId=87120bf1173e125654a0207704904427&show_border=true&link_opens_in_new_window=true">
              </iframe>
              <div class="card-footer mt-2">
                <small class="text-muted">&#9733; &#9733; &#9733; &#9734;</small>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 mb-4">
            <div class="card p-4">
              <p><small><a href="https://amzn.to/3nthQLI">LiTHELi 40V Leaf Blower Cordless 480CFM 92MPH with Brushless Motor, 2.5AH Battery and Charger</a></small></p>
              <iframe style="width:120px; height:240px; margin: auto" 
                marginwidth={0} 
                marginheight={0} 
                scrolling="no" 
                frameborder="0" 
                src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=mywebsit0000a-20&language=en_US&marketplace=amazon&region=US&placement=B07RLYKVT4&asins=B07RLYKVT4&linkId=e7a2e49e45db7de7127ff0e46cfcf72c&show_border=true&link_opens_in_new_window=true">
              </iframe>
              <div class="card-footer mt-2">
                <small class="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
              </div>
            </div>
          </div>
          
          <div class="col-lg-4 col-md-6 mb-4">
            <div class="card p-4">
              <p><small><a href="https://amzn.to/34FNblP">K I M O. Cordless Leaf Blower - 20V 2.0 Ah Lithium Battery 2in1 Sweeper/Vacuum for Blowing Leaf, Clearing Dust & Small Trash,Car, Computer Host, Hard to Clean Corner</a></small></p>

              <iframe style="width:120px; height:240px; margin: auto" 
                marginwidth={0} 
                marginheight={0} 
                scrolling="no" 
                frameborder="0" 
                src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=mywebsit0000a-20&language=en_US&marketplace=amazon&region=US&placement=B07MXH15ZN&asins=B07MXH15ZN&linkId=952cbfc7d9a69cf4b5a6437de4f1be14&show_border=true&link_opens_in_new_window=true">
              </iframe>
              <div class="card-footer mt-2">
                <small class="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 mb-4">
            <div class="card p-4">
              <p><small><a href="https://amzn.to/36Pk42j">WORX WG591 Turbine 56V Cordless Battery-Powered Leaf Blower with Brushless Motor & TurboBoost</a></small></p>
              <iframe style="width:120px; height:240px; margin: auto" 
                marginwidth={0} 
                marginheight={0} 
                scrolling="no" 
                frameborder="0" 
                src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=mywebsit0000a-20&language=en_US&marketplace=amazon&region=US&placement=B015FF898E&asins=B015FF898E&linkId=6132dbcfdccf8b4447ba4b8f309ce198&show_border=true&link_opens_in_new_window=true">
              </iframe>
              <div class="card-footer mt-2">
                <small class="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
              </div>
            </div>
          </div>

        </div>
        <ScrollToTop />

      </div>
    )
  }
})

export default Main2