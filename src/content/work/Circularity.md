---
title: Vicious Circularity (Ongoing)
artist: Ni Hao
publishDate: 2023-07-02 00:00:00
img: /assets/Circulating/Scooter.png
img_alt: Soft pink and baby blue water ripples together in a subtle texture.
photo: Ni Hao, Chen Hsi
size: 1.5 x 1.5 x 1 m
link: https://haoni.art/
artistSite: https://haoni.art/
password: test
description: |
  Vicious Circularity is an ongoing art project by artist Ni Hao. Part of the project features four scooters spinning in place, controlled remotely without riders.
tags:
  - Programmer
  - Control System Desgin
---

### About the work

Vicious Circularity is an art project by artist Ni Hao. Part of the project involves four scooters spinning simultaneously without riders. To achieve this, we had to design a structure and control system that is strong and reliable to ensure safety. For wireless connectivity, I chose Xbee as the communication method.

### Control System

Since these are real motorized scooters with engines, the project carries inherent dangers. As an engineer, controlling four scooters presents three major challenges. The first challenge is managing the motor's throttle, which involves understanding the gas control mechanism and the scooter's circuitry, then integrating them into the control system. The second challenge is maintaining a stable connection between the controller and the scooters at all times. The final challenge is handling four connections simultaneously without causing data traffic jams and ensuring acceptable delay times.

#### Throttle Control

For throttle control, we decided to use the original method of cable-controlled valves, but with modifications. We moved the throttle cable from the handle to the motor and added a sensor to detect whether the valve is securely closed, preventing the scooter from surging when the engine starts. This setup also ensures that the valve automatically returns to its default position when the scooter stops, avoiding fuel leakage.

#### Wireless Module

To maintain a stable connection, I chose Xbee, which is known for its stability and reliability, requiring only a one-time pairing. Once the connection is established, Xbee is nearly flawless in maintaining the link without dropping connections or losing packets. It works perfectly in a 1-to-1 connection. However, things become more complicated when building a 1-to-4 controller.

#### XBee Ecosystem

When communicating with more than one device, it is recommended to use API mode instead of broadcasting, which causes a lot of unnecessary packets. However, even in API mode, Xbee can experience delays when communicating with multiple devices frequently, as it prioritizes reliable packet delivery. Four Xbee end devices can cause up to a 5-second delay, which is unacceptable for controlling a potentially dangerous installation. To overcome this, I split the pairing into two groups and developed a program that continuously monitors the connection between the scooters, ensuring they can be immediately turned off if necessary or if the connection is lost.

<div class="gallery" style="    margin-top:100px;">

<div class="width withTitle" >
<span class="imgTitle">Control Digram</span>
<img style=""src="/assets/scooter/0.jpg">

</div>

<div class="height withTitle" >
<span class="imgTitle">Wireless module PCB Design</span>
<img style=""src="/assets/scooter/1.jpeg">
</div>

<div class="height withTitle" >
<span class="imgTitle"></span>
<img style=""src="/assets/scooter/2.jpeg">

</div>

<div class="height withTitle" >
<span class="imgTitle">First test</span>
<img style=""src="/assets/scooter/5e.gif">

</div>

<div class="height" >
<span class="imgTitle"></span>
<img style=""src="/assets/scooter/6.gif">

</div>

<div class="height withTitle" >
<span class="imgTitle"></span>
<img style=""src="/assets/scooter/4.jpeg">

</div>

<div class="height withTitle" >
<span class="imgTitle">Remote module on scooter</span>
<img style=""src="/assets/scooter/c4.jpeg">

</div>

<div class="height withTitle" >
<span class="imgTitle">Structure</span>
<img style=""src="/assets/scooter/2-2.jpeg">
</div>

<div class="height withTitle" >
<span class="imgTitle">Remote Controller Design</span>
<img style=""src="/assets/scooter/c1.jpeg">

</div>

<div class="height " >
<span class="imgTitle"></span>
<img style=""src="/assets/scooter/c3.jpeg">

</div>

<div class="height withTitle" >
<span class="imgTitle"></span>
<img style=""src="/assets/scooter/t1.jpeg">

</div>

<div class="height withTitle" >
<span class="imgTitle"></span>
<img style=""src="/assets/scooter/s1.gif">
</div>

<div class="height " >
<img style=""src="/assets/scooter/2s.gif">
</div>

<div class="height" >
<img style=""src="/assets/scooter/2-3.jpeg">
</div>

</div>
