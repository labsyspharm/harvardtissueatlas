---
title: Data Standards
permalink: /data-standards

section_id: data
layout: secondary

---
# HTA DATA TYPES AND STANDARDS

## Contents
[**Data Types**](#data-types) | [**Data Standards**](#data-standards) | [**Data Levels**](#data-levels)

## Data Types
The HTA is committed to ensuring access to spatial profiling data according to emerging [FAIR standards](https://www.go-fair.org/fair-principles/) (for Findability, Access, Interoperability, and Reproducibility). However, few well-recognized public standards and repositories exist, and so access to different types of data remains a work in progress.

HTA data currently comprises:
* High-plex whole slide image data collected using [cyclic immunofluorescence (CyCIF)](https://elifesciences.org/articles/31657) and similar methods
* Spatial feature tables computed from high-plex image data describing marker intensity and morphological features at a single cell level
* Dissociative mRNA-Seq data
* Transcriptional profiles obtained using micro-region transcript profiling methods such as [GeoMX](https://pubmed.ncbi.nlm.nih.gov/32394392/) and [Pick-Seq](https://www.biorxiv.org/content/10.1101/2021.03.18.431004v1)

We will add additional data types in the future.

## Data Standards
We use established standardized data formats whenever possible.

### Imaging data
[BioFormats](https://www.openmicroscopy.org/bio-formats/) and OME-TIFF or the next generation [NGFF](https://pubmed.ncbi.nlm.nih.gov/34845388/) replacements

### Transcriptional data
Distributed via [GEO](https://www.ncbi.nlm.nih.gov/geo/) using well-established approaches

### Highly Multiplexed Tissue Images
A standard for multiplexed tissue images didn't exist, so we developed the standard [Minimum Information about highly multiplexed Tissue Imaging (MITI)](https://www.tissue-atlas.org/miti-consortium.org).

MITI repurposes best practices from other data types to highly multiplexed tissue images and traditional histology images. Individuals and organizations interested in MITI should visit the image.sc forum and may submit pull requests (i.e. requests for inclusion in the MITI “codebase” at https://github.com/miti-consortium/MITI). We are currently developing a practical and reliable means for capturing the information needed to adhere to the MITI standard.

## Data Levels
MITI adopted the concept of Data Levels from [dbGAP]( https://www.ncbi.nlm.nih.gov/gap/) to manage image data and the corresponding spatial profiles. Higher data levels are more processed (see the [MITI publication](https://pubmed.ncbi.nlm.nih.gov/35277708/) for additional details and background information).  

### Level 1 Data
Whole slide imaging usually involves acquisition of ~100 to 1,000 individual image tiles, each collected from a different X and Y location. These individual multi-dimensional, subcellular resolution image tiles comprise Level 1 data.

### Level 2 Data
Level 2 MITI data corresponds to full-resolution images that have undergone automated stitching, registration, illumination correction, background subtraction, intensity normalization, and have been stored in a standardized OME format.  

To achieve this, Level 1 image tiles are combined at sub-pixel accuracy into a mosaic image in a process known as [stitching](https://labsyspharm.github.io/ashlar/). When high-plex images are assembled from multiple rounds of lower-plex imaging, it is also necessary to register channels to each other across imaging cycles and to correct for any unevenness in illumination (so-called flat fielding). Stitched and registered mosaics can be as large as 50,000 x 50,000 pixels x 100 channels, requiring ~500 GB of disk space. This level of processing is analogous to BAM files in genomics.

### Level 3 Data
Level 3 data represent images that have been processed with some interpretive intent and are intended to be the primary type of image data distributed by tissue atlases and similar projects. Interpretive intent may include (i) full-resolution images following quality control or artifact removal, (ii) segmentation masks computed from such images, (iii) machine-generated spatial models, and (iv) images with human or machine-generated annotations.  

Level 3 MITI data is roughly analogous to Level 3 mRNA expression data in genomics. However, whereas many users of genomic data only require access to processed level 3 and 4 data, which are usually quite compact, quantitative analysis of tissue images requires full-resolution primary images so that images and computed features can be examined in parallel.

*Note: In the case of genomic data, de-identification risk restricts the distribution of Level 1 and 2 data; in the case of high-plex tissue images no such restriction exists but data levels have been harmonized with dbGAP so that Level 3 data is the primary type of data for public distribution. Date information has been removed from all image files in compliance with best practices for distribution of patient-derived data.*

### Level 4 Data
Level 4 data comprise features derived from level 3 images, most commonly single-cell features in “spatial feature tables” that describes marker intensities, cell coordinates and other single-cell features.  

Level 4 data in spatial feature tables are a natural complement to Level 4 count tables in single cell sequencing data (e.g. scRNA-seq, scATAC-seq, scDNA-seq) and can be analyzed using many of the same dimensionality reduction methods (e.g. PCA, t-SNE and U-MAP) and online browsers such as cellxgene.

### Level 5 Data
Level 5 data includes results computed from spatial feature tables or primary images.  

Accessing terabyte-size full-resolution image data is impractically burdensome for browsing a large dataset, so we have developed a specialized browsing tool, MINERVA, to enable panning and zooming across large images using a standard web browser.
