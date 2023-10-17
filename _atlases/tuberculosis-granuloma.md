---
date: 0003-01-01
name: Tuberculosis Granuloma Atlas
summary: The Tuberculosis Granuloma Atlas aims to transform our understanding of TB granulomas by using spatially resolved profiling methods that reveal bacterial, lung and immune cell organization, states, and communication within granulomas of different types.
dataset: tuberculosis-granuloma
project-image: https://www.cycif.org/assets/img/tuberculosis-granulomas-2022/stages.jpg
grant: Bill and Melinda Gates Foundation grant INV-027106
grant-image: funding/gates.svg
title: Tuberculosis Granuloma Atlas
link: tuberculosis-granuloma
short-name: Tuberculosis Atlas
---

The Tuberculosis Granuloma Atlas aims to understand the biology of granulomas, sites of chronic lung inflammation shaped by the biology *Mycobacterium tuberculosis* (*Mtb*) and host immune responses. Within a granuloma, Mtb growth is often limited, but this provides a niche from which bacteria can subsequently disseminate. The project also aims to build capacity for digital pathology in low and middle income countries (LIMC) including the eventual deployment of Atlas viewers and analysis modules on cell phones.  As part of the Atlas, LSP investigators are assembling a cloud-based *Tuberculosis Data Resource* that will consolidate a rich collection of imaging and genomic data on TB granulomas and make the data publicly available.

### Principal Investigators
* Bree Aldridge, PhD, Associate Professor, Molecular Biology and Microbiology, Tufts University School of Medicine
* Amanda Martinot, DVM MPH DACVP, Assistant Professor of Infectious Diseases and Global Health, Tufts University
* Jyothi Rengarajan, PhD, Professor, Division of Infectious Diseases, Emory University School of Medicine
* Peter Sorger, PhD, Professor of Systems Biology, Harvard Medical School

### Introduction to TB Granuloma

<div class="row mb-4">
  <div class="col-md-6 mb-4">
    {% include vimeo-card.html id="701262344" title="Introduction" description="Bree Aldridge, PhD introducing the biology behind the Tuberculosis Granuloma Atlas." %}
  </div>
</div>

## Data Explorations
*Data Explorations are like museum guides and exploit the digital docents in MINERVA to guide readers through the complexities of a large image dataset via a series of narrated stories and waypoints.*

{%
    assign overviews = site.data-cards
    | where_exp: "item", "item.url contains 'mccaffrey-2022/'"
    | where_exp: "item", "item.hide != true"
    | where_exp: "item", "item.tags contains 'exploration'"
%}

{% if overviews.size > 0 %}
  {% include cards.html cards=overviews %}
{% endif %}

### Data Overviews
**Data Overviews provide access to minimally processed Level 2 images with no annotation or quality control. Click any of the following thumbnail images for an interactive view of the full-resolution images.**

{%
    assign overviews = site.data-cards
    | where_exp: "item", "item.url contains 'mccaffrey-2022/'"
    | where_exp: "item", "item.hide != true"
    | where_exp: "item", "item.tags contains 'overview'"
%}

{% if overviews.size > 0 %}
  {% include cards.html cards=overviews %}
{% endif %}

## Funding
The Atlas is part of a sustained effort by the [Bill and Melinda Gates Foundation](https://www.gatesfoundation.org/) to understand and ultimately eradicate TB (Funded by Grant INV-027106) and NIH 1R01-AI166305.
