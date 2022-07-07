### Download the primary data
Each folder corresponds to a patient sample (N). The following files are available for each patient and are located on [Synapse (synID syn32529019)](https://www.synapse.org/#!Synapse:syn32529019/wiki/618223) or on Amazon Web Services (AWS).

Files available through AWS S3 are made available using a “requester pays” model. The person downloading the data must have an AWS account, and AWS will charge the user's account $0.10/GB for downloading all or part of the data. Images and metadata are available in the bucket at the following location: s3://wu-temko-maliga-2022

|File Type     | Description                                                                        | Location|
|--------      | ------------ ----------------------------------------------------------------------|---------|
|N.ome.tif	   | Stitched multiplex CyCIF image pyramid in ome.tif format                           | AWS     |
|N_HE.vsi	     | Hematoxylin and Eosin stained image of adjacent FFPE tissue section in .vsi format | AWS     |
|\_N\_HE\_/    | folder: raw image data accompanying .vsi file                                      | AWS     |
|markers.csv   | list of all markers in ome.tif image                                               | Synapse |
|N.csv         | single-cell feature table, including intensity data for all channels               | Synapse |
|N_ROI.csv     | X and Y coordinates for histologically annotated regions in CyCIF and H&E images   | Synapse |
|raw/          | folder of raw IF image data in .rcpnl format                                       | AWS     |
|segmentation/ |  folder of segmentation maps for tissue image in .tif format                       | AWS     |

<br>
**N.ome.tif**

|Patient | File Name       | Location| File size |
|------- | ----------------|---------|-----------|
|P132115 | P132115.ome.tif | AWS     | 90.6 GB   |
|P132630 | P132630.ome.tif | AWS     | 99.9 GB   |
|P132666 | P132666.ome.tif | AWS     | 123.1 GB  |
|P133537 | P133537.ome.tif | AWS     | 87.8 GB   |
|P136690 | P136690.ome.tif | AWS     | 56.5 GB   |
|P137591 | P137591.ome.tif | AWS     | 91.8 GB   |
|P137753 | P137753.ome.tif | AWS     | 144.4 GB  |
|P137757 | P137757.ome.tif | AWS     | 100.8 GB  |
|P137905 | P137905.ome.tif | AWS     | 132.4 GB  |
|P137941 | P137941.ome.tif | AWS     | 121.0 GB  |
|P137974 | P137974.ome.tif | AWS     | 134.6 GB  |
|P138007 | P138007.ome.tif | AWS     | 128.6 GB  |

<br>
**N_HE.vsi**

|Patient | File Name      | Location| File size|
|--------| ---------------|---------|----------|
|P132115 | P132115_HE.vsi | AWS     | 531.2 KB |
|P132630 | P132630_HE.vsi | AWS     | 845.8 KB |
|P132666 | P132666_HE.vsi | AWS     | 592.7 KB |
|P133537 | P133537_HE.vsi | AWS     | 948.9 KB |
|P136690 | P136690_HE.vsi | AWS     | 866.2 KB |
|P137591 | P137591_HE.vsi | AWS     | 625.6 KB |
|P137753 | P137753_HE.vsi | AWS     | 540.9 KB |
|P137757 | P137757_HE.vsi | AWS     | 742.2 KB |
|P137905 | P137905_HE.vsi | AWS     | 685.5 KB |
|P137941 | P137941_HE.vsi | AWS     | 683.5 KB |
|P137974 | P137974_HE.vsi | AWS     | 636.0 KB |
|P138007 | P138007_HE.vsi | AWS     | 678.0 KB |

<br>
**\_N\_HE\_/**

|Patient | File Name   | Location| File size|
|------- | ------------|---------|----------|
|P132115 | frame_t.ets | AWS     | 928.7 MB |
|P132630 | frame_t.ets | AWS     | 1.3 GB   |
|P132666 | frame_t.ets | AWS     | 1.5 GB   |
|P133537 | frame_t.ets | AWS     | 980.1 MB |
|P136690 | frame_t.ets | AWS     | 792.1 MB |
|P137591 | frame_t.ets | AWS     | 1.1 GB   |
|P137753 | frame_t.ets | AWS     | 1.5 GB   |
|P137757 | frame_t.ets | AWS     | 1.6 GB   |
|P137905 | frame_t.ets | AWS     | 1.4 GB   |
|P137941 | frame_t.ets | AWS     | 1.8 GB   |
|P137974 | frame_t.ets | AWS     | 1.6 GB   |
|P138007 | frame_t.ets | AWS     | 2.0 GB   |

<br>
**markers.csv**

|Patient | File Name   | Synapse ID  | File size|
|------- | ----------- |------------ |----------|
|P132115 | markers.csv | syn32563757 | 530 bytes|
|P132630 | markers.csv | syn32563890 | 579 bytes|
|P132666 | markers.csv | syn32564039 | 530 bytes|
|P133537 | markers.csv | syn32564369 | 579 bytes|
|P136690 | markers.csv | syn32564613 | 579 bytes|
|P137591 | markers.csv | syn32564701 | 530 bytes|
|P137753 | markers.csv | syn32565266 | 530 bytes|
|P137757 | markers.csv | syn32565460 | 437 bytes|
|P137905 | markers.csv | syn32565554 | 530 bytes|
|P137941 | markers.csv | syn32565759 | 530 bytes|
|P137974 | markers.csv | syn32566194 | 623 bytes|
|P138007 | markers.csv | syn32566617 | 623 bytes|

<br>
**N.csv**

|Patient | File Name   | Synapse ID | File size |
|------- | ------------|------------|-----------|
|P132115 | P132115.csv | syn32563869 | 624.7 MB |
|P132630 | P132630.csv | syn32564017 | 960.1 MB |
|P132666 | P132666.csv | syn32564305 | 1.107 GB |
|P133537 | P133537.csv | syn32564460 | 622.8 MB |
|P136690 | P136690.csv | syn32564683 | 503.3 MB |
|P137591 | P137591.csv | syn32564818 | 574.3 MB |
|P137753 | P137753.csv | syn32565424 | 1.064 GB |
|P137905 | P137905.csv | syn32565737 | 896.9 MB |
|P137757 | P137757.csv | syn32565509 | 529.4 MB |
|P137941 | P137941.csv | syn32566154 | 1.338 GB |
|P137974 | P137974.csv | syn32566607 | 1.073 GB |
|P138007 | P138007.csv | syn32566788 | 1.339 GB |

<br>
**N_ROI.csv**

|Patient | File Name       | Synapse ID  | File size|
|------- | ----------------|-------------|----------|
|P132115 | P132115_ROI.csv | syn32563870 | 2.2 KB   |
|P132630 | P132630_ROI.csv | syn32564019 | 4.5 KB   |
|P132666 | P132666_ROI.csv | syn32564307 | 2.6 KB   |
|P133537 | P133537_ROI.csv | syn32564462 | 3.2 KB   |
|P136690 | P136690_ROI.csv | syn32564685 | 3.7 KB   |
|P137591 | P137591_ROI.csv | syn32564821 | 3.5 KB   |
|P137753 | P137753_ROI.csv | syn32565425 | 2.9 KB   |
|P137757 | P137757_ROI.csv | syn32565511 | 1.5 KB   |
|P137905 | P137905_ROI.csv | syn32565738 | 2.3 KB   |
|P137941 | P137941_ROI.csv | syn32566155 | 1.5 KB   |
|P137974 | P137974_ROI.csv | syn32566609 | 2.5 KB   |
|P138007 | P138007_ROI.csv | syn32566789 | 2.1 KB   |

<br>
**raw**

|Patient | File Name | Location| File size|
|------- | --------- |---------|----------|
|P132115 | Scan_20190128_163651_01x4x00589.rcpnl | AWS | 6.1 GB
|P132115 │ Scan_20190129_143925_01x4x00589.rcpnl | AWS | 6.1 GB
P132115 │ Scan_20190130_143008_01x4x00589.rcpnl | AWS | 6.1 GB
P132115 │ Scan_20190131_135256_01x4x00589.rcpnl | AWS | 6.1 GB
P132115 │ Scan_20190204_140652_01x4x00589.rcpnl | AWS | 6.1 GB
P132115 │ Scan_20190205_144037_01x4x00589.rcpnl | AWS | 6.1 GB
P132115 │ Scan_20190206_150042_01x4x00589.rcpnl | AWS | 6.1 GB
P132115 │ Scan_20190207_135438_01x4x00589.rcpnl | AWS | 6.1 GB
P132115 │ Scan_20190208_125223_01x4x00589.rcpnl | AWS | 6.1 GB
P132115 │ Scan_20190211_140040_01x4x00589.rcpnl | AWS | 6.1 GB
P132115 │ Scan_20190212_123858_01x4x00589.rcpnl | AWS | 6.1 GB
P132630 | Scan_20190128_123249_01x4x00648.rcpnl | AWS | 6.7 GB
P132630 | Scan_20190129_123756_01x4x00648.rcpnl | AWS | 6.7 GB
P132630 | Scan_20190130_123659_01x4x00648.rcpnl | AWS | 6.7 GB
P132630 | Scan_20190131_105810_01x4x00648.rcpnl | AWS | 6.7 GB
P132630 | Scan_20190204_104801_01x4x00648.rcpnl | AWS | 6.7 GB
P132630 | Scan_20190205_120543_01x4x00648.rcpnl | AWS | 6.7 GB
P132630 | Scan_20190206_120522_01x4x00648.rcpnl | AWS | 6.7 GB
P132630 | Scan_20190207_110400_01x4x00648.rcpnl | AWS | 6.7 GB
P132630 | Scan_20190208_105934_01x4x00648.rcpnl | AWS | 6.7 GB
P132630 | Scan_20190211_113917_01x4x00648.rcpnl | AWS | 6.7 GB
P132630 | Scan_20190212_110025_01x4x00648.rcpnl | AWS | 6.7 GB
P132630 | Scan_20190213_104950_01x4x00648.rcpnl | AWS | 6.7 GB
P132630 | Scan_20190214_104246_01x4x00648.rcpnl | AWS | 6.7 GB
P132666	| Scan_20190205_145436_01x4x00816.rcpnl	| AWS	| 8.4 GB
P132666	| Scan_20190206_152040_01x4x00816.rcpnl |	AWS	| 8.4 GB
P132666	| Scan_20190207_141038_01x4x00816.rcpnl	| AWS	| 8.4 GB
P132666	| Scan_20190208_130634_01x4x00816.rcpnl	| AWS	| 8.4 GB
P132666	| Scan_20190211_141451_01x4x00816.rcpnl	| AWS	| 8.4 GB
P132666	| Scan_20190212_125322_01x4x00816.rcpnl	| AWS	| 8.4 GB
P132666	| Scan_20190213_134218_01x4x00816.rcpnl	| AWS	| 8.4 GB
P132666	| Scan_20190214_124628_01x4x00816.rcpnl	| AWS |	8.4 GB
P133537 |
P136690 |
P137591 |
P137753 |
P137757 |
P137905 |
P137941 |
P137974 |
P138007 |

<br>
**segmentation**

|Patient | File Name | Location| File size|
|------- | --------- |---------|----------|
P132115 │ cellMask.tif | AWS | 2.9 GB |
P132115 │ cellOutlines.tif | AWS | 2.9 GB |
P132115 │ cellRingMask.tif | 2.9 GB |
P132115 │ cellRingOutlines.tif | AWS | 2.9 GB |
P132115 │ cytoMask.tif | AWS | 2.9 GB |
P132115 │ cytoOutlines.tif | AWS | 2.9 GB |
P132115 │ cytoRingMask.tif | AWS | 2.9 GB |
P132115 │ cytoRingOutlines.tif | AWS | 2.9 GB |
P132115 │ nucleiMask.tif | AWS | 2.9 GB |
P132115 │ nucleiOutlines.tif | AWS | 2.9 GB |
P132115 │ nucleiRingMask.tif | AWS | 2.9 GB |
P132115 │ nucleiRingOutlines.tif | AWS | 2.9 GB |
P132630 | cellMask.tif | AWS | 3.2 GB
P132630 │ cellOutlines.tif | AWS | 3.2 GB
P132630 │ cellRingMask.tif | 3.2 GB
P132630 │ cellRingOutlines.tif | AWS | 3.2 GB
P132630 │ cytoMask.tif | AWS | 3.2 GB
P132630 │ cytoOutlines.tif | AWS | 3.2 GB
P132630 │ cytoRingMask.tif | AWS | 3.2 GB
P132630 │ cytoRingOutlines.tif | AWS | 3.2 GB
P132630 │ nucleiMask.tif | AWS | 3.2 GB
P132630 │ nucleiOutlines.tif | AWS | 3.2 GB
P132630 │ nucleiRingMask.tif | AWS | 3.2 GB
P132630 │ nucleiRingOutlines.tif | AWS | 3.2 GB
P132666 |
P133537 |
P136690 |
P137591 |
P137753 |
P137757 |
P137905 |
P137941 |
P137974 |
P138007 |


### About Accessing AWS Data

To browse and download the data use either a graphical file transfer application
that supports S3 such as [CyberDuck](https://cyberduck.io), or the [AWS CLI
tools](https://aws.amazon.com/cli/). A graphical tool may be more convenient but
the CLI tools will likely offer higher download speeds. Please refer to the
documentation for your chosen tool on how to sign in and enable access to
requester-pays buckets. There is unfortunately no web-browser-based mechanism
for accessing a requester-pays bucket. Keep in mind the download costs, which
will run over $200 for downloading one copy of the entire dataset. For users who
wish to perform processing within AWS to avoid transfer charges, note that the
bucket is located in the `us-east-1` region so any other resources must be
instantiated in this same region.
