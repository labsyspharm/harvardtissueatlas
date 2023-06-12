---
layout: secondary
title: Data
section_id: data

data:
  publication:
    title: Multiplexed 3D atlas of state transitions and immune interactions in colorectal cancer
    authors: 'Lin JR, Wang S, Coy S, Tyler M, Yapp C, Chen YA, Heiser CN, Lau KS, Santagata S, Sorger PK'
    journal: 'Cell, 186, 1-19, DOI: [10.1016/j.cell.2022.12.028](https://doi.org/10.1016/j.cell.2022.12.028)'
    description: Advanced solid cancers are complex assemblies of tumor, immune, and stromal cells that invade adjacent tissue and spread to distant sites. Here we use highly multiplexed tissue imaging, spatial statistics, and machine learning to identify cell types and states underlying morphological features of known diagnostic and prognostic significance in colorectal cancer. We find that a thorough spatial analysis requires imaging the entire tumor region, not small fields of view (e.g. those found in tissue microarrays). When this condition is met, the data reveal frequent transitions between histological archetypes (tumor grades and morphologies) correlated with molecular gradients. At the tumor invasive margin, where tumor, normal, and immune cells compete, localized features in 2D such as tumor buds and mucin pools are seen in 3D to be large connected structures having continuously varying molecular properties. Immunosuppressive cell-cell interactions also exhibit graded variation in type and frequency. Thus, whereas scRNA-Seq emphasizes discrete changes in tumor state, whole-specimen imaging reveals the presence of large- and small-scale spatial gradients analogous to those in developing tissues.
    links:
      - Publication: https://doi.org/10.1016/j.cell.2022.12.028
      - bioRxiv: https://doi.org/10.1101/2021.03.31.437984
      - Dataset: https://doi.org/10.5281/zenodo.7506942
      - Colorectal Cancer Atlas: /atlases/colorectal-cancer
---

{% assign urlParts = page.url | split: '/' %}
{% assign sectionId = urlParts[-1] %}

{% include atlas-dataset-info.html
    sectionId=sectionId
    pubData=page.data
    thumbnailDir=sectionId %}

<br>
### Key Findings:
- Multiplexed analysis shows intermixed tumor morphologies and molecular gradients

- Various cancer characteristic cellular features are large, interconnected structures

- 3D tertiary lymphoid structure (TLS) networks show intra-TLS patterning variation

- PD1-PDL1 interactions are primarily between T and myeloid cells in this CRC cohort  


{% include enlarge-image.html src='/images/publications/multiplexed-3D-atlas-of-state-transitions-and-immune-interactions-in-colorectal-cancer-graphic-abstract.png' float='center' alt='' %}

<i><b>Figure overview of the Colorectal Cancer Atlas dataset:</b> The colorectal cancer atlas contains detailed 3D analysis of one CRC tissue specimen with CyCIF, H&E, and spatial transcriptomics, whole slide imaging of 16 additional tumor samples, and tissue microarray analysis of 92 tumors.  </i>



### Contents
* [Data Explorations](#data-explorations)
* [Data Overviews](#data-overviews)
* [Data Access](#data-access)

### Data Explorations

{%
    assign stories = site.data-cards
    | where_exp: "item", "item.url contains 'lin-wang-coy-2021/'"
    | where_exp: "item", "item.hide != true"
%}

{% assign dataCardArray = '' | split: '' %}
{% for s in stories %}
  {% unless s.url contains '-overview' %}
    {% assign dataCardArray = dataCardArray | push: s %}
  {% endunless %}
{% endfor %}

{% if dataCardArray.size > 0 %}
  {% include cards.html cards=dataCardArray %}
{% endif %}

### Data Overviews

**NOTE! These Data Overviews provide access to minimally processed
Level 2 images with no annotation or quality control. Click any of the
following thumbnail images for an interactive view of the
full-resolution images.**

{%
    assign overviews = site.data-cards
    | where_exp: "item", "item.url contains 'lin-wang-coy-2021/'"
    | where_exp: "item", "item.hide != true"
    | where_exp: "item", "item.tags contains 'overview-crc'"
%}

{% if overviews.size > 0 %}
  {% include cards.html cards=overviews %}
{% endif %}


## Data access

The images in Lin et al. (2023) comprise a ~4.5 TB dataset. All full resolution images, derived image data (e.g., segmentation masks) and all cell count tables are available at DOI: [10.5281/zenodo.7506942](https://doi.org/10.5281/zenodo.7506942). This data will eventually also be available via the NCI-sponsored repository for Human Tumor Atlas Network (HTAN; [https://humantumoratlas.org](https://humantumoratlas.org)).
