<div class="flex-center">
  <!---<div class="center" style="width:350px;">
    <img class="dp" src="{{site.baseurl}}/images/harold.jpg">
    <div class="quote">
      <div>Developing webpages from scratch is fun</div>
      <div class="author"> ~ Maghil Vannan M</div>
    </div>
  </div> --->
  <div id='container'>
  </div>
  <div class="leftside block-head">
    <h1 class="heading">Maghil Vannan M</h1>
    <div class="para flex-column">
      <div>Testing is important so why test it manually while you can automate it in cloud.</div>
      <div>Seasoned automation engineer</div>
      <div>budding site reliability engineer</div>
    </div>
  </div>
  <div class="grand-parent">
    <h1 class="heading">Work done (joules)</h1>
    <div class="parent">
      {% for p in site.data.certificates %}
        <div class="child">
          <div>{{c.ID}}</div>
        </div>
      {% endfor %}
    </div>
  </div>
  <div class="grand-parent">
    <h1 class="heading">Certifications</h1>
    <div class="parent">
      {% for c in site.data.certificates %}
        <div class="child">
          <div class="title">{{c.title}}</div>
          <hr class="seperator">
          <div><a href="{{site.baseurl}}/images/certificates/{{c.Img}}" ><img class="certificate-img" src="{{site.baseurl}}/images/certificates/{{c.Img}}" alt="Probably I didn't add"></a></div>
          <div>Issuer : {{c.org}}</div>
          <div>Credential ID : {{c.cID}}</div>
          <div>Credential URL : <a class="course" href="{{c.cURL}}">click</a></div>
        </div>
      {% endfor %}
    </div>
  <div>
  <div class="grand-parent">
    <h1 class="heading"> You have to see it for yourself </h1>
    <div class="pill-parent">      
      <div class="pill-child">
        <img onclick="forget()" class="pill" src="{{site.baseurl}}/images/blue.png"><h1 class="pill-text">Forget</h1>
      </div>
      <div class="pill-child">
        <img onclick="contact()" class="pill" src="{{site.baseurl}}/images/red.png"><h1 class="pill-text">Contact</h1>
      </div>
    </div>
  </div>
</div>
