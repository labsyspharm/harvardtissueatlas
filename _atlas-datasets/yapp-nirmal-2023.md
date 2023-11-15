---
layout: secondary
title: Data
section_id: data

data:
  publication:
    title: Multiplexed 3D analysis of cell plasticity and immune niches in melanoma
    authors: 'Yapp C, Nirmal AJ, Zhou F, Maliga Z, Llopis PM, Murphy GF, Lian CG, Danuser G, Santagata S, Sorger PK'

---

{% assign urlParts = page.url | split: '/' %}
{% assign sectionId = urlParts[-1] %}

{% include atlas-dataset-info.html
    sectionId=sectionId
    pubData=page.data
    thumbnailDir=sectionId %}


## Data Access

### Access the full 3D Melanoma dataset

All images at full resolution are stored and can be accessed through Amazon Web Services (AWS) S3.
AWS S3 bucket locations:

s3://lsp-public-data/yapp-2023-3d-melanoma/Dataset1-LSP13626-invasive-margin.ims

s3://lsp-public-data/yapp-2023-3d-melanoma/Dataset1-LSP13626-melanoma-in-situ.ims

To browse and download the data use either a graphical file transfer application that supports S3 such as CyberDuck, or the AWS CLI tools. A graphical tool may be more convenient but the CLI tools will likely offer higher download speeds.

### Cyberduck or Graphical File Transfer Instructions:

Make sure anonymous login is selected, either through using the following server information: s3://anonymous@yapp-2023-3d-melanoma.s3.amazonaws.com/ or make sure the anonymous login button is selected.

### AWS CLI Tip:
For users who wish to perform processing within AWS, note that the bucket is located in the us-east-1 region so any other resources must be instantiated in this same region.

Review your IAM permissions and add additional in-line policies, as needed. For example, use: aws s3 ls --no-sign-request s3://yapp-2023-3d-melanoma/data/. If you continue to experience issues using the CLI, please follow the instructions for using a GUI above or refer to AWS existing documentation.

## Contact

Email [tissue-atlas(at)hms.harvard.edu](mailto:tissue-atlas@hms.harvard.edu) with the subject line *"yapp-2023-3d-melanoma: Data Access"* if you experience issues accessing the above S3 buckets. Please include the steps you have already tried to help us troubleshoot.
