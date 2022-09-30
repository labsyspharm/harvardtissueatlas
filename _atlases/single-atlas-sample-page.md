---
date: 0007-01-01
name: Single Atlas Sample Page
summary: The HTA MEL Atlas 1 dataset contains images and other data being used for construction of an atlas of human melanoma under the auspices of the Human Tumor Atlas Network.
dataset: mehta-2020
project-image:
grant: The Gray Foundation
grant-image: funding/gray.png
title: Funding - Gray Foundation
link: gray
short-name: gray
---

The HTA MEL Atlas 1 dataset contains images and other data being used for construction of an atlas of human melanoma under the auspices of the Human Tumor Atlas Network. Advanced solid cancers are complex assemblies of tumor, immune, and stromal cells that invade adjacent tissue and spread to distant sites. We use highly multiplexed tissue imaging, spatial statistics, and machine learning to identify cell types and states underlying morphological features of known diagnostic and prognostic significance in melanoma. This includes the tumor invasive margin, where tumor, normal, and immune cells compete and were diverse immunosuppressive environments are found.

### Principal Investigators
* Sandro Santagata, MD PhD, Associate Professor of Pathology, Brigham and Women’s Hospital and Harvard Medical School
* Peter Sorger, PhD. Professor of Systems Biology, Harvard Medical School

### Funding
This research is funded by the [Gray Foundation Basser Initiative](https://www.grayfoundation.org/program-areas/basser/). The Atlas is expected to launch in Summer 2022.

## Contents
[**Publications**](#publications) | [**Data Explorations**](#data-explorations) | [**Data Overviews**](#data-overviews) | [**Primary Data Access**](#primary-data-access)

## Publications
{% comment %}
  'publicationList' should be a comma-delineated string of publication file names
{% endcomment %}
{% assign publicationList = 'the-spatial-landscape-of-progression-and-immunoediting-in-primary-melanoma-at-single-cell-resolution' %}

{% include pub-list.html list=publicationList %}

## Data Explorations
*Data Explorations are like museum guides and exploit the digital docents in MINERVA to guide readers through the complexities of a large image dataset via a series of narrated stories and waypoints.*

The images in Nirmal et al. (2021) comprise a ~2.3 TB dataset with some images as large as 1 gigapixel. With MINERVA, users can pan around and magnify areas of an image and switch between channels. MINERVA does not require the installation of any software and is therefore secure; browsing is also anonymous. Users interested in the tool are welcome to explore the documentation, the software publication, and a description of digital docents in general.

{% assign cardList = 'MEL1-abstract,MEL1-full-story' %}

{% include cards.html list=cardList %}

## Data Overviews
*Data Overviews provide access to minimally processed Level 2 images with no annotation or quality control. Click any of the following thumbnail images for an interactive view of the full-resolution images.*

{% assign dataCards = site.data-cards
    | where_exp: "item", "item.url contains 'nirmal-maliga-vallius-2021/MEL01'"
    | where_exp: "item", "item.hide != true" %}

{% include cards.html cards=dataCards %}

## Primary Data Access
### About the data files
The primary data represents minimally processed (Level 2) image data from either 2D whole slide or 3D optically-sectioned imaging relevant to HMS HTAN Center Melanoma Atlas 1. Whole slide images are segmented, quantified, and subjected to additional quality control to generate final data. Whole slide scans are saved as OME-TIFF tiled pyramid images whereas 3D datasets are three-dimensional TIFF files. Spatial feature tables are zipped CSV files.

Data were collected using cyclic immunofluorescence (CyCIF), as described in https://dx.doi.org/10.17504/protocols.io.bjiukkew, or brightfield imaging of hematoxylin and eosin (H&E) stained slides. Each file corresponds to a multiplexed image mosaic for FFPE tissue sections 5 microns thick with sample diameter extending up to ~2.9 cm. Each whole slide image is assembled from a series of successive image tiles stitched together (832 x 732 µm tiles; up to 990 tiles/image) and flat-field corrected for illumination using MCMICRO software to generate ~0.2 to ~1.5 gigapixel images. Tiles were collected for each CyCIF round (up to 15 in total depending of the antibody panel used) and these are combined in the mosaic image to generate a composite with 32 to 60 channels. Each 3D image (110 x 110 x 16 µm) requires 3D image registration to assemble all 7 CyCIF rounds.

Whole slide CyCIF images were collected on a RareCyte Inc. CyteFinder slide scanning fluorescence microscope using a 20x/0.75 NA objective and sampled at 650 nm/pixel. 3D high resolution CyCIF images were acquired on a GE Deltavision Elite equipped with a 60x/1.42 NA oil immersion objective lens and sampled at 108 nm/pixel in X & Y, and 200 nm steps in Z axis. H&E images were collected on an Olympus VS120 microscope using a 20x/0.75 NA objective and sampled at 350 nm/pixel.
