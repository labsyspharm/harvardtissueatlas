---
title: Curriculum
permalink: /curriculum

section_id: learn
layout: secondary
---

# Multiplex Tissue Imaging Technology Series

Multiplex tissue imaging technologies series introduces the major components of the multiplex tissue imaging pipeline used to create a tissue atlas. We showcase the voices of individual scientists in the LSP who are actively developing experimental and computational methods to generate and analyze highly multiplexed data. Each episode focuses on one link in the pipeline, including methods and software used in tissue sample preparation, image acquisition, quantitative image and spatial molecular data analysis, online collaboration, data sharing, and science education. Over time, the curriculum will grow to include more in-depth sessions.

## Intro to the Curriculum

Welcome to the multiplexed tissue imaging technology series! This webinar series will provide unique insight into the active multiplex tissue imaging pipeline used to create the HTA. The goal of these talks is to introduce members of the scientific community to our pipelines in the hope of inspiring collaboration, method sharing, and innovation. Click the expand button to see videos and related resources.  

{% include vimeo.html id="687999091" autoplay=false muted=false time="0m" %}

## Overview of Multiplex Tissue Imaging

HTA is a molecular and physical map of human tissues and tumors. Multiplex imaging is the key method for developing these maps - it captures spatially resolved genomic, proteomic, and metabolic data at a single-cell level while preserving tissue architecture and context.  

## Specimen and Experiment Management: Collection, Archiving and Tracking

Specimens, reagents, projects, and experiments are tracked internally using custom Laboratory Information Management Systems (LIMS) databases built by LSP software engineers. Reagent Tracker and Experiment Tracker are evolving resources that anchor robust metadata and sample tracking pipelines and facilitate collaboration throughout the experimental life cycle.

{% include vimeo.html id="716535956" autoplay=false muted=false time="0m" %}

## MITI: Minimum Information about Tissue Imaging

Inconsistent data annotation is a major barrier to collaboration, data reuse and research reproducibility. To address this problem, the LSP in collaboration with the Human Tumor Atlas Network, developed MITI reporting guidelines to provide clinical, biospecimen, and experimental metadata standards for most multiplexed imaging technologies.

Please come back for an episode on MITI! In the meantime, please check out the following resources:

[Read the publication](https://doi.org/10.1038/s41592-022-01415-4){: .btn .btn-outline .btn-arrow }{:target="_blank"}
[Check out MITI's website](https://www.miti-consortium.org/){: .btn .btn-outline .btn-arrow }{:target="_blank"}


## Antibody validation and antibody panel design

Meaningful data from tissue imaging relies on having high-quality antibodies and carefully designed antibody panels. The LSP extensively validates antibodies, rates antibody performance, and custom builds antibody panels for each project to answer clinically-relevant questions.  

<details>
<summary data-collapse-label="Collapse">Expand</summary>
{% include vimeo.html id="694165748" autoplay=false muted=false time="0m" %}
</details>

## t-CyCIF method

Tissue-based cyclic immunofluorescence, or t-CyCIF, is the multiplex imaging method developed within the LSP that can be used to measure the distribution of dozens of proteins in intact tissue specimens. This iterative process collects repeated immunofluorescent images from the same sample using different fluorescent-tagged antibodies in each cycle and then assembles these images into a high-dimensional representation of the tissue.  

Please come back for an episode on the t-CyCIF method! In the meantime, please checkout the resources below:

[Read our publication](https://elifesciences.org/articles/31657){: .btn .btn-outline .btn-arrow }{:target="_blank"}
[Visit t-CyCIF website](https://www.cycif.org/){: .btn .btn-outline .btn-arrow }{:target="_blank"}

## High resolution and 3D imaging

HTA contributes to the collective understanding of physiology and pathology across many scales. Imaging at higher resolution can highlight striking subcellular features, such as the arrangement of organelles, that can be used to characterize diseases. On the other end of the scale, thick tissues can be imaged in 3D by optical or serial sectioning to better describe the intricate ways cells interact in their native tissue context.

## OMERO

Tissue imaging projects at the LSP are multi-disciplinary and encourage cross-institutional partnerships. To enable this collaboration, we use OMERO for large image file management, viewing, analysis and online collaboration.  

<details>
<summary data-collapse-label="Collapse">Expand</summary>
{% include vimeo.html id="688017487" autoplay=false muted=false time="0m" %}
</details>

## MCMICRO: Multiple-Choice Microscopy Pipeline

Reproducible analysis of large multichannel images poses a substantial computational challenge. MCMICRO is a modular and open-source computational pipeline that addresses this challenge by offering powerful end-to-end processing while maintaining the flexibility of using user-selected modules.  

<details>
<summary data-collapse-label="Collapse">Expand</summary>
{% include vimeo.html id="702882944" autoplay=false muted=false time="0m" %}
</details>

### Segmentation
<details>
<summary data-collapse-label="Collapse">Expand</summary>
{% include vimeo.html id="690989936" autoplay=false muted=false time="0m" %}
</details>

### SCIMAP: Spatial Single-cell Analysis Toolkit

t-CyCIF enables detailed molecular analysis of single cells by preserving spatial context between imaging cycles. SCIMAP is a Python-based toolkit to perform single-cell analysis on t-CyCIF images. With a wide range of capabilities, including pre-processing, phenotyping, clustering and spatial analysis, SCIMAP efficiently deals with large datasets of millions of cells.

Please come back later for an episode on SCIMAP. For more information in the meantime, please check out resources below:

[See SCIMAP resources on the Software page](./methods-software){: .btn .btn-outline .btn-arrow }{:target="_blank"}
[Head to SCIMAP website](https://scimap.xyz/){: .btn .btn-outline .btn-arrow }{:target="_blank"}

## Data Visualization and Sharing ??? MINERVA and Scope2Screen

Science succeeds as a collaborative process. In the adjacent fields of multiplex tissue imaging and digital pathology, there is need to both share processed and annotated results from imaging and incentivize open access to raw data. MINERVA and Scope2Screen are software tools developed at the LSP for image visualization and data sharing in accordance with FAIR (Findable, Accessible, Interoperable, and Reusable) principles.  

### MINERVA
<details>
<summary data-collapse-label="Collapse">Expand</summary>
{% include vimeo.html id="685606030" autoplay=false muted=false time="0m" %}
</details>
### Scope2Screen

Please come back for an episode on Scope2Screen! In the meantime, check out the resources below:

[See Scope2Screen resources on the Software page](./methods-software){: .btn .btn-outline .btn-arrow }{:target="_blank"}
[Find open source code for Scope2Screen on GitHub](https://github.com/labsyspharm/scope2screen){: .btn .btn-outline .btn-arrow }{:target="_blank"}

## Integrating Spatial Transcriptomics with Imaging

Spatial transcriptomics uses spatially-resolved mRNA readouts to assign cell phenotypes to histological sections. Combining spatial transcriptomics with multiplex tissue imaging reveals hidden relationships between single cell genomics and histological presentations in the tissue.

### Integrating Spatial Transcriptomics with Imaging
<details>
<summary data-collapse-label="Collapse">Expand</summary>
{% include vimeo.html id="685612269" autoplay=false muted=false time="0m" %}
</details>
### Building Spatial Landscapes with Multiplex Imaging and Transcriptomics
<details>
<summary data-collapse-label="Collapse">Expand</summary>
{% include vimeo.html id="688890308" autoplay=false muted=false time="0m" %}
</details>
