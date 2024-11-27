
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomComments() {
  const commentsList = [
      "Всё отлично!",
      "В целом всё неплохо. Но не всё.",
      "Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.",
      "Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.",
      "Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.",
      "Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!",
  ];

  const selectedComments = [];
  const randomCount = getRandomInt(1, 2);

  while (selectedComments.length < randomCount) {
      const randomIndex = getRandomInt(0, commentsList.length - 1);
      const comment = commentsList[randomIndex];
      if (!selectedComments.includes(comment)) {
          selectedComments.push(comment);
      }
  }

  return selectedComments.join(' ');
}

function createPhotoObjects() {
  const photos = [];

  // Создаем 10 объектов фотографий для примера
  for (let i = 1; i <= 25; i++) {
      const photo = {
          id: i,
          url: `url_to_photo_${i}.jpg`,
          description: `Описание фотографии номер ${i}: здесь можно увидеть что-то интересное!`,
          likes: getRandomInt(15, 200),
          comments: []
      };

      const commentCount = getRandomInt(0, 30);

      for (let j = 0; j < commentCount; j++) {
          const comment = {
              id: j + 1 + (i - 1) * 30,
              avatar: `img/avatar-${getRandomInt(1, 6)}.svg`,
              message: getRandomComments(),
              name: `Пользователь ${getRandomInt(1, 100)}`
          };
          photo.comments.push(comment);
      }
      photos.push(photo); // Добавляем фото в массив
  }

  // Выводим результаты в консоль
  console.log(photos);
}

// Запускаем создание объектов фотографий
createPhotoObjects();

