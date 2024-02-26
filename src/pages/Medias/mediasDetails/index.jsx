/* eslint-disable react/prop-types */
import React from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

function MediasDetails() {
  // const medias = mediasDetails.filter((media) => media.id);

  const images = [
    {
      original: '/images/dj.jpg',
      thumbnail: '/images/dj.jpg',
      alt: 'image_dj',

    },
    {
      original: '/images/box_2.jpg',
      thumbnail: '/images/box_2.jpg',
      alt: 'box_2',
    },
    {
      original: '/images/public.jpg',
      thumbnail: '/images/public.jpg',
      alt: 'public',
    },
    {
      original: '/images/Stamps_purenice.jpg',
      thumbnail: '/images/Stamps_purenice.jpg',
      alt: 'Stamps_purenice',
    },
    {
      original: '/images/Barracuda.jpg',
      thumbnail: '/images/Barracuda.jpg',
      alt: 'Barracuda',

    },
    {
      original: '/images/Stack_Fest_Bouc.jpg',
      thumbnail: '/images/Stack_Fest_Bouc.jpg',
      alt: 'Stack_Fest_Bouc',
    },
    {
      original: '/images/KHF_Goodies.jpg',
      thumbnail: '/images/KHF_Goodies.jpg',
      alt: 'box_2',
    },
    {
      original: '/images/vue_fete_zik_2014.jpg',
      thumbnail: '/images/vue_fete_zik_2014.jpg',
      alt: 'KHF_Goodies',
    },
    {
      original: '/images/KHF_fete_zik_2015.jpg',
      thumbnail: '/images/KHF_fete_zik_2015.jpg',
      alt: 'KHF_fete_zik_2015',
    },
    {
      original: '/images/Roots_culture_Nicolas_Rattlehead.jpg',
      thumbnail: '/images/Roots_culture_Nicolas_Rattlehead.jpg',
      alt: 'Roots_culture_Nicolas_Rattlehead',
    },
  ];

  return (
    <>

      {/* Implementation of the Facebook group page. Awaiting validation by Meta */}

      {/* <div id="fb-root" />
      <script async defer crossOrigin="anonymous" src="https://connect.facebook.net/fr_FR/sdk.js#xfbml=1&version=v19.0&appId=1783266342176460" nonce="WsCVWgUP" />

      <div className="fb-page" data-href="https://www.facebook.com/pure.niceness.records" data-tabs="timeline" data-width="" data-height="" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/pure.niceness.records" className="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/pure.niceness.records">Pure Niceness Records</a></blockquote></div>

      <div className="fb_containeur">
        <iframe className="fb" src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fpure.niceness.records&tabs=timeline&width=500&height=500&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" title="facebook" width="500" height="500" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" />

        <iframe className="fb" src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fmentalstamina&tabs=timeline&width=500&height=500&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" title="facebook3" width="500" height="500" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" />

        <iframe className="fb" src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fking.hi.fi&tabs=timeline&width=500&height=500&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" title="facebook2" width="500" height="500" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" />
      </div> */}

      <div className="video_up_container">
        <iframe className="video_up" width="560" height="315" src="https://www.youtube.com/embed/aUN5L2zJwlU?si=OqZJxV8nOvUHm6n9" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
      </div>

      <ImageGallery items={images} />

    </>
  );
}

export default MediasDetails;
