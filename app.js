const roles = ['user', 'admin', 'manager', 'superuser'];

const url = 'auth/user/login';
const res = url.split('/');
console.log(res);
console.log(url);

const res2 = roles.join('-');
console.log(res2);
console.log(url);
