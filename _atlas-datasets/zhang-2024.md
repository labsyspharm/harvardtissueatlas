---
layout: secondary
title: Data
section_id: data

data:
  publication:
    title: Cell state dependent effects of Bmal1 on melanoma immunity and tumorigenicity
    journal: 'Nature Communications. 2024 Jan 20, 15(1):633. PMID: [38245503](https://pubmed.ncbi.nlm.nih.gov/38245503/)'
    authors: 'Zhang X, Pant SM, Ritch CC, Tang H-Y, Shao H, Dweep H, Gong Y-Y, Brooks R, Brafford P, Wolpaw AJ, Lee Y, Weeraratna A, Sehgal A, Herlyn M, Kossenkov A, Speicher D, Sorger PK, Santagata S, Dang CV.'
    description: 'The circadian clock regulator Bmal1 modulates tumorigenesis, but its reported effects are inconsistent. Here, we show that Bmal1 has a context-dependent role in mouse melanoma tumor growth. Loss of Bmal1 in YUMM2.1 or B16-F10 melanoma cells eliminates clock function and diminishes hypoxic gene expression and tumorigenesis, which could be rescued by ectopic expression of HIF1α in YUMM2.1 cells. By contrast, over-expressed wild-type or a transcriptionally inactive mutant Bmal1 non-canonically sequester myosin heavy chain 9 (Myh9) to increase MRTF-SRF activity and AP-1 transcriptional signature, and shift YUMM2.1 cells from a Sox10-high to a Sox9-high immune resistant, mesenchymal cell state that is found in human melanomas. Our work describes a link between Bmal1, Myh9, mouse melanoma cell plasticity, and tumor immunity. This connection may underlie cancer therapeutic resistance and underpin the link between the circadian clock, MRTF-SRF and the cytoskeleton.'
    links:
      - Publication: https://doi.org/10.1038/s41467-024-44778-2
      - Data Access: https://zenodo.org/records/10182505
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
    | where_exp: "item", "item.url contains 'zhang-2024'"
    | where_exp: "item", "item.hide != true"
%}

{% include minerva-story-sorting-pubs.md %}

## Data Access
Instructions to access data will be posted to the [Zenodo repository](https://zenodo.org/records/10182505) associated with this publication.
