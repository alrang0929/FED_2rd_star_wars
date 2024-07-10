import React from 'react';

import "../../css/md_gallery.scss";

function MdGallery(props) {
    return (
      <div id="gallery-area">
        <section class="gallery-area cont-box section-top">
          <div class="gallery-wrap inboxman">
            <h2>
              <span>Galleries</span>
            </h2>
            <div class="gallery-box fx-box gbox1">
              <div class="col-7 col-2nd-12 gimg-box">
                <img
                  src="/images/sub_themandalorian_images/gallery_main1.jpeg"
                  alt="갤러리메인이미지"
                />
              </div>
              <div class="col-5 col-2nd-12 gtxt-box">
                <div class="bullet"></div>
                <h3>
                  <span> Poster Gallery | The Mandalorian Season 3 </span>
                </h3>
                <p class="galaxy-sub-txt">
                  Explore a continuously updated collection of The Mandalorian
                  Season 3 posters!
                </p>
                <p>26 Images</p>
              </div>
            </div>
            <div class="gallery-box fx-box gbox2">
              <div class="col-7 col-2nd-12 gimg-box">
                <img
                  src="/images/sub_themandalorian_images/gallery_main2.jpeg"
                  alt="갤러리메인이미지"
                />
              </div>
              <div class="col-5 col-2nd-12 gtxt-box">
                <div class="bullet"></div>
                <h3>
                  <span>Stills Gallery | The Mandalorian Season 3</span>
                </h3>
                <p>19 Images</p>
              </div>
            </div>
            <div class="gallery-cont-box">
              <div class="gallery-tab-btn fa-solid fa-xmark fa-4x"></div>
              <div class="gallery-img-txt"></div>
              <div class="gallery-tab"></div>
              <button class="abtn ab1 fa-solid fa-angle-left gbtn gbtn1"></button>
              <button class="abtn ab2 fa-solid fa-angle-right gbtn gbtn2"></button>
            </div>
          </div>
        </section>
      </div>
    );
}

export default MdGallery;