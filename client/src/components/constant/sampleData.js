export const sampleChats = [
  {
    avatar: [
      'https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?w=740&t=st=1720700868~exp=1720701468~hmac=8d87ea99347e26590c833e4d293e0b7dec32da298563fb3dd5d9d92b458b0820',
    ],
    name: 'Neeraj',
    _id: '1',
    groupChat: false,
    members: ['1', '2'],
  },
  {
    avatar: [
      'https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?w=740&t=st=1720700868~exp=1720701468~hmac=8d87ea99347e26590c833e4d293e0b7dec32da298563fb3dd5d9d92b458b0820',
    ],
    name: 'Person',
    _id: '2',
    groupChat: false,
    members: ['1', '2'],
  },
];

export const sampleUser = [
  {
    avatar:
      'https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?w=740&t=st=1720700868~exp=1720701468~hmac=8d87ea99347e26590c833e4d293e0b7dec32da298563fb3dd5d9d92b458b0820',
    name: 'Neeraj',
    _id: '1',
  },
  {
    avatar:
      'https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?w=740&t=st=1720700868~exp=1720701468~hmac=8d87ea99347e26590c833e4d293e0b7dec32da298563fb3dd5d9d92b458b0820',
    name: 'Person',
    _id: '2',
  },
];

export const sampleNotification = [
  {
    sender: {
      avatar:
        'https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?w=740&t=st=1720700868~exp=1720701468~hmac=8d87ea99347e26590c833e4d293e0b7dec32da298563fb3dd5d9d92b458b0820',
      name: 'Neeraj',
    },
    _id: '1',
  },
  {
    sender: {
      avatar:
        'https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?w=740&t=st=1720700868~exp=1720701468~hmac=8d87ea99347e26590c833e4d293e0b7dec32da298563fb3dd5d9d92b458b0820',
      name: 'Person',
    },
    _id: '2',
  },
];

export const sampleMessages = [
  {
    attachments: [],
    content: 'Hello how are you',
    _id: '1',
    sender: {
      _id: 'user_id',
      name: 'Neeraj',
    },
    chat: 'chatId',
    createdAt: '2024-10-17T07:00:00.000Z',
  },
  {
    attachments: [
      {
        public_id: 'sample',
        url: 'https://res.cloudinary.com/dxkufsejm/image/upload/v1634477281/sample.jpg',
      },
    ],

    _id: '2',
    sender: {
      _id: 'asdf',
      name: 'Neeraj',
    },
    chat: 'chatId',
    createdAt: '2024-10-17T07:00:00.000Z',
  },
];
