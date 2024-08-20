---
date: 0007-01-01
name: Breast Cancer Atlas
summary: The Breast Cancer Atlas involves leading cancer centers across the US focused on collecting and analyzing diverse genomic and imaging on breast and ovarian cancers. The goal of the effort is to understand pre-cancer states, develop new diagnostics that detect cancer before it spreads, and improve disease management and prevention strategies. For research specifically on BRCA-positive breast cancer, visit the [Gray BRCA Pre-cancer Atlas](https://www.graybrcaatlas.org/).
dataset:
project-image: https://www.cycif.org/assets/img/keenan-2020/25_C1_a.jpg
grant: NCI U54 CA225088, The Gray Foundation, Ludwig Cancer Research
title: Breast Cancer Atlas
link: self
short-name: Breast Cancer Atlas
---

<a href="https://www.graybrcaatlas.org/" class="button">Visit the Gray BRCA Pre-cancer Atlas</a>
<a href="#narrated-minerva-stories" class="button2">View Narrated Data</a>
<a href="#curated-minerva-stories" class="button2">View Curated Data</a>
<a href="#automated-minerva-stories" class="button2">View Automated Data</a>

## Publications
{% comment %}
  'publicationList' should be a comma-delineated string of publication file names
{% endcomment %}
{% assign publicationList = 'qualification-of-a-multiplexed-tissue-imaging-assay-and-detection-of-novel-patterns-of-HER2-heterogeneity-in-breast-cancer,a-human-breast-atlas-integrating-single-cell-proteomics-and-transcriptomics,targeting-immunosuppressive-macrophages-overcomes-PARP-inhibitor-resistance-in-BRCA1-associated-triple-negative-breast-cancer,AKT-and-EZH2-inhibitors-kill-TNBCs-by-hijacking-mechanisms-of-involution,clinical-efficacy-and-molecular-response-correlates-of-the-WEE1-inhibitor-adavosertib-combined-with-cisplatin-in-patients-with-metastatic-triple-negative-breast-cancer' %}

{% include pub-list.html list=publicationList %}

## Narrated Minerva Stories
{% include narrated-minerva-description.md %} 
{%
    assign stories = site.data-cards
    | where_exp: "item", "item.tags contains 'breast'"
    | where_exp: "item", "item.hide != true"
%}

{% assign dataCardArray = '' | split: '' %}
{% for n in stories %}
  {% if n.tags contains 'narrated' %}
    {% assign dataCardArray = dataCardArray | push: n %}
  {% endif %}
{% endfor %}

{% assign dataCardArraySort = dataCardArray | sort: 'date' | reverse %}
{% if dataCardArraySort.size > 0 %}
  {% include cards.html cards=dataCardArraySort %}
{% endif %}

## Curated Minerva Stories
{% include curated-minerva-description.md %} 

{% assign dataCardArray = '' | split: '' %}
{% for c in stories %}
  {% if c.tags contains 'curated' %}
    {% assign dataCardArray = dataCardArray | push: c %}
  {% endif %}
{% endfor %}

{% assign dataCardArraySort = dataCardArray | sort: 'date' | reverse %}
{% if dataCardArraySort.size > 0 %}
  {% include cards.html cards=dataCardArraySort %}
{% endif %}


## Automated Minerva Stories
{% include auto-minerva-description.md %} 
 
{% assign dataCardArray = '' | split: '' %}
{% for s in stories %}
  {% if s.tags contains 'auto' %}
    {% assign dataCardArray = dataCardArray | push: s %}
  {% endif %}
{% endfor %}

{% assign dataCardArraySort = dataCardArray | sort: 'date' | reverse %}
{% if dataCardArraySort.size > 0 %}
  {% include cards.html cards=dataCardArraySort %}
{% endif %}

### Funding
This research is funded by the [Gray Foundation Basser Initiative](https://www.grayfoundation.org/program-areas/basser/), Ludwig Cancer Research, and the National Cancer Institute (NCI U54 CA225088).
