function getAge(birthday) {
    const validator = new RegExp(/^\d{4}-\d{2}-\d{2}$/);
    if (!validator.test(birthday)) {
        throw new Error(`invalidator birthday: ${birthday}`);
    }

    const [birthYear, birthMonth, birthDate] = birthday.split('-').map(str => Number(str));
    const now = new Date();
    const nowYear = now.getFullYear();
    const nowMonth = now.getMonth() + 1;
    const nowDate = now.getDate();

    const age = nowYear - birthYear - 1;
    if (nowMonth > birthMonth || (nowMonth === birthMonth && nowDate > birthDate)) {
        return age + 1;
    }
    return age;
}

// ---- test case ----
var log = console.log
log(getAge('1995-09-12'))
log(getAge('1995-12-26'))
log(getAge('1997-12-02'))
log(getAge('1997-12-28'))
