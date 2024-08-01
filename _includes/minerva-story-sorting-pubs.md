{% assign dataCardArray = '' | split: '' %}
{% for n in stories %}
  {% if n.tags contains 'narrated' %}
    {% assign dataCardArray = dataCardArray | push: n %}
  {% endif %}
{% endfor %}

{% if dataCardArray.size > 0 %}
  {% include narrated-minerva-description.md %}
  {% include cards.html cards=dataCardArray %} 
{% endif %}



{% assign dataCardArray = '' | split: '' %}
{% for n in stories %}
  {% if n.tags contains 'curated' %}
    {% assign dataCardArray = dataCardArray | push: n %}
  {% endif %}
{% endfor %}

{% if dataCardArray.size > 0 %}
  {% include curated-minerva-description.md %} 
  {% include cards.html cards=dataCardArray %}
{% endif %}



{% assign dataCardArray = '' | split: '' %}
{% for n in stories %}
  {% if n.tags contains 'auto' %}
    {% assign dataCardArray = dataCardArray | push: n %}
  {% endif %}
{% endfor %}

{% if dataCardArray.size > 0 %}
  {% include auto-minerva-description.md %} 
  {% include cards.html cards=dataCardArray %}
{% endif %}