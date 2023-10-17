---
date: 0004-01-01
name: BRCA1/2 Cancer Atlas
summary: The BRAC1/2 Cancer Atlas involves leading cancer centers across the US focused on collecting and analyzing diverse genomic and imaging on BRAC1/2 breast and ovarian cancers. The goal of the effort is to understand pre-cancer states, develop new diagnostics that detect cancer before it spreads, and improve disease management and prevention strategies.
dataset: mehta-2020
project-image: data-cards/brca1-associated-triple.jpg
grant: NCI U54 CA225088 and The Gray Foundation
grant-image: funding/gray.png
title: BRCA1/2 Cancer Atlas
link: brca
short-name: BRCA1/2 Atlas
---

The mutations that cause cancer often arise spontaneously in somatic tissues but some are heritable. Among these mutations in BRCA1 or BRCA2 (BReast CAncer gene 1&2) stand out as having relatively high prevalence and causing a substantial increase in a variety of cancers including those of the breast, ovaries, pancreas and prostate. BRCA1 and BRCA2 are involved in the repair of damaged DNA but the precise events that initiate tumor formation are not fully understood.

### Principal Investigators
* Joan Brugge, PhD, Director of the Harvard Ludwig Cancer Center and Professor of Cell Biology, Harvard Medical School
*  Sandro Santagata, MD PhD, Associate Professor of Pathology, Brigham and Women's Hospital and Harvard Medical School
*  Peter Sorger, PhD, Professor of Systems Biology, Harvard Medical School

## Publications
{% comment %}
  'publicationList' should be a comma-delineated string of publication file names
{% endcomment %}
{% assign publicationList = 'a-human-breast-atlas-integrating-single-cell-proteomics-and-transcriptomics,targeting-immunosuppressive-macrophages-overcomes-PARP-inhibitor-resistance-in-BRCA1-associated-triple-negative-breast-cancer,clinical-efficacy-and-molecular-response-correlates-of-the-WEE1-inhibitor-adavosertib-combined-with-cisplatin-in-patients-with-metastatic-triple-negative-breast-cancer' %}

{% include pub-list.html list=publicationList %}

## Data Explorations
*Data Explorations are like museum guides and exploit the digital docents in MINERVA to guide readers through the complexities of a large image dataset via a series of narrated stories and waypoints.*

{% assign cardList = 'ovarian-cancer-with-annotation-lsp15327,ovarian-cancer-with-annotation-lsp15343,osd-BRCA-WT-vs-BRCA1-associated-TNBC' %}

{% include cards.html list=cardList %}

## Data Overviews
*Data Overviews provide access to minimally processed Level 2 images with no annotation or quality control. Click any of the following thumbnail images for an interactive view of the full-resolution images.*

{% assign dataCards = site.data-cards
    | where_exp: "item", "item.url contains 'gray-rosenbluth-selfors-2022,kadar-drapkin-ovarina-pilot,mehta-2020,keenan-2020'"
    | where_exp: "item", "item.hide != true" %}

{% include cards.html tag='BRCA' %}

### Funding
This research is funded by the [Gray Foundation Basser Initiative](https://www.grayfoundation.org/program-areas/basser/), the Ludwig Institute for Cancer Research, and the National Cancer Institute (NCI U54 CA225088).
