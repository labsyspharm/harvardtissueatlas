---
title: Data Overview
permalink: /data-overview

section_id: data
layout: secondary
---

# Data Overview

The HTA is committed to ensuring access to spatial profiling data and is involved in multiple projects to establish standards and public access for multiplex data. Our efforts include creating and documenting our data analysis pipelines, developing metadata standards, making images available, and providing access to large primary datasets through Amazon Web Services (AWS) S3 buckets.

<a href="#data-types" class="button">Data Types</a>
<a href="#viewing-image-data-online-with-minerva" class="button">View Data Online</a>
<a href="#data-pipeline" class="button">About our Data Pipeline</a>
<a href="#public-access-to-primary-data" class="button">Primary Data Access</a>
<a href="#data-standards" class="button">Data Standards</a>

## Data Types

HTA data currently comprises:
* High-plex whole slide image data collected using [cyclic immunofluorescence (CyCIF)](https://elifesciences.org/articles/31657), ORION, and 3D CyCIF  
* Spatial feature tables computed from high-plex image data describing marker intensity and morphological features at a single cell level
* Dissociative mRNA-Seq data
* Transcriptional profiles obtained using micro-region transcript profiling methods such as [GeoMX](https://pubmed.ncbi.nlm.nih.gov/32394392/)

## Viewing image data online with minerva

[MINERVA](https://www.minerva.im/) is a suite of software tools for visualizing, annotating and sharing large, multi-dimensional images in a browser using [digital docents](https://www.nature.com/articles/s41551-021-00789-8) and narration without the need to download the data. MINERVA enables interactive viewing and efficient data annotation. It can also display other types of data visualization. MINERVA does not require the installation of any software and browsing is anonymous. Nearly all HTA data are available as one of three types of MINERVA-based visualization, described below.

  <a href="/data-explorations" class="arrow-button">Explore image data</a>

### Narrated Minerva Stories
{% include narrated-minerva-description.md %}
{%
    assign stories = site.data-cards
    | where_exp: "item", "item.url contains 'lin-wang-coy-2021/'"
    | where_exp: "item", "item.hide != true"
%}

{% assign dataCardArray = '' | split: '' %}
{% for s in stories %}
  {% if s.tags contains 'narrated' %}
    {% assign dataCardArray = dataCardArray | push: s %}
  {% endif %}
{% endfor %}

{% if dataCardArray.size > 0 %}
  {% include cards.html cards=dataCardArray %}
{% endif %}

### Curated Minerva Stories
{% include curated-minerva-description.md %}

{%
    assign stories = site.data-cards
    | where_exp: "item", "item.hide != true"
%}

{% assign dataCardArray = '' | split: '' %}
{% for s in stories %}
  {% if s.tags contains 'highlight' %}
    {% assign dataCardArray = dataCardArray | push: s %}
  {% endif %}
{% endfor %}

{% if dataCardArray.size > 0 %}
  {% include cards.html cards=dataCardArray %}
{% endif %}

### Automated Minerva Stories
Automated Minerva stories provide a single, minimally-processed ([Level 2 or 3](/data-standards#data-levels)) whole slide image with no annotation or analysis. Automated stories provide online viewing access to largely unprocessed image data. These stories can be made automatically as part of the [MCMICRO](https://mcmicro.org/) pipeline.

  <a href="/data-explorations" class="arrow-button">Explore image data</a>

<br>

{% include enlarge-image.html src='graphics/hta-software-overview-v23.png' float='right' alt='' %}

## DATA PIPELINE

**This graphic depicts the flow of data into the Harvard Tissue Atlas (HTA).** Data arise from collaborations between HTA members (green) and additional collaborators (yellow). Before depositing data into the atlases, the data goes through sequential databases, experimental methods, and interoperable software. *Different roles within the workflow are numbered for clarity – note that a single person might hold multiple roles.*

First, tissue samples from collaborators (Role 2) are onboarded into the LSP by a clinical research coordinator (Role 3) and data curator (Role 4). These de-identified samples are cataloged into internal LSP databases (Experiment Tracker and Reagent Tracker) and combined with a detailed plan for how the sample will be stained. The experimental team (Roles 5 and 6) then stains and images the whole slide, resulting in up to 1,000 high-magnification image tiles per slide.

A computational biologist (Role 7) extracts data from these image tiles with [MCMICRO](https://mcmicro.org/), a microscopy software pipeline developed by the LSP. The MCMICRO modules use algorithms to combine the tiles into a single high-plex mosaic image, segment the mosaic image (to isolate single cells), and extract image data (like single-cell intensity and cell morphology), which is recorded in a Spatial Cell Feature Table. Close collaboration with the project owner and pathologist (Roles 2 and 8) is required to assess the resulting data quality at various stages of analysis. [*Watch this video to learn more about MCMICRO.*](https://www.tissue-atlas.org/curriculum#mcmicro-multiple-choice-microscopy-pipeline)

Primary data is deposited onto online databases that allow the project team to dynamically view the data and collaborate on analyses. A data manager (Role 9) oversees access to these private data portals on [Sage Synapse](https://www.synapse.org/). At this point, project owners can add additional data types into the databases - consolidating data in one place facilitates subsequent collaboration and analysis. [*Watch this video to learn more about Synapse, OMERO, and related tools.*]( https://www.tissue-atlas.org/curriculum#omero)

Now the scientific discovery process begins. New biological insights require both human inspection of the images and quantitative analysis of the single-cell data. This is highly collaborative (Roles 1, 2, 7, and 8) and is where the greatest innovation occurs! [*View two video examples of how multiplexed data come together for biological insights.*]( https://www.tissue-atlas.org/curriculum#integrating-spatial-transcriptomics-with-imaging)

A goal of the HTA is to support data sharing. We release data to the public first through [Minerva stories](https://www.minerva.im/), which allow the project team to narrate a data-driven story and users to pan and zoom through the images manually without needing to download the data. [*Watch this video to learn more about Minerva.*](https://www.tissue-atlas.org/curriculum#minerva)
After publication, HTA data are deposited into existing public repositories or made available using public cloud storage systems.

## PUBLIC ACCESS TO PRIMARY DATA

A key goal of the HTA is to provide access to primary data consistent with [FAIR Principles](https://www.go-fair.org/fair-principles/). This remains a work in progress as we develop and implement repositories and standards for our diverse data types. As a result, not all data sets are currently available for download at this time.

All NCI Human Tumor Atlas Network data are released pre-publication via its [data portal](https://data.humantumoratlas.org/). We are still working to release datasets associated with other funding mechanisms via public repositories.  

Images and metadata will be available in an AWS S3 bucket at a location specified for each paper's data availability statement. For up-to-date instructions on how to download image data found on this website, please visit our access instructions on Zenodo ([DOI: 10.5281/zenodo.10223574](https://doi.org/10.5281/zenodo.10223574)). Email tissue-atlas(at)hms.harvard.edu if you have questions or experience issues.

## Data Standards
### Imaging data
[BioFormats](https://www.openmicroscopy.org/bio-formats/) and OME-TIFF or the next generation [NGFF](https://pubmed.ncbi.nlm.nih.gov/34845388/) replacements

### Transcriptional data
Distributed via [GEO](https://www.ncbi.nlm.nih.gov/geo/) using well-established approaches

### Highly Multiplexed Tissue Images
We developed a standard for multiplexed tissue imaging called [Minimum Information about highly multiplexed Tissue Imaging (MITI)](https://www.miti-consortium.org/).

## Data Levels
MITI adopted the concept of Data Levels from [dbGAP](https://www.ncbi.nlm.nih.gov/gap/) to manage image data and the corresponding spatial profiles. Higher data levels are more processed (see the [MITI publication](https://pubmed.ncbi.nlm.nih.gov/35277708/) for additional details and background information).

{% include enlarge-image.html src='graphics/hta-software-overview-v23.png' alt='' %}

### Level 1 Data
Whole slide imaging usually involves acquisition of ~100 to 1,000 individual image tiles, each collected from a different X and Y location.

### Level 2 Data
Full-resolution images have undergone automated stitching, registration, illumination correction, background subtraction, intensity normalization, and have been stored in a standardized OME format.  

To achieve this, Level 1 image tiles are combined at sub-pixel accuracy into a mosaic image in a process known as [stitching](https://labsyspharm.github.io/ashlar/). When high-plex images are assembled from multiple rounds of lower-plex imaging, it is also necessary to register channels to each other across imaging cycles and to correct for any unevenness in illumination (so-called flat fielding). Stitched and registered mosaics can be as large as 50,000 x 50,000 pixels x 100 channels, requiring ~500 GB of disk space.

### Level 3 Data
Level 3 data represent images that have been processed with some interpretive intent and are intended to be the primary type of image data distributed by tissue atlases and similar projects. Interpretive intent may include (i) full-resolution images following quality control or artifact removal, (ii) segmentation masks computed from such images, (iii) machine-generated spatial models, and (iv) images with human or machine-generated annotations.

### Level 4 Data
Level 4 data comprise features derived from level 3 images, most commonly single-cell features in “spatial feature tables” that describes marker intensities, cell coordinates and other single-cell features.

### Level 5 Data
Level 5 data includes results computed from spatial feature tables or primary images.  

Accessing terabyte-size full-resolution image data is impractically burdensome for browsing a large dataset, so we have developed a specialized browsing tool, MINERVA, to enable panning and zooming across large images using a standard web browser.
