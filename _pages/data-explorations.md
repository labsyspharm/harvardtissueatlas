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
{:.mb-0}
Our image data can be viewed at high resolution online (without download), via [Minerva](https://www.minerva.im/). In Minerva, viewers can annotate and share regions of interest, pan and zoom to explore different levels of detail, and view different subsets of markers. **Minerva stories have three main categories:**
>* **[Automated stories](#automated-minerva-stories)** provide basic image viewing with automatic rendering settings, enabling rapid, lightweight sharing of highly multiplexed images, without download. 
>* **[Curated stories](#curated-minerva-stories)** extend the automated stories, adding a quality control step to remove failed markers, ensure appropriate channel intensity settings, and provide metadata about the underlying sample and image. 
>* **[Narrated stories](#narrated-minerva-stories)** go a step further, using multi-step narrations to walk a viewer through key features of the data. Narrated stories distill the multidisciplinary knowledge encompassed by each atlas dataset into a single product that grounds the scientific analyses in the underlying data and metadata. 
 <br>

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
  {% include cards.html cards=dataCardArraySort heading='Narrated Minerva Stories'%}
{% endif %}

  <a href="" class="button2">Back to Narrated Data</a>
  <a href="#automated-minerva-stories" class="button2">To Automated Data</a>

## Curated Minerva Stories
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

  <a href="" class="button2">Back to Narrated Data</a>
  <a href="#curated-minerva-stories" class="button2">Back to Curated Data</a>

## Automated Minerva Stories
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

  <a href="" class="button2">Back to Narrated Data</a>
  <a href="#curated-minerva-stories" class="button2">Back to Curated Data</a>
  <a href="#automated-minerva-stories" class="button2">Back to Automated Data</a>