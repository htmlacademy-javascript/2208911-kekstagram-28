import {uploadPreview} from './photo-editing-scale.js';
import {inputUploadFile} from './sending-data.js';
import {TYPES} from './const/const.js';

inputUploadFile.addEventListener('change', () => {
  const file = inputUploadFile.files[0];
  const fileName = file.name.toLowerCase();
  const coincidence = TYPES.some((it) => fileName.endsWith(it));

  if (coincidence) {
    uploadPreview.querySelector('img').src = URL.createObjectURL(file);
  }
});
