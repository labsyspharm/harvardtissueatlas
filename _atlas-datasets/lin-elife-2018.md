---
layout: secondary
title: Data
section_id: data

data:
  publication:
    title: Highly multiplexed immunofluorescence imaging of human tissues and tumors using t-CyCIF and conventional optical microscopes
    authors: Lin JR, Izar B, Wang S, Yapp C, Mei S, Shah P, Santagata S, Sorger PK.
    journal: 'eLife. 2018 Jul 11;7:e31657. PMID: 29993362'
    description: The architecture of normal and diseased tissues strongly influences the development and progression of disease as well as responsiveness and resistance to therapy. We describe a tissue-based cyclic immunofluorescence (t-CyCIF) method for highly multiplexed immuno-fluorescence imaging of formalin-fixed, paraffin-embedded (FFPE) specimens mounted on glass slides, the most widely used specimens for histopathological diagnosis of cancer and other diseases. t-CyCIF generates up to 60-plex images using an iterative process (a cycle) in which conventional low-plex fluorescence images are repeatedly collected from the same sample and then assembled into a high-dimensional representation. t-CyCIF requires no specialized instruments or reagents and is compatible with super-resolution imaging; we demonstrate its application to quantifying signal transduction cascades, tumor antigens and immune markers in diverse tissues and tumors. The simplicity and adaptability of t-CyCIF makes it an effective method for pre-clinical and clinical research and a natural complement to single-cell genomics.
    links:
      - Publication: https://doi.org/10.7554/eLife.31657
      - Primary data access: http://lincs.hms.harvard.edu/lin-elife-2018/

  stitched mosaic images:
    - title: Figure 2
      description: Representative t-CyCIF staining of a large metastatic melanoma lesion and adjacent benign tissue stitched together using the Ashlar software from 165 successive CyteFinder fields using a 20X/0.8NA objective.
      thumbnail file name: figure2.jpg
      links:
        - Melanoma mosaic: osd-figure2
    - title: Figure 5 and 6
      description: Representative images of Slide A (top panels) and Slide B specimens (bottom panels) after each t-CyCIF cycle. The color coding highlighting specific cycles is the same as in A.
      thumbnail file name: figure5.jpg
      links:
        - Tonsil A mossaic: https://omero.hms.harvard.edu/webgateway/img_detail/514684/?dataset=3174
        - Tonsil B mossaic: https://omero.hms.harvard.edu/webgateway/img_detail/514687/?dataset=3175
    - title: Figure 7 and 8
      description: t-CyCIF of a large resection specimen from a patient with pancreatic cancer. The entire sample comprising 143 stitched 10X fields of view is shown.
      thumbnail file name: figure7.jpg
      links:
        - PDAC mosaic: osd-figure7
    - title: Figure 10
      description: Eight-cycle t-CyCIF of a tissue microarray (TMA) including 13 normal tissues and corresponding tumor types. The TMA includes normal tissue types, and corresponding high and low grade tumors, for a total of 39 specimens.
      thumbnail file name: figure10.jpg
      links:
        - TMA mosaic: osd-figure10
    - title: Figure 11 and 12
      description: Molecular heterogeneity in a single GBM tumor. (A) Representative low magnification image of a GBM specimen generated from 221 stitched 10X frames; the sample was subjected to 10 rounds of t-CyCIF.
      thumbnail file name: figure11.jpg
      links:
        - GBM mosaic: osd-figure11
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
    | where_exp: "item", "item.url contains 'lin-elife-2018/'"
    | where_exp: "item", "item.hide != false"
%}

{% include minerva-story-sorting-pubs.md %}
