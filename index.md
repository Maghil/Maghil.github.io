<div class="flex-center">
  <div class="center" style="width:350px;">
    <img class="dp" src="{{site.baseurl}}/images/harold.jpg">
    <div class="quote">
      <div>Developing webpages from scratch is fun</div>
      <div class="author"> ~ Maghil Vannan M</div>
    </div>
  </div>
  <div class="leftside block-head">
    <h1 class="heading">Maghil Vannan M</h1>
    <div class="para flex-column">
      <div>Testing is important so why test it manually while you can automate it in cloud.</div>
      <div>Seasoned automation engineer</div>
      <div>budding site reliability engineer</div>
    </div>
  </div>
  <div class="certifications">
     <h1 class="heading">Certifications</h1>
     {% for c in site.data.certificates %}
       <div>{{c.title}}</div>
     {% endfor %}
  <div>
</div>
