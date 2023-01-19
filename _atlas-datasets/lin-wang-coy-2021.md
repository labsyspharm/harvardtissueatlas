---
layout: secondary
title: Data
section_id: data

data:
  publication:
    title: Multiplexed 3D atlas of state transitions and immune interaction in colorectal cancer
    authors: 'Jia-Ren Lin, Shu Wang, Shannon Coy, Yu-An Chen, Clarence Yapp, Madison Tyler, Maulik K. Nariya, Cody N. Heiser, Ken S. Lau, Sandro Santagata, and Peter K. Sorger'
    journal: 'Cell, 186, 1-19, DOI: [10.1016/j.cell.2022.12.028](https://doi.org/10.1016/j.cell.2022.12.028)'
    description: Advanced solid cancers are complex assemblies of tumor, immune, and stromal cells characterized by high intratumoral variation. We use highly multiplexed tissue imaging, 3D reconstruction, spatial statistics, and machine learning to identify cell types and states underlying morphological features of known diagnostic and prognostic significance in colorectal cancer. Quantitation of these features in high-plex marker space reveals recurrent transitions from one tumor morphology to the next, some of which are coincident with long-range gradients in the expression of oncogenes and epigenetic regulators. At the tumor invasive margin, where tumor, normal, and immune cells compete, T-cell suppression involves multiple cell types and 3D imaging shows that seemingly localized 2D features such as tertiary lymphoid structures are commonly interconnected and have graded molecular properties. Thus, while cancer genetics emphasizes the importance of discrete changes in tumor state, whole-specimen imaging reveals large-scale morphological and molecular gradients analogous to those in developing tissues.
    links:
      - Publication: https://doi.org/10.1016/j.cell.2022.12.028
      - bioRxiv: https://doi.org/10.1101/2021.03.31.437984
---

{% include_relative TEMP-note-text.md %}

{% assign urlParts = page.url | split: '/' %}
{% assign sectionId = urlParts[-1] %}

{% include atlas-dataset-info.html
    sectionId=sectionId
    pubData=page.data
    thumbnailDir=sectionId %}

## Colorectal Cancer Atlas

The CRC Atlas dataset contains images and other data being used for
construction of an atlas of human colorectal cancer under the auspices of the
[Human Tumor Atlas Network](https://humantumoratlas.org/). Advanced solid
cancers are complex assemblies of tumor, immune, and stromal cells that invade
adjacent tissue and spread to distant sites. We use highly multiplexed tissue
imaging, spatial statistics, and machine learning to identify cell types and
states underlying morphological features of known diagnostic and prognostic
significance in colorectal cancer. This includes the tumor invasive margin,
where tumor, normal, and immune cells compete and were diverse immunosuppressive environments are found.

### Contents
* [Key Findings](#key-findings)
* [Data Explorations](#data-explorations)
* [Data Overviews](#data-overviews)
* [About Minerva](#about-minerva)

### Key Findings:

- Multiplexed analysis shows intermixed tumor morphologies and molecular gradients

- Various cancer characteristic cellular features are large, interconnected structures

- 3D tertiary lymphoid structure (TLS) networks show intra-TLS patterning variation

- PD1-PDL1 interactions are primarily between T and myeloid cells in this CRC cohort

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

## Code  
   All software used in this manuscript is freely available via GitHub at [https://github.com/labsyspharm/mcmicro](https://github.com/labsyspharm/mcmicro) and [https://github.com/labsyspharm/CRC_atlas_2022](https://github.com/labsyspharm/CRC_atlas_2022).

## Access the Data
   All data is available through a public repository (where available) or through AWS download. You should visit [https://doi.org/10.5281/zenodo.7506942](https://doi.org/10.5281/zenodo.7506942) to view the complete data table with information about where to find each dataset.

## Funding Sources
   This publication is part of the HTAN (Human Tumor Atlas Network) Consortium paper package. A list of HTAN members is available at humantumoratlas.org/htan-authors. This work was supported by NIH grants U54-CA225088 (PKS, SS), U2C-CA233280 (PKS, SS), U2C-CA233262 (PKS, SS), U2C-CA233291 (CNH, KSL), R01-DK103831 (CNH, KSL), NIH training grant T32-GM007748 (SC), P30-CA06516 (for histology), Ludwig Cancer Research, the Gray Foundation, and the David Liposarcoma Research Initiative.  
