### Download the primary data

The full dataset is available through Amazon Web Services S3 using a "requester
pays" model. AWS charges $0.10/GB for downloading all or part of the data.  The
person downloading the data must have an AWS account and must email
tissue-atlas@hms.harvard.edu with the AWS account’s **AWS account ID** and
**canonical user ID** which may be found as detailed here:
https://docs.aws.amazon.com/general/latest/gr/acct-identifiers.html#FindingYourAccountIdentifiers.
We must receive **both** the  account ID and canonical user ID in order to grant
access to the S3 bucket containing the full dataset. After access is granted the
images and metadata will be available in the bucket at the following location:

```
s3://wu-temko-maliga-2022
```

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

The Laboratory of Systems Pharmacology at Harvard Medical School will commit to
making the full dataset available through S3 while the Human Tumor Atlas
Network's Data Coordination Center exploring options to host the data.
