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

Globally, tuberculosis (TB) is the leading cause of death from an infectious disease. There has been important progress in reducing TB deaths over the past two decades, but current treatments remain inadequate. Within *Mycobacterium tuberculosis* (*Mtb*)-infected lungs, granulomas form at sites of chronic lung inflammation. Mtb growth is limited within these granulomas, but they provide a niche from which bacteria can survive and then spread. Much remains unknown about the specific molecular mechanisms that contribute to the progression of tuberculosis from latent to active infection.

The Tuberculosis Granuloma Atlas aims to improve the understanding of granuloma biology and facilitate further advances in TB treatment. This effort starts with the creation of a *Tuberculosis Data Resource* that allows investigators funded by the [Bill and Melinda Gates Foundation](https://www.gatesfoundation.org/)(BMGF) to share and jointly analyze data about tuberculosis. This Tuberculosis Data Resource will include clinical imaging data (e.g., PET, MRI), highly multiplexed tissue images, and spatial or single-cell transcriptomics. Integrating data across these diverse modalities requires a means to share the primary data itself and specialized software tools for data analysis; the Tuberculosis Data Resource is developing and deploying these tools. In addition, we are building capacity for digital pathology in low- and middle-income countries to enable equitable data sharing with the communities most heavily impacted by TB.

## Contents
* [__Data Explorations__: MINERVA Stories summarizing key findings and
  data](#data-explorations)
* [__Data Overviews__: MINERVA Stories showing individual H&E and CyCIF
  images](#data-overviews)
* [__Primary Data Access__: List of available data files](#primary-data-access)

# Imaging TB Granulomas
These [MINERVA](https://github.com/labsyspharm/minerva-story/wiki)-based data explorations show clinical histology staining side-by-side with a highly multiplexed image of a TB granuloma collected using cyclic immunofluorescence (CyCIF). It is possible to follow the story in the MINERVA visualization or freely pan and zoom across the large (gigapixel) high-plex image dataset.

## Data Explorations
**Data Explorations are like museum guides and exploit the digital docents in MINERVA to guide readers through the complexities of a large image dataset via a series of narrated stories and waypoints.**

{{Collection of all the relevant Minerva stories}}

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

## About the technology

The Harvard Tissue Atlas group is taking a unified approach to developing the experimental and software tools needed to annotate, store, analyze, share, and publish diverse data types. You can learn more about the methods used to develop the TB Data Resource and TB Granulomas Atlas under the [METHODS AND SOFTWARE](/methods-software) tab.

A primary goal of our BMGF-funded project is to develop a set of informational and educational tools that help participating labs and the broader scientific community understand and use the technologies that are being developed through the atlas projects. These resources can be found under the [LEARN](/learn) tab of this website.
