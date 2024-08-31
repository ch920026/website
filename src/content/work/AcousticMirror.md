---
title: Acoustic Mirror
artist: 404 not found
publishDate: 2024-01-21 00:00:00
img: https://storage.cloud.google.com/profolio_media/public/assets/acoustic.jpg
img_alt: Acoustic Mirror
size: 10 m x 7 m x 6 m
photo: 404 not found
link: https://www.instagram.com/p/C2Zil4KvnxR/
artistSite: https://www.daylighteffect.com/project
description: |
  An art installation showcased at the Yuejin Light Festival in Taiwan. The installation spans 6 cubic meters and features 253 custom searchlights. Each searchlight is equipped with an RS485 chip for individual control by computer program.
tags:
  - Control System Design
---

### About The Work

During the Second World War, Britain constructed several colossal "acoustic mirrors" along its south and east coasts. These gigantic spherical mirrors, made with concrete, were designed to reflect the sound of approaching airplanes, enabling the British Army to pinpoint the enemies. Although these mirrors no longer serve their original purpose, they remain steadfast, evoking a sense of mystery and science fiction along today's coastline.
Inspired by the shape of these historic mirrors, the artist attempted to recreate their illusion. The installation features 243 high-powered searchlights controlled independently. Through a fusion of light patterns and sounds crafted by artist Hsin-yu Chang, our aim is to evoke a surreal and overwhelming experience for the audience.

<div class="happy">
  <div class="bdcard">
    <img src="https://storage.cloud.google.com/profolio_media/public/assets/acoustic1.jpg" style="width:400px;"/>
  </div>
<div class="bdtext">
<div>

### Technical Design

When designing an installation with so many elements on such a large scale, two main challenges emerge: 1. Designing a stable control system capable of transferring signals efficiently. 2. Properly managing power distribution. Additionally, the installation will float on the river during the exhibition. Given Taiwan’s capricious weather, characterized by rapid and unpredictable changes, it is also important to design a hardware system that enables electrical equipment to withstand severe conditions.

</div>

<p style="margin-top:50px;">The common protocols we use for light control are SPI and DMX. Considering the scale of the work (10*7*6 m), a differential signal (RS485) would be a reasonable choice. While SPI is convenient, it relies on each chip in series and performs poorly over long distances. Additionally, DMX is a widely used and mature technique. The crucial point now is to customize the searchlights with controlling chips, which is not a common requirement, as these searchlights are intended for daily use rather than stage lighting. After several trials and discussions with suppliers, I finally found a suitable factory that can help us integrate DMX chips inside the searchlights. Now, the 243 lights are ready to receive signals and perform.</p>

</div>
</div>

Power distribution, on the other hand, doesn't require advanced background knowledge; it relies solely on basic principles of physics. However, in practical applications, the wiring methods and placement of distribution boxes can be quite intricate. To mitigate noise interference, I separated the power and signal wires, and employed waterproof connectors in a backbone pattern. This approach significantly reduces the number of wires entering the boxes and also proves to be a suitable arrangement for 485 signals.

The installation was exhibited for almost two months and performed smoothly throughout the entire exhibition period. It stands as one of my most successful designs.

<div class="gallery" style="    margin-top:100px;">

  <div class="width withTitle">
  <span class="imgTitle">Control Plan</span>
  <img style=""src="https://storage.cloud.google.com/profolio_media/public/assets/acoustic/plan.jpg">
  </div>

  <div class="height withTitle" >
  <span class="imgTitle">Structure</span>
  <img src="https://storage.cloud.google.com/profolio_media/public/assets/acoustic/const.jpg">
  </div>

  <div class="height">
  <img src="https://storage.cloud.google.com/profolio_media/public/assets/acoustic/const1.jpg">
  </div>

  <div class="height  withTitle">
  <span class="imgTitle">Wiring</span>
  <img src="https://storage.cloud.google.com/profolio_media/public/assets/acoustic/wire.jpg">
  </div>

  <div class=" withTitle">
  <span class="imgTitle">Light Testing</span>
  <img src="https://storage.cloud.google.com/profolio_media/public/assets/acoustic/test10.gif">
  </div>

  <div class="width  withTitle">
  <span class="imgTitle">Light Testing</span>
  <img src="https://storage.cloud.google.com/profolio_media/public/assets/acoustic/all.gif">
  </div>

  <div class="height">
  <img src="https://storage.cloud.google.com/profolio_media/public/assets/acoustic/done.jpg">
  </div>

  <div class="height">
  <img src="https://storage.cloud.google.com/profolio_media/public/assets/acoustic/done1.jpg">
  </div>

   <div class="width">
  <img src="https://storage.cloud.google.com/profolio_media/public/assets/acoustic/show.jpg">
  </div>

</div>
