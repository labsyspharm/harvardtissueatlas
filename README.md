# Harvard Tissue Atlas

This project contains the source files for the Harvard Tissue Atlas website.  The site is built using Jekyll, and is structured such that it can be rendered directly in GitHub to display within their GitHub Pages site hosting service.

## Structural Overview

The site (as currently stands) is comprised of 6 Collections:
- **pages** - These provide the content for the top-level pages of the website.  Pages are gathered within the collection for organizational purposes, so that the source files are not left 'loose' at the root of the site.
- **datasets** - These entries provide the source content for the items in the *Data* section of the website, as well as the *Featured Data* module on the homepage.
- **projects** - These provide the content for the *Projects* section of the website.
- **publications** - These provide the content for the *Publications* section of the website. At a minimum, entries should contain front matter that can be used to populate the publication list on the Publications landing page.  They can also contain body content, which can then be displayed as a standalone summary page for the publication.
- **people** - These entries provide the source content for the items in the *People* section of the website.  No standalone pages are build for these items, but body content is displayed within the People landing page list.
- **graphics** - These entries are used whenever a graphic with captioning needs to be displayed.  Each item in the graphics collection has a title assigned, an image, and then body copy which can be marked up as needed, and will then be rendered out within a `<figure>` / `<figcaption>` HTML structure.

## Image Processing

The site makes use of the [imgix](https://www.imgix.com/) image processing service.  This means that in most cases, the author can upload non-sized images, and the sizing will be managed automatically for them.  The exception to this is if an image is specified directly in the body content of a page, without the use of a *graphic* entry.  In those cases, care should be taken to ensure the image is optimized for web delivery.

## Data Files

The site currently makes use of three data files (contained in the *_data* directory), which can be edited as needed as the site grows over time:
- **menus.yml** - This contains the structure for the main site navigation. Note the use of the *section_id* value.  This is used to trigger menu highlighting for sub-pages within a given section. Also note the use of the *children* attribute, which is used to specify submenus for a given top-level section. If a top-level menu item is not actually a link, but rather just a container label, simply provide an empty string for the url value. For example, here, the 'About' section is simply a top-level label/container for the 'Projects' and 'People' pages below it:
    ```yaml
    main:
    - name: "About"
        section_id: about
        url: ""
        target: ""
        children:
        - name: "Projects"
            url: "/projects"
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

## Collection Details

Below is information about the front matter options for each of the site's collections:

### pages ###
- **title** - The page title (used for SEO purposes)
- **permalink** - The path to the page
- **section_id** - Maps to the *section_id* values found in the *menus.yml* file
- **layout** - Specifies the template for the page (generally should not need to change)
- **wide_container** (boolean) - If used, specifies whether to render the content in a wider content container.

### datasets ###
- **title** - The title of the dataset entry
- **image** - Path to the image used for the dataset card.  Images should be placed in the *images/datasets* directory for organizational purposes, and the path should be relative to the root *images* directory of the site (eg. 'datasets/my-image.jpg').  Sizing will be automatically applied.
- **date** - Date representing when the dataset was posted.  Can be adjusted as needed to move the entry higher or lower in its display order (newer items are listed first in the dataset lists)
- **featured** (boolean) - If *true*, will display this entry on the homepage
- **minerva_link** - Link to the associated Minerva page
- **info_link** - Link to the associated (off-site) info page
- **show_page_link** (boolean) - If *true*, will display a link to this entry's standalone summary page whereever a list of dataset entries is shown (eg homepage, Data landing page).  Content within the body of the entry will be displayed on this summary page.

### projects ###
- **title** - The title of the project entry
- **abstract** - Abstract for the project -- will be displayed on the Projects landing page
- **project_number** - Indicates the number of the project. This is used to order the projects on the Projects landing page, and is also used in labelling the projects there (ie. **Project 1**, **Project 2**, etc)
- **graphics** - A list referencing any graphics that should be displayed on the Projects landing page.  Graphic items should be specified simply by their entry name within the *_graphics* directory, for example:
    ```
    graphics:
    - 'project-graphic-1'
    - 'project-graphic-2'
    ``` 
    The graphics' images will be displayed in thumbnail form on the Projects landing page, and clicking them will open a modal window where the full-sized image is shown, along with any captioning information specified within the graphics' entries. Note that if a custom crop is desired for the thumbnail image, it can be provided via a `thumb` front matter value in the *graphics* entry.
- **related_links** - A list of links related to this entry.  Links should be specified in markdown notation.  Note that Kramdown markup is respected here, so opening links in a new tab can be done like so (note the *target* specification):
    ```
    related_links:
      - '[Link label](https://my-link.com){:target="_blank"}'
    ```
- **show_page_link** (boolean) - If *true*, will display a link to this entry's standalone summary page within the *Related Links* list.  Content within the body of the entry will be displayed on this summary page.

### publications ###
- **title** - The title of the article
- **contributors** - Contributors to the article -- will be displayed on the Publications landing page
- **publication** - Name of the publication
- **publication_link** - Link to the publication
- **image** - Path to the image used for the publication on the Publications landing page.  Images should be placed in the *images/publications* directory for organizational purposes, and the path should be relative to the root *images* directory of the site (eg. 'publications/my-image.jpg').  Sizing will be automatically applied.
- **group** - *key* value for the group that this publication is included in (as defined within the *_data/publications.yml* file).  Publications will be displayed within their associated group on the Publications landing page.
- **date** - Date representing when the publication was posted/published.  Note that newer items are listed first in the publications list.
- **minerva_link** - Link to the associated Minerva page
- **rxiv_link** - Link to the associated Rxiv page
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

## Page Content ##

For any pages that render out body content (eg. project summary pages), a few notes:

- **Graphics** - Any entry in the *graphics* collection can be embedded in a page using the following syntax:
    ```
    {% include graphic.html content='my-graphic-entry' %}
    ```
    This will display the graphic -- with its associated title and caption information -- inline in the page on mobile, and will 'float' the content to the right on desktop displays.
- **Video** - Vimeo video support is available via the 'vimeo' include file.  Usage is as follows:
    ```
    {% include vimeo.html id="158396727" autoplay=true muted=true time="1m" %}
    ```

    In the example above, we're indicating that the video should be muted and should autoplay, and that it should start at the 1 minute mark.  Note that some values can be overridden by the embed settings assigned on Vimeo's video configuration page (namely, `title`, `byline`, `color`, and `portrait`). 

    Availabe parameters include:

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
    | `title`       | true, false | false | Show the video's title.†

    † Value specified in the video's embed settings on site may override this.  
    ‡ Requires a **Plus** account or higher.

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
⚠️ **IMPORTANT:** If any changes are made to the javascript files - or if the dev workflow is used (even without js file changes) - be sure to run the build script before pushing updates to GitHub. This optimizes / minimizes the javascript bundle for production usage.  If you do not plan to make updates to the javascript files, there is no need to install the workflow files or to run the dev workflow.  If only using the local jekyll server (via `bundle exec jekyll serve`), there is no need to re-build the javascript before pushing files to GitHub.  All other site build processes (page rendering, Sass processing, etc) is handled by the GitHub Pages rendering system.