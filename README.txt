In order for the gallery to work the only file you need to edit is vue-photo-gallery.js.
You can have as many or as little galleries as you want. Just add/remove objects from the global_images_array.


Each sub array in the main 'global_images_array' on the top of the file represents data for a single gallery: 
1. images_array - array of images and their relative paths.
2. thumbnail_image - if image not specified the thumbnail image will be the first image in images_array.
3. category - name of category
4. project_name - name of project

* using the same image twice in the same gallery will break the code.
* dependencies - bootstrap.css, vue.js 2

ENJOY :-)
