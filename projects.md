---
title : projects
layout : default
---

<div class="grand-parent">
    <h1 class="heading">Work done (joules)</h1>
    <div class="parent">
        {% for p in site.data.projects %}
            <div class="child">
                <div class="title">{{p.title}}</div>
                <hr class="seperator">
                <div>
                    <img class="project-img" src="{{site.baseurl}}/images/projects/{{p.pImg}}" alt="Probably I didn't add">
                </div>
                <div class="details">
                    <div>Domain : {{p.domain}}</div>
                    <div>Team : {{p.pTeam}}</div>   
                    <div>Duration : {{p.duration}}</div>                 
                    <div>Project URL : <a class="course" href="{{p.pURL}}">click</a></div>
                </div>
            </div>
        {% endfor %}
    </div>
</div>