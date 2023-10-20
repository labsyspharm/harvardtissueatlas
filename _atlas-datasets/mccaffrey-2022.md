---
layout: secondary
title: Data
section_id: data

data:
  publication:
    title: The immunoregulatory landscape of human tuberculosis granulomas
    authors: 'McCaffrey EF, Donato M, Keren L, Chen Z, Delmastro A, Fitzpatrick MB, Gupta S, Greenwald NF, Baranski A, Graf W, Kumar R, Bosse M, Fullaway CC, Ramdial PK, Forgó E, Jojic V, Van Valen D, Mehra S, Khader SA, Bendall SC, van de Rijn M, Kalman D, Kaushal D, Hunter RL, Banaei N, Steyn AJC, Khatri P, Angelo M.'
    journal: 'Nature Immunology. 2022 Feb 1;23(2):318–329. DOI: [10.1038/s41590-021-01121-x](https://doi.org/10.1038/s41590-021-01121-x)'
    description: Tuberculosis (TB) in humans is characterized by formation of immune-rich granulomas in infected tissues, the architecture and composition of which are thought to affect disease outcome. However, our understanding of the spatial relationships that control human granulomas is limited. Here, we used multiplexed ion beam imaging by time of flight (MIBI-TOF) to image 37 proteins in tissues from patients with active TB. We constructed a comprehensive atlas that maps 19 cell subsets across 8 spatial microenvironments. This atlas shows an IFN-γ-depleted microenvironment enriched for TGF-β, regulatory T cells and IDO1+ PD-L1+ myeloid cells. In a further transcriptomic meta-analysis of peripheral blood from patients with TB, immunoregulatory trends mirror those identified by granuloma imaging. Notably, PD-L1 expression is associated with progression to active TB and treatment response. These data indicate that in TB granulomas, there are local spatially coordinated immunoregulatory programs with systemic manifestations that define active TB.
    links:
      - Publication: https://doi.org/10.1038/s41590-021-01121-x
      - Dataset: https://doi.org/10.17632/dr5fkgtrb6.4
      - Tuberculosis Atlas: /atlases/tuberculosis-granuloma

---

{% assign urlParts = page.url | split: '/' %}
{% assign sectionId = urlParts[-1] %}

{% include atlas-dataset-info.html
    sectionId=sectionId
    pubData=page.data
    thumbnailDir=sectionId %}
<br>
### Data Overviews
**Data Overviews provide access to minimally processed images with no annotation or quality control. Click any of the following thumbnail images for an interactive view of the full-resolution Multiplex Ion Beam Imaging (MIBI) data.**

{%
    assign overviews = site.data-cards
    | where_exp: "item", "item.url contains 'mccaffrey-2022/'"
    | where_exp: "item", "item.hide != true"
%}

{% if overviews.size > 0 %}
  {% include cards.html cards=overviews %}
{% endif %}
