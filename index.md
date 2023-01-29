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
        <h1 class="heading-intro">Maghil Vannan M</h1>
        <div class="para flex-column">
          <div>JUNIOR DEVOPS ENGINEER</div>
          <div>Me + Pipeline = Faster, Reliable Pipeline</div>
          <div>Experience : Bash, Terraform, Ansible, Concourse, Python, AWS, Circle CI </div>
        </div>
      </div>
      <div class="dp-parent">
        <img class="dp" src="{{site.baseurl}}/images/semi%20formal.jpg" alt="Probably I didn't add">
      </div>
    </div>
    <div class="grand-parent">
      <h1 class="heading">Skills</h1>
      <div class ="parent-margin">
        <img class ="chart" src="{{site.baseurl}}/images/skillChart.png" alt="image corrupted i guess">
        <div class ="center-hor">
          <h4>Googling is a product of amount of task and skill level</h4>
        </div>
      </div>
    </div>
    <div class="grand-parent">
      <div class="flex-changer heading">
        <div class="heading-groups">Experience</div>
        <div><a href="{{site.baseurl}}/experience" class="btn btn-github">View all</a></div>
      </div>
      <div class="parent">
        {% for p in site.data.jobs %}
          {% if {{forloop.index}} < 5 %}  <!-- for loop starts from 1-->
            <div class="child">
              <div class="title">{{p.Jtitle}}</div>
              <hr class="seperator">
              <div><img class="project-img" src="{{site.baseurl}}/images/jobs/{{p.img}}" alt="Probably I didn't add"></div>
              <div class="details">
                <div>company : {{p.company}}</div>
                <div>start : {{p.start}}</div>
                <div>end : {{p.end}}</div>
              </div>
            </div>
          {% endif %}
        {% endfor %}
      </div>
    </div>
    <div class="grand-parent">
      <div class="flex-changer heading">
        <div class="heading-groups">Work done(joules)</div>
        <div><a href="{{site.baseurl}}/projects" class="btn btn-github">View all</a></div>
      </div>
      <div class="parent">
        {% for p in site.data.projects %}
          {% if {{forloop.index}} < 5 %}  <!-- for loop starts from 1-->
            <div class="child">
              <div class="title">{{p.title}}</div>
              <hr class="seperator">
              <div><img class="project-img" src="{{site.baseurl}}/images/projects/{{p.pImg}}" alt="Probably I didn't add"></div>
              <div class="details">
                <div>Domain : {{p.domain}}</div>
                <div>Team : {{p.pTeam}}</div>
                <div>Duration : {{p.duration}}</div>
                <div>Project URL : <a class="course" href="{{p.pURL}}">click</a></div>
              </div>
            </div>
          {% endif %}
        {% endfor %}
      </div>
    </div>
    <div class="grand-parent">
      <div class="flex-changer heading">
        <div class="heading-groups">Certifications</div>
        <div><a href="{{site.baseurl}}/certifications" class="btn btn-github">View all</a></div>
      </div>
      <div class="parent">
        {% for c in site.data.certifications %}
          {% if {{forloop.index}} < 5 %}
            <div class="child">
              <div class="title">{{c.title}}</div>
              <hr class="seperator">
              <div>
                <a href="{{site.baseurl}}/images/certifications/{{c.cImg}}" >
                  <img class="certificate-img" src="{{site.baseurl}}/images/certifications/{{c.cImg}}" alt="Probably I didn't add">
                </a>
              </div>
              <div class="details">
                <div>Issuer : {{c.org}}</div>
                <div>Credential ID : {{c.cID}}</div>
                <div>Credential URL : <a class="course" href="{{c.cURL}}">click</a></div>
              </div>
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
          <img onclick="forget()" class="pill" src="{{site.baseurl}}/images/blue.png" alt="bluepill"><h1 class="pill-text">Forget</h1>
        </div>
        <div class="pill-child">
          <img onclick="contact()" class="pill" src="{{site.baseurl}}/images/red.png" alt="redpill"><h1 class="pill-text">Contact</h1>
        </div>
      </div>
    </div>
  </div>
</div>
