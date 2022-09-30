---
layout: secondary
title: Data
section_id: data

data:
  publication:
    title: The spatial landscape of progression and immunoediting in primary melanoma at single cell resolution
    authors: 'Ajit J. Nirmal, Zoltan Maliga, Tuulia Vallius, Brian Quattrochi, Alyce A. Chen, Connor A. Jacobson, Roxanne J. Pelletier, Clarence Yapp, Raquel Arias-Camison, Yu-An Chen, Christine G. Lian, George F. Murphy, Sandro Santagata, Peter K. Sorger'
    journal: 'Cancer Discovery. 2022 Jun; 12(6): 1518-1541. PMID: 35404441'
    description: Cutaneous melanoma is a highly immunogenic malignancy, surgically curable at early stages, but life- threatening when metastatic. Here we integrate high-plex imaging, 3D high-resolution microscopy, and spatially-resolved micro-region transcriptomics to study immune evasion and immunoediting in primary melanoma. We find that recurrent cellular neighborhoods involving tumor, immune, and stromal cells change significantly along a progression axis involving precursor states, melanoma in situ, and invasive tumor. Hallmarks of immunosuppression are already detectable in precursor regions. When tumors become locally invasive, a consolidated and spatially restricted suppressive environment forms along the tumor-stromal boundary. This environment is established by cytokine gradients that promote expression of MHC-II and IDO1, and by PD1-PDL1 mediated cell contacts involving macrophages, dendritic cells, and T cells. A few millimeters away, cytotoxic T cells synapse with melanoma cells in fields of tumor regression. Thus, invasion and immunoediting can co-exist within a few millimeters of each other in a single specimen.
    links:
      - Publication: https://doi.org/10.1158/2159-8290.CD-21-1357
      - bioRxiv: https://doi.org/10.1101/2021.05.23.445310
---

{% include_relative TEMP-note-text.md %}

{% assign urlParts = page.url | split: '/' %}
{% assign sectionId = urlParts[-1] %}

{% include atlas-dataset-info.html
    sectionId=sectionId
    pubData=page.data
    thumbnailDir=sectionId %}


# HTA MEL Atlas 1

The HTA MEL Atlas 1 dataset contains images and other data being used for
construction of an atlas of human melanoma under the auspices of the
[Human Tumor Atlas Network](https://humantumoratlas.org/). Advanced solid
cancers are complex assemblies of tumor, immune, and stromal cells that invade
adjacent tissue and spread to distant sites. We use highly multiplexed tissue
imaging, spatial statistics, and machine learning to identify cell types and
states underlying morphological features of known diagnostic and prognostic
significance in melanoma. This includes the tumor invasive margin,
where tumor, normal, and immune cells compete and were diverse immunosuppressive
environments are found.

## Contents
* [__Data Explorations__: MINERVA Stories summarizing key findings and
  data](#data-explorations)
* [__Data Overviews__: MINERVA Stories showing individual H&E and CyCIF
  images](#data-overviews)
* [__Primary Data Access__: List of available data files](#primary-data-access)


## Data Explorations
**Data Explorations are like museum guides and exploit the digital docents in MINERVA to guide readers through the complexities of a large image dataset via a series of narrated stories and waypoints.**

The images in Nirmal et al. (2021) comprise a ~2.3 TB dataset with some images as
large as 1 gigapixel. With MINERVA, users can pan
around and magnify areas of an image and switch between channels. MINERVA does
not require the installation of any software and is therefore secure; browsing
is also anonymous. Users interested in the tool are welcome to explore the
[documentation](https://github.com/labsyspharm/minerva-story/wiki), the
[software publication](https://joss.theoj.org/papers/10.21105/joss.02579), and a
description of [digital
docents](https://www.biorxiv.org/content/10.1101/2020.03.27.001834v2) in
general.


{%
    assign stories = site.data-cards
    | where_exp: "item", "item.url contains 'nirmal-maliga-vallius-2021/'"
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

## Data overviews

**Data Overviews provide access to minimally processed Level 2 images with no annotation or quality control. Click any of the following thumbnail images for an interactive view of the full-resolution images.**

{%
    assign overviews = site.data-cards
    | where_exp: "item", "item.url contains 'nirmal-maliga-vallius-2021/'"
    | where_exp: "item", "item.hide != true"
    | where_exp: "item", "item.url contains '-overview'"
%}

{% if overviews.size > 0 %}
  {% include cards.html cards=overviews %}
{% endif %}


## Primary Data Access
### About the data files

The primary data represents minimally processed (Level 2) image data from
either 2D whole slide or 3D optically-sectioned imaging relevant to HMS HTAN
Center Melanoma Atlas 1. Whole slide images are segmented, quantified, and
subjected to additional quality control to generate final data. Whole slide
scans are saved as OME-TIFF tiled pyramid images whereas 3D datasets are
three-dimensional TIFF files. Spatial feature tables are zipped CSV files.

Data were collected using cyclic immunofluorescence (CyCIF), as described in
<https://dx.doi.org/10.17504/protocols.io.bjiukkew>, or brightfield imaging of
hematoxylin and eosin (H&E) stained slides. Each file corresponds to a
multiplexed image mosaic for FFPE tissue sections 5 microns thick with sample
diameter extending up to ~2.9 cm. Each whole slide image is assembled from a
series of successive image tiles stitched together (832 x 732 µm tiles; up to
990 tiles/image) and flat-field corrected for illumination using MCMICRO
software to generate ~0.2 to ~1.5 gigapixel images. Tiles were collected for
each CyCIF round (up to 15 in total depending of the antibody panel used) and
these are combined in the mosaic image to generate a composite with 32 to 60
channels. Each 3D image (110 x 110 x 16 µm) requires 3D image registration to
assemble all 7 CyCIF rounds.

Whole slide CyCIF images were collected on a RareCyte Inc. CyteFinder slide
scanning fluorescence microscope using a 20x/0.75 NA objective and sampled at
650 nm/pixel. 3D high resolution CyCIF images were acquired on a GE Deltavision
Elite equipped with a 60x/1.42 NA oil immersion objective lens and sampled at
108 nm/pixel in X & Y, and 200 nm steps in Z axis. H&E images were collected on
an Olympus VS120 microscope using a 20x/0.75 NA objective and sampled at 350
nm/pixel.

The files MEL01-1-* to MEL01-3-* derive from a 62-year old male (MEL1), who had
a stage IIC primary melanoma with NF1 (c.1008G>A and c.4006C>T) mutation. The
tumor had invaded into reticular dermis and was surgically removed.

The files MEL02-1-* to MEL13-2-* derive from 12 additional patients from the
Brigham and Women's Hospital. Additional information on antibodies and specimen
are available at <https://labsyspharm.github.io/HTA-MELATLAS-1/>.

Image files ending in -0-ROI* are H&E images. All others are CyCIF images.

<details>
    <summary>Download the primary data</summary>
<div markdown="1">
{% include_relative nirmal-maliga-vallius-2021-file-list.md %}
</div>
</details>
