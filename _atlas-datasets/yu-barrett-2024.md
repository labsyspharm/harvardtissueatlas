---
layout: secondary
title: Data
section_id: data

data:
  publication:
    title: 'Skin immune-mesenchymal interplay within tertiary lymphoid structures promotes autoimmune pathogenesis in hidradenitis suppurativa'
    journal: 'Immunity. 2024 Dec 20, 57(12):p2827-2842.e5. PMID: [39662091](https://pubmed.ncbi.nlm.nih.gov/39662091/)'
    authors: 'Yu W-W, Barrett JNP, Tong J, Lin M-J, Marohn M, Devlin JC, Herrera A, Remark J, Levine J, Liu P-K, Fang V, Zellmer AM, Oldridge DA, Wherry EJ, Lin J-R, Chen J-Y, Sorger P, Santagata S, Krueger JG, Ruggles KV, Wang F, Su C, Koralov SB, Wang J, Chiu ES, Lu CP.'
    description: 'Hidradenitis suppurativa (HS) is a chronic, debilitating inflammatory skin disease characterized by keratinized epithelial tunnels that grow deeply into the dermis. Here, we examined the immune microenvironment within human HS lesions. Multi-omics profiling and multiplexed imaging identified tertiary lymphoid structures (TLSs) near HS tunnels. These TLSs were enriched with proliferative T cells, including follicular helper (Tfh), regulatory (Treg), and pathogenic T cells (IL17A+ and IFNG+), alongside extensive clonal expansion of plasma cells producing antibodies reactive to keratinocytes. HS fibroblasts express CXCL13 or CCL19 in response to immune cytokines. Using a microfluidic system to mimic TLS on a chip, we found that HS fibroblasts critically orchestrated lymphocyte aggregation via tumor necrosis factor alpha (TNF-α)-CXCL13 and TNF-α-CCL19 feedback loops with B and T cells, respectively; early TNF-α blockade suppressed aggregate initiation. Our findings provide insights into TLS formation in the skin, suggest therapeutic avenues for HS, and reveal mechanisms that may apply to other autoimmune settings, including Crohn’s disease.'
    links:
      - Publication: https://doi.org/10.1016/j.immuni.2024.11.010
---
{% assign urlParts = page.url | split: '/' %}
{% assign sectionId = urlParts[-1] %}

{% include atlas-dataset-info.html
    sectionId=sectionId
    pubData=page.data
    thumbnailDir=sectionId %}

<br>

### Graphical Abstract
{% include enlarge-image.html src='publications/yu-barrett-2024.png' alt='' %}

<br>

{%
    assign stories = site.data-cards
    | where_exp: "item", "item.url contains 'yu-2024'"
    | where_exp: "item", "item.hide != true"
%}

{% include minerva-story-sorting-pubs.md %}
