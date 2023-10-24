---
layout: secondary
title: Data
section_id: data

data:
  publication:
    title: 'Multiplexed 3D Analysis of Cell Plasticity and Immune Niches in Human Melanoma'
    authors: ''
    journal: 'Clarence Yapp*, Ajit J. Nirmal*, Felix Zhou, Zoltan Maliga, Paula Montero Llopis, George Murphy, Christine Lian, Gaudenz Danuser, Sandro Santagata and Peter K. Sorger' 
    description: '' 
    links:
---

{% assign urlParts = page.url | split: '/' %}
{% assign sectionId = urlParts[-1] %}

{% include atlas-dataset-info.html
    sectionId=sectionId
    pubData=page.data
    thumbnailDir=sectionId %}
<br>

### Data Overviews
**Data Overviews provide access to minimally processed images with no annotation or quality control. Click any of the following thumbnail images for an interactive view of the full-resolution Multiplex Ion Beam Imaging (MIBI) data.**

{%
    assign overviews = site.data-cards
    | where_exp: "item", "item.url contains 'mel-3d-mis-2/'"
    | where_exp: "item", "item.hide != true"
%}

{% if overviews.size > 0 %}
  {% include cards.html cards=overviews %}
{% endif %}
