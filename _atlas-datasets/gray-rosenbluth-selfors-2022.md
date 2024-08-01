---
layout: secondary
title: Atlas Dataset
section_id: publications

data:
  publication:
    title: A human breast atlas integrating single-cell proteomics and transcriptomics
    authors: 'Gray GK, Li CM, Rosenbluth JM, Selfors LM, Girnius N, Lin JR, Schackmann RCJ, Goh WL, Moore K, Shapiro HK, Mei S, DAndrea K, Nathanson KL, Sorger PK, Santagata S, Regev A, Garber JE, Dillon DA, and Brugge JS'
    journal: 'Developmental Cell. 2022 June 6; 57(11): 1400-1420.e7. DOI: [10.1016/j.devcel.2022.05.003](https://doi.org/10.1016/j.devcel.2022.05.003)'
    description: The breast is a dynamic organ whose response to physiological and pathophysiological conditions alters its disease susceptibility, yet the specific effects of these clinical variables on cell state remain poorly annotated. We present a unified, high-resolution breast atlas by integrating single-cell RNA-seq, mass cytometry, and cyclic immunofluorescence, encompassing a myriad of states. We define cell subtypes within the alveolar, hormone-sensing, and basal epithelial lineages, delineating associations of several subtypes with cancer risk factors, including age, parity, and BRCA2 germline mutation. Of particular interest is a subset of alveolar cells termed basal-luminal (BL) cells, which exhibit poor transcriptional lineage fidelity, accumulate with age, and carry a gene signature associated with basal-like breast cancer. We further utilize a medium-depletion approach to identify molecular factors regulating cell-subtype proportion in organoids. Together, these data are a rich resource to elucidate diverse mammary cell states.
    links:
      - Publication: https://doi.org/10.1016/j.devcel.2022.05.003
      - Sequencing: https://singlecell.broadinstitute.org/single_cell/study/SCP1731/a-human-breast-atlas-integrating-single-cell-proteomics-and-transcriptomics
      - CyTOF: https://data.mendeley.com/datasets/pcftzv8w63/1
      - Gray BRCA Atlas: https://www.graybrcaatlas.org/
---

{% assign urlParts = page.url | split: '/' %}
{% assign sectionId = urlParts[-1] %}

{% include atlas-dataset-info.html
    sectionId=sectionId
    pubData=page.data
    thumbnailDir=sectionId %}

<br>

### Key Findings
  - Multimodal single-cell analyses identify breast epithelial and stromal subtypes

  - Spatially distinct epithelial subsets are linked with age, parity, and BRCA2 status

  - Alveolar cells with poor transcriptional lineage fidelity accumulate with age

  - Subtypes of the three major epithelial lineages are maintained in organoid cultures

{% include enlarge-image.html src='/images/publications/a-breast-atlas-integrating-single-cell-proteomics-and-transcriptomics.jpg' float='center' alt='Highlighted epithelial cell subtypes: 1. Young nulliparous (AP2:  Proliferative alveolar progenitors), 2. Aging associated (BL: Basal-luminal alveolar cells and BA1: Contractile ductal myoepithelial cells), 3. BRCA2 mutation associated (HS1 - ER-active hormone-sensing luminal cells), and 4. Parity associated (AP1: Parity-associated alveolar progenitors)' %}

<br>

{%
    assign stories = site.data-cards
    | where_exp: "item", "item.url contains 'gray-rosenbluth-selfors-2022/'"
    | where_exp: "item", "item.hide != true"
%}

{% include minerva-story-sorting-pubs.md %}


