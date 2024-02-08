# Harvard Tissue Atlas

This project contains the source files for the Harvard Tissue Atlas website.  The site is built using Jekyll, and is structured such that it can be rendered directly in GitHub to display within their GitHub Pages site hosting service.

## Structural Overview

The site (as currently stands) is comprised of 6 Collections:
- **pages** - These provide the content for the top-level pages of the website.  Pages are gathered within the collection for organizational purposes, so that the source files are not left 'loose' at the root of the site.
- **data-cards** - These entries provide the source content for the items in the *Data* section of the website, as well as the *Featured Data* module on the homepage.
- **atlases** - These provide the content for the *Atlases* section of the website.
- **publications** - These provide the content for the *Publications* section of the website. At a minimum, entries should contain front matter that can be used to populate the publication list on the Publications landing page.  They can also contain body content, which can then be displayed as a standalone summary page for the publication.
- **people** - These entries provide the source content for the items in the *People* section of the website.  No standalone pages are build for these items, but body content is displayed within the People landing page list.
- **graphics** - These entries are used whenever a graphic with captioning needs to be displayed.  Each item in the graphics collection has a title assigned, an image, and then body copy which can be marked up as needed, and will then be rendered out within a `<figure>` / `<figcaption>` HTML structure.

## Image Processing

The site makes use of the [imgix](https://www.imgix.com/) image processing service.  This means that in most cases, the author can upload non-sized images, and the sizing will be managed automatically for them.  The exception to this is if an image is specified directly in the body content of a page, without the use of a *graphic* entry.  In those cases, care should be taken to ensure the image is optimized for web delivery.

Note that the imgix service *can* also be used for images specified in the body of an entry by using the `site.imgbaseurl` property as a prefix for the file path.  This allows for using the imgix API on the image, which includes the ability to scale and crop.  For example:

```
![]({{ site.imgbaseurl }}images/general/image.jpg?w=500)
```
More information on the imgix API can be found [here](https://imgix.com/solutions/resizing-and-cropping).

## Data Files

The site currently makes use of four data files (contained in the *_data* directory), which can be edited as needed as the site grows over time:
- **menus.yml** - This contains the structure for the main site navigation. Note the use of the *section_id* value.  This is used to trigger menu highlighting for sub-pages within a given section. Also note the use of the *children* attribute, which is used to specify submenus for a given top-level section. If a top-level menu item is not actually a link, but rather just a container label, simply provide an empty string for the url value. For example, here, the 'About' section is simply a top-level label/container for the 'Atlases' and 'People' pages below it:
    ```yaml
    main:
    - name: "About"
        section_id: about
        url: ""
        target: ""
        children:
        - name: "Atlases"
            url: "/atlases"
            target: "_self"
        - name: "People"
            section_id: people
            url: "/people"
            target: "_self"
    - name: "Publications"
        section_id: publications
        url: "/publications"
        target: "_self"
    ...
    ```
- **people.yml** - The *people* entries are organized on the People landing page according to group.  The groups are specified in the ***people.yml*** file, and the *key* value is assigned to the entries in the *people* collection to form their group associations.
- **publications.yml** - The *publications* entries are grouped by their associated *groups* on the Publications landing page. The groups are specified in the ***publications.yml*** file, and the *key* value is assigned to the entries in the *publications* collection to form their group associations.
- **announcements.yml** - The 'News' and 'Publications & Software' modules on the homepage are managed via this file.  There are 2 arrays: *news_press* and *publications_software*, the entries of which are represented by 'cards' within each module.  Follow the structure provided within the file for additional entries, for example:
    ```yaml
    news_press:
    - title: "Data Deep Dive"
        author: "Caruso, C."
        year: 2022, April 20
        publication: "Harvard News"
        image: "news/targeting-immunosuppressive-macrophages.jpg"
        link: "https://hms.harvard.edu/news/data-deep-dive"
        label: News  # [News|Press Release]
        target: "_blank"  # [_self|_blank]
    ...

    publications_software:
    - title: "The spatial landscape of progression and immunoediting in primary melanoma at single cell resolution"
        description:
        author: "Nirmal, et al."
        year: 2022
        publication: "Cancer Discovery"
        image: "publications/the-spatial-landscape-of-progression-and-immunoediting-in-primary-melanoma-at-single-cell-resolution_v2.png"
        link: "https://doi.org/10.1158/2159-8290.CD-21-1357"
        label: Publication  # [Publication|Software|Method]
        target: "_blank"  # [_self|_blank]
        link2: # Optional - will be displayed below primary link 
        label2: # [Publication|Software|Method]
        target2: # [_self|_blank]
    ...
    ```
## Collection Details

Below is information about the front matter options for each of the site's collections:

### pages ###
- **title** - The page title (used for SEO purposes)
- **permalink** - The path to the page
- **section_id** - Maps to the *section_id* values found in the *menus.yml* file
- **layout** - Specifies the template for the page (generally should not need to change)
- **wide_container** (boolean) - If used, specifies whether to render the content in a wider content container.

### data-cards ###
- **title** - The title of the dataset entry
- **image** - Path to the image used for the dataset card.  Images should be placed in the *images/data-cards* directory for organizational purposes, and the path should be relative to the root *images* directory of the site (eg. 'data-cards/my-image.jpg').  Sizing will be automatically applied.
- **date** - Date representing when the dataset was posted.  Can be adjusted as needed to move the entry higher or lower in its display order (newer items are listed first in the dataset lists)
- **featured** (boolean) - If *true*, will display this entry on the homepage
- **minerva_link** - Link to the associated Minerva page
- **broad_portal_link** - Link to the associated Broad Single Cell Portal page
- **cbio_portal_link** - Link to the associated cBioPortal page
- **cellxgene_link** - Link to the associated cellxgene page
- **view_data_link** - Link to an associated data page (displays a 'View Data' button)
- **info_link** - Link to the associated (off-site) info page
- **show_page_link** (boolean) - If *true*, will display a link to this entry's standalone summary page whereever a list of dataset entries is shown (eg homepage, Data landing page).  Content within the body of the entry will be displayed on this summary page.
- **tags** (array) - List of tags that can be used to filter on when using the *cards.html* include file.


### funding ###
- **date** - Used to assist with content ordering on the page (will not be displayed to end users)
- **name** - The name of the organization
- **summary** - Description for the organization
- **project-image** - (not currently in use)
- **grant** - Name of the grant provided
- **grant-image** - Logo for the organization 
- **is-high-dpi** (boolean) - If true, system assumes the image is provided at 2x it's intended display size.  This allows for sharper display on high density (eg. Retina) displays.  As an example, if an image should be displayed at 120px in width, create an image that is 240px in width, and set this value to *true*. 
- **description** - (optional) Additional information.
- **show_page_link** (boolean) - If *true*, will display a link to this entry's standalone summary page whereever a list of dataset entries is shown (eg homepage, Data landing page).  Content within the body of the entry will be displayed on this summary page.
- **title** - N/A
- **link** - N/A
- **short-name** - N/A

### atlases ###
- **title** - The title of the atlas entry
- **name** - The name of the atlas entry -- will be displayed on the Atlases landing page
- **summary** - Abstract for the project -- will be visible by default on the Atlases landing page
- **dataset** - Page slug for associated Atlas Dataset entry
- **grant** - Grant information, displayed in the right-hand column on the Atlases landing page
- **grant-image** - Displays an image shown in the right-hand column on the Atlases landing page
- **project-image** - Used for the thumbnail shown on the Atlases landing page
- **link** - Where the *Explore Atlas* button on the Atlases landing page should link to. Use `self` to have the button link to a page generated from the content of the atlas entry.
- **redirect_to** - (Optional) If using an external URL for the `link` value, you can supply the same URL if you would like to prevent the Atlas detail page from being viewed if the user should have access to the page URL (they will instead be redirected to the provided link).
- **short-name** - (not currently in use)


### publications ###
- **title** - The title of the article
- **contributors** - Contributors to the article -- will be displayed on the Publications landing page
- **publication** - Name of the publication
- **publication_link** - Link to the publication
- **image** - Path to the image used for the publication on the Publications landing page.  Images should be placed in the *images/publications* directory for organizational purposes, and the path should be relative to the root *images* directory of the site (eg. 'publications/my-image.jpg').  Sizing will be automatically applied.
- **group** - *key* value for the group that this publication is included in (as defined within the *_data/publications.yml* file).  Publications will be displayed within their associated group on the Publications landing page.
- **date** - Date representing when the publication was posted/published.  Note that newer items are listed first in the publications list.
- **minerva_link** - Link to the associated Minerva page
- **dataset_link** - Link to the associated data set page
- **pubmed_link** - Link to PubMed page
- **rxiv_link** - Link to the associated Rxiv/preprint page (will be labelled as 'Preprint' for display)
- **pdf_link** - Link to an associated PDF file.  Note that the file can either be uploaded to the site -- in which case it should be placed in the *downloads* directory, and referenced via its path INCLUDING the directory name, eg. `downloads/my-file.pdf` -- or, a URL can be used here, pointing to a third-party location where the file can be accessed.
- **show_page_link** (boolean) - If *true*, will display a link to this entry's standalone summary page.  Content within the body of the entry will be displayed on this summary page.

### people ###
- **name** - The name of the individual.

    ⚠️**NOTE:** File names in the People collection should be structured like so:
    ```
    lastname-firstname.md
    ```
    This will ensure that individuals are listed in alphabetical order, per last name ordering.

- **positions** - A list of positions the individual holds
- **photo** - Path to the image used for the individual on the People landing page.  Images should be placed in the *images/people* directory for organizational purposes, and the path should be relative to the root *images* directory of the site (eg. 'people/my-image.jpg').  Sizing will be automatically applied.
- **group** - *key* value for the individual's group (as defined within the *_data/people.yml* file).  Individuals will be displayed within their associated group on the People landing page.
- **weight** - The sort order on the People page can also be modified via the *weight* property.  Smaller values will appear higher on the list.

### graphics ###
- **title** - The title of the graphic (will be displayed below the image)
- **image** - Path to the image used for the graphic.  Images should be placed in the *images/graphics* directory for organizational purposes, and the path should be relative to the root *images* directory of the site (eg. 'graphics/my-image.jpg').  Sizing will be automatically applied.
- **bordered** (boolean) - If *true*, will draw a border around the image

## Displaying Collection Data ##
Collection data is generally displayed within corresponding sections of the site (eg. the *publications* collection is displayed on the *Publications* page).  Collection entries can also be pulled into other pages of the site using some available *include* specifications:
- **Graphics** - Any entry in the *graphics* collection can be embedded in a page using the following syntax:
    ```
    {% include graphic.html content='my-graphic-entry' %}
    ```
    This will display the graphic -- with its associated title and caption information -- inline in the page on mobile, and will 'float' the content to the right on desktop displays.
- **Publications** - A list of any of the entries in the *publications* collection can be embedded in a page by providing either a comma-delineated string of publication filenames, or an array of publication objects.  For example:
    
    *List of filenames:*
    ```
    {% assign publicationList = 'my-publication-filename,my-other-publication-filename' %}

    {% include pub-list.html list=publicationList %}
    ```
    ***Or**, array of publications:*
    ```
    {% assign publicationArray = site.publications %}
    
    {% include pub-list.html publications=publicationArray %}
    ```
- **Data Cards** - A list of any of the entries in the *data-cards* collection can be embedded in a page by providing either a comma-delineated string of publication filenames, a tag to filter on, or an array of data-card objects.  For example:
    
    *List of filenames:*
    ```
    {% assign cardList = 'my-data-card-filename,my-other-data-card-filename' %}

    {% include cards.html list=cardList %}
    ```
    ***Or**, tag to filter on:*
    ```
    {% include cards.html tag='my-tag' %}
    ```
    ***Or**, array of data-cards:*
    ```
    {% assign dataCardArray = site.data-cards %}
    
    {% include cards.html cards=dataCardArray %}
    ```

## Page Content ##

For any pages that render out body content (eg. project summary pages), a few notes:

- **Image Alignment** - Images used in the body of our pages can be aligned left or right, and shown at 50% width on desktop, by using the `float-half-left` and `float-half-right` classes on the images.  For example:
    ```
    ![](/images/general/image.jpg){: .float-half-right }
    ```
- **Enlarge Image** - This gives the ability to 'float' an image to the left or right on desktop displays, with a 'Click to enlarge' CTA that opens the image at a larger size inside of a modal overlay.  Usage:
    ```
    {% include enlarge-image.html src='general/my-image.jpg' float='right' alt='' %}
    ```
- **Expand/Collapse** - Expand/collapse functionality can be added to blocks of content by making use of the `<details>` and `<summary>` HTML elements. Note that a custom value can be assigned to the expanded state of the summary button via a `data-collapse-label` attribute:
    ```
    <details>
        <summary data-collapse-label="I'm done">Expand</summary>
        ...
    </details>
    ```
    By default (if no value is provided), the label on the expanded button will be 'Collapse'.
- **Table Layouts** - Standard Markdown table formatting is supported, and tables will be automatically styled.  There is also an alternate table layout available, where each table record is specified and rendered out in its own block, with the label values displayed down the first column, with values of the record directly to the right (column 2). This is useful in tables with many columns, that would otherwise require horizontal scrolling.  To use the alternate format, specify a pipe-delineated string of labels, and then a separate pipe-delineated string of values for a single row/record. The *left-column-head-table.html* include is then used to render out the block:
    ```
    {% assign labels = "Heading 1 | Heading 2 | Heading 3" %}
    {% capture values %}
        Value 1 | Value 2 | Value 3
    {% endcapture %}
    {% include left-column-head-table.html labels=labels values=values %}
    ```
    **NOTE:** *capture* is used here to specify the *values* content, because it allows for syntax highlighting in the editor. *assign* can be used as well, but will not provide highlighting.
- **Video: Vimeo** - Vimeo video support is available via the *vimeo* include file.  Basic usage is as follows:
    ```
    {% include vimeo.html id="158396727" %}
    ```
    Sample usage with some additional parameters:
    ```
    {% include vimeo.html id="158396727" autoplay=true muted=true time="1m" %}
    ```

    In the example above, we're indicating that the video should be muted and should autoplay, and that it should start at the 1 minute mark.  Note that some values can be overridden by the embed settings assigned on Vimeo's video configuration page (namely, `showVimeoTitle`, `byline`, `color`, and `portrait`).

    Available parameters include:

    | Parameter  | Supported Values | Default Value | Description
    |:--------------|:------------|:------|:----------------------|
    | `autoplay`    | true, false | false | Automatically start playback of the video.<br>**Note:** May require `muted` to be set to `true`, depending on browser and device.
    | `byline`      | true, false | false | Show the author of the video (byline).†
    | `color`       | [hex value] | "00adef" (Vimeo blue) | Color of the video controls.†‡
    | `controls`    | true, false | true  | Hide all elements in the player (play bar, sharing buttons, etc) for a chromeless experience.‡
    | `loop`        | true, false | false | Play the video again when it reaches the end, infinitely.
    | `muted`       | true, false | false | Mute the audio on load (can be re-enabled by user, if controls are displayed).
    | `playsinline` | true, false | true  | Play video inline on mobile devices instead of automatically going into fullscreen mode.
    | `portrait`    | true, false | false | Show the author’s profile image (portrait).†
    | `speed`       | true, false | false | Show speed controls in the player.‡
    | `time`        | Time in minutes and/or seconds (for example, time="1m2s") | "0m" (Start of video) | Used to automatically begin playback at a specific point in time.
    | `texttrack`   | A lowercase language code and optionally the locale and type of text track. (examples: "en", "en-US", "en.captions", "en.subtitles") | false | Displays a given cc/subtitle track by default in the player (provided the cc/subtitle track is available).
    | `showVimeoTitle` | true, false | false | Show the video's title.†

    † Value specified in the video's embed settings on site may override this.  
    ‡ Requires a **Plus** account or higher.
- **Video: YouTube** - YouTube video support is available via the *youtube* include file.  Basic usage is as follows:
    ```
    {% include youtube.html id="8gWMytghieg" %}
    ```
    Sample usage with some additional parameters:
    ```
    {% include youtube.html id="8gWMytghieg" autoplay=true mute=true start="184" %}
    ```

    In the example above, we're indicating that the video should be muted and should autoplay, and that it should start at the 3 minute  4 second mark.

    Available parameters include:

    | Parameter  | Supported Values | Default Value | Description
    |:--------------|:------------|:------|:----------------------|
    | `autoplay`    | true, false | false | Automatically start playback of the video.<br>**Note:** May require `mute` to be set to `true`, depending on browser and device.
    | `color`       | [color name] | "white" | Color of the video controls. Options are "red" or "white".
    | `controls`    | true, false | true  | Show/hide player controls.
    | `loop`        | true, false | false | Play the video again when it reaches the end, infinitely.
    | `mute`        | true, false | false | Mute the audio on load (can be re-enabled by user, if controls are displayed).
    | `playsinline` | true, false | true  | Play video inline on mobile devices instead of automatically going into fullscreen mode.
    | `start`       | Time in seconds | "0" (Start of video) | Used to automatically begin playback at a specific point in time.
    | `cc_load_policy` | true, false | true | Whether to show closed captions
    | `iv_load_policy` | true, false | true | Whether to show annotations


- **Video Card** - The *video card* layout essentially wraps either the *vimeo* or *youtube* embed files (described above) in a card wrapper, with the title and description (optional) displayed below it, with a *Click to enlarge* link that opens the video in a modal overlay.  Note that all parameters available on the respective *vimeo* and *youtube* includes are also available on the video card includes. In additional, 2 other parameters are available:

    | Parameter     | Description
    |:--------------|:------------|
    | `title`       | The title of the video
    | `description` | Video description

    ***Vimeo Card***
    ```
    {% include vimeo-card.html id="158396727" title="My Video Title" description="A short description of this video." %}
    ```
    ***YouTube Card***
    ```
    {% include youtube-card.html id="8gWMytghieg" title="My Video Title" description="A short description of this video." %}
    ```
    Note that video cards are typically displayed within a grid context, with 2 cards per row on desktop displays.  The markup for this (using bootstrap's grid) is as follows:
    ```html
    <div class="row mb-4">
        <div class="col-md-6 mb-4">
            {% include vimeo-card.html id="679370096" title="My Video Title" %}
        </div>
        <div class="col-md-6 mb-4">
            {% include youtube-card.html id="8gWMytghieg" title="My Other Video Title" description="This video has a description." %}
        </div>
    </div>
    ```
- **Video Slider** - The *video slider* layout creates a carousel of videos, with a custom display card describing the content.  The slide expects an image, title, and video id, with an optional additional link that can be shown below the slide.

    | Parameter     | Description
    |:--------------|:------------|
    | `id`          | The ID of the video (Vimeo or YouTube)
    | `type`        | One of either 'vimeo' or 'youtube'
    | `title`       | The title of the video
    | `image`       | Image (typically a headshot) to be shown in the slide
    | `link`        | (Optional) Additional link shown below the slide
    | `label`       | (Optional) Label for the additional link
    

    The slider is comprised of the 3 includes:
    - video-slider-start.html
    - video-slider-slide.html (1 or more)
    - video-slider-end.html
    
    Usage example:
    ```liquid
    {% include video-slider-start.html %}
      {% include video-slide.html 
        id="865802218" 
        type="vimeo"
        title="Atlas Introduction with Dr. Sandro Santagata and Sarah Arena" 
        image="people/santagata-sandro.jpg"
        link="/projects/determinants-of-immune-activity-and-molecular-features-in-brca1-2-mutation-carriers"
        label="View Project"
      %}
      {% include video-slide.html 
        id="865802218" 
        type="vimeo"
        title="Breast Cancer Atlas with Dr. Joan Brugge" 
        image="people/brugge-joan.jpg"
        link="/projects/determinants-of-immune-activity-and-molecular-features-in-brca1-2-mutation-carriers"
        label="View Project"
      %}
    {% include video-slider-end.html %}


## Publishing Notes ##

To make updates to the site, you simply need to push git updates to the GitHub repository on the *master* branch.  You may also run a local version of the site for review purposes by cloning the git repo, and installing Jekyll (per the specifications in the Gemfile).  This can be done by running the following in the root project directory:

```
bundle install
```

Once the required files are installed, you can spin up the dev server via:

```
bundle exec jekyll serve
```

The site will then be available at [localhost:4000](http://localhost:4000)

## Developer Notes ##

If you would like to make updates to the javascript bundle, you will also need to install the packages specified in the package.json file.  This can be done via:

```
npm install
```
...or, if using Yarn:

```
yarn install
```
Once installation is complete, you can start up the development workflow like so:

```
npm run dev
```
...or, if using Yarn:

```
yarn dev
```

The development workflow includes a webpack setup for packaging the javascript files in *src/js* and placing them into the *assets/js* directory for use by the jekyll site.  Updates will be re-bundled automatically while the dev script is running.

When ready to generate a production build, ensure that the dev script has been stopped (CTRL+C) and then run the build script:

```
npm run build
```
...or, if using Yarn:

```
yarn build
```
⚠️ **IMPORTANT:** If any changes are made to the javascript files - or if the dev workflow is used (even without js file changes) - be sure to run the build script before pushing updates to GitHub. This optimizes / minimizes the javascript bundle for production usage.  If you do not plan to make updates to the javascript files, there is no need to install the workflow files or to run the dev workflow.  If only using the local jekyll server (via `bundle exec jekyll serve`), there is no need to re-build the javascript before pushing files to GitHub.  All other site build processes (page rendering, Sass processing, etc) is handled by the GitHub Pages rendering system.  Note that as of the initial site build, GitHub Pages uses Ruby version 2.7.4, and Jekyll 3.9.3.
