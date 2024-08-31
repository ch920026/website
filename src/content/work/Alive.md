---
title: Alive "#1:" Beyond the Edge
artist: WHYIXD
publishDate: 2023-06-02 00:00:00
img: https://storage.googleapis.com/profolio_media/public/assets/alive/Alive1.jpg
img_alt: flower
photo: MaxiHo
size: 695mm x 728mm x 154mm
link: https://www.whyixd.com/alive
artistSite: https://www.whyixd.com/
description: |
  Alive #1 is a limited edition artwork designed for collection, created in collaboration with florist Queena Wang. It combines metal and flowers to represent the organic and artificial elements found in cities. Each individual light is controlled by led chips using the SPI protocol, with relays accommodating different voltage specifications. To address space constraints, a custom PCB was
  designed. The light effects change according to the time of day.
tags:
  - Contorl System
  - PCB Design
  - Light Design
---

### About The Work

"Alive" is a limited edition in-house installation that tries to capture the image of a city. A city, in essence, is an organic entity shaped by both human-made structures and natural elements such as plants. These two elements interact mutually, resulting in the dynamic appearance of a city. In this installation, printed metal and dried flowers serve as representations of artifacts and natural objects, respectively. The lights within the installation symbolize the passage of time, further enhancing the dynamic and living quality of the urban landscape

### PCB design

This work requires individual LED lights, liquid LEDs, and one long LED strip in the middle. Since the work is meant for close-distance viewing, finding a way to control the LEDs discreetly is crucial.
Due to the intricate and slender structure of the work, using large DMX-chip LEDs or strips is impractical. We devised a solution by incorporating SPI chips into the control panel to manage the individual small LEDs. This allows us to control each LED with just two wires and transmit the signal continuously.
Also, the limited space available for the control panel necessitated the design of a custom .

The control panel includes one microcontroller unit, power driver for high-voltage LEDs, and multiple SPI chips. The compact dimensions for the panel (100 mm\*150 mm\*23 mm) presented a challenge. Therefore, I invested considerable time arranging the position of connectors and ICs to ensure the wires could be organized and easily connected during assembly.

<div class="array">
  <div class="arrayItem"  >
    <img src="https://storage.googleapis.com/profolio_media/public/assets/alive/pcb1.jpg" style="height:300px; margin:15px;"/> 
        <img src="https://storage.googleapis.com/profolio_media/public/assets/alive/pcb2.jpg" style="height:300px; margin:15px;"/>
        <img src="https://storage.googleapis.com/profolio_media/public/assets/alive/pcb4.jpg" style="height:300px; margin:15px;"/>
        <img src="https://storage.googleapis.com/profolio_media/public/assets/alive/wire2.jpg" style="height:300px; margin:15px;"/>

  </div>
</div>

### Light Design

This installation features three types of lights: single SMD LEDs, liquid LEDs, and strips. The central circular strip represents the sun, completing a rotation once a day with a gentle swaying motion. As the direction and color temperature of the light change throughout the day, it creates varying shadows on the trees and buildings in the cityscape.
The SMD LEDs embedded within the printed metal represent the lights inside houses, simulating the glow coming out from people's homes. Meanwhile, the liquid LED strips aim to replicate the effect of strong artificial lights commonly seen in urban environments, such as street lamps or floodlights."

<div class="gallery" style="    margin-top:100px;">

<div class="width withTitle" >
<span class="imgTitle">Circuit Diagram</span>
<img style=""src="https://storage.googleapis.com/profolio_media/public/assets/alive/circuit.jpg">

</div>

<div class="height  withTitle">
<span class="imgTitle">Light Design</span>
<img style=""src="https://storage.googleapis.com/profolio_media/public/assets/alive/light.gif">
</div>

<div class="height  withTitle">
<span class="imgTitle">PCB 2nd Version</span>
<img style=""src="https://storage.googleapis.com/profolio_media/public/assets/alive/pcbv2.jpg">

  </div>
  <div class="height withTitle">
  <span class="imgTitle">PCB 2nd Version</span>
<img style=""src="https://storage.googleapis.com/profolio_media/public/assets/alive/pcbv2-2.jpg">
</div>

  <div class="height">
<img style=""src="https://storage.googleapis.com/profolio_media/public/assets/alive/assemble.jpg">
</div>
<div class="width ">
<img style=""src="https://storage.googleapis.com/profolio_media/public/assets/alive/alive2.jpg">

</div>
  <div class="height">
<img style=""src="https://storage.googleapis.com/profolio_media/public/assets/alive/alive3.jpg">
</div>
  <div class="height">
<img style=""src="https://storage.googleapis.com/profolio_media/public/assets/alive/alive4.jpg">
</div>

</div>
