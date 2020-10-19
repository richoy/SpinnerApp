const directory = './public/images/';
const path = require('path');
const fs = require('fs');

const Spinners = require('../models/spinner');
const CenterImage = require('../models/centerImage');

const HeaderFooter = require('../models/headerFooter');
/**
 * Method to remove the images that are not being used.
*/
module.exports = function removeUnusedImages() {

   let spinnersCurrentImages = [];

   // Check on Database for the current images
   Spinners.find({}).then((fields) =>{
       fields.forEach((element) =>{
           if( element.image.length > 0 ) {
               
               /**
                * If spinner field has image, it adds it to the array
                * and remove the path at the beginning
                */
               spinnersCurrentImages.push(element.image.slice(14));
           }
        });

        CenterImage.find({}).then(centerField => {
            centerField.forEach((element) =>{
                if( element.centerImage.length > 0 ) {

                    /**
                     * If CenterImage field has image, it adds it to the array
                     * and remove the path at the beginning
                     */
                    spinnersCurrentImages.push(element.centerImage.slice(14));
                }
            })

            HeaderFooter.find({}).then((headerfooter) => {
                headerfooter.forEach((element) => {
                    if (element.favicon.length > 0){
                        spinnersCurrentImages.push(element.favicon.slice(14));
                    }
                })


                /**
                * Verify if which images are currently being used
                * and remove the others
                */
                fs.readdir(directory, (err, files) => {
                    if (err) throw err;
                    files.forEach( (file) => {
                        let isCurrent = false;

                        spinnersCurrentImages.forEach((image) =>{
                            if( image === file ){
                                isCurrent = true;
                            }
                        })

                        if ( !isCurrent && !(file === '.gitkeep')){
                            fs.unlink(path.join(directory, file), err => {
                                if (err) throw err;
                            });
                        }
                    })
                });
            })

        });
    });
}