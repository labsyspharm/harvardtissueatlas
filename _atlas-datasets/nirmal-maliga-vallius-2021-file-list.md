### Download the primary data

The full dataset is available through Amazon Web Services S3. The images and metadata will be available in the bucket at the following location:

```
s3://hta-melatlas-1/data/
```
The Laboratory of Systems Pharmacology at Harvard Medical School will commit to
making the full dataset available through S3 while the Human Tumor Atlas
Network's Data Coordination Center exploring options to host the data.

The following table contains summary biospecimen and file metadata.

#### Whole-slide images (OME-TIFF) and spatial feature tables (CSV)

|FIELD1        |Level 2 WSI (OME-TIFF)   |File size (WSI)|Spatial feature tables (CSV)|File size (feature table)|
|--------------|-------------------------|---------------|----------------------------|-------------------------|
|MEL01-1-0-ROI1|MEL01-1-0-HE-ROI1.ome.tif|15 GB          |                            |                         |
|MEL01-1-1     |MEL01-1-1.ome.tif        |195 GB         |                            |                         |
|MEL01-1-3     |MEL01-1-3.ome.tif        |98 GB          |MEL01-1-3-features.zip      |335 MB                   |
|MEL01-1-4     |MEL01-1-4.ome.tif        |66 GB          |MEL01-1-4-features.zip      |200 MB                   |
|MEL01-1-5     |MEL01-1-5.ome.tif        |129 GB         |MEL01-1-5-features.zip      |280 MB                   |
|MEL01-1-6     |MEL01-1-6.ome.tif        |174 GB         |MEL01-1-6-features.zip      |290 MB                   |
|MEL01-2-0-ROI1|MEL01-2-0-HE-ROI1.ome.tif|13 GB          |                            |                         |
|MEL01-2-1     |MEL01-2-1.ome.tif        |163 GB         |MEL01-2-1-features.zip      |82 MB                    |
|MEL01-3-0-ROI1|MEL01-3-0-HE-ROI1.ome.tif|17 GB          |                            |                         |
|MEL01-3-1     |MEL01-3-1.ome.tif        |230 GB         |MEL01-3-1-features.zip      |280 MB                   |
|MEL02-1-0-ROI1|MEL02-1-0-HE-ROI1.ome.tif|0.5 GB         |                            |                         |
|MEL02-1-0-ROI2|MEL02-1-0-HE-ROI2.ome.tif|0.4 GB         |                            |                         |
|MEL02-1-1     |MEL02-1-1.ome.tif        |19 GB          |MEL02-1-1-features.zip      |16 MB                    |
|MEL03-1-0-ROI1|MEL03-1-0-HE-ROI1.ome.tif|6 GB           |                            |                         |
|MEL03-1-0-ROI2|MEL03-1-0-HE-ROI2.ome.tif|5 GB           |                            |                         |
|MEL03-1-1     |MEL03-1-1.ome.tif        |189 GB         |MEL03-1-1-features.zip      |160 MB                   |
|MEL04-1-0-ROI1|MEL04-1-0-HE-ROI1.ome.tif|5 GB           |                            |                         |
|MEL04-1-0-ROI2|MEL04-1-0-HE-ROI2.ome.tif|4 GB           |                            |                         |
|MEL04-1-1     |MEL04-1-1.ome.tif        |179 GB         |MEL04-1-1-features.zip      |61 MB                    |
|MEL05-1-0-ROI1|MEL05-1-0-HE-ROI1.ome.tif|0.4 GB         |                            |                         |
|MEL05-1-0-ROI2|MEL05-1-0-HE-ROI2.ome.tif|0.6 GB         |                            |                         |
|MEL05-1-1     |MEL05-1-1.ome.tif        |34 GB          |MEL05-1-1-features.zip      |17 MB                    |
|MEL06-1-0-ROI1|MEL06-1-0-HE-ROI1.ome.tif|17 GB          |                            |                         |
|MEL06-1-1     |MEL06-1-1.ome.tif        |220 GB         |MEL06-1-1-features.zip      |299 MB                   |
|MEL07-1-0-ROI1|MEL07-1-0-HE-ROI1.ome.tif|4 GB           |                            |                         |
|MEL07-1-0-ROI2|MEL07-1-0-HE-ROI2.ome.tif|3 GB           |                            |                         |
|MEL07-1-1     |MEL07-1-1.ome.tif        |122 GB         |MEL07-1-1-features.zip      |41 MB                    |
|MEL08-1-0-ROI1|MEL08-1-0-HE-ROI1.ome.tif|1 GB           |                            |                         |
|MEL08-1-0-ROI2|MEL08-1-0-HE-ROI2.ome.tif|0.9 GB         |                            |                         |
|MEL08-1-1     |MEL08-1-1.ome.tif        |40 GB          |MEL08-1-1-features.zip      |29 MB                    |
|MEL09-1-0-ROI1|MEL09-1-0-HE-ROI1.ome.tif|0.8 GB         |                            |                         |
|MEL09-1-0-ROI2|MEL09-1-0-HE-ROI2.ome.tif|0.6 GB         |                            |                         |
|MEL09-1-1     |MEL09-1-1.ome.tif        |32 GB          |MEL09-1-1-features.zip      |6 MB                     |
|MEL10-1-0-ROI1|MEL10-1-0-HE-ROI1.ome.tif|0.5 GB         |                            |                         |
|MEL10-1-0-ROI2|MEL10-1-0-HE-ROI2.ome.tif|0.6 GB         |                            |                         |
|MEL10-1-1     |MEL10-1-1.ome.tif        |34 GB          |MEL10-1-1-features.zip      |12 MB                    |
|MEL11-1-0-ROI1|MEL11-1-0-HE-ROI1.ome.tif|2 GB           |                            |                         |
|MEL11-1-0-ROI2|MEL11-1-0-HE-ROI2.ome.tif|2 GB           |                            |                         |
|MEL11-1-1     |MEL11-1-1.ome.tif        |79 GB          |MEL11-1-1-features.zip      |21 MB                    |
|MEL12-1-0-ROI1|MEL12-1-0-HE-ROI1.ome.tif|2 GB           |                            |                         |
|MEL12-1-0-ROI2|MEL12-1-0-HE-ROI2.ome.tif|1 GB           |                            |                         |
|MEL12-1-1     |MEL12-1-1.ome.tif        |56 GB          |MEL12-1-1-features.zip      |14 MB                    |
|MEL13-1-0-ROI1|MEL13-1-0-HE-ROI1.ome.tif|4 GB           |                            |                         |
|MEL13-1-0-ROI2|MEL13-1-0-HE-ROI2.ome.tif|3 GB           |                            |                         |
|MEL13-1-1     |MEL13-1-1.ome.tif        |129 GB         |MEL13-1-1-features.zip      |46 MB                    |
|MEL13-2-0-ROI1|MEL13-2-0-HE-ROI1.ome.tif|4 GB           |                            |                         |
|MEL13-2-0-ROI2|MEL13-2-0-HE-ROI2.ome.tif|3 GB           |                            |                         |
|MEL13-2-1     |MEL13-2-1.ome.tif        |121 GB         |MEL13-2-1-features.zip      |36 MB                    |

#### 3D high-resolution images

|FIELD1         |3D image file          |File size|
|---------------|-----------------------|---------|
|MEL01-1-4-3D-1 |MEL01-1-4-3D-1.ome.tif |5 GB     |
|MEL01-1-4-3D-10|MEL01-1-4-3D-10.ome.tif|5 GB     |
|MEL01-1-4-3D-11|MEL01-1-4-3D-11.ome.tif|5 GB     |
|MEL01-1-4-3D-12|MEL01-1-4-3D-12.ome.tif|4 GB     |
|MEL01-1-4-3D-13|MEL01-1-4-3D-13.ome.tif|5 GB     |
|MEL01-1-4-3D-14|MEL01-1-4-3D-14.ome.tif|5 GB     |
|MEL01-1-4-3D-15|MEL01-1-4-3D-15.ome.tif|5 GB     |
|MEL01-1-4-3D-16|MEL01-1-4-3D-16.ome.tif|5 GB     |
|MEL01-1-4-3D-17|MEL01-1-4-3D-17.ome.tif|5 GB     |
|MEL01-1-4-3D-18|MEL01-1-4-3D-18.ome.tif|5 GB     |
|MEL01-1-4-3D-19|MEL01-1-4-3D-19.ome.tif|8 GB     |
|MEL01-1-4-3D-2 |MEL01-1-4-3D-2.ome.tif |5 GB     |
|MEL01-1-4-3D-20|MEL01-1-4-3D-20.ome.tif|5 GB     |
|MEL01-1-4-3D-21|MEL01-1-4-3D-21.ome.tif|5 GB     |
|MEL01-1-4-3D-22|MEL01-1-4-3D-22.ome.tif|5 GB     |
|MEL01-1-4-3D-23|MEL01-1-4-3D-23.ome.tif|4 GB     |
|MEL01-1-4-3D-24|MEL01-1-4-3D-24.ome.tif|5 GB     |
|MEL01-1-4-3D-25|MEL01-1-4-3D-25.ome.tif|5 GB     |
|MEL01-1-4-3D-26|MEL01-1-4-3D-26.ome.tif|5 GB     |
|MEL01-1-4-3D-27|MEL01-1-4-3D-27.ome.tif|5 GB     |
|MEL01-1-4-3D-28|MEL01-1-4-3D-28.ome.tif|4 GB     |
|MEL01-1-4-3D-29|MEL01-1-4-3D-29.ome.tif|4 GB     |
|MEL01-1-4-3D-3 |MEL01-1-4-3D-3.ome.tif |5 GB     |
|MEL01-1-4-3D-30|MEL01-1-4-3D-30.ome.tif|5 GB     |
|MEL01-1-4-3D-31|MEL01-1-4-3D-31.ome.tif|4 GB     |
|MEL01-1-4-3D-32|MEL01-1-4-3D-32.ome.tif|5 GB     |
|MEL01-1-4-3D-33|MEL01-1-4-3D-33.ome.tif|4 GB     |
|MEL01-1-4-3D-34|MEL01-1-4-3D-34.ome.tif|4 GB     |
|MEL01-1-4-3D-35|MEL01-1-4-3D-35.ome.tif|4 GB     |
|MEL01-1-4-3D-36|MEL01-1-4-3D-36.ome.tif|4 GB     |
|MEL01-1-4-3D-37|MEL01-1-4-3D-37.ome.tif|4 GB     |
|MEL01-1-4-3D-38|MEL01-1-4-3D-38.ome.tif|4 GB     |
|MEL01-1-4-3D-39|MEL01-1-4-3D-39.ome.tif|4 GB     |
|MEL01-1-4-3D-4 |MEL01-1-4-3D-4.ome.tif |5 GB     |
|MEL01-1-4-3D-40|MEL01-1-4-3D-40.ome.tif|6 GB     |
|MEL01-1-4-3D-41|MEL01-1-4-3D-41.ome.tif|4 GB     |
|MEL01-1-4-3D-42|MEL01-1-4-3D-42.ome.tif|4 GB     |
|MEL01-1-4-3D-5 |MEL01-1-4-3D-5.ome.tif |5 GB     |
|MEL01-1-4-3D-6 |MEL01-1-4-3D-6.ome.tif |5 GB     |
|MEL01-1-4-3D-7 |MEL01-1-4-3D-7.ome.tif |5 GB     |
|MEL01-1-4-3D-8 |MEL01-1-4-3D-8.ome.tif |5 GB     |
|MEL01-1-4-3D-9 |MEL01-1-4-3D-9.ome.tif |4 GB     |
