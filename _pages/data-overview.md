---
title: Data Overview
permalink: /data-overview

section_id: data
layout: secondary
---

# Data Overview

The HTA is committed to ensuring access to spatial profiling data according to emerging FAIR standards (for Findability, Access, Interoperability, and Reproducibility). Few public standards and repositories exist for multiplex data, so the HTA is involved in multiple projects to help fill this need. This includes creating and documenting our data analysis pipelines, developing metadata standards, making images available, and providing access to large primary datasets through a requester pays model.

As of Spring 2022, most HTA data are still organized by the initial publication in which they were described. We expect substantial improvements in data access and organization into multi-functional datasets over the next year.  

Primary whole-slide images can be very large (up to 1 TB in size) and the full dataset from a manuscript or atlas usually contains many such images. Data this large is challenging to distribute without an established public resource, and the images cannot be visualized using conventional image software on computers and cell phones. MINERVA is designed to meet the need for image viewing _without_ data download.  

Below we describe how data can be viewed online via MINERVA, and our plans for future access to primary full-resolution images.

## Page Contents
  * [__DATA PIPELINE__: Graphical representation of HTA data from sample collection to data access](#data-pipeline)
  * [__VIEWING DATA ONLINE WITH MINERVA__: MINERVA software overview](#viewing-data-online-with-minerva)
  * [__DATA EXPLORATIONS__: Narrated dataset overviews](#data-explorations)
  * [__DATA OVERVIEWS__: Online viewing of unprocessed image data](#data-overviews)
  * [__PUBLIC ACCESS TO PRIMARY DATA__: Our approach to data sharing](#public-access-to-primary-data)
  * [__REQUESTER PAYS ACCESS TO PRIMARY IMAGE DATA__: Instructions for requesting primary data download](#requester-pays-access-to-primary-image-data)

## DATA PIPELINE

{% include graphic.html content='hta-software-overview' %}


## VIEWING DATA ONLINE WITH MINERVA

[MINERVA](https://github.com/labsyspharm/minerva-story/wiki) is a suite of software tools for visualizing, annotating and sharing large, multi-dimensional images in a browser using [digital docents](https://www.nature.com/articles/s41551-021-00789-8) and narration without the need to download the data. MINERVA enables interactive viewing and efficient annotation of data and can also display other types of data visualization. MINERVA does not require the installation of any software and is therefore secure; browsing is also anonymous. Nearly all HTA data are available as one of two types of MINERVA-based visualization.

## DATA EXPLORATIONS

[Data Explorations](https://www.tissue-atlas.org/data-explorations) are MINERVA stories that present high-level overviews of large datasets and make extensive use of narration and waypoints. They are intended to guide users through the complexities of a large dataset and analysis. We aim to develop at least one exploration per HTA publication or Atlas dataset.  

{%
    assign stories = site.data-cards
    | where_exp: "item", "item.url contains 'tuberculosis-granulomas-2022/'"
    | where_exp: "item", "item.hide != true"
%}

<section class="data-cards">
    <div class="data-cards__inner">
        <div class="data-cards__items">
            {% for s in stories %}
            {% unless s.url contains '-overview' %}
            {% include data-card.html content=s %}
            {% endunless %}
            {% endfor %}
        </div>
    </div>
</section>

## DATA OVERVIEWS  

Data Overviews are MINERVA stories for a single, minimally-processed ([Level 2 or 3](/data-standards)) whole slide image with no annotation or analysis. Data Overviews provide online viewing access to largely unprocessed image data; [MCMICRO](https://mcmicro.org/) will soon generate data overviews automatically as a component of the pipeline.

## PUBLIC ACCESS TO PRIMARY DATA

A key goal of the HTA is to provide access to primary data consistent with [FAIR](https://www.go-fair.org/fair-principles/) principles. This remains a work in progress as we develop and implement repositories and standards for our diverse data types, so not all data sets are currently available for download.  

All NCI Human Tumor Atlas Network data are released pre-publication via its [data portal](https://data.humantumoratlas.org/), but we are still working to secure and deploy the resources needed to release datasets associated with other funding mechanisms.  

### REQUESTER PAYS ACCESS TO PRIMARY IMAGE DATA
For available datasets, we are using a “requester pays” model for downloading very large image datasets. This is because the primary cost associated with creation and maintenance of a dataset on a commercial cloud service involves data download, not data ingress and storage. In a requester pays model, a user seeking access to a dataset pays the cost of data egress directly to the cloud provider, making access both secure and anonymous. We continue to explore ways to make data access free, or at least cheaper.

#### Request a download

Downloading a single dataset will cost around $200, although intra-cloud transfer (within the AWS us-east-1 region) is much cheaper. For users who wish to perform processing within AWS to avoid transfer charges, please note that the bucket is located in the us-east-1 region so any other resources must be instantiated in this same region.

1. The person downloading the data must have an AWS account and must email tissue-atlas@hms.harvard.edu with the AWS account’s AWS account ID and canonical user ID which may be found as detailed here: [https://docs.aws.amazon.com/general/latest/gr/acct-identifiers.html#FindingYourAccountIdentifiers](https://docs.aws.amazon.com/general/latest/gr/acct-identifiers.html#FindingYourAccountIdentifiers). *We must receive both the account ID and canonical user ID in order to grant access to the S3 bucket containing the full dataset.*

2. After access is granted the images and metadata will be available in the bucket at a location specified for each paper or atlas (e.g s3://hta-melatlas-1/data/ for [Nirmal et al, 2022](https://www.biorxiv.org/content/10.1101/2021.05.23.445310v2)).

3. To browse and download the data use either a graphical file transfer application that supports S3 such as [CyberDuck](https://cyberduck.io/), or the [AWS CLI](https://aws.amazon.com/cli/) tools. A graphical tool may be more convenient but the CLI tools will likely offer higher download speeds. There is unfortunately no web-browser-based mechanism for accessing a requester-pays bucket. *Please refer to the documentation for your chosen tool on how to sign in and enable access to requester-pays buckets.*  
