---
title: Cooler Master
artist: WHYIXD
publishDate: 2022-07-02 00:00:00
photography:
img: /assets/code/bathtub.gif
img_alt: Iridescent ripples of a bright blue and pink liquid
photo: YHLAA
size: 7 x 5 x 7 m
link: https://www.whyixd.com/cyclonicbloom
artistSite: https://www.whyixd.com/
description: |
  Cyclonic Bloom is an art installation created for Cooler Master. It features 177 mechanical flowers equipped with stepper motors, 
  LEDs, and WiFi chips. Using computer programming, we 
  individually designed and controlled each flower via WiFi. 
  Additionally, an interactive panel allows audiences to engage with 
  the flowers.
tags:
  - Programming
  - Light and Movement Design
---

<style>
     .embed-container {
      --video--width: 1084;
      --video--height: 666;

      position: relative;
      padding-bottom: calc(var(--video--height) / var(--video--width) * 100%); /* 41.66666667% */
      overflow: hidden;
      max-width: 100%;
      background: black;
    }

    .embed-container iframe,
    .embed-container object,
    .embed-container embed {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  </style>

### About the Work

Cyclonic Bloom is a kinetic light installation designed in collaboration with Cooler Master, a renowned computer cooling company established in Taiwan. For their newly completed Cooler Master 'Maker Building' in Taipei, Whyixd utilized their most popular product, the fan, as the basis for the installation. We transformed the fans into petals, forming 177 mechanical flowers, each composed of six fans.

Cooler Master values maker culture deeply, with their slogan 'Make It Yours.' Embracing this spirit, we designed these flowers to symbolize creation and renewal. The installation includes an interactive panel where the audience can add patterns to the flowers, causing them to change colors and patterns in response. Every hour, the flowers perform a show synchronized with music composed by Liv W.

### About Controlling

Each flower is controlled by a microcontroller and receives signals via Wi-Fi. Since the connection is one-way (from the computer to the flowers), we can't track the exact position of each flower. To address this, I developed a computer simulation system. The simulation includes 177 3D models, each programmed with realistic acceleration and motor speed parameters. This allows us to accurately predict the behavior of the real installation and send the correct signals at the right times.

<div class="array"style="margin:50px 0px 0px 0px;">
  <div class="arrayItem"  >
  <img src="/assets/Cooler/simu1.jpg" style="height:280px; margin:5px;"/>
    <img src="/assets/Cooler/flower.jpg" style="height:280px; margin:5px;"/> 
      
   <img src="/assets/Cooler/panel.jpg" style="height:280px; margin:5px;"/>
  </div>
</div>
Control Panel and Simulation

### Show Design

Each hour, the show begins with the flowers blooming in monochromatic and random patterns with white lights. Gradually, they start clustering together, introducing more colors. Eventually, they form a large group, creating intricate patterns and vibrant displays. This progression reflects Cooler Master's commitment to the maker spirit, symbolizing the journey of individual creators. Initially, each maker works independently, but as they connect and collaborate, they inspire one another, leading to the creation of larger and more impressive works, culminating in a beautiful, unified display.

<div class="gallery" style="    margin-top:100px;">

<div class="height  withTitle">
<span class="imgTitle">Simulation</span>
<img style=""src="/assets/Cooler/simu.gif">
</div>

<div class="height  withTitle">
<span class="imgTitle">Interactive Panel</span>
<img style=""src="/assets/Cooler/information.jpg">
</div>

<div class="height  withTitle">
<span class="imgTitle">Interactive Panel</span>
<img style=""src="/assets/Cooler/size.jpg">
</div>

<div class="height  withTitle">
<span class="imgTitle">Module Test</span>
<img style=""src="/assets/Cooler/test.gif">
</div>

<div class="width " >
<img style=""src="/assets/Cooler/installation.jpg">
</div>

</div>
<div class='embed-container'>
<iframe title="vimeo-player" src="https://player.vimeo.com/video/783560189?h=3646606fd&autoplay=1&muted=1"  frameborder="0"  frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen</iframe>
<div class='embed-container'>
