---
layout: secondary
title: Data

data:
  publication:
    title: The spatial landscape of progression and immunoediting in primary melanoma at single cell resolution
    authors: 'Ajit J. Nirmal, Zoltan Maliga, Tuulia Vallius, Brian Quattrochi, Alyce A. Chen, Connor A. Jacobson, Roxanne J. Pelletier, Clarence Yapp, Raquel Arias-Camison, Yu-An Chen, Christine G. Lian, George F. Murphy, Sandro Santagata, Peter K. Sorger'
    journal: 'Manuscript Submitted'
    description: Cutaneous melanoma is a highly immunogenic malignancy, surgically curable at early stages, but life- threatening when metastatic. Here we integrate high-plex imaging, 3D high-resolution microscopy, and spatially-resolved micro-region transcriptomics to study immune evasion and immunoediting in primary melanoma. We find that recurrent cellular neighborhoods involving tumor, immune, and stromal cells change significantly along a progression axis involving precursor states, melanoma in situ, and invasive tumor. Hallmarks of immunosuppression are already detectable in precursor regions. When tumors become locally invasive, a consolidated and spatially restricted suppressive environment forms along the tumor-stromal boundary. This environment is established by cytokine gradients that promote expression of MHC-II and IDO1, and by PD1-PDL1 mediated cell contacts involving macrophages, dendritic cells, and T cells. A few millimeters away, cytotoxic T cells synapse with melanoma cells in fields of tumor regression. Thus, invasion and immunoediting can co-exist within a few millimeters of each other in a single specimen.
    links: 
      - bioRxiv: https://doi.org/10.1101/2021.05.23.445310
---

{% assign urlParts = page.url | split: '/' %}
{% assign sectionId = urlParts[-1] %}

{% include atlas-dataset-info.html
    sectionId=sectionId
    pubData=page.data
    thumbnailDir=sectionId %}


# HTA MEL Atlas 1

The HTA MEL Atlas 1 dataset contains images and other data being used for
construction of an atlas of human melanoma under the auspices of the
[Human Tumor Atlas Network](https://humantumoratlas.org/). Advanced solid
cancers are complex assemblies of tumor, immune, and stromal cells that invade
adjacent tissue and spread to distant sites. We use highly multiplexed tissue
imaging, spatial statistics, and machine learning to identify cell types and
states underlying morphological features of known diagnostic and prognostic
significance in melanoma. This includes the tumor invasive margin,
where tumor, normal, and immune cells compete and were diverse immunosuppressive
environments are found.

## Contents
* [Data Explorations](#data-explorations)
* [Data Overviews](#data-overviews)
* [About Minerva](#about-minerva)


### Data Explorations

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

**NOTE! These Data Overviews provide access to minimally processed
Level 2 images with no annotation or quality control. Click any of the
following thumbnail images for an interactive view of the
full-resolution images.**

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


## About Minerva
### Exploring the primary image data in Lin-Wang-Sorger et al.

The images in Lin et al. (2021) comprise a ~4.5 TB dataset with some images as
large as 1 gigapixel.  We provide access to this information without restriction
(as required by the NCI Moonshot effort) but it is not in a convenient form for
reviewers or general users to explore. The open source Minerva software was
designed for the [Human Tumor Atlas Network
(HTAN)](https://humantumoratlas.org/) by the Laboratory of Systems Pharmacology
to address this problem.

Minerva enables intuitive real-time exploration of very large (gigapixel)
high-plex images in the cloud using a web browser. With Minerva, users can pan
around and magnify areas of an image and switch between channels. Minerva does
not require the installation of any software and is therefore secure; browsing
is also anonymous. Users interested in the tool are welcome to explore the
[documentation](https://github.com/labsyspharm/minerva-story/wiki), the
[software publication](https://joss.theoj.org/papers/10.21105/joss.02579), and a
description of [digital
docents](https://www.biorxiv.org/content/10.1101/2020.03.27.001834v2) in
general.

We provide two types of Minerva stories with this paper:

1. “*Data Explorations*” are like museum guides and exploit the digital docents
   in Minerva to guide readers through the complexities of a large image dataset
   via a series of narrated stories and waypoints. Both written and audio
   narration are supported, as well as free exploration. These will be linked to
   individual figure panels in the final manuscript.
1. “*Data Overviews*” provide access to minimally processed Level 2 images with
   annotation and interpretation kept to a bare minimum.