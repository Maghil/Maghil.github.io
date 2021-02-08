---
title : certifications
layout : default
---

<div class="grand-parent">
    <h1 class="heading">Certifications</h1>
    <div class="parent">
        {% for c in site.data.certifications %}
            <div class="child">
                <div class="title">{{c.title}}</div>
                <hr class="seperator">
                <div>
                    <a href="{{site.baseurl}}/images/certifications/{{c.cImg}}">
                        <img class="certificate-img" src="{{site.baseurl}}/images/certifications/{{c.cImg}}" alt="Probably I didn't add">
                    </a>
                </div>
                <div class="details">
                    <div>Issuer : {{c.org}}</div>
                    <div>Credential ID : {{c.cID}}</div>
                    <div>Credential URL : <a class="course" href="{{c.cURL}}">click</a></div>
                </div>
            </div>
        {% endfor %}
    </div>
<div>