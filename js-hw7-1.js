const arr = [
  {
    userName: 'Test',
    lastName: 'Test',
    email: 'test.test@gmail.com',
  },
  {
    userName: 'Dmitro',
    lastName: 'Porohov',
    email: 'dmitro.porohov@yahoo.com',
  },
  {
    userName: 'Andrii',
    lastName: '',
    email: 'andrii@mail.ru',
  },
];

function getTrustedEmails(users) {
  let trustedEmails = [];
  const regex = /^[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)?@(gmail|yahoo)\.com$/;
  for (let i = 0; i < users.length; i++) {
    const email = users[i].email;
    if (regex.test(email)) {
      trustedEmails.push(email);
    }
  }
  return trustedEmails;
}

// Output to  console
const validEmails = getTrustedEmails(arr);
console.log(validEmails);
