---
layout: secondary
title: Data
section_id: data

data:
  publication:
    title: AKT and EZH2 inhibitors kill TNBCs by hijacking mechanisms of involution
    journal: 'Nature. 2024. PMID: 39385030'
    authors: 'Schade A, Perurena N, Yang Y, Rodriguez CL, Krishnan A, Loi P, Mastellone GM, Pilla NF, Watanabe M, Xu Y, Nguyen V, Ota K, Davis RA, Mattioli K, Xiang D, Zoeller JL, Morganti S, Garrido-Castro AC, Tolaney S, Li Z, Barbie DA, Sorger PK, Helin K, Santagata S, Knott SRV, Cichowski K.'
    description: 'Triple-negative breast cancer (TNBC) is the most aggressive breast cancer subtype and has the highest rate of recurrence1. The predominant standard of care for advanced TNBC is systemic chemotherapy with or without immunotherapy; however, responses are typically short lived. Thus, there is an urgent need to develop more effective treatments. Components of the PI3K pathway represent plausible therapeutic targets; more than 70% of TNBCs have alterations in PIK3CA, AKT1 or PTEN. However, in contrast to hormone-receptor-positive tumours, it is still unclear whether or how triple-negative disease will respond to PI3K pathway inhibitors. Here we describe a promising AKT-inhibitor-based therapeutic combination for TNBC. Specifically, we show that AKT inhibitors synergize with agents that suppress the histone methyltransferase EZH2 and promote robust tumour regression in multiple TNBC models in vivo. AKT and EZH2 inhibitors exert these effects by first cooperatively driving basal-like TNBC cells into a more differentiated, luminal-like state, which cannot be effectively induced by either agent alone. Once TNBCs are differentiated, these agents kill them by hijacking signals that normally drive mammary gland involution. Using a machine learning approach, we developed a classifier that can be used to predict sensitivity. Together, these findings identify a promising therapeutic strategy for this highly aggressive tumour type and illustrate how deregulated epigenetic enzymes can insulate tumours from oncogenic vulnerabilities. These studies also reveal how developmental tissue-specific cell death pathways may be co-opted for therapeutic benefit.'
    links:
      - Publication: https://doi.org/10.1038/s41586-024-08031-6
      - Pubmed: https://pubmed.ncbi.nlm.nih.gov/39385030/
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
This work was supported by a grant from the Cancer Research UK Grand Challenge and the Mark Foundation for Cancer Research to the SPECIFICANCER team (K.C.) and a DOD BC201085P1 Transformative Breast Cancer Consortium Award (K.C.). A.E.S. was supported by an American Cancer Society Postdoctoral Fellowship (PF-22-040-01-ET), a Terri Brodeur Breast Cancer Foundation Grant and a METAvivor Early Career Investigator Award; N.P. by AACR-AstraZeneca Breast Cancer Research Fellowship (20-40-12-PERU) and a Terri Brodeur Breast Cancer Foundation Grant; K.M. by NHGRI F32 1F32HG012318-01; S.S. by National Cancer Institute grant U54-CA225088 and the BWH President’s Scholar Award; Z.L. by NIH grant R01 CA222560;and S.M. by Fondazione Gianni Bonadonna and Associazione Italiana per la Ricerca contro il Cancro 2022-2024.
