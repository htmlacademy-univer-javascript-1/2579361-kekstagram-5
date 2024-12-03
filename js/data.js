import { getRandomInt } from "./utils.js";

const commentsList = [
  "Всё отлично!",
  "В целом всё неплохо. Но не всё.",
  "Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.",
  "Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.",
  "Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.",
  "Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!",
];

const names = [
  "Анна",
  "Иван",
  "Мария",
  "Дмитрий",
  "Ольга",
  "Алексей",
  "Екатерина",
  "Сергей",
  "Елена",
  "Андрей",
  "Татьяна",
  "Михаил",
  "Юлия",
  "Павел",
  "Наталья",
  "Владимир",
  "Ксения",
  "Николай",
  "Ирина",
  "Александр",
];

function getRandomCommentMessage() {
  const selectedComments = [];
  const randomCount = getRandomInt(1, 2);

  while (selectedComments.length < randomCount) {
    const randomIndex = getRandomInt(0, commentsList.length - 1);
    const comment = commentsList[randomIndex];
    if (!selectedComments.includes(comment)) {
      selectedComments.push(comment);
    }
  }

  return selectedComments.join(" ");
}

function getRandomName() {
  return names[getRandomInt(0, names.length - 1)];
}

function createComments(photoId, commentIndex) {
  return {
    id: commentIndex + 1 + (photoId - 1) * 30,
    avatar: `img/avatar-${getRandomInt(1, 6)}.svg`,
    message: getRandomCommentMessage(),
    name: getRandomName(),
  };
}

function generateComments(photoId, commentCount) {
  const comments = [];
  for (let i = 0; i < commentCount; i++) {
    comments.push(createComments(photoId, i));
  }
  return comments;
}

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
