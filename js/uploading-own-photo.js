import {imgUploadPreview} from './photo-editing-scale.js';
import {inputUploadFile} from './sending-data.js';
import {TYPES_UPLOADED_FILES} from './const/const.js';

inputUploadFile.addEventListener('change', () => {
  const file = inputUploadFile.files[0];
  const fileName = file.name.toLowerCase();
  const coincidence = TYPES_UPLOADED_FILES.some((it) => fileName.endsWith(it));
  if (coincidence) {
    imgUploadPreview.querySelector('img').src = URL.createObjectURL(file);
  }
});
