---
title: About CyCIF
permalink: /cycif-method

section_id: methods-software
layout: secondary
---

# Cyclic Immunofluorescence
{: .mb-0 }
### CyCIF: An iterative method for generating highly multiplexed images
{: .mb-5 }
### The CyCIF Workflow
{% include enlarge-image.html src='graphics/cycif-workflow.png' alt='Workflow overview is described in text below.' %}

### Experimental process
CyCIF is a multiplexed imaging method that uses cycles of staining, bleaching, and imaging to generate high-plex images. CyCIF can be applied to many sample types (*see [references](#selected-publications-using-cycif) below*). Here, we focus on using CyCIF with formalin-fixed, paraffin-embedded (FFPE) human tissue sections, known as tissue-based (t-) CyCIF.

In the **t-CyCIF** method, a tissue sample is first **pre-stained** with fluorescent secondary antibodies to block any background auto-fluorescence that may be present in the tissue. The sample is then **bleached** with hydrogen peroxide to inactivate the fluorophores. Next, the sample is **stained** with 1-4 primary antibodies that target proteins or molecules of interest, paired secondary antibodies, and a nuclear stain. After a few rinses, the sample is **imaged** using a fluorescence microscope.  

**Then the cycle begins again:** the sample is bleached, re-stained with new antibodies and a nuclear dye, and imaged again. 

Once the cycles of fluorescence imaging are complete, the slide can optionally be stained with **hematoxylin and eosin (H&E)**, a standard stain used in the clinic for diagnosing disease, and imaged once more with a bright-field microscope. 


### Extracting and analyzing spatial features
The images from each **CyCIF** cycle are then assembled into a high-plex whole slide image, processed into single-cell data, and quantified for spatial features using the open-source **[MCMICRO](https://www.mcmicro.org/) pipeline**. The single-cell data can be analyzed with tools like **[SCIMAP](https://www.scimap.xyz)**, then visualized and shared with the software **[Minerva](https://www.minerva.im)**. *Visit [Software](/software) to learn more.*

---
**Please cite as:** Lin J-R, Izar B, Wang S, Yapp C, Mei S, Shah PM, Santagata S, Sorger PK. [Highly multiplexed immunofluorescence imaging of human tissues and tumors using t-CyCIF and conventional optical microscopes](https://doi.org/10.7554/elife.31657). Elife. 2018 Jul 11;7. PMCID: PMC6075866.

**t-CyCIF Protocol**: [dx.doi.org/10.17504/protocols.io.5qpvorbndv4o/v2](https://dx.doi.org/10.17504/protocols.io.5qpvorbndv4o/v2)

<div class="row mb-4">
  <div class="col-md-7 mb-4">
    {% include vimeo-card.html id="848215164" title="t-CyCIF"%}
  </div>
</div>

---

### Selected Publications using CyCIF  
{: .mb-3 }
- **[Multiplexed 3D atlas of state transitions and immune interaction in colorectal cancer](https://doi.org/10.1016/j.cell.2022.12.028)**,  *Cell*, 2023
  - *Uses CyCIF images of many adjacent tissue sections to construct a 3D map of a colorectal tumor and extract previously unknown spatial relationships within the 3-dimensional tumor microenvironment.*  

- **[The spatial landscape of progression and immunoediting in primary melanoma at single-cell resolution](https://doi.org/10.1158/2159-8290.CD-21-1357)**, *Cancer Discovery,* 2022 
  - *Integrates CyCIF imaging of melanoma samples, high-resolution 3D CyCIF imaging of small ROIs, and microregional transcriptomics to reveal a sequence of progressive changes that occur in the tumor microenvironment as early-stage pre-cancers develop into invasive tumors.* 

- **[Lymphocyte networks are dynamic cellular communities in the immunoregulatory landscape of lung adenocarcinoma](https://doi.org/10.1016/j.ccell.2023.03.015)**, *Cancer Cell*, 2023. 
  - *Uses CyCIF images of mouse and human lung tumors to observe the formation of T and B cell networks, termed “lymphonets.” These lymphonets contain progenitor T cells and gain cytotoxic T cells after immunotherapy.*

- **[Immune Profiling of Dermatologic Adverse Events from Checkpoint Blockade using Tissue Cyclic Immunofluorescence: A Pilot Study](https://doi.org/10.1016/j.jid.2024.01.024)**, *Journal of Investigative Dermatology*, 2024
  - *CyCIF profiling of inflammatory skin conditions, with comparison of immune infiltration as quantified from CyCIF versus the standard clinical assessment.*

- **[Phase II Study of Eribulin plus Pembrolizumab in Metastatic Soft Tissue Sarcomas: Clinical Outcomes and Biological Correlates](https://doi.org/10.1158/1078-0432.ccr-23-2250)**, *Clinical  Cancer Research*, 2024 
  - *CyCIF was used to assess the spatial arrangement of PD1-PDL1 in clinical samples from liposarcoma patients with either early progression or durable disease.*

- **[Qualification of a multiplexed tissue imaging assay and detection of novel patterns of HER2 heterogeneity in breast cancer](https://doi.org/10.1038/s41523-023-00605-3)**, *NPJ Breast Cancer*, 2024
  - *Establishes a set of CyCIF-compatible antibodies that have been rigorously compared to the clinical immunohistochemistry standard antibodies. Uses this set to assess heterogeneity in human breast cancer specimens.*

- **[Sequential apoptotic and multiplexed proteomic evaluation of single cancer cells](https://doi.org/10.1126/sciadv.adg4128)**, *Science Advances*, 2023 
  - *CyCIF imaging of fixed *in vitro* cells after BH3 profiling.*

- **[Highly multiplexed imaging of single cells using a high-throughput cyclic immunofluorescence method](https://doi.org/10.1038/ncomms9390)**, *Nature Communications*, 2015 
  - *Describes a CyCIF method for plated, cultured cells (p-CyCIF).* 

- **[Cyclic immunofluorescence (CycIF), a highly multiplexed method for single-cell imaging](https://doi.org/10.1002/cpch.14)**, *Curr Protoc Chem Biol*, 2016 
  - *Describes the CyCIF protocol for plated, cultured cells (p-CyCIF).* 

_**Please visit [Publications](/publications/) for a more complete list of Harvard Tissue Atlas Publications.**_

