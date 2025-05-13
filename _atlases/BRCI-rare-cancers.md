---
date: 0003-02-01
name: Rare Cancer Atlas
summary: While all cancer diagnoses raise concerns and difficult questions for patients, their families, and their health care providers, rare cancers present additional challenges. Access to tumors and relevant samples for study is more limited, and commercial interest is lower because of decreased market size. [The Bertarelli Rare Cancer Initiative](https://brci.hms.harvard.edu/) supports advances in the detection, diagnosis, treatment, and prevention of rare cancers. Our vision is to build a world-class, highly interactive and collaborative hub for rare cancer research, clinical care advancement, advocacy and training, building upon the extensive and vibrant clinical and research communities across Harvard Medical School. Our long-term goal is to become an innovative world-wide initiative.
dataset: nirmal-maliga-vallius-2021
project-image: https://www.cycif.org/assets/img/pca-2019/3_cycif.jpg
grant: The Bertarelli Rare Cancer Initiative
grant-image: funding/nci-color.png
title: Rare Cancer Atlas
link: self
short-name: BRCI
---

While all cancer diagnoses raise concerns and difficult questions for patients, their families, and their health care providers, rare cancers present additional challenges. Access to tumors and relevant samples for study is more limited, and commercial interest is lower because of decreased market size. [The Bertarelli Rare Cancer Initiative](https://brci.hms.harvard.edu/) supports advances in the detection, diagnosis, treatment, and prevention of rare cancers. Our vision is to build a world-class, highly interactive and collaborative hub for rare cancer research, clinical care advancement, advocacy and training, building upon the extensive and vibrant clinical and research communities across Harvard Medical School. Our long-term goal is to become an innovative world-wide initiative.

## Narrated Minerva Stories
{% include narrated-minerva-description.md %}
{%
    assign stories = site.data-cards
    | where_exp: "item", "item.tags contains 'brci'"
    | where_exp: "item", "item.hide != true"
%}

{% assign dataCardArray = '' | split: '' %}
{% for n in stories %}
  {% if n.tags contains 'narrated' %}
    {% assign dataCardArray = dataCardArray | push: n %}
  {% endif %}
{% endfor %}

{% assign dataCardArraySort = dataCardArray | sort: 'date' | reverse %}
{% if dataCardArraySort.size > 0 %}
  {% include cards.html cards=dataCardArraySort %}
{% endif %}


### Funding
Research on rare cancers is supported by the [The Bertarelli Rare Cancer Initiative](https://brci.hms.harvard.edu/).
