---
title: Data Overview
permalink: /data-overview

section_id: data
layout: secondary
---

# Data Overview

 The HTA is committed to ensuring access to spatial profiling data and is involved in multiple projects to establish standards and public access for multiplex data. Our efforts include creating and documenting our data analysis pipelines, developing metadata standards, making images available, and providing access to large primary datasets through a requester pays model.

Below we describe our software pipeline, how data can be viewed online via MINERVA, and how to access primary full-resolution images.

## Contents
[**Data Pipeline**](#data-pipeline) | [**Viewing Data Online with MINERVA**](#viewing-data-online-with-minerva) | [**Data Explorations**](#data-explorations) | [**Data Overviews**](#data-overviews) | [**Public Access to Primary Data**](#public-access-to-primary-data) | [**Requester Pays Access to Primary Image Data**](#requester-pays-access-to-primary-image-data)

{% include enlarge-image.html src='graphics/hta-software-overview-v23.png' float='right' alt='' %}
## DATA PIPELINE

**This graphic depicts the flow of data into the Harvard Tissue Atlas (HTA).** Data arise from collaborations between HTA members (green) and additional collaborators (yellow). Before depositing data into the atlases, the data goes through sequential databases, experimental methods, and interoperable software. *Different roles within the workflow are numbered for clarity – note that a single person might hold multiple roles.*

First, tissue samples from collaborators (Role 2) are onboarded into the LSP by a clinical research coordinator (Role 3) and data curator (Role 4). These de-identified samples are cataloged into internal LSP databases (Experiment Tracker and Reagent Tracker) and combined with a detailed plan for how the sample will be stained. The experimental team (Roles 5 and 6) then stains and images the whole slide, resulting in up to 1,000 high-magnification image tiles per slide.

A computational biologist (Role 7) extracts data from these image tiles with [MCMICRO](https://mcmicro.org/), a microscopy software pipeline developed by the LSP. The MCMICRO modules use algorithms to combine the tiles into a single high-plex mosaic image, segment the mosaic image (to isolate single cells), and extract image data (like single-cell intensity and cell morphology), which is recorded in a Spatial Cell Feature Table. Close collaboration with the project owner and pathologist (Roles 2 and 8) is required to assess the resulting data quality at various stages of analysis. [*Watch this video to learn more about MCMICRO.*](https://www.tissue-atlas.org/curriculum#mcmicro-multiple-choice-microscopy-pipeline)

Primary data is deposited onto online databases that allow the project team to dynamically view the data and collaborate on analyses. A data manager (Role 9) oversees access to these private data portals on [Sage Synapse](https://www.synapse.org/). At this point, project owners can add additional data types into the databases - consolidating data in one place facilitates subsequent collaboration and analysis. [*Watch this video to learn more about Synapse, OMERO, and related tools.*]( https://www.tissue-atlas.org/curriculum#omero)

Now the scientific discovery process begins. New biological insights require both human inspection of the images and quantitative analysis of the single-cell data. This is highly collaborative (Roles 1, 2, 7, and 8) and is where the greatest innovation occurs! [*View two video examples of how multiplexed data come together for biological insights.*]( https://www.tissue-atlas.org/curriculum#integrating-spatial-transcriptomics-with-imaging)

A goal of the HTA is to support data sharing. We release data to the public first through [Minerva stories](https://github.com/labsyspharm/minerva-story/wiki), which allow the project team to narrate a data-driven story and users to pan and zoom through the images manually without needing to download the data. [*Watch this video to learn more about Minerva.*](https://www.tissue-atlas.org/curriculum#minerva)
After publication, HTA data are deposited into existing public repositories or made available using public cloud storage systems to allow requester-pays download.


## VIEWING DATA ONLINE WITH MINERVA

[MINERVA](https://github.com/labsyspharm/minerva-story/wiki) is a suite of software tools for visualizing, annotating and sharing large, multi-dimensional images in a browser using [digital docents](https://www.nature.com/articles/s41551-021-00789-8) and narration without the need to download the data. MINERVA enables interactive viewing and efficient data annotation. It can also display other types of data visualization. MINERVA does not require the installation of any software and browsing is anonymous. Nearly all HTA data are available as one of two types of MINERVA-based visualization, described below.

## DATA EXPLORATIONS

[Data Explorations](https://www.tissue-atlas.org/data-explorations) are MINERVA stories that guide users through the complexities of a large dataset and analysis by making extensive use of narration and waypoints. We aim to develop at least one exploration per HTA publication or Atlas dataset.  

{% assign stories = site.data-cards
    | where_exp: "item", "item.url contains 'tuberculosis-granulomas-2022/'"
    | where_exp: "item", "item.hide != true" %}
{% assign storiesFiltered = "" | split: "," %}
{% for s in stories %}
    {% unless s.url contains '-overview' %}
        {% assign storiesFiltered = storiesFiltered | push: s %}
    {% endunless %}
{% endfor %}

{% include cards.html cards=storiesFiltered %}

## DATA OVERVIEWS  

Data Overviews are MINERVA stories for a single, minimally-processed ([Level 2 or 3](/data-standards#data-levels)) whole slide image with no annotation or analysis. Data Overviews provide online viewing access to largely unprocessed image data; [MCMICRO](https://mcmicro.org/) will soon generate data overviews automatically as a component of the pipeline.

## PUBLIC ACCESS TO PRIMARY DATA

A key goal of the HTA is to provide access to primary data consistent with [FAIR Principles](https://www.go-fair.org/fair-principles/). This remains a work in progress as we develop and implement repositories and standards for our diverse data types. As a result, not all data sets are currently available for download at this time.

All NCI Human Tumor Atlas Network data are released pre-publication via its [data portal](https://data.humantumoratlas.org/). We are still working to secure and deploy the resources needed to release datasets associated with other funding mechanisms.  

### Requester pays Access to Primary Image Data
For available datasets, we are using a “requester pays” model for downloading very large image datasets. This is because the primary cost associated with creation and maintenance of a dataset on a commercial cloud service involves data download, not data ingress and storage. In a requester pays model, a user seeking access to a dataset pays the cost of data egress directly to the cloud provider, making access both secure and anonymous. We continue to explore ways to make data access free, or at least cheaper.

### Request a download
Downloading a single dataset will cost around $200, although intra-cloud transfer is much cheaper. For users who wish to perform processing within AWS to avoid transfer charges, please note that the bucket is located in the us-east-1 region so any other resources must be instantiated in this same region.

1. Images and metadata will be available in a bucket at a location specified for each paper or atlas (e.g s3://hta-melatlas-1/data/ for [Nirmal et al, 2022](https://doi.org/10.1158/2159-8290.CD-21-1357)).

2. To browse and download the data use either a graphical file transfer application that supports S3 such as [CyberDuck](https://cyberduck.io/), or the [AWS CLI](https://aws.amazon.com/cli/) tools. A graphical tool may be more convenient but the CLI tools will likely offer higher download speeds. There is unfortunately no web-browser-based mechanism for accessing a requester-pays bucket. *Please refer to the documentation for your chosen tool on how to sign in and enable access to requester-pays buckets.*  
