(function(){

// Each sub array in this main 'global_images_array' represents data for a single gallery: 
// 1. images_array - array of images and their relative paths.
// 2. thumbnail_image - if image not specified the thumbnail image will be the first image in images_array.
// 3. category - name of category
// 4. project_name - name of project
// Thats it, Nothing else is needed :-)


var global_images_array = [
  // first gallery object
  { images_array: ['images/bigcleansing.jpg', 'images/bigeye.jpg', 'images/bigfreechoice.jpg', 'images/bigminian.jpg', 'images/bigtree.jpg'],
    thumbnail_image: '',
    category: 'First Cotegory',
    project_name: 'First Project'},


    // second gallery object
  { images_array: ['images/sinai.jpg', 'images/bigcleansing.jpg', 'images/bigeye.jpg', 'images/bigfreechoice.jpg', 'images/bigminian.jpg'],
    thumbnail_image: '',  
    category: 'Second Category',
    project_name: 'Second Project'}, 


    // third gallery object       
  { images_array: ['images/bigeye.jpg', 'images/bigcleansing.jpg', 'images/bigfreechoice.jpg', 'images/bigminian.jpg', 'images/bigtree.jpg'],
    thumbnail_image: '',        
    category: 'Third Category',
    project_name: 'Third Project'},


    // fourth gallery object
  { images_array: ['images/bigfreechoice.jpg', 'images/bigcleansing.jpg', 'images/bigeye.jpg', 'images/bigtree.jpg', 'images/bigminian.jpg'],
    thumbnail_image: '',        
    category: 'Fourth Category',
    project_name: 'Fourth Project'}, 


    // fifth gallery object
  { images_array: ['images/bigtree.jpg', 'images/bigeye.jpg', 'images/bigfreechoice.jpg', 'images/bigminian.jpg', 'images/bigcleansing.jpg'],
    thumbnail_image: '',        
    category: 'Fifth Category',
    project_name: 'Fifth Project'},


    // sixth gallery object
  { images_array: ['images/bigminian.jpg', 'images/bigcleansing.jpg', 'images/bigeye.jpg', 'images/bigfreechoice.jpg', 'images/bigtree.jpg'],
    thumbnail_image: '',        
    category: 'Sixth Category',
    project_name: 'Sixth Project'}           
];



// code under here is not needed to be touched unless you want to play around :-)

for(var i = 0; i < global_images_array.length; i++ ){
  global_images_array[i].array_index = i;
  global_images_array[i].thumbnail_image = global_images_array[i].thumbnail_image || global_images_array[i].images_array[0];
}


Vue.component('gallery-modal', {
  template: '#photo-gallery-template', 
  props: ['imageArray'], 
  data: function(){
    return {
      images_array: this.imageArray,
      current_image: this.imageArray[0]
    }
  },
  computed: {
    current_index: function(){
      return this.images_array.indexOf(this.current_image) + 1;
    },
    total: function(){
      return this.images_array.length;
    }
  },
  methods: {
    moveToPreviousImage: function(){
      if(this.images_array.indexOf(this.current_image) === 0){
          var next_index = this.images_array.length - 1;
          this.current_image = this.images_array[next_index]; 
      } else {
          var next_index = this.images_array.indexOf(this.current_image) - 1;
          this.current_image = this.images_array[next_index];            
      }     
    },    
    moveToNextImage: function(){
      if(this.images_array.length === (this.images_array.indexOf(this.current_image) + 1)){
          this.current_image = this.images_array[0];                            
      } else {
          var new_index = this.images_array.indexOf(this.current_image) + 1;
          this.current_image = this.images_array[new_index];           
      }
    },
    closeModal: function(){
      this.$emit('closemodal');
    }
  }  
})


// main vue instance

new Vue({
  el: '#root',
  data: {
    showModal: false,
    current_array_index: 0, 
    images_array: global_images_array            
  },

  methods: {
    showGalleryModal: function(index){
      // show modal and hide scrollbar
      this.showModal = true;
      document.body.style.overflow = 'hidden';
      // update current array index being shown.
      this.current_array_index = index;
    },
    closeModal: function(){
      // hide modal and bring back scrollbar.
      this.showModal = false;
      document.body.style.overflow = 'visible';
    }
  },
  computed: {
    current_array: function(){
      return this.images_array[this.current_array_index].images_array;
    }
  }
})


}());


