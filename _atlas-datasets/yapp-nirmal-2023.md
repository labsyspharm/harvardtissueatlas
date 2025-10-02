---
layout: secondary
title: Data
section_id: data

data:
  publication:
    title: 'Highly multiplexed 3D profiling of cell states and immune niches in human tumours'
    authors: 'Yapp C, Nirmal AJ, Zhou FY, Wong AYH, Tefft J, Lu YD, Shang Z, Maliga Z, Montero Llopis P, Murphy GF, Lian C, Danuser G, Santagata S, Sorger PK.'
    journal: 'Nature Methods. 2025.'
    description: 'Diseases such as cancer involve alterations in cell proportions, states and interactions, as well as complex changes in tissue morphology and architecture. Histopathological diagnosis of disease and most
    multiplexed spatial profiling relies on inspecting thin (4–5 µm) specimens. Here we describe a high-plex cyclic immunofluorescence method for three-dimensional tissue imaging and use it to show that few, if any, cells
    are intact in conventional thin tissue sections, reducing the accuracy of cell phenotyping and interaction analysis. However, three-dimensional cyclic immunofluorescence of sections eightfold to tenfold thicker enables 
    accurate morphological assessment of diverse protein markers in intact tumor, immune and stromal cells. Moreover, the high resolution of this confocal approach generates images of cells in a preserved tissue 
    environment at a level of detail previously limited to cell culture. Precise imaging of cell membranes also makes it possible to detect and map cell–cell contacts and juxtracrine signaling complexes in immune cell 
    niches.'
    links:
      - Publication: https://doi.org/10.1101/2023.11.10.566670
      - Access Primary Data: https://github.com/labsyspharm/mel-3d-mis

---
<div class="row mb-4">
  <div class="col-md-6 mb-4">
    {% include youtube-card.html id="JujxaIBXUC0" title="Experience thick tissues...and getting under your skin" description="3D thick tissue." %}
  </div>
</div>

{% assign urlParts = page.url | split: '/' %}
{% assign sectionId = urlParts[-1] %}

{% include atlas-dataset-info.html
    sectionId=sectionId
    pubData=page.data
    thumbnailDir=sectionId %}

<br>

{%
    assign stories = site.data-cards
    | where_exp: "item", "item.url contains 'yapp-nirmal-2023/'"
    | where_exp: "item", "item.hide != true"
%}

{% include minerva-story-sorting-pubs.md %}
