---
layout: secondary
title: Data
section_id: data

data:
  publication:
    title: 'Multiple human transgenes prolong survival of triple-carbohydrate knockout porcine kidney xenografts in nonhuman primates'
    journal: 'American Journal of Transplantation 25(8), Supplement 1S157.'
    authors: 'Karadagi A, Hirose T, Lassiter G, Rosales I, Ma D, Tomosugi T, Otsuka R, Remark J, Otsuka RP, Layer JV, Chen JY, Santagata S, Curtis, M, Low S, Qin W, Colvin RB, Kawai T.'
    description: 'Genetically modified pigs are being developed to address the critical shortage of human organs for transplantation. Although porcine xenografts lacking the three major carbohydrate xenoantigens (3KO) have been considered ideal for human transplantation, the optimal combination of human transgenes (HTGs) to mitigate protein incompatibility remains undefined. In the current study, we evaluate immune responses and transplant outcomes of 3KO kidney xenografts with four different combinations of HTGs in a nonhuman primate model. Here, we show that the addition of HTGs significantly reduces transcripts associated with early immune activation, resulting in markedly prolonged survival of 3KO xenografts. Notably, the inclusion of the anti-inflammatory genes TNFAIP3 and HMOX1 is associated with improved graft survival, significantly reduced T-cell and CD11b⁺ myeloid cell infiltration, and lower expression of rejection-related gene sets in protocol xenograft biopsies, whereas the inclusion of coagulation-related HTGs is less effective.'
    links:
      - Access Primary Data: https://doi.org/10.5281/zenodo.19355873

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
    | where_exp: "item", "item.url contains 'karadagi-hirose-2026'"
    | where_exp: "item", "item.hide != true"
%}

{% include minerva-story-sorting-pubs.md %}
