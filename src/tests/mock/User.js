const mockLogin = {
  email: 'kássialemmer@test.com',
  password: '1234567',
};

const mockLoginSenhaInvalida = {
  email: 'saulreixas@test.com',
  password: '$2a$10$lCrFQ2mqQJMMDHlrhy/OKe/gHqpfvSmyAds3EVsSM2riD0py/ranW3333', //12345678
};
const mockLoginResult = {
  id: 3,
  name: 'Kassina Lemmer',
  email: 'kássialemmer@test.com',
  role: 'usuário',
  token:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywibmFtZSI6Ikthc3NpbmEgTGVtbWVyIiwiZW1haWwiOiJrw6Fzc2lhbGVtbWVyQHRlc3QuY29tIiwicm9sZSI6InVzdcOhcmlvIiwiaWF0IjoxNjYwODI1ODQ1LCJleHAiOjE2NjA5MTIyNDV9.J2jHNI93wdaJlwCGlhQoMDfEPncZP-yGUcQ-8iAWLx4',
  imageUrl: 'http://localhost:3333/images/423dd4892ae538ce64cf664df6252e56.jpg',
};

const mockUserExists = {
  name: 'Paulo da Silva Junior',
  email: 'paulosilva@test.com',
  password: '1234567',
  cpf: '12345678901',
  phone: '62999997777',
  status: 'ativo',
  role: 'usuário',
  birthDate: '1972-10-21',
  imageUrl: 'http://localhost:3333/images/423dd4892ae538ce64cf664df6252e56.jpg',
};

const mockCreateUser = {
  name: 'José da Silva',
  email: 'zedasilva@test.com',
  password: '1234567',
  cpf: '12345678908',
  phone: '62999997777',
  status: 'ativo',
  role: 'usuário',
  birthDate: '1972-10-21',
  imageUrl: 'http://localhost:3333/images/423dd4892ae538ce64cf664df6252e56.jpg',
};

const mockCreateUserReject = {
  id: 2,
  name: 'Paulo da Silva',
  email: 'paulosilva@test.com',
  password: '1234567',
  cpf: '12345678901',
  phone: '62999997777',
  status: 'ativo',
  role: 'usuário',
  birthDate: '1972-10-21',
  imageUrl: 'http://localhost:3333/images/423dd4892ae538ce64cf664df6252e56.jpg',
  updatedAt: '2022-08-18T12:46:42.683Z',
  createdAt: '2022-08-18T12:46:42.683Z',
};

const mockCreateUserRsolve = {
  id: 4,
  name: 'José da Silva',
  email: 'zedasilva@test.com',
  password: '1234567',
  cpf: '12345678908',
  phone: '62999997777',
  status: 'ativo',
  role: 'usuário',
  birthDate: '1972-10-21',
  imageUrl: 'http://localhost:3333/images/423dd4892ae538ce64cf664df6252e56.jpg',
  updatedAt: '2022-08-18T12:46:42.683Z',
  createdAt: '2022-08-18T12:46:42.683Z',
};

const mockFindAll = [
  {
    id: 1,
    name: 'John Doe',
    email: 'admin@email.com',
    phone: '62999997777',
    status: 'ativo',
    role: 'administrador',
    birthDate: '1984-03-12',
    imageUrl: 'http://localhost:3333/images/423dd4892ae538ce64cf664df6252e56.jpg',
    createdAt: '2022-08-18T03:13:52.000Z',
    updatedAt: '2022-08-18T03:13:52.000Z',
  },
  {
    id: 2,
    name: 'Vera Grytten',
    email: 'vera.grytten@example.com',
    phone: '62999997777',
    status: 'ativo',
    role: 'usuário',
    birthDate: '1972-10-21',
    imageUrl: 'http://localhost:3333/images/423dd4892ae538ce64cf664df6252e56.jpg',
    createdAt: '2022-08-18T11:21:00.000Z',
    updatedAt: '2022-08-18T11:21:00.000Z',
  },
];

const mockFindById = {
  id: 1,
  name: 'John Doe',
  email: 'admin@email.com',
  password: '$2a$10$4ECC18b2ZFQWtNLxA9uNe.txZbKIXZgMsXB5r0i4YqezBlmdAMF/i',
  cpf: '12345678910',
  phone: '62999997777',
  status: 'ativo',
  role: 'administrador',
  birthDate: '1984-03-12',
  imageUrl: 'http://localhost:3333/images/423dd4892ae538ce64cf664df6252e56.jpg',
  createdAt: '2022-08-18T03:13:52.000Z',
  updatedAt: '2022-08-18T03:13:52.000Z',
};

const mockFindByName = {
  id: 1,
  name: 'John Doe',
  email: 'admin@email.com',
  password: '$2a$10$4ECC18b2ZFQWtNLxA9uNe.txZbKIXZgMsXB5r0i4YqezBlmdAMF/i',
  cpf: '12345678910',
  phone: '62999997777',
  status: 'ativo',
  role: 'administrador',
  birthDate: '1984-03-12',
  imageUrl: 'http://localhost:3333/images/423dd4892ae538ce64cf664df6252e56.jpg',
  createdAt: '2022-08-18T03:13:52.000Z',
  updatedAt: '2022-08-18T03:13:52.000Z',
};

module.exports = {
  mockLogin,
  mockLoginResult,
  mockLoginSenhaInvalida,
  mockCreateUser,
  mockCreateUserRsolve,
  mockUserExists,
  mockCreateUserReject,
  mockFindAll,
  mockFindById,
  mockFindByName,
};
