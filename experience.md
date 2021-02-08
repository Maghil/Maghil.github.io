---
title : experiences
layout : default
---

<div class="grand-parent">
    <h1 class="heading">Experience</h1>
    <div class="parent">
        {% for p in site.data.jobs %}
            <div class="child">
                <div class="title">{{p.Jtitle}}</div>
                <hr class="seperator">
                <div>
                    <img class="project-img" src="{{site.baseurl}}/images/jobs/{{p.img}}" alt="Probably I didn't add">
                </div>
                <div class="details">
                    <div>company : {{p.company}}</div>   
                    <div>start : {{p.start}}</div>       
                    <div>end : {{p.end}}</div>           
                    <div>description : {{p.description}}</div>
                </div>
            </div>
        {% endfor %}
    </div>
</div>