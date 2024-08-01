---
title: Data Explorations
permalink: /data-explorations

section_id: data
layout: secondary
wide_container: false
---
{% comment %}
{% include antibody-table.md %}
{% endcomment %}

# {{ page.title }}
{:.mt-0}
<a href="#narrated-minerva-stories" class="button">View Narrated Data</a>
<a href="#curated-minerva-stories" class="button2">View Curated Data</a>
<a href="#automated-minerva-stories" class="button">View Automated Data</a>

 
{% include narrated-minerva-description.md %} 
{%
    assign narrated = site.data-cards
    | where_exp: "item", "item.hide != true"
%}

{% assign dataCardArray = '' | split: '' %}
{% for n in narrated %}
  {% if n.tags contains 'narrated' %}
    {% assign dataCardArray = dataCardArray | push: n %}
  {% endif %}
{% endfor %}

{% assign dataCardArraySort = dataCardArray | sort: 'date' | reverse %}

{% if dataCardArraySort.size > 0 %}
  {% include cards.html cards=dataCardArraySort %}
{% endif %}

  <a href="#narrated-minerva-stories" class="button">Back to Narrated Data</a>
  <a href="#automated-minerva-stories" class="button2">To Automated Data</a>

{% include curated-minerva-description.md %} 

{%
    assign curated = site.data-cards
    | where_exp: "item", "item.hide != true"
%}

{% assign dataCardArray = '' | split: '' %}
{% for c in curated %}
  {% if c.tags contains 'curated' %}
    {% assign dataCardArray = dataCardArray | push: c %}
  {% endif %}
{% endfor %}

{% assign dataCardArraySort = dataCardArray | sort: 'date' | reverse %}

{% if dataCardArraySort.size > 0 %}
  {% include cards.html cards=dataCardArraySort %}
{% endif %}

  <a href="#narrated-minerva-stories" class="button">Back to Narrated Data</a>
  <a href="#curated-minerva-stories" class="button2">Back to Curated Data</a>

{% include auto-minerva-description.md %} 

{%
    assign automated = site.data-cards
    | where_exp: "item", "item.hide != true"
%}

{% assign dataCardArray = '' | split: '' %}
{% for s in automated %}
  {% if s.tags contains 'auto' %}
    {% assign dataCardArray = dataCardArray | push: s %}
  {% endif %}
{% endfor %}

{% assign dataCardArraySort = dataCardArray | sort: 'date' | reverse %}

{% if dataCardArraySort.size > 0 %}
  {% include cards.html cards=dataCardArraySort %}
{% endif %}

  <a href="#narrated-minerva-stories" class="button">Back to Narrated Data</a>
  <a href="#curated-minerva-stories" class="button2">Back to Curated Data</a>