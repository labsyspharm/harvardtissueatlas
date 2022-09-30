---
# name of the software
title: UnMICST
# summary of the tool
description: |
    Universal Models for Identifying Cells and Segmenting Tissue Nuclei segmentation, especially for tissues, is a challenging and unsolved problem. Convolutional neural networks are particularly well-suited for this task: separating the foreground class (nuclei pixels) from the background class. UnMICST generates probability maps where the intensity at each pixel defines how confident the pixel has been correctly classified to the
    aforementioned classes. These maps can make downstream image binarization more accurate using tools such as [s3segmenter](https://github.com/HMS-IDAC/S3segmenter). UnMICST currently uses the UNet architecture (Ronneberger et al., 2015) but Mask R-CNN and Pyramid Scene Parsing (PSP) Net are coming very soon!

# thumbnail image, can be a logo too
image: software/unmicst-logo_v2.png

# link to the publication
# maybe link to the entry on the publication page?
publication: https://www.biorxiv.org/content/10.1101/2021.04.02.438285v1
# link to github repo
source code: https://github.com/HMS-IDAC/unmicst
# link to micro-site
documentation:

# for sorting purpose
date: 2019-01-01
# set the type for this item - will determine which page it appears on:
# [ software | method ]
type: software
---
