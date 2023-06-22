---
layout: secondary
title: Data
section_id: data

data:
  publication:
    title: High-plex immunofluorescence imaging and traditional histology of the same tissue section for discovering image-based biomarkers
    authors: 'Lin JR, Chen YA, Campton D, Cooper J, Coy S, Yapp C, Tefft JB, McCarty E, Ligon KL, Rodig SJ, Reese S, George T, Santagata S, Sorger PK'
    journal: 'Nature Cancer (2023). DOI: [10.1038/s43018-023-00576-1](https://doi.org/10.1038/s43018-023-00576-1)'
    description: Precision medicine is critically dependent on better methods for diagnosing and staging disease and predicting drug response. Histopathology using Hematoxylin and Eosin (H&E) stained tissue - not genomics – remains the primary diagnostic method in cancer. Recently developed highly-multiplexed tissue imaging methods promise to enhance research studies and clinical practice with precise, spatially-resolved, single-cell data. Here we describe the “Orion” platform for collecting H&E and high-plex immunofluorescence images from the same cells in a whole-slide format suitable for diagnosis. Using a retrospective cohort of 74 colorectal cancer resections, we show that IF and H&E images provide human experts and machine learning algorithms with complementary information that can be used to generate interpretable, multiplexed image-based models predictive of progression-free survival. Combining models of immune infiltration and tumor-intrinsic features achieves a nearly 20-fold discrimination between rapid and slow (or no) progression, demonstrating the ability of multi-modal tissue imaging to generate high-performance biomarkers.
    links:
      - Publication: https://doi.org/10.1038/s43018-023-00576-1
      - bioRxiv: https://doi.org/10.1101/2022.09.28.509927
      - Dataset: https://doi.org/10.5281/zenodo.7637655
      - Colorectal Cancer Atlas: /atlases/colorectal-cancer
---

{% assign urlParts = page.url | split: '/' %}
{% assign sectionId = urlParts[-1] %}

{% include atlas-dataset-info.html
    sectionId=sectionId
    pubData=page.data
    thumbnailDir=sectionId %}


### Key Findings:
- The Orion platform rapidly collects 18-plex immunofluorescence (IF) and diagnostic-grade H&E images from the same cells

- Complementing H&E with IF (i.e., multimodal imaging) provides greater insight into the molecular features of colorectal cancer samples

- Machine learning models trained on the multimodal and clinical data predict progression-free survival

- Analyzing multimodal imaging using machine learning / artificial intelligence methods reveals biomarkers not discoverable by other means

{% include enlarge-image.html src='publications/High-plex-immunofluorescence-imaging-and-traditional-histology-of-the-same-tissue-section-for-discovering-image-based-biomarkers.jpg' float='center' alt='' %}

<i> **Top:** Overview of the Orion method for same-slide immunofluorescence and H&E imaging. **Bottom:** Example images of a colorectal cancer specimen from Orion, showing the multiplex immunofluorescence image (left; 5 of 18 fluorescence channels shown), the corresponding same-section H&E image (center), and the overlay of these two images (right). </i>


### Contents
* [Data Explorations](#data-explorations)
* [Data Overviews](#data-overviews)
* [Data Access](#data-access)

### Data Explorations

{%
    assign stories = site.data-cards
    | where_exp: "item", "item.url contains 'lin-chen-campton-2023/'"
    | where_exp: "item", "item.hide != true"
%}

{% assign dataCardArray = '' | split: '' %}
{% for s in stories %}
  {% unless s.url contains '-overview' %}
    {% assign dataCardArray = dataCardArray | push: s %}
  {% endunless %}
{% endfor %}

{% if dataCardArray.size > 0 %}
  {% include cards.html cards=dataCardArray %}
{% endif %}

### Data Overviews

**NOTE! These Data Overviews provide access to minimally processed
Level 2 images with no annotation or quality control. Click any of the
following thumbnail images for an interactive view of the
full-resolution images.**

{%
    assign overviews = site.data-cards
    | where_exp: "item", "item.url contains 'lin-chen-campton-2023/'"
    | where_exp: "item", "item.hide != true"
    | where_exp: "item", "item.tags contains 'overview-crc'"
%}

{% if overviews.size > 0 %}
  {% include cards.html cards=overviews %}
{% endif %}


## Data access

The images in Lin, Chen, Campton et al. (2023) comprise a ~10.5 TB dataset. Visit **[doi.org/10.5281/zenodo.7637655](https://doi.org/10.5281/zenodo.7637655)** to view a table detailing where to find each file and data type. This data will eventually also be available via the NCI-sponsored repository for Human Tumor Atlas Network (HTAN; [https://humantumoratlas.org](https://humantumoratlas.org)).
