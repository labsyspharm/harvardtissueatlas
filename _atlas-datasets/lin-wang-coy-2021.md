---
layout: secondary
title: Data
section_id: data

data:
  publication:
    title: Multiplexed 3D atlas of state transitions and immune interactions in colorectal cancer
    authors: 'Lin, J.-R., Wang, S., Coy, S., Tyler, M., Yapp, C., Chen, Y.-A., Heiser, C.N., Lau, K.S., Santagata, S., Sorger, P.K.'
    journal: 'Manuscript Submitted'
    description: Advanced solid cancers are complex assemblies of tumor, immune, and stromal cells that invade adjacent tissue and spread to distant sites. Here we use highly multiplexed tissue imaging, spatial statistics, and machine learning to identify cell types and states underlying morphological features of known diagnostic and prognostic significance in colorectal cancer. We find that a thorough spatial analysis requires imaging the entire tumor region, not small fields of view (e.g. those found in tissue microarrays). When this condition is met, the data reveal frequent transitions between histological archetypes (tumor grades and morphologies) correlated with molecular gradients. At the tumor invasive margin, where tumor, normal, and immune cells compete, localized features in 2D such as tumor buds and mucin pools are seen in 3D to be large connected structures having continuously varying molecular properties. Immunosuppressive cell-cell interactions also exhibit graded variation in type and frequency. Thus, whereas scRNA-Seq emphasizes discrete changes in tumor state, whole-specimen imaging reveals the presence of large- and small-scale spatial gradients analogous to those in developing tissues.
    links: 
      - bioRxiv: https://doi.org/10.1101/2021.03.31.437984
---

{% include_relative TEMP-note-text.md %}

{% assign urlParts = page.url | split: '/' %}
{% assign sectionId = urlParts[-1] %}

{% include atlas-dataset-info.html
    sectionId=sectionId
    pubData=page.data
    thumbnailDir=sectionId %}


## HTA CRC Atlas 1

The HTA CRC Atlas 1 dataset contains images and other data being used for
construction of an atlas of human colorectal cancer under the auspices of the
[Human Tumor Atlas Network](https://humantumoratlas.org/). Advanced solid
cancers are complex assemblies of tumor, immune, and stromal cells that invade
adjacent tissue and spread to distant sites. We use highly multiplexed tissue
imaging, spatial statistics, and machine learning to identify cell types and
states underlying morphological features of known diagnostic and prognostic
significance in colorectal cancer. This includes the tumor invasive margin,
where tumor, normal, and immune cells compete and were diverse immunosuppressive
environments are found.

### Contents
* [Data Explorations](#data-explorations)
* [Data Overviews](#data-overviews)
* [About Minerva](#about-minerva)

### Data Explorations

{% 
    assign stories = site.data-cards
    | where_exp: "item", "item.url contains 'lin-wang-coy-2021/'"
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

### Data Overviews

**NOTE! These Data Overviews provide access to minimally processed
Level 2 images with no annotation or quality control. Click any of the
following thumbnail images for an interactive view of the
full-resolution images.**

{% 
    assign overviews = site.data-cards
    | where_exp: "item", "item.url contains 'lin-wang-coy-2021/'"
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