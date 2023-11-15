---
title: Curriculum
permalink: /curriculum

section_id: learn
layout: secondary
---

# Multiplex Tissue Imaging Technology Series

Multiplex tissue imaging technologies series introduces the major components of the multiplex tissue imaging pipeline used to create a tissue atlas. We showcase the voices of individual scientists in the LSP who are actively developing experimental and computational methods to generate and analyze highly multiplexed data. Each episode focuses on one link in the pipeline, including methods and software used in tissue sample preparation, image acquisition, quantitative image and spatial molecular data analysis, online collaboration, data sharing, and science education. Videos are added regularly, and, over time, the curriculum will grow to include more in-depth sessions.

## Contents
[**Intro to the Curriculum**](#introduction-to-the-curriculum) | [**Overview**](#overview-of-multiplex-tissue-imaging) | [**Specimen and Experiment Management**](#specimen-and-experiment-management-collection-archiving-and-tracking) | [**MITI Metadata**](#miti-minimum-information-about-tissue-imaging) | [**Antibodies**](#antibody-validation-and-antibody-panel-design) | [**t-CyCIF method**](#t-cycif-method) | [**Imaging**](#high-resolution-and-3d-imaging) | [**OMERO Collaboration**](#omero) | [**Analysis with MCMICRO**](#mcmicro-multiple-choice-microscopy-pipeline) | [**Spatial Analysis with SCIMAP**](#spatial-analysis-with-scimap) | [**Data Visualization and Sharing**](#data-visualization-and-sharing) | [**Spatial Transcriptomics**](#integrating-spatial-transcriptomics-with-imaging)
{:.mb-5}

## Introduction to the Curriculum

Welcome to the multiplexed tissue imaging technology series! This webinar series will provide unique insight into the active multiplex tissue imaging pipeline used to create the HTA. The goal of these talks is to introduce members of the scientific community to our pipelines in the hope of inspiring collaboration, method sharing, and innovation.  

<div class="row mb-4">
  <div class="col-md-6 mb-4">
    {% include vimeo-card.html id="687999091" title="Introduction" description="Han Xu, PhD, Harvard Program in Therapeutic Science Education Fellow, provides an introduction to the Multiplex Tissue Imaging Technology series." %}
  </div>
</div>

## Overview of Multiplex Tissue Imaging

HTA is a molecular and physical map of human tissues and tumors. Multiplex imaging is the key method for developing these maps - it captures spatially resolved genomic, proteomic, and metabolic data at a single-cell level while preserving tissue architecture and context.
{:.mb-5}

## Specimen and Experiment Management: Collection, Archiving and Tracking

Specimens, reagents, projects, and experiments are tracked internally using custom Laboratory Information Management Systems (LIMS) databases built by LSP software engineers. Reagent Tracker and Experiment Tracker are evolving resources that anchor robust metadata and sample tracking pipelines and facilitate collaboration throughout the experimental life cycle.

<div class="row mb-4">
  <div class="col-md-6 mb-4">
    {% include vimeo-card.html id="716535956" title="Tissue Specimen Management" %}
  </div>
  <div class="col-md-6 mb-4">
    {% include vimeo-card.html id="802110173" title="Reagent and Experiment Tracking" %}
  </div>
</div>

## MITI: Minimum Information about Tissue Imaging

Inconsistent data annotation is a major barrier to collaboration, data reuse and research reproducibility. To address this problem, the LSP in collaboration with the Human Tumor Atlas Network, developed MITI reporting guidelines to provide clinical, biospecimen, and experimental metadata standards for most multiplexed imaging technologies.

<div class="row mb-4">
  <div class="col-md-6 mb-4">
    {% include vimeo-card.html id="790181049" title="MITI Metadata" %}
  </div>
</div>

## Antibody validation and antibody panel design

Meaningful data from tissue imaging relies on having high-quality antibodies and carefully designed antibody panels. The LSP extensively validates antibodies, rates antibody performance, and custom builds antibody panels for each project to answer clinically-relevant questions.  

<div class="row mb-4">
  <div class="col-md-6 mb-4">
    {% include vimeo-card.html id="694165748" title="Antibody Validation and Antibody Panel Design" %}
  </div>
</div>

## t-CyCIF method

Tissue-based cyclic immunofluorescence, or t-CyCIF, is the multiplex imaging method developed within the LSP that can be used to measure the distribution of dozens of proteins in intact tissue specimens. This iterative process collects repeated immunofluorescent images from the same sample using different fluorescent-tagged antibodies in each cycle and then assembles these images into a high-dimensional representation of the tissue.  

<div class="row mb-4">
  <div class="col-md-6 mb-4">
    {% include vimeo-card.html id="848215164" title="t-CyCIF" %}
  </div>
</div>

#### Resources (Click to follow link)
[Original t-CyCIF paper](https://doi.org/10.7554/eLife.31657) | [MCMICRO website](https://mcmicro.org) | [MCMICRO GitHub](https://github.com/labsyspharm/mcmicro) | [Minerva Story](https://www.minerva.im/) | [HTA melanoma atlas](https://www.tissue-atlas.org/atlases/melanoma-pca) | [t-CyCIF protocol](https://www.protocols.io/view/tissue-cyclic-immunofluorescence-t-CyCIF-version-3-5qpvorbndv4o/v2) | [Leica Bond tissue pretreatment](https://www.protocols.io/view/ffpe-tissue-pre-treatment-before-t-CyCIF-on-leica-n92ld3dbng5b/v2)


## High resolution and 3D imaging

HTA contributes to the collective understanding of physiology and pathology across many scales. Imaging at higher resolution can highlight striking subcellular features, such as the arrangement of organelles, that can be used to characterize diseases. On the other end of the scale, thick tissues can be imaged in 3D by optical or serial sectioning to better describe the intricate ways cells interact in their native tissue context.
{:.mb-5}

## OMERO

Tissue imaging projects at the LSP are multi-disciplinary and encourage cross-institutional partnerships. To enable this collaboration, we use OMERO for large image file management, viewing, analysis and online collaboration.  

<div class="row mb-4">
  <div class="col-md-6 mb-4">
    {% include vimeo-card.html id="688017487" title="OMERO" %}
  </div>
</div>

## MCMICRO: Multiple-Choice Microscopy Pipeline

Reproducible analysis of large multichannel images poses a substantial computational challenge. MCMICRO is a modular and open-source computational pipeline that addresses this challenge by offering powerful end-to-end processing while maintaining the flexibility of using user-selected modules.  

<div class="row mb-4">
  <div class="col-md-6 mb-4">
    {% include vimeo-card.html id="702882944" title="MCMICRO: Multiple-choice microscopy pipeline" %}
  </div>
  <div class="col-md-6 mb-4">
    {% include vimeo-card.html id="690989936" title="MCMICRO: Segmentation" %}
  </div>
</div>

## Spatial Analysis with SCIMAP

t-CyCIF enables detailed molecular analysis of single cells by preserving spatial context between imaging cycles. SCIMAP, Spatial Single-cell Analysis Toolkit, is a Python-based toolkit to perform single-cell analysis on t-CyCIF images. With a wide range of capabilities, including pre-processing, phenotyping, clustering and spatial analysis, SCIMAP efficiently deals with large datasets of millions of cells.

Please come back later for an episode on SCIMAP. For more information in the meantime, please check out resources below:

[See SCIMAP resources on the Software page](./methods-software){: .btn .btn-outline .btn-arrow }{:target="_blank"}  
[Head to SCIMAP website](https://scimap.xyz/){: .btn .btn-outline .btn-arrow }{:target="_blank"}
{:.mb-5}

## Data Visualization and Sharing

Science succeeds as a collaborative process. In the adjacent fields of multiplex tissue imaging and digital pathology, there is need to both share processed and annotated results from imaging and incentivize open access to raw data. MINERVA is a software tool developed at the LSP for image visualization and data sharing in accordance with FAIR (Findable, Accessible, Interoperable, and Reusable) principles.  

### MINERVA

<div class="row mb-4">
  <div class="col-md-6 mb-4">
    {% include vimeo-card.html id="685606030" title="Data Visualization and Sharing with MINERVA" %}
  </div>
</div>

## Integrating Spatial Transcriptomics with Imaging

Spatial transcriptomics uses spatially-resolved mRNA readouts to assign cell phenotypes to histological sections. Combining spatial transcriptomics with multiplex tissue imaging reveals hidden relationships between single cell genomics and histological presentations in the tissue.

<div class="row mb-4">
  <div class="col-md-6 mb-4">
    {% include vimeo-card.html id="685612269" title="Integrating Spatial Transcriptomics with Imaging" %}
  </div>
  <div class="col-md-6 mb-4">
    {% include vimeo-card.html id="688890308" title="Building Spatial Landscapes with Multiplex Imaging and Transcriptomics" %}
  </div>
</div>
