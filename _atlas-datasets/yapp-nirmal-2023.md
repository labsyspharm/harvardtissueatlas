---
layout: secondary
title: Data
section_id: data

data:
  publication:
    title: Multiplexed 3D analysis of cell plasticity and immune niches in melanoma
    authors: 'Yapp C, Nirmal AJ, Zhou F, Maliga Z, Llopis PM, Murphy GF, Lian CG, Danuser G, Santagata S, Sorger PK'
    links:
      - bioRxiv: https://doi.org/10.1101/2023.11.10.566670

---

{% assign urlParts = page.url | split: '/' %}
{% assign sectionId = urlParts[-1] %}

{% include atlas-dataset-info.html
    sectionId=sectionId
    pubData=page.data
    thumbnailDir=sectionId %}

## Contents
  * [__Data Access__: Instructions to access files on AWS](#data-access)
  * [__Viewing Images__: Tips for using Imaris Viewer](#viewing-images)
  * [__Contact__: Reach out with questions](#contact)

## Data Access
### Access the full 3D Melanoma dataset
All images at full resolution are stored and can be accessed through Amazon Web Services (AWS) S3.
AWS S3 bucket locations:

*s3://lsp-public-data/yapp-2023-3d-melanoma/Dataset1-LSP13626-invasive-margin.ims*

*s3://lsp-public-data/yapp-2023-3d-melanoma/Dataset1-LSP13626-melanoma-in-situ.ims*

To browse and download the data use either a graphical file transfer application that supports S3 such as CyberDuck, or the AWS CLI tools. A graphical tool may be more convenient but the CLI tools will likely offer higher download speeds.

### Cyberduck or Graphical File Transfer Instructions:

Make sure anonymous login is selected, either through using the following server information: s3://anonymous@yapp-2023-3d-melanoma.s3.amazonaws.com/ or make sure the anonymous login button is selected.

### AWS CLI Tips:
For users who wish to perform processing within AWS, note that the bucket is located in the us-east-1 region so any other resources must be instantiated in this same region.

Review your IAM permissions and add additional in-line policies, as needed. For example, use: aws s3 ls --no-sign-request s3://yapp-2023-3d-melanoma/data/. If you continue to experience issues using the CLI, please follow the instructions for using a GUI above or refer to AWS existing documentation.

## Viewing Images
Here are some tips for getting started viewing .ims files using Imaris Viewer: <br><br>
1. To view the .ims images, download the free Imaris Viewer at: [https://imaris.oxinst.com/imaris-viewer](https://imaris.oxinst.com/imaris-viewer) <br><br>
2. Open Imaris Viewer and, in the top left corner, select Surpass. Click and drag .ims file into Imaris Viewer.<br><br>

3. To view the channel/antibody list, select Edit > Image Properties.
  - Each channels' brightness, contrast, and color can be adjusted here.
  - Tick the box to show or hide a channel. 8 channels is the maximum number of simultaneously viewable channels.  
4. Image navigation:
    - To zoom in and out -> use the mouse wheel
    - To orbit around -> use the left mouse button
    - To pan around -> use the right mouse button

5. To switch to single plane viewing, select Slice in the top menu. Click on 3D View to return to 3D navigation mode.

## Contact

Email [tissue-atlas(at)hms.harvard.edu](mailto:tissue-atlas@hms.harvard.edu) with the subject line *"yapp-2023-3d-melanoma: Data Access"* if you experience issues accessing the above S3 buckets. Please include the steps you have already tried to help us troubleshoot.
