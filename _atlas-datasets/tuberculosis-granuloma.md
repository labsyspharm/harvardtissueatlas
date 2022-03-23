---
layout: secondary
title: Data
section_id: data

---

{% include_relative TEMP-note-text.md %}

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
* [__About MINERVA__: Using MINERVA for in-browser data access](#about-minerva)
* [__Data Explorations__: MINERVA Stories summarizing key findings and
  data](#data-explorations)
* [__Data Overviews__: MINERVA Stories showing individual H&E and CyCIF
  images](#data-overviews)
* [__Primary Data Access__: List of available data files](#primary-data-access)


## About MINERVA
### Exploring the primary image data

The images in Nirmal et al. (2021) comprise a ~2.3 TB dataset with some images as
large as 1 gigapixel.  We provide access to this information without restriction
(as required by the NCI Moonshot effort) but it is not in a convenient form for
reviewers or general users to explore. The open source MINERVA software was
designed for the [Human Tumor Atlas Network
(HTAN)](https://humantumoratlas.org/) by the Laboratory of Systems Pharmacology
to address this problem.

MINERVA enables intuitive real-time exploration of very large (gigapixel)
high-plex images in the cloud using a web browser. With MINERVA, users can pan
around and magnify areas of an image and switch between channels. MINERVA does
not require the installation of any software and is therefore secure; browsing
is also anonymous. Users interested in the tool are welcome to explore the
[documentation](https://github.com/labsyspharm/minerva-story/wiki), the
[software publication](https://joss.theoj.org/papers/10.21105/joss.02579), and a
description of [digital
docents](https://www.biorxiv.org/content/10.1101/2020.03.27.001834v2) in
general.

### Data Explorations
**Data Explorations are like museum guides and exploit the digital docents in MINERVA to guide readers through the complexities of a large image dataset via a series of narrated stories and waypoints.**

{%
    assign stories = site.data-cards
    | where_exp: "item", "item.url contains 'nirmal-maliga-vallius-2021/'"
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
