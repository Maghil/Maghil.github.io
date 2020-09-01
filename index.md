<div class="flex-center">
  <!---<div class="center" style="width:350px;">
    <img class="dp" src="{{site.baseurl}}/images/harold.jpg">
    <div class="quote">
      <div>Developing webpages from scratch is fun</div>
      <div class="author"> ~ Maghil Vannan M</div>
    </div>
  </div> --->
  <div id='container'></div>
  <div class="intro">
    <div class="leftside block-head">
      <h1 class="heading">Maghil Vannan M</h1>
      <div class="para flex-column">
        <div>Testing is important so why test it manually while you can automate it in cloud.</div>
        <div>Seasoned automation engineer</div>
        <div>budding site reliability engineer</div>
      </div>
    </div>
    </div class="dp-parent">
      <img class="dp" src="{{site.baseurl}}/images/semiformal.jpg" >
    </div>
  </div>
  <div class="grand-parent">
    <h1 class="heading">Skills</h1>
    <div class ="parent-margin">
      <img class ="chart" src="{{site.baseurl}}/images/skillChart.png">
      <div class ="center-hor">
        <h4>Googling is a product of amount of task and skill level</h4>
      </div>
    </div>
  </div>
  <div class="grand-parent">
    <h1 class="heading">Work done (joules) 
      <a href="{{site.baseurl}}/projects" class="btn btn-github"><span class="icon"></span>View all</a> 
    </h1>
    <div class="parent">
      {% for p in site.data.projects %}
        {% if {{forloop.index}} < 5 %}  <!-- for loop starts from 1-->
          <div class="child">
            <div class="title">{{p.title}}</div>
            <hr class="seperator">
            <div><img class="project-img" src="{{site.baseurl}}/images/projects/{{p.pImg}}" alt="Probably I didn't add"></div>
            <div>Domain : {{p.domain}}</div>
            <div>Team : {{p.pTeam}}</div>   
            <div>Duration : {{p.duration}}</div>                 
            <div>Project URL : <a class="course" href="{{p.pURL}}">click</a></div>
          </div>
        {% endif %}
      {% endfor %}
    </div>
  </div>
  <div class="grand-parent">
    <h1 class="heading">Certifications  
      <a href="{{site.baseurl}}/certificates" class="btn btn-github"><span class="icon"></span>View all</a>
    </h1>
    <div class="parent">
      {% for c in site.data.certificates %}
        {% if {{forloop.index}} < 5 %}
          <div class="child">
            <div class="title">{{c.title}}</div>
            <hr class="seperator">
            <div>
              <a href="{{site.baseurl}}/images/certificates/{{c.cImg}}" >
                <img class="certificate-img" src="{{site.baseurl}}/images/certificates/{{c.cImg}}" alt="Probably I didn't add">
              </a>
            </div>
            <div>Issuer : {{c.org}}</div>
            <div>Credential ID : {{c.cID}}</div>
            <div>Credential URL : <a class="course" href="{{c.cURL}}">click</a></div>
          </div>
        {% endif %}
      {% endfor %}
    </div>
  <div>
  <div class="grand-parent">
    <h1 class="heading">Well do you ?</h1>
    <div class="parent-margin">
      <div class="dice-child">
        <img onclick="thoughts()" class ="dice" src="{{site.baseurl}}/images/random1.png" alt="dice">
      </div>
      <div class ="random-post center-hor">
        <div id="idea"></div>
      </div>
    </div>
  </div>
  <div class="grand-parent">
    <h1 class="heading"> You have to see it for yourself </h1>
    <div class="parent-margin">      
      <div class="pill-child">
        <img onclick="forget()" class="pill" src="{{site.baseurl}}/images/blue.png"><h1 class="pill-text">Forget</h1>
      </div>
      <div class="pill-child">
        <img onclick="contact()" class="pill" src="{{site.baseurl}}/images/red.png"><h1 class="pill-text">Contact</h1>
      </div>
    </div>
  </div>
</div>
