import { getRandomInt } from "./utils.js";

export function createPhotoObjects() {
  const photos = [];
  for (let i = 1; i <= 25; i++) {
    const commentCount = getRandomInt(0, 30);
    const photo = {
      id: i,
      url: `photos/${i}.jpg`,
      description: `Описание фотографии номер ${i}: здесь можно увидеть что-то интересное!`,
      likes: getRandomInt(15, 200),
      comments: generateComments(i, commentCount),
    };
    photos.push(photo);
  }
  return photos;
}
