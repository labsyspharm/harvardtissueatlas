---
date: 0002-02-01
name: Colorectal Cancer Atlas
summary: The Harvard Tissue Atlas for Colorectal Cancer aims to advance our understanding of the complex spatial interactions that contribute to colorectal cancer. Colorectal cancers are complex assemblies of tumor, immune, and stromal cells that invade adjacent tissue and spread to distant sites. We use highly multiplexed tissue imaging, spatial statistics, and machine learning to identify cell types and states underlying morphological features of known diagnostic and prognostic significance in colorectal cancer. This work is a component of the [Human Tumor Atlas Network](https://humantumoratlas.org/).  
project-image: publications/High-plex-immunofluorescence-imaging-and-traditional-histology-of-the-same-tissue-section-for-discovering-image-based-biomarkers-2.png
grant: NCI Human Tumor Atlas Network U2C-CA233262, NCI U54-CA225088, and the Ludwig Cancer Research Foundation
title: CRC Atlas
short-name: CRC Atlas
---

The Harvard Tissue Atlas for Colorectal Cancer aims to advance our understanding of the complex spatial interactions that contribute to colorectal cancer. Colorectal cancers are complex assemblies of tumor, immune, and stromal cells that invade adjacent tissue and spread to distant sites. We use highly multiplexed tissue imaging, spatial statistics, and machine learning to identify cell types and states underlying morphological features of known diagnostic and prognostic significance in colorectal cancer. This work is a component of the [Human Tumor Atlas Network](https://humantumoratlas.org/).  



## Publications
{% comment %}
  'publicationList' should be a comma-delineated string of publication file names
{% endcomment %}
{% assign publicationList = 'High-plex-immunofluorescence-imaging-and-traditional-histology-of-the-same-tissue-section-for-discovering-image-based-biomarkers,multiplexed-3D-atlas-of-state-transitions-and-immune-interactions-in-colorectal-cancer' %}

{% include pub-list.html list=publicationList %}

## Data Explorations
*Data Explorations are like museum guides and exploit the digital docents in MINERVA to guide readers through the complexities of a large image dataset via a series of narrated stories and waypoints.*

{% assign cardList = 'orion-crc04-explore-1,viz-CRC,crc01-introduction,osd-crc-case-1-ffpe-cycif-stack,' %}

{% include cards.html list=cardList %}

## Data Overviews
*Data Overviews provide access to minimally processed Level 2 images with no annotation or quality control. Click any of the following thumbnail images for an interactive view of the full-resolution images.*

{% assign datasets = 'lin-chen-campton-2023,lin-wang-coy-2021' | split: ',' %}

{% assign cards = '' | split: '' %}
{% for dataset in datasets %}
  {% assign _cards = site.data-cards | where_exp: "item", "item.url contains dataset" %}
  {{ datasets }}
  {% assign cards = cards | concat:_cards %}
{% endfor %}

{%
  assign cards = cards
  | where_exp: "item", "item.hide != true"
  | where_exp: "item", "item.tags contains 'overview-crc'"
%}

{% if cards.size > 0 %}
  {% include cards.html cards=cards%}
{% endif %}

### Funding
This work has been funded by the [NCI Human Tumor Atlas Network](https://www.cancer.gov/research/key-initiatives/moonshot-cancer-initiative/implementation/human-tumor-atlas) (Grant U2C-CA233262), the [NCI Cancer Systems Biology Program](https://csbconsortium.org/) (Grant U54-CA225088), an NIH NCI SBIR grant in collaboration with RareCyte (Grant R41-CA224503), and an NIH NCI Research Specialist Award (Grant R50-CA274277). Additional support for the image processing software and data science methods is provided by the [Ludwig Center at Harvard Medical School](https://ludwigcenter.hms.harvard.edu/), the [Ludwig Institute for Cancer Research](https://www.ludwigcancerresearch.org/), the Gray Foundation, the Bill and Melinda Gates Foundation, the David Liposarcoma Research Initiative, and the Emerson Collective.
