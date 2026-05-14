---
layout: secondary
title: Data
section_id: data

data:
  publication:
    title: 'Clinical responses to trastuzumab deruxtecan in molecularly defined ependymoma'
    journal: 'TBA'
    authors: 'Gonzalez Castro NL, Wu Y-C, Lin JR, Santiago-Ribeiro M-J, Laurenge A, Carpentier A, Coy S, Lin NU, Mokhtari K, Ligon KL, Touat M, Santagata S.'
    description: 'Despite evidence that antibody drug conjugates (ADCs) are active in brain metastases, their role in primary central nervous system (CNS) tumors remains unclear. We report two adults with molecularly defined ependymoma – a MYCN-amplified spinal tumor with intracranial dissemination and a supratentorial ZFTA-RELA-fused tumor with multiple recurrences – who demonstrated radiographic response and/or durable clinical and metabolic stability with trastuzumab deruxtecan (T-DXd). HER2 expression was identified by immunohistochemistry in both tumors, consistent with prior systematic profiling of ADC targets in CNS tumors. Multiplexed imaging showed broad but heterogeneous HER2 expression across tumor states in both cases; in the MYCN-amplified tumor, this occurred alongside EGFR/MAPK-enriched proliferative niches, whereas the ZFTA-RELA tumor showed more diffuse organization without strong coupling of EGFR and proliferation. These findings provide early clinical evidence supporting HER2-directed ADCs in ependymoma and highlight the value of integrated molecular and spatial profiling in interpreting therapeutic response in rare CNS tumors.'
    links:
      - Data Access: https://github.com/labsyspharm/Santagata-Ependymoma-2026
---
{% assign urlParts = page.url | split: '/' %}
{% assign sectionId = urlParts[-1] %}

{% include atlas-dataset-info.html
    sectionId=sectionId
    pubData=page.data
    thumbnailDir=sectionId %}

<br>

### Graphical Abstract
{% include enlarge-image.html src='publications/clinical-responses-to-trastuzumab-deruxtecan-in-molecularly-defined-ependymoma.png' alt='' %}

<br>

{%
    assign stories = site.data-cards
    | where_exp: "item", "item.url contains 'gonzalez-castro-wu-2026'"
    | where_exp: "item", "item.hide != true"
%}

{% include minerva-story-sorting-pubs.md %}
