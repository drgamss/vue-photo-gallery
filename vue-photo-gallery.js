(function(){

// Each sub array in this main 'global_images_array' represents data for a single gallery: 
// 1. images_array - array of images and their relative paths.
// 2. thumbnail_image - if image not specified the thumbnail image will be the first image in images_array.
// 3. category - name of category
// 4. project_name - name of project
// You can have as many or as little galleries as you want. Just add/remove objects from the global_images_array.  
// Thats it, Nothing else is needed :-)


var global_images_array = [
  // first gallery object
  { images_array: ['images/bigcleansing.jpg', 'images/bigeye.jpg', 'images/bigfreechoice.jpg', 'images/bigminian.jpg', 'images/steps.jpg'],
    thumbnail_image: '',
    category: '1st Cotegory',
    project_name: '1st Project'},


    // second gallery object
  { images_array: ['images/sinai.jpg', 'images/tree.jpg', 'images/bigeye.jpg', 'images/bigfreechoice.jpg', 'images/bigminian.jpg'],
    thumbnail_image: '',  
    category: '2nd Category',
    project_name: '2nd Project'}, 


    // third gallery object       
  { images_array: ['images/bigeye.jpg', 'images/bigcleansing.jpg', 'images/bigfreechoice.jpg', 'images/tree.jpg', 'images/steps.jpg'],
    thumbnail_image: '',        
    category: '3rd Category',
    project_name: '3rd Project'},


    // fourth gallery object
  { images_array: ['images/bigfreechoice.jpg', 'images/tree.jpg', 'images/bigeye.jpg', 'images/steps.jpg', 'images/bigminian.jpg'],
    thumbnail_image: '',        
    category: '4th Category',
    project_name: '4th Project'}, 


    // fifth gallery object
  { images_array: ['images/steps.jpg', 'images/bigeye.jpg', 'images/connection.jpg', 'images/bigminian.jpg', 'images/tree.jpg'],
    thumbnail_image: '',        
    category: '5th Category',
    project_name: '5th Project'},


    // sixth gallery object
  { images_array: ['images/bigminian.jpg', 'images/bigcleansing.jpg', 'images/bigshin.jpg', 'images/bigfreechoice.jpg', 'images/steps.jpg'],
    thumbnail_image: '',        
    category: '6th Category',
    project_name: '6th Project'} ,


    // seventh gallery object
  { images_array: ['images/tree.jpg', 'images/bigcleansing.jpg', 'images/bigeye.jpg', 'images/bigfreechoice.jpg', 'images/steps.jpg'],
    thumbnail_image: 'images/bigmikve.jpg',        
    category: '7th Category',
    project_name: '7th Project'},


    // eigth gallery object
  { images_array: ['images/tree.jpg', 'images/bigmikve.jpg', 'images/bigshin.jpg', 'images/connection.jpg', 'images/steps.jpg'],
    thumbnail_image: 'images/connection.jpg',        
    category: '8th Category',
    project_name: '8th Project'},

  
    // ninth gallery object
  { images_array: ['images/tree.jpg', 'images/connection.jpg', 'images/bigeye.jpg', 'images/bigfreechoice.jpg', 'images/steps.jpg'],
    thumbnail_image: 'images/bigshin.jpg',        
    category: '9th Category',
    project_name: '9th Project'}                          
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
        showingFirstImage: function(){
            return this.images_array.indexOf(this.current_image) === 0;
        },
        showingLastImage: function(){
            return this.images_array.length === (this.images_array.indexOf(this.current_image) + 1);
        },
        goToFirstImage: function(){
            this.current_image = this.images_array[0];  
        },
        goToLastImage: function(){
            var next_index = this.images_array.length - 1;
            this.current_image = this.images_array[next_index];            
        },
        jumpForward: function(){
            var next_index = this.images_array.indexOf(this.current_image) + 1;
            this.current_image = this.images_array[next_index];             
        },
        jumpBack: function(){
            var next_index = this.images_array.indexOf(this.current_image) - 1;
            this.current_image = this.images_array[next_index];            
        },
        moveToPreviousImageClick: function(){
          if(this.showingFirstImage()){              
              this.goToLastImage() 
          } else {              
                this.jumpBack() 
          }     
        },    
        moveToNextImageClick: function(){
          if(this.showingLastImage()){            
                this.goToFirstImage()
          } else {
              this.jumpForward()          
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


