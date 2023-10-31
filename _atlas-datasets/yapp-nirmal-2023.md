---
layout: secondary
title: Data
section_id: data

data:
  publication:
    title: Multiplexed 3D analysis of cell plasticity and immune niches in melanoma
    authors: 'Yapp C, Nirmal AJ, Zhou F, Maliga Z, Llopis PM, Murphy GF, Lian CG, Danuser G, Santagata S, Sorger PK'

---

{% assign urlParts = page.url | split: '/' %}
{% assign sectionId = urlParts[-1] %}

{% include atlas-dataset-info.html
    sectionId=sectionId
    pubData=page.data
    thumbnailDir=sectionId %}


## Data Access
Instructions to access data for download will be added by 11/7
