---
layout: secondary
title: Data
section_id: data

data:
  publication:
    title: Spatial determinants of tumor cell dedifferentiation and plasticity in primary cutaneous melanoma
    journal: 'TBA'
    authors: 'Vallius T, Shi Y, Novikov E, Pant SM, Pelletier R, Chen YA, Tefft JB, Johnson AN, Maliga Z, Wan G, Murphy G, Santagata S, Semenov YR, Liu D, Lian CG, Sorger PK.'
    description: 'Early detection of melanoma through skin surveillance is critical for preventing metastatic progression. Primary cutaneous melanomas at early stage offer a unique opportunity to uncover fundamental mechanisms of tumor initiation, progression, and immune surveillance, but detailed spatial profiling of early disease remains limited. Here we integrate high-plex cyclic immunofluorescence (CyCIF) imaging, spatial transcriptomics, and conventional histology to identify factors associated with de-differentiation and dermal invasion in early-stage melanomas. We demonstrate a high level of variability from one primary cancer to the next, from one 100-300 cell microregion to the next within a single cancer, and from one cell to the next within a microregion. Intra-tumoral heterogeneity is influenced by local features of the microenvironment including proximity to T and myeloid cells and to perivascular environments. Thus, tumor plasticity and spatial heterogeneity arise early in melanoma development, potentially allowing for competition among multiple tumor states during the emergence of invasive disease.'
    links:
      - Preprint: https://doi.org/10.1101/2025.06.21.660851
      - Pubmed: https://pubmed.ncbi.nlm.nih.gov/PMC12262277/
---

---

{% assign urlParts = page.url | split: '/' %}
{% assign sectionId = urlParts[-1] %}

{% include atlas-dataset-info.html
    sectionId=sectionId
    pubData=page.data
    thumbnailDir=sectionId %}

<br>


{%
    assign stories = site.data-cards
    | where_exp: "item", "item.url contains 'vallius-shi-novikov-2025'"
    | where_exp: "item", "item.hide != true"
%}

{% include minerva-story-sorting-pubs.md %}

## Data Access
Instructions to access data will be posted to the [Zenodo repository](https://zenodo.org/records/10182505) associated with this publication.
