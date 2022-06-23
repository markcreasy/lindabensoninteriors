import * as React from 'react'
import Layout from '../components/layout'
import traditionalHomes from '../images/portfolio/statelyHomes/LINDA_006-1.jpg'
import kravet from '../images/logos/kravet.jpg'
import pjImg from '../images/logos/pj.gif'
import shs1 from "../images/articles/shs1.jpg"
import shs2 from "../images/articles/shs2.jpg"
import shs3 from "../images/articles/shs3.jpg"
import shs4 from "../images/articles/shs4.jpg"
import shs5 from "../images/articles/shs5.jpg"
import tftImg from "../images/logos/tipsfromtown.gif"
import tft1 from "../images/articles/tft1.jpg"
import tft2 from "../images/articles/pippas-office.jpg"
import njImg from "../images/logos/nj.gif"

const PressPage = () => {
  return (
    <Layout pageTitle="press">
      <div class="pressArticle">
        <div><img id="traditionalHomeImg" src={traditionalHomes} alt="Stately Homes By The Sea"/></div>
        <div>
          <p id="traditionalHome">
             Linda was recently featured in an edition of Traditional Home Magaizine. As a lover of layering, Linda Benson had no problem adding texture to the sunroom. She started by installing latticework and wood-trim moldings over some of the existing brick wall. Natural materials—note the bamboo shades, wicker chairs, and sisal rug—keep to the coastal theme. Get the full article at <a href="http://www.traditionalhome.com/design/showhouses/stately-homes-sea-designer-showhouse?page=2">Tradition Home's Website</a>, or pick up a copy of Tradition Home Magazine. Please see the portfolio section for a photo gallery of Linda's work for the Stately Homes By The Sea showhouse.
          </p>
          <div class="pressLink"><a href="http://www.traditionalhome.com/design/showhouses/stately-homes-sea-designer-showhouse?page=2">Read Full Article</a></div>
        </div>
     </div>

     <div class="pressArticle">
      <div><img id="njLogo" src={kravet} alt="kravet.com"/></div>
      <div>
        <p id="kravetP">
           Kravet and Lee Jofa have featured Linda's work for "The Sunroom" at the Stately Homes By The Sea 2013 Showhouse and displayed it on their website in their DesignShare Photo Gallery. All of the fabrics in the room came from both Kravet and Lee Jofa. All of these beautiful fabrics showcased were either linen or linen/cotton. As you can see, these fabrics lent an updated-classic look and freshness to her Sunroom.   </p>
         <div class="pressLink"><a href="http://www.kravet.com/designshare/Linda_Benson_Interiors.htm">Read Full Article</a></div>
      </div>
     </div>

     <div class="pressArticle">
      <div><img id="pjLogo" src={pjImg} alt="phillipjeffries.com"/></div>
      <div>
        <p>
          Phillip Jeffries, the World's leader in Natural, Textured and Specialty Wallcoverings has featured Linda on their site for her use of their Extra Fine Arrowroot Wallcovering in her room at The Mansion In May Showhouse in 2012.
        </p>
        <div class="pressLink"><a href="http://phillipjeffries.com/gallery/designer/319-linda_benson_interiors.html" target="_blank" rel="noopener noreferrer">Read Full Article</a></div>
      </div>
     </div>

     <div class="pressArticle">
      <div><h3 id="shsLogo">Second{'\n'}Hand{'\n'}Social</h3></div>
      <div>
         <p>
             Today we’re excited to introduce and feature Linda Benson of Linda Benson Interiors in our continuing “Decorating on a Dime” series. “I grew up in an artsy family. I always loved to work with fabrics and metals so I went into set design. I had to make pieces from scratch when I couldn’t find anything that perfectly fit the scene. That is where I honed my hands-on approach to Interior Design. After working on sets, I designed my own house and that inspired me to do it for others.”
            </p><p>
             Linda shares some fabulous examples of her work with a recent exhibit she helped put together: These pieces were used for the “Pippa Middleton’s Private Office” exhibit in the Glynallyn Mansion for the Mansion in May event held in Morristown, New Jersey. The space was designed and decorated to reflect Pippa Middleton’s lifestyle. I looked to her as an inspiration because of her professionalism, active participation in charity work, and social character. However, I created it with all young professional women in mind as well. My goal was to create something that would feel professional yet cozy for any ambitious young lady. I believe that magic happens when you re-purpose separate items to complement each other for a space, and in this case, it created a charming atmosphere.
         </p>
         <div class="pressLink"><a href="http://www.tagsellit.com/second-hand-social/decorating-on-a-dime-repurposing-for-any-occasion/" target="_blank" rel="noopener noreferrer">Read Full Article</a></div>
         <div class="articlePhotos">
             <img src={shs1} class="shsPhoto" alt="Stately Homes Article Photography"/>
             <img src={shs2} class="shsPhoto" alt="Stately Homes Article Photography"/>
             <img src={shs3} class="shsPhoto" alt="Stately Homes Article Photography"/>
             <img src={shs4} class="shsPhoto" alt="Stately Homes Article Photography"/>
             <img src={shs5} class="shsPhoto" alt="Stately Homes Article Photography"/>
         </div>
      </div>
     </div>

     <div class="pressArticle">
      <div><img id="tft" src={tftImg} alt="Tips From Town"/></div>
      <div>
         <p>
             Glynallyn, the star of this years Mansion in May Designer Show House, was inspired by an English Tudor manor built in 1481. Stained glass windows, stone arches, gargoyles, a slate roof and brick walls make this castle an ideal decorating show house. Residing on 7.5 acres in Convent Station, NJ, was constructed in 1913 by George Marshall Allen, a New York businessman. Mansion in May designers creatively and skillfully incorporated the castle’s rich architecture with their own decorating themes. The results were stunning.
         </p>
         <p>
             Another noteworthy room is “Pippa Middleton’s Private Office” by Linda Benson Interiors. This is the designer’s solution to the need for every modern woman to have her own office–especially the sister of the Duchess of Cambridge. Cool blue tones, soft pale yellow walls with a touch of red at the windows, and comfortable chairs and desk are conducive to the business of tending to philanthropy, email, and, of course, one’s social calendar.
         </p>
         <div class="pressLink"><a href="http://tipsfromtown.com/2012/06/15/new-decor-meets-old-castle/" target="_blank" rel="noopener noreferrer">Read Full Article</a></div>
         <div class="articlePhotos">
             <img src={tft1} class="articlePhoto" alt="Tips From Town Article Photography"/>
             <img src={tft2} class="articlePhoto" alt="Tips From Town Article Photography"/>
         </div>
      </div>
     </div>

     <div class="pressArticle">
      <div><img id="njLogo" src={njImg} alt="NJ.com"/></div>
      <div>
         <p>
             The 2012 Mansion In May Designer Showhouse and Gardens will open its doors on May 1, offering lucky visitors a chance to tour the historic Glynallyn Castle in Morristown. The Mansion will be open from May 1 - May 31. Built between 1913 -1917 and listed on the National Register of Historic Places, Glynallyn will be brought back to its original grandeur by 60 of the area's top interior and landscape designers.
         </p>
         <p>
             The Mansion tour continues upstairs, including a look at the large family quarters, and at the multiple guest suites complete with their own fireplaces and balconies. "Several of our designers have been inspired by the English roots of Glynallyn, but have interpreted these with a modern twist," said Dennis. "We have "Pippa Middleton’s Private Office" designed by Linda Benson Interiors, and a gorgeous painted stairway featuring a wall mural of the original English manor home that inspired Glynallyn, created by the artist Daryl Hastings of Hastings Design. Another British inspired space is "The Tudor Rose," produced by Patina Painted Finishes and Murals with a magnificent trellis and English Tudor Rose pattern."
         </p>
         <div class="pressLink"><a href="http://www.nj.com/independentpress/index.ssf/2012/03/mansion_in_may_designer_showho.html" target="_blank" rel="noopener noreferrer">Read Full Article</a></div>
      </div>
     </div>
    </Layout>
  )
}
export default PressPage
