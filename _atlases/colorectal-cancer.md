---
date: 0004-02-01
name: Colorectal Cancer Atlas
summary: The Harvard Tissue Atlas for Colorectal Cancer aims to advance our understanding of the complex spatial interactions that contribute to colorectal cancer. Colorectal cancers are complex assemblies of tumor, immune, and stromal cells that invade adjacent tissue and spread to distant sites. We use highly multiplexed tissue imaging, spatial statistics, and machine learning to identify cell types and states underlying morphological features of known diagnostic and prognostic significance in colorectal cancer. This work is a component of the [Human Tumor Atlas Network](https://humantumoratlas.org/).  
project-image: publications/High-plex-immunofluorescence-imaging-and-traditional-histology-of-the-same-tissue-section-for-discovering-image-based-biomarkers-2.png
grant: NCI Human Tumor Atlas Network U2C-CA233262, NCI U54-CA225088, and the Ludwig Cancer Research Foundation
title: CRC Atlas
link: self
short-name: CRC Atlas
---

The Harvard Tissue Atlas for Colorectal Cancer aims to advance our understanding of the complex spatial interactions that contribute to colorectal cancer. Colorectal cancers are complex assemblies of tumor, immune, and stromal cells that invade adjacent tissue and spread to distant sites. We use highly multiplexed tissue imaging, spatial statistics, and machine learning to identify cell types and states underlying morphological features of known diagnostic and prognostic significance in colorectal cancer.



## Publications
{% comment %}
  'publicationList' should be a comma-delineated string of publication file names
{% endcomment %}
{% assign publicationList = 'High-plex-immunofluorescence-imaging-and-traditional-histology-of-the-same-tissue-section-for-discovering-image-based-biomarkers,multiplexed-3D-atlas-of-state-transitions-and-immune-interactions-in-colorectal-cancer' %}

{% include pub-list.html list=publicationList %}

---

## Narrated Minerva Stories
Narrated stories provide access to images with annotation, quality control, and an accompanying narration. Click any of the following thumbnail images for an interactive view of the full-resolution images. 
{%
    assign stories = site.data-cards
    | where_exp: "item", "item.tags contains 'CRC'"
    | where_exp: "item", "item.hide != true"
%}

{% assign dataCardArray = '' | split: '' %}
{% for n in stories %}
  {% if n.tags contains 'narrated' %}
    {% assign dataCardArray = dataCardArray | push: n %}
  {% endif %}
{% endfor %}

{% assign dataCardArraySort = dataCardArray | sort: 'date' | reverse %}
{% if dataCardArraySort.size > 0 %}
  {% include cards.html cards=dataCardArraySort %}
{% endif %}

## Curated Minerva Stories
Curated stories provide access to images with contextual information. Click any of the following thumbnail images for an interactive view of the full-resolution images. 

{% assign dataCardArray = '' | split: '' %}
{% for c in stories %}
  {% if c.tags contains 'curated' %}
    {% assign dataCardArray = dataCardArray | push: c %}
  {% endif %}
{% endfor %}

{% assign dataCardArraySort = dataCardArray | sort: 'date' | reverse %}
{% if dataCardArraySort.size > 0 %}
  {% include cards.html cards=dataCardArraySort %}
{% endif %}

## Automated Minerva Stories
Automated stories provide access to minimally processed images with no annotation or quality control. Click any of the following thumbnail images for an interactive view of the full-resolution images.
{: .mb-0 }
 
{% assign dataCardArray = '' | split: '' %}
{% for s in stories %}
  {% if s.tags contains 'auto' %}
    {% assign dataCardArray = dataCardArray | push: s %}
  {% endif %}
{% endfor %}

{% assign dataCardArraySort = dataCardArray | sort: 'date' | reverse %}
{% if dataCardArraySort.size > 0 %}
  {% include cards.html cards=dataCardArraySort %}
{% endif %}

## Funding
This work has been funded by the [NIH NCI Human Tumor Atlas Network](https://humantumoratlas.org/), (Grant U2C-CA233262), the [NCI Cancer Systems Biology Program](https://csbconsortium.org/) (Grant U54-CA225088), an NIH NCI Research Specialist Award (Grant R50-CA274277), and the The Quadrangle Fund for Advancing and Seeding Translational Research at Harvard Medical School (QFASTR).
