---
layout: secondary
title: Data
section_id: data

data:
  publication:
    title: AKT and EZH2 inhibitors kill TNBCs by hijacking mechanisms of involution
    journal: 'TBA'
    authors: 'Schade A, Perurena N, Yang Y, Rodriguez CL, Krishnan A, Loi P, Mastellone GM, Pilla NF, Watanabe M, Xu Y, Nguyen V, Ota K, Davis RA, Mattioli K, Xiang D, Zoeller JL, Morganti S, Garrido-Castro AC, Tolaney S, Li Z, Barbie DA, Sorger PK, Helin K, Santagata S, Knott SRV, Cichowski K.'
    description: 'Triple negative breast cancer (TNBC) is the most aggressive breast cancer subtype and has the  highest  rate  of  recurrence.  The  predominant  standard  of  care  for  advanced  TNBC  is  systemic chemotherapy  with  or  without  immunotherapy,  however  responses  are  typically  short-lived. Thus,  there  is  an  urgent  need  to  develop  more  effective  treatments.  PI3K  pathway  components represent  plausible  therapeutic  targets,  as  at  least  70%  of  TNBCs  have  PIK3CA/AKT1/PTEN alterations. However, unlike hormone receptor-positive tumors, it is still unclear if or how PI3K pathway inhibitors will be effective in triple-negative disease. Here we describe a promising AKT inhibitor-based  therapeutic  combination  for  TNBC. Specifically,  we  show  that  AKT  inhibitors potently synergize with agents that suppress the histone methyltransferase, EZH2, and promote robust tumor regression in multiple TNBC models in vivo. AKT and EZH2 inhibitors exert these effects by first cooperatively driving basal-like TNBC cells into a more differentiated, luminal-like state, which cannot be effectively induced by either agent alone. Once differentiated, these agents kill TNBCs by hijacking signals that normally drive mammary gland involution. Importantly, using a  machine  learning  approach  we  developed  a  classifier  that  can  be  used  to  predict  sensitivity. Together these findings identify a promising therapeutic strategy for this highly aggressive tumor type  and  illustrate  how  deregulated  epigenetic  enzymes  can  insulate  tumors  from  oncogenic vulnerabilities. These studies also reveal how developmental tissue-specific cell death pathways may be co-opted for therapeutic benefit.'
    links:
      - Primary data Access: https://github.com/labsyspharm/cichowski-santagata-sorger-2024/
---

{% assign urlParts = page.url | split: '/' %}
{% assign sectionId = urlParts[-1] %}

{% include atlas-dataset-info.html
    sectionId=sectionId
    pubData=page.data
    thumbnailDir=sectionId %}
<br>

### Graphical Abstract
{% include enlarge-image.html src='publications/cichowski-santagata-sorger-2024.PNG' alt='EZH2 + AKT inhibitors in TNBC' %}

<br>

{%
    assign stories = site.data-cards
    | where_exp: "item", "item.url contains 'cichowski-santagata-sorger-2024'"
    | where_exp: "item", "item.hide != true"
%}

{% include minerva-story-sorting-pubs.md %}

## Data Access
Instructions to access data will be posted to the [GitHub repository](https://github.com/labsyspharm/cichowski-santagata-sorger-2024/) associated with this publication.

### Funding  
This work was supported by a grant from the Cancer Research UK Grand Challenge and the Mark Foundation for Cancer Research to the SPECIFICANCER team (KC) and a DOD BC201085P1 Transformative Breast Cancer Consortium Award (KC). A.S. was supported by an American Cancer Society Postdoctoral Fellowship (PF-22-040-01-ET). N.P. was supported by AACR-AstraZeneca Breast Cancer Research Fellowship (20-40-12-PERU). K.M. was supported by NHGRI F32 #1F32HG012318-01. S.S. was funded by National Cancer Institute grant U54-CA225088 and the BWH President’s Scholar Award. Z.L. was supported by NIH grant R01 CA222560.
