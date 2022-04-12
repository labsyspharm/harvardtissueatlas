---
layout: secondary
title: Data
section_id: data

---

{% assign urlParts = page.url | split: '/' %}
{% assign sectionId = urlParts[-1] %}

{% include atlas-dataset-info.html
    sectionId=sectionId
    pubData=page.data
    thumbnailDir=sectionId %}


# Tuberculosis Granuloma Atlas

The Tuberculosis Granuloma Atlas aims to understand the biology of granulomas, sites of chronic lung inflammation shaped by the biology *Mycobacterium tuberculosis* (*Mtb*) and host immune responses. Within a granuloma, Mtb growth is often limited, but this provides a niche from which bacteria can subsequently disseminate. The project also aims to build capacity for digital pathology in low and middle income countries (LIMC) including the eventual deployment of Atlas viewers and analysis modules on cell phones.  As part of the Atlas, LSP investigators are assembling a cloud-based *Tuberculosis Data Resource* that will consolidate a rich collection of imaging and genomic data on TB granulomas and make the data publicly available.

The Atlas is expected to launch in Summer 2022 and is part of a sustained effort by the [Bill and Melinda Gates Foundation](https://www.gatesfoundation.org/) to understand and ultimately eradicate TB (Funded by Grant INV-027106).

## Contents
* [__Data Explorations__: MINERVA Stories summarizing key findings and
  data](#data-explorations)
* [__Data Overviews__: MINERVA Stories showing individual H&E and CyCIF
  images](#data-overviews)
* [__Primary Data Access__: List of available data files](#primary-data-access)

## Data Explorations
**Data Explorations are like museum guides and exploit the digital docents in MINERVA to guide readers through the complexities of a large image dataset via a series of narrated stories and waypoints.**

{%
    assign stories = site.data-cards
    | where_exp: "item", "item.atlas == 'tuberculosis-granuloma'"
    | where_exp: "item", "item.hide != true"
%}

<section class="data-cards">
    <div class="data-cards__inner">
        <div class="data-cards__items">
            {% for s in stories %}
            {% unless s.url contains '-overview' %}
            {% include data-card.html content=s %}
            {% endunless %}
            {% endfor %}
        </div>
    </div>
</section>


## Data overviews

**Data Overviews provide access to minimally processed Level 2 images with no annotation or quality control. Click any of the following thumbnail images for an interactive view of the full-resolution images.**

{%
    assign overviews = site.data-cards
    | where_exp: "item", "item.url contains 'nirmal-maliga-vallius-2021/'"
    | where_exp: "item", "item.hide != true"
    | where_exp: "item", "item.url contains '-overview'"
%}

<section class="data-cards">
    <div class="data-cards__inner">
        <div class="data-cards__items">
            {% for o in overviews %}
            {% include data-card.html content=o %}
            {% endfor %}
        </div>
    </div>
</section>

## Primary Data Access
### About the data files

<details>
    <summary>Download the primary data</summary>
<div markdown="1">
{% include_relative nirmal-maliga-vallius-2021-file-list.md %}
</div>
</details>
