---
layout: secondary
title: Data
section_id: data

data:
  publication:
    title: Temporal and spatial topography of cell proliferation in cancer
    authors: 'Giorgio Gaglia, Sheheryar Kabraji, Danae Rammos, Yang Dai, Ana Verma, Shu Wang, Caitlin E. Mills, Mirra Chung, Johann S. Bergholz, Shannon Coy, Jia-Ren Lin, Rinath Jeselsohn, Otto Metzger, Eric P. Winer, Deborah A. Dillon, Jean J. Zhao, Peter K. Sorger & Sandro Santagata'
    journal: 'Nature Cell Biology. 2022 Mar; 24(3): 316-326. PMID: 35292783. PMCID: PMC8959396.'
    description: 'Proliferation is a fundamental trait of cancer cells but its properties and spatial organization in tumors are poorly characterized. Here we use highly multiplexed tissue imaging to perform single-cell quantification of cell cycle regulators and develop robust, multivariate, proliferation metrics. Across diverse cancers, the proliferative architecture is organized at two spatial scales: large domains, and local niches enriched for specific immune lineages. Some tumor cells express cell cycle regulators in the (canonical) patterns expected of freely growing cells, a phenomenon we refer to as “cell cycle coherence”. By contrast, the cell cycles of other tumor cell populations are skewed toward specific phases or exhibit non-canonical (incoherent) marker combinations. Coherence varies across space, with changes in oncogene activity and therapeutic intervention, and is associated with aggressive behavior. Thus, multivariate measures from high-plex tissue images capture clinically significant features of cancer proliferation, a fundamental step in enabling more precise use of anti-cancer therapies.'
    links:
      - Publication: https://doi.org/10.1038/s41556-022-00860-9
      - PubMed: https://pubmed.ncbi.nlm.nih.gov/35292783/
      - Access Primary Data: /atlas-datasets/gaglia-2022#primary-data-access

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
    | where_exp: "item", "item.url contains 'gaglia-2022'"
    | where_exp: "item", "item.hide != true"
%}

{% include minerva-story-sorting-pubs.md %}


## Analysis
Image analysis matlab codes can be found at [www.github.com/santagatalab/manuscripts-codes-gaglia-kabraji-2021](www.github.com/santagatalab/manuscripts-codes-gaglia-kabraji-2021)    

## Primary Data Access
You can vew the multiplexed t-CyCIF images on [Omero](https://omero.hms.harvard.edu/webclient/?show=project-8863).

<details>
    <summary>Download the primary data</summary>
<div markdown="1">
{% include_relative gaglia-2022-file-list.md %}
</div>
</details>
