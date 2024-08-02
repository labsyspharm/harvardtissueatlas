---
date: 0001-01-01
name: Melanoma Pre-Cancer and Progression Atlas
summary: Melanoma is a highly immunogenic type of cancer treatable with minor surgery when localized to superficial layers of the skin but potentially lethal when it invades deep into the dermis and metastasizes. The Melanoma Pre-Cancer and Progression Atlas aims to identify the earliest molecular changes in pre-cancer and determine the sequence of events that ultimately leads to disseminated disease. This work is a component of the National Cancer Institute [Human Tumor Atlas Network (HTAN)](https://www.cancer.gov/research/key-initiatives/moonshot-cancer-initiative/implementation/human-tumor-atlas)(a [Cancer Moonshot Initiative](https://www.cancer.gov/research/key-initiatives/moonshot-cancer-initiative)) and [Cancer Systems Biology Program](https://csbconsortium.org/).
dataset: nirmal-maliga-vallius-2021
project-image: https://www.cycif.org/assets/img/pca-2019/3_cycif.jpg
grant: NCI Human Tumor Atlas Network U2C-CA233262, NCI U54-CA225088, and the Ludwig Cancer Research Foundation
grant-image: funding/nci-color.png
title: Melanoma Pre-Cancer Atlas
link: self
short-name: Mel PCA Atlas
---

Melanoma is an increasingly common type of cancer that often becomes metastatic when quite small, making melanoma a dangerous disease. Routine surveillance of the skin, followed by removal of lesions suspicious for cutaneous melanoma, is common in many developed countries. However, surveillance and staging are not perfect and some dangerous lesions slip through. Moreover, individuals with less access to healthcare do not benefit from regular monitoring and some times of melanoma (e.g. acral lentiginous melanoma) are underdiagnosed and undertreated, particularly in people of color. By improving our understanding of the sequence of molecular events that drive melanoma, the Melanoma Atlas will improve diagnosis, staging, and disease management.

Melanoma is noteworthy in that it can be treated both with [targeted therapy](https://www.nejm.org/doi/full/10.1056/NEJMoa1406037) (inhibitors of the RAF and MEK kinases for the ~50% cutaneous melanomas carrying BRAF mutations) and with [immunotherapy](https://www.nejm.org/doi/full/10.1056/nejmoa1302369) (inhibitors of the PD-1 and CTLA-4 checkpoint proteins). Understanding precisely why these therapies achieve longer and deeper remission in some patients than others is not only relevant to understanding targeted and immunotherapy in general, but also to improving patient care--choosing among treatment options at the level of individual patients is not always straightforward. The importance of understanding the high responsiveness of melanoma immunotherapy is increasing since many other types of solid cancer have proven to be much more resistant to immune therapy.

<a href="#publications" class="button2">Publications</a>
<a href="#narrated-minerva-stories" class="button">View Narrated Data</a>
<a href="#curated-minerva-stories" class="button2">View Curated Data</a>
<a href="#automated-minerva-stories" class="button">View Automated Data</a>

### Key Questions
* What are the earliest events that lead to melanoma? How can we detect melanoma precursors and eradicate them?
* What are the key events in melanoma progression? Why does the immune system successfully clear many pre-melanomas but fail to stop others?
* How can we use this information to recognize melanomas that are at high risk of progressing to metastatic disease?
* What molecular events allow some melanoma cells to escape therapy and survive as residual disease?

### Principal Investigators
* Genevieve Boland, MD PhD, Section Head of Melanoma/Sarcoma Surgery, Massachusetts General Hospital
* Christine Lian, MD, Associate Professor of Pathology, Brigham and Women's Hospital
* David Liu, MD, MPH, MS, Assistant Professor of Medicine, Dana-Farber Cancer Institute
* George Murphy, MD, Director of Dermatopathology, Brigham and Women's Hospital
* Sandro Santagata, MD PhD, Associate Professor of Pathology, Brigham and Women's Hospital and Harvard Medical School
* Dirk Schadendorf, MD, Director of the Department of Dermatology, University Hospital Essen
* Eugene Semenov, MD MA FAAD, Instructor of Dermatology, Massachusetts General Hospital
* Peter Sorger, PhD, Professor of Systems Biology, Harvard Medical School

## Publications
{% comment %}
  'publicationList' should be a comma-delineated string of publication file names
{% endcomment %}
{% assign publicationList = 'the-spatial-landscape-of-progression-and-immunoediting-in-primary-melanoma-at-single-cell-resolution,evolution-of-delayed-resistance-to-immunotherapy-in-a-melanoma-responder,prediction-of-early-stage-melanoma-recurrence-using-clinical-and-histopathologic-features,the-impact-of-stage-related-features-in-melanoma-recurrence-prediction,spatialCells-automated-profiling-of-tumor-microenvironments-with-spatially-resolved-multiplexed-single-cell-data,development-and-validation-of-time-to-event-models-to-predict-metastatic-recurrence-of-localized-cutaneous-melanoma,increased-risk-of-cutaneous-immune-related-adverse-events-in-patients-treated-with-talimogene-laherparepvec-and-immune-checkpoint-inhibitors' %}

{% include pub-list.html list=publicationList %}

## Narrated Minerva Stories
{% include narrated-minerva-description.md %} 
{%
    assign stories = site.data-cards
    | where_exp: "item", "item.tags contains 'MEL'"
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

## Data Explorations
*Data Explorations are like museum guides and exploit the digital docents in MINERVA to guide readers through the complexities of a large image dataset via a series of narrated stories and waypoints.*

{% assign cardList = 'MEL1-abstract,MEL1-full-story' %}

{% include cards.html list=cardList %}

## Data Overviews
*Data Overviews provide access to minimally processed Level 2 images with no annotation or quality control. Click any of the following thumbnail images for an interactive view of the full-resolution images.*

{% assign cardList = 'nirmal-maliga-vallius-2021,liu-lin-2019' %}

{% include cards.html tag='MEL' %}

### Funding
Research on precancers and primary melanoma is supported by the [NCI Human Tumor Atlas Network](https://www.cancer.gov/research/key-initiatives/moonshot-cancer-initiative/implementation/human-tumor-atlas) as part of the Pre-cancer Atlases of Cutaneous & Hematologic Origin [(PATCH) Center](https://humantumoratlas.org/hta7) (Grant U2C-CA233262). [HTAN](https://doi.org/10.1016/j.cell.2020.03.053) aims to generate, publicly-accessible data on the spatial, genetic and epigenetic features of common human cancers and precancers. Research on advanced and metastatic melanomas are supported by the [NCI Cancer Systems Biology Program](https://csbconsortium.org/) (Grant U54-CA225088). Additional support is provided by the [Ludwig Center at Harvard Medical School](https://ludwigcenter.hms.harvard.edu/) and the [Ludwig Institute for Cancer Research](https://www.ludwigcancerresearch.org/).
